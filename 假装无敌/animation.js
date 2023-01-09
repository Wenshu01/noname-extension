'use strict';
window.qy_import = function(lib, game, ui, get, ai, _status){

	var resize = qy_decadeUI.element.create('sensor', document.body);
	resize.id = 'qy_decadeUI-canvas-sensor';
	resize.rs = new qy_decadeUI.ResizeSensor(resize, function(){
		if (resize.listens === void 0) return;
		for (var i = 0; i < resize.listens.length; i++) {
			resize.listens[i]();
		}
	}, false);
	resize.addListener = function (callback) {
		if (resize.listens === void 0) resize.listens = [];
		resize.listens.push(callback);

	};

	qy_decadeUI.Animation = (function(){
		function Animation (pathPrefix, parentNode, thisId) {
			if (!window.qy_spine) return console.error('qy_spine 未定义.');

			var canvas = document.createElement('canvas');
			if (parentNode !== void 0) parentNode.appendChild(canvas);
			if (thisId !== void 0) canvas.id = thisId;
			// canvas.width = parentNode.clientWidth;
			// canvas.height = parentNode.clientHeight;

			var spine2d;
			var config = { alpha: true };
			var gl = canvas.getContext('webgl2', config);
			if (gl === undefined) {
				gl = canvas.getContext('webgl', config) || canvas.getContext('experimental-webgl', config);
			} else {
				gl.isWebgl2 = true;
			}
			// gl = null;
			if (gl) {
				spine2d = {
					shader: qy_spine.webgl.Shader.newTwoColoredTextured(gl),
					batcher: new qy_spine.webgl.PolygonBatcher(gl),
					skeletonRenderer: new qy_spine.webgl.SkeletonRenderer(gl),
					shapes: new qy_spine.webgl.ShapeRenderer(gl),
					assetManager: new qy_spine.webgl.AssetManager(gl),
					assets: {},
					playing: {},
					skeletons: [],
				}
			} else {
				spine2d = {
					assets: {},
				};
				console.error('当前设备不支持 WebGL.');
			}

			this.gl = gl;
			this.canvas = canvas;
			this.spine2d = spine2d;
			this.pathPrefix = pathPrefix;
			this.lastFrameTime = void 0;

			this.canvas.width = ui.window.clientWidth;
			this.canvas.height = ui.window.clientHeight;


			this.check = function () {
				if (!gl) {
					function empty(){}
					for (var key in this.__proto__) {
						if (typeof this.__proto__[key] == 'function') {
							this.__proto__[key] = empty;
						}
					}

					for (var key in this) {
						if (typeof this[key] == 'function' && key != 'check') {
							this[key] = empty;
						}
					}

				} else {
					resize.addListener(function(){
						canvas.sizeChanged = true;
					});
				}
			};

			this.check();
			if(window.isMobile)
				new ResizeObserver(entries => {
					for (const entry of entries) {
						console.log(entry);
						this.canvas.width = Math.round(entry.contentRect.width);
						this.canvas.height = Math.round(entry.contentRect.height);
					}
				}).observe(this.canvas);
		}

		function LoadNotif (assetName, onload, onerror) {
			this.name = assetName;
			this.assetName = assetName;
			this.onload = onload;
			this.onerror = onerror;
			this.loads = 0;
			this.errors = 0;
		}

		Animation.prototype.createTextureRegion = function (image, name) {
			var page = new qy_spine.TextureAtlasPage();
			page.name = name;
			page.uWrap = qy_spine.TextureWrap.ClampToEdge;
			page.vWrap = qy_spine.TextureWrap.ClampToEdge;
			page.texture = this.spine2d.assetManager.textureLoader(image);
			page.texture.setWraps(page.uWrap, page.vWrap);
			page.width = page.texture.getImage().width;
			page.height = page.texture.getImage().height;

			var region = new qy_spine.TextureAtlasRegion();
			region.page = page;
			region.rotate = false;
			region.width = page.width;
			region.height = page.height;
			region.x = 0;
			region.y = 0;
			region.u = region.x / page.width;
			region.v = region.y / page.height;
			if (region.rotate) {
				region.u2 = (region.x + region.height) / page.width;
				region.v2 = (region.y + region.width) / page.height;
			}
			else {
				region.u2 = (region.x + region.width) / page.width;
				region.v2 = (region.y + region.height) / page.height;
			}

			region.originalWidth = page.width;
			region.originalHeight = page.height;
			region.index = -1;
			region.texture = page.texture;
			region.renderObject = region;

			return region;
		};

		Animation.prototype.loadSpine2d = function (assetName, skelType, onload, onerror) {
			var anim = this;
			var loadNotif = new LoadNotif(assetName, onload, onerror);

			loadNotif.loadSuccess = function(){
				loadNotif.loads++;
				if (loadNotif.loads + loadNotif.errors == 3) {
					if (loadNotif.errors > 0) {
						console.error('加载[' + loadNotif.assetName + ']动画资源失败.');
						if (loadNotif.onerror !== void 0) {
							loadNotif.onerror();
						}
					} else {
						anim.spine2d.assets[loadNotif.assetName] = { name: loadNotif.assetName, skelType: skelType };
						if (loadNotif.onload !== void 0) {
							loadNotif.onload();
						}
					}
				}
			};

			loadNotif.loadError = function(){
				loadNotif.errors++;
				if (loadNotif.loads + loadNotif.errors == 3) {
					console.error('加载[' + loadNotif.assetName + ']动画资源失败.');
					if (loadNotif.onerror !== void 0) {
						loadNotif.onerror();
					}
				}
			};

			if (skelType != void 0 && skelType.toLowerCase() == 'json') {
				skelType = 'json';
				this.spine2d.assetManager.loadText(this.pathPrefix + assetName + '.json',
					loadNotif.loadSuccess, loadNotif.loadError);
			} else {
				skelType = 'skel';
				this.spine2d.assetManager.loadBinary(this.pathPrefix + assetName + '.skel',
					loadNotif.loadSuccess, loadNotif.loadError);
			}

			this.spine2d.assetManager.loadText(this.pathPrefix + assetName + '.atlas',
				loadNotif.loadSuccess, loadNotif.loadError);
			this.spine2d.assetManager.loadTexture(this.pathPrefix + assetName + '.png',
				loadNotif.loadSuccess, loadNotif.loadError);
		};

		Animation.prototype.prepSpine2d = function (assetName,that) {
			if (!this.spine2d.assets[assetName]) {
				console.error('未找到' + assetName + '动画资源.');
				return null;
			}

			var anim = this;
			var asset = this.spine2d.assets[assetName];
			var assetManager = this.spine2d.assetManager;
			var skelRawData = asset.rawSkel;
			if (!skelRawData) {
				var atlas = new qy_spine.TextureAtlas(assetManager.get(anim.pathPrefix + assetName + '.atlas'),
					function(path){
						return assetManager.get(anim.pathPrefix + path);
					}
				);

				var atlasLoader = new qy_spine.AtlasAttachmentLoader(atlas);
				if (asset.skelType.toLowerCase() == 'json') {
					skelRawData = new qy_spine.SkeletonJson(atlasLoader);
				} else {
					skelRawData = new qy_spine.SkeletonBinary(atlasLoader);
				}

				anim.spine2d.assets[assetName].rawSkel = skelRawData;
				anim.spine2d.assets[assetName].ready = true;
			}

			var skeletonData = skelRawData.readSkeletonData(assetManager.get(this.pathPrefix + assetName + '.' + asset.skelType));
			var skeleton = new qy_spine.Skeleton(skeletonData);
			var skeletons = this.spine2d.skeletons;

			skeleton.setSkinByName('default');
			skeleton.setToSetupPose();
			skeleton.updateWorldTransform();

			var bounds = {
				offset: new qy_spine.Vector2(),
				size: new qy_spine.Vector2(),
			};

			skeleton.getBounds(bounds.offset, bounds.size, []);
			var animationStateData = new qy_spine.AnimationStateData(skeleton.data);
			var animationState = new qy_spine.AnimationState(animationStateData);

			animationState.addListener({
				complete:function(track){
					var position = skel.position;
					if (!position.loop) {
						skel.complete = true;
					}
					try {
						typeof position.complete === 'function' && position.complete.apply(this,[track,position]);
						typeof that.complete === 'function' && that.complete.apply(this,[track,position]);
					}catch (e){}
				}
			});

			var skel = {
				id: skeletons.length,
				name: assetName,
				defaultAnimation: skeletonData.animations[0].name,
				animations: skeletonData.animations,
				skeleton: skeleton,
				state: animationState,
				bounds: bounds,
				position: void 0,
				premultipliedAlpha: false,
				complete: true,
				mvp: new qy_spine.webgl.Matrix4(),
			};

			skel.mvp.ortho2d(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
			skeletons.push(skel);

			return skel.id;
		};

		/**
		 * @param assetName 动画名称
		 * @param position 配置 x: {number|Array(2)},y: {number|Array(2)},scale: {number|Array(2)},height: number,width: number,parent: Element
		 * @returns {Animation} 返回执行的id
		 */
		Animation.prototype.playSpine = function (assetName, position){
			var animName;
			if (Array.isArray(assetName)) {
				animName = assetName[1];
				assetName = assetName[0];
			}

			var skeleton
			try {
				skeleton = this.getSpine2dSkeleton(assetName);
				this.currentState = skeleton.state;
			}catch (e){
				return console.error(e.toString());
			}

			this.currentSkeleton = this.playSpine2dSkeleton(skeleton, animName, position);
			this.id = skeleton.id
			return this;
		};

		Animation.prototype.setCurrentAction = function (action, transtion) {
			if (this.currentSkeleton && this.currentSkeleton.complete === false) {
				var skeleton = this.currentSkeleton.skeleton;
				var position = this.currentSkeleton.position;
				if (skeleton.data.findAnimation(action) == null) return console.error('setAction: 未找到对应骨骼动作');
				transtion = transtion === undefined ? 0.5 : transtion / 1000;
				var entry = this.currentState.setAnimation(0, action, position.loop);
				entry.mixDuration = transtion;
			} else {
				console.error('setAction: 节点失去关联');
			}
		};

		Animation.prototype.playSpine2d = function (assetName, position){
			return (this.playSpine(assetName, position) || {}).id || 0;
		};

		Animation.prototype.stopSpine2dAll = function (){
			var skeletons = this.spine2d.skeletons;
			skeletons.forEach(skeleton =>{
				skeleton.complete = true;
				skeleton.state.setEmptyAnimation(0);
			});
		};

		Animation.prototype.stopSpine2d = function (id) {
			var skels = this.spine2d.skeletons;
			for (var i = 0; i < skels.length; i++) {
				if (skels[i].id == id) {
					skels[i].complete = true;
					skels[i].state.setEmptyAnimation(0);
					if(this.currentSkeleton === skels){
						this.currentSkeleton = undefined;
						this.currentState = undefined;
					}
					return true;
				}
			}

			return false;
		};

		Animation.prototype.loopSpine2d = function (assetName, position) {
			var id = this.playSpine2d(assetName, position);
			if (id == void 0) return;

			var skels = this.spine2d.skeletons;
			for (var i = 0; i < skels.length; i++) {
				if (skels[i].id == id) {
					skels[i].complete = false;
					skels[i].state.tracks[0].loop = true;
					return id;
				}
			}

			return;
		};

		Animation.prototype.playSpine2dSkeleton = function (skeleton, animationName, position) {
			var index = this.spine2d.skeletons.indexOf(skeleton);
			if (index === -1) return console.error('skeleton not found');

			/*var x, y, width, height, scale, parent, follow, loop = false, complete;
			if (position != void 0) {
				x = position.x;
				y = position.y;
				width = position.width;
				height = position.height;
				scale = position.scale;
				parent = position.parent;
				follow = position.parent;
				loop = position.loop
				complete = position.complete
			}

			var position = {
				x: x,
				y: y,
				width: width,
				height: height,
				scale: scale,
				parent: parent,
				follow: follow,
				loop: loop,
				complete: complete,
			}*/

			skeleton.complete = false;
			skeleton.position = position;
			skeleton.state.setAnimation(0, animationName == void 0 ? skeleton.defaultAnimation : animationName, position.loop);

			if (this.requestId == void 0) {
				this.canvas.style.visibility = 'visible';
				this.requestId = requestAnimationFrame(this.render.bind(this));
			}

			return skeleton;
		};

		Animation.prototype.getSpine2dSkeleton = function (assetName) {
			if (!this.spine2d.assets[assetName]) {
				throw new ReferenceError('未找到"' + assetName + '"的动画资源.');
				return null;
			}

			var skeletons = this.spine2d.skeletons;
			var skeleton;

			for (var i = 0; i < skeletons.length; i++) {
				if (skeletons[i].name == assetName && skeletons[i].complete) {
					skeleton = skeletons[i++];
					while (i < skeletons.length) {
						skeletons[i - 1] = skeletons[i++];
					}

					skeletons[skeletons.length - 1] = skeleton;
					break;
				}
			}

			if (!skeleton) {
				var id = this.prepSpine2d(assetName);
				for (var i = skeletons.length - 1; i >= 0; i--){
					if (skeletons[i].id == id) {
						skeleton = skeletons[i];
					}
				}
			}

			skeleton.complete = false;
			return skeleton;
		};

		Animation.prototype.getSpine2dBounds = function (assetName, nocheck) {
			var skeletons = this.spine2d.skeletons;

			for (var i = 0; i < skeletons.length; i++) {
				if (skeletons[i].name == assetName) {
					return skeletons[i].bounds;
				}
			}

			if (!nocheck) {
				var id = this.prepSpine2d(assetName);
				if (id != null) {
					return this.getSpine2dBounds(assetName, true);
				}
			}

			return null;
		};

		Animation.prototype.resizeSkeleton = function (skeleton) {
			var x,
				y,
				width,
				height,
				ox,
				oy,
				dx,
				dy,
				canvas = this.canvas,
				position = skeleton.position;

			var scale = position.scale;
			var size = { width: canvas.width, height: canvas.height };
			var isElement = position.parent instanceof HTMLElement;

			if (isElement && (position.follow || !position.init)) {
				var rect = position.parent.getBoundingClientRect();
				ox = rect.left;
				oy = document.body.offsetHeight - rect.top;

				dx = ox + rect.width  / 2;
				dy = oy - rect.height / 2;
				size.width = rect.width;
				size.height = rect.height;
			}

			if (position.x !== void 0) {
				var tx;
				if (Array.isArray(position.x)) {
					tx = position.x[0] + position.x[1] * size.width;
				} else {
					tx = position.x;
				}

				if (x === void 0) {
					x = tx;
				} else {
					x += tx;
				}
			}

			if (position.y !== void 0) {
				var ty;
				if (Array.isArray(position.y)) {
					ty = position.y[0] + position.y[1] * size.height;
				} else {
					ty = position.y;
				}

				if (y === void 0) {
					y = ty;
				} else {
					y += ty;
				}
			}


			if (isElement && (position.follow || !position.init)) {
				if (position.x === void 0) {
					x = dx;
				} else {
					x += ox;
				}

				if (position.y === void 0) {
					y = dy;
				} else {
					y += dy;
				}

				if (!position.follow) {
					position.x = x;
					position.y = y;
					position.parent = null;
				}

				position.init = true;
			}

			skeleton.mvp.ortho2d(0, 0, canvas.width, canvas.height);
			if (x != void 0 && y == void 0) {
				skeleton.mvp.translate(x, 0, 0);
				skeleton.mvp.setY(0);
			} else if (x == void 0 && y != void 0) {
				skeleton.mvp.translate(0, y, 0);
				skeleton.mvp.setX(0);
			} else if (x != void 0 && y != void 0) {
				skeleton.mvp.translate(x, y, 0);
			} else {
				skeleton.mvp.setPos2D(0, 0);
			}

			if(Array.isArray(scale)){
				skeleton.mvp.scale(scale[0], scale[1], -50);
			} else if (scale != void 0 && scale != 1) {
				skeleton.mvp.scale(scale, scale, 0);
			}
		};

		Animation.prototype.render = function () {
			var complete = true,
				now = performance.now() / 1000,
				canvas = this.canvas,
				skeletons = this.spine2d.skeletons;

			var delta = now - (this.lastFrameTime == void 0 ? now : this.lastFrameTime);
			this.lastFrameTime = now;
			for (var i = 0; i < skeletons.length; i++) {
				if (!skeletons[i].complete) {
					complete = false;
					break;
				}
			}


			if (canvas.sizeChanged) {
				canvas.width = canvas.clientWidth;
				canvas.height = canvas.clientHeight;
				canvas.sizeChanged = false;
			}

			var width = canvas.width;
			var height = canvas.height;

			this.gl.viewport(0, 0, canvas.width, canvas.height);
			this.gl.clearColor(0, 0, 0, 0);
			this.gl.clear(this.gl.COLOR_BUFFER_BIT);

			if (complete) {
				this.lastFrameTime = void 0;
				this.requestId = void 0;
				this.canvas.style.visibility = 'hidden';
				return;
			}

			var state, skeleton, bounds, premultipliedAlpha,
				shader = this.spine2d.shader,
				batcher = this.spine2d.batcher,
				skeletonRenderer = this.spine2d.skeletonRenderer;

			shader.bind();

			for (var i = 0; i < skeletons.length; i++) {
				if (skeletons[i].complete) continue;
				if (skeletons[i].canceled) continue;

				this.resizeSkeleton(skeletons[i]);
				state = skeletons[i].state;
				skeleton = skeletons[i].skeleton;
				bounds = skeletons[i].bounds;
				premultipliedAlpha = skeletons[i].premultipliedAlpha;
				state.update(delta);
				state.apply(skeleton);
				skeleton.updateWorldTransform();

				shader.setUniformi(qy_spine.webgl.Shader.SAMPLER, 0);
				shader.setUniform4x4f(qy_spine.webgl.Shader.MVP_MATRIX, skeletons[i].mvp.values);

				batcher.begin(shader);
				skeletonRenderer.premultipliedAlpha = premultipliedAlpha;
				skeletonRenderer.draw(batcher, skeleton);
				batcher.end();
			}

			shader.unbind();

			this.requestId = requestAnimationFrame(this.render.bind(this));
		};

		return Animation;
	})();
};

