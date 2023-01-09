"use strict";
window.qyPreContent=function(lib,game,ui,get,ai,_status,config){

	var value_Name_color = game.getExtensionConfig('假装无敌','qingyao_Skin_Name_color')
	if(!document.querySelector('#qingyao_data-skin-color')){
		ui.create.node('style.#qingyao_data-skin-color','body[data-skin_color="'+value_Name_color+'"]>#window .qingyao_Skin_info{color:'+value_Name_color+';text-shadow: '+value_Name_color+' 0 0 2px,'+value_Name_color+' 0 0 5px,'+value_Name_color+' 0 0 10px,'+value_Name_color+' 0 0 10px,'+value_Name_color+' 0 0 20px,'+value_Name_color+' 0 0 20px,black 0 0 1px;}',document.head);
	}else{
		document.querySelector('#qingyao_data-skin-color').innerHTML='body[data-skin_color="'+value_Name_color+'"]>#window .qingyao_Skin_info{color:'+value_Name_color+';text-shadow: '+value_Name_color+' 0 0 2px,'+value_Name_color+' 0 0 5px,'+value_Name_color+' 0 0 10px,'+value_Name_color+' 0 0 10px,'+value_Name_color+' 0 0 20px,'+value_Name_color+' 0 0 20px,black 0 0 1px;}'
	}

	if(!lib.element.player.inits) lib.element.player.inits = [];

	document.body.dataset.skin=lib.config.extension_假装无敌_qingyao_Skin_XS;
	document.body.dataset.skin_button=lib.config.extension_假装无敌_qingyao_Skin_XS_button;
	document.body.dataset.skin_color=value_Name_color;

	game.hasDirectory=function(url,callback,onerror){
		callback=callback||function(){};
		onerror=onerror||function(){};
		if(lib.node&&lib.node.fs){
			if(lib.node.fs.existsSync(__dirname+"/"+url)){
				callback();
			}else{
				onerror();
			}
			return;
		}
		let name,success;
		if(url.indexOf('.')!==-1) {
			let last=url.lastIndexOf('/');
			let index=url.indexOf('/');
		    name=url.slice(last+1);
		    url=url.slice(0,last);
		    success=callback;
		    callback=function(dirEntry){
		        dirEntry.getFile(name,{},success,onerror);
		    };
		}
		window.resolveLocalFileSystemURL(lib.assetURL,function(entry){
			entry.getDirectory(url,{},callback,onerror);
		},onerror);
	};
	/**
	var url='F:/资源/皮肤（包含语音和动态）/caocao/6',numss=6;
	game.list(url,function(fol,files){
		for(var i of files.slice(0)){
			if(!(/\.mp3$|\.ogg$/i.test(i))) files.remove(i);
		};
		for(var i of files){
			var newName=i.slice(0,i.lastIndexOf('.')),
			num=newName.slice(newName.length-1);
			console.log(num);
			if(isNaN(num)) num='';
			else newName=newName.slice(0,newName.length-1);
			lib.node.fs.rename(url+'/'+i,url+'/'+newName+'_'+2+num+'.mp3',function(entry){lib.qingyao_layer.msg(ui.create.node('span',"修改成功：<span style='color:red'>"+newName+"</span>"),{icon:1});return true;});
		};
	});
	*/
	game.fileReName=function(Path,name,newName,successCallback,onerrorCallback){
		if(!name) return undefined;
		newName=newName||name;
		successCallback=successCallback||function(entry){
			// lib.qingyao_layer.msg(ui.create.node('span',"修改成功：<span style='color:red'>"+newName+"</span>"),{icon:1});
			return true;
		};
		onerrorCallback=onerrorCallback||function(err){
			var msg = 'An error occured: ';
			try{
				switch (err.code*1) {
					case FileError.NOT_FOUND_ERR:
					msg += 'File or directory not found\n翻译：文件或目录未找到';
					break;
					case FileError.NOT_READABLE_ERR:
					msg += 'File or directory not readable\n翻译：文件或目录不可读';
					break;
					case FileError.PATH_EXISTS_ERR:
					msg += 'File or directory already exists\n翻译：文件或目录已存在';
					break;
					case FileError.TYPE_MISMATCH_ERR:
					msg += 'Invalid filetype\n翻译：无效的文件类型';
					break;
					default:
					msg += 'Unknown Error\n翻译：未知错误';
					break;
				}
			}catch(e){}
			console.log(msg + err);
			if(msg.length===18) return undefined;
			// lib.qingyao_layer.alert("重命名失败："+err.code+':'+msg)
			// lib.qingyao_layer.msg(ui.create.node('span','重命名失败,原因：'+msg+"错误码："+err.code),{icon:2,title:"重命名",time:3e3});
		};
		game.hasDirectory(Path+'/'+name,function(){
			if(lib.node&&lib.node.fs){
				lib.node.fs.rename(__dirname+'/'+Path+'/'+name,__dirname+'/'+Path+'/'+newName,successCallback);
				return;
			}
			window.resolveLocalFileSystemURL(lib.assetURL+Path,function(entry){
				if(name.indexOf('.')===-1){
					entry.getDirectory(name,{},function(entry2){
						entry2.moveTo(entry,newName,successCallback,onerrorCallback);
					});
				}else{
					entry.getFile(name,{},function(entry2){
						entry2.moveTo(entry,newName,successCallback,onerrorCallback);
					});
				}
			});
		},function(){
			game.print("目录不存在："+Path+'/'+name);
			console.log("目录不存在："+Path+'/'+name);
			// lib.qingyao_layer.msg("目录不存在".fontcolor('red'),{title:'更改文件名称'})
		});
	};

	//保存皮肤等级
	if(!lib.config.SKIN_INFO_GradeOf) game.saveConfig('SKIN_INFO_GradeOf',lib.config.SKIN_INFO_GradeOf={});
	//保存皮肤介绍
	if(!lib.config.SKIN_INFO) {
		game.saveConfig('SKIN_INFO',{});
	}

	//保存扩展上换肤的路径
	if(!lib.config.qingyao_Skin) lib.config.qingyao_Skin={};

	if(!game.getExtensionConfig('假装无敌','qingyao_Skin_enable')) return undefined;
	var ImageRe=/\.jpg$|\.webp$|\.png$|\.jpeg$|\.gif$/i;	//是否图片的正则表达式;
	HTMLDivElement.prototype.setBackground=function(name,type,ext,subfolder){
		if(!name) return;
		var src;
		if(ext==='noskin'){
			ext='.jpg';
		}
		ext=ext||'.jpg';
		subfolder=subfolder||'default'

		if(lib.config.qingyao_Skin[name]){
			for(var i in lib.config.qingyao_Skin){
				var character=lib.character[i];
				if(!character||!character[4]) continue;
				for(var j=0;j<character[4].length;j++){
					if(character[4][j].indexOf('ext')===-1) continue;
					try{
						character[4][j]=lib.config.qingyao_Skin[i].toString().replace(/extension/g,'ext:');
					}catch(e){}
				}
			}
		}

		if(type){
			var dbimage=null,extimage=null,modeimage=null;
			var nameinfo;
			var gzbool=false;
			var mode=get.mode();
			if(type==='character'){
				if(lib.characterPack['mode_'+mode]&&lib.characterPack['mode_'+mode][name]){
					if(mode==='guozhan'){
						if(name.indexOf('gz_shibing')===0){
							name=name.slice(3,11);
						}
						else{
							if(lib.config.mode_config.guozhan.guozhanSkin&&lib.character[name]&&lib.character[name][4].contains('gzskin'))  gzbool=true;
							name=name.slice(3);
						}
					}
					else{
						modeimage=mode;
					}
				}
				else if(lib.character[name]){
					nameinfo=lib.character[name];
				}
				else if(name.indexOf('::')!==-1){
					name=name.split('::');
					modeimage=name[0];
					name=name[1];
				}
			}
			if(!modeimage&&nameinfo&&nameinfo[4]){
				for(var i=0;i<nameinfo[4].length;i++){
					if(nameinfo[4][i].indexOf('ext:')===0){
						extimage=nameinfo[4][i];break;
					}
					else if(nameinfo[4][i].indexOf('db:')===0){
						dbimage=nameinfo[4][i];break;
					}
					else if(nameinfo[4][i].indexOf('mode:')===0){
						modeimage=nameinfo[4][i].slice(5);break;
					}
					else if(nameinfo[4][i].indexOf('character:')===0){
						name=nameinfo[4][i].slice(10);break;
					}
				}
			}
			if(extimage){
				src=extimage.replace(/ext:/g,'extension/');
			}
			else if(dbimage){
				this.setBackgroundDB(dbimage.slice(3));
				return this;
			}
			else if(modeimage){
				src='image/mode/'+modeimage+'/character/'+name+ext;
			}
			else if(type==='character'&&lib.config['skin'][name]&&arguments[2]!=='noskin'){
				var cfg=lib.config['skin'];
				if(cfg[name]&&cfg[name].toString().lastIndexOf('.')!==-1) ext='';
				src='image/skin/'+name+'/'+cfg[name]+ext;
			}
			else{
				if(type==='character'){
					src='image/character/'+(gzbool?'gz_':'')+name+ext;
				}
				else{
					src='image/'+type+'/'+subfolder+'/'+name+ext;
				}
			}
		}
		else{
			src='image/'+name+ext;
		}
		this.setBackgroundImage(src);
		this.style.backgroundSize="cover";
		return this;
	};

	var uninit=lib.element.player.uninit;
	lib.element.player.uninit=function(){
		this.name=undefined;	//delete 不会触发setter
		this.name1=undefined;	//delete 不会触发setter
		if(this.name2) this.name2=Math.random().toString(16).slice(2);
		if(this._uninits){
			for(var i=0;i<this._uninits.length;i++){
				this._uninits[i](this);
			}
		}
		uninit.apply(this,arguments);
	};
	if(game.getExtensionConfig('假装无敌','qingyao_skin_mode')==='fluent'){
		var Skin=function(player){
			var List=[player.name,player.name1,player.name2,player.link],xF218O=false;
			for(var _0xAhOW of List){
				if(typeof _0xAhOW==='string'&&lib.character[_0xAhOW]){
					xF218O=true;
					break;
				}
			}
			if(!xF218O){
				if(player.qingyao_Skin_Node) player.qingyao_Skin_Node.remove();
				return undefined;
			}
			var num=1,skin_num=0,change_extimage=false,stop=false,gz=false,re=false;
			var loadImage=function(_0xOqU8){
				if(stop) return undefined;
				var img=new Image(),
				Fragment=document.createDocumentFragment();
				Fragment.appendChild(img);

				img.onload=function(){
					num++;
					skin_num++;
					if(skin_num>0){
						if(player.qingyao_Skin_Node) player.qingyao_Skin_Node.remove();
						stop=true;
						player.qingyao_Skin_Node=ui.create.div(player,'.qingyao_Skin_Node',event=>{event.stopPropagation();event.preventDefault();});
						var div=ui.create.div('.qingyao_skin',player.qingyao_Skin_Node);
						get.is.mobileMe(player)&&div.css({
							left:'90px',
						});
						player.qingyao_Skin_Node.setAttribute('style','transition-property:opacity,background,box-shadow;display:block !important;z-index:99999;width: 100%;    max-width: 120px;height: 100%;pointer-events: none;');
						div.addEventListener('endDang',function(e){
							e.stopPropagation();
							window.qingyao_charactercard(player,false);
						},false);
						var position=game.getExtensionConfig('假装无敌','qingyao_skin_position');
						if(position){
							div.css({
								transform:`translate(${position[0]}px,${position[1]}px)`,
							});
							div._translate=position;
						}
						div.addEventListener('moveStop',function () {
							game.saveExtensionConfig('假装无敌','qingyao_skin_position',this._translate);
						});
						window.zyile_dragZoom&&window.zyile_dragZoom(div,player);
					}else{
						if(player.qingyao_Skin_Node) player.qingyao_Skin_Node.remove();
						List.length>0&&loadImage(List.shift());
					}
				};
				img.onerror=function(){
					loadImage(_0xOqU8);
				};
				if(typeof _0xOqU8=='string'&&lib.character[_0xOqU8]){
					var ext='.jpg',dbimage=null,extimage=null,modeimage=null,nameskin=_0xOqU8,name=_0xOqU8;
					var nameinfo;
					var gzbool=false;
					var mode=get.mode();
					if(lib.characterPack['mode_'+mode]&&lib.characterPack['mode_'+mode][name]){
						if(mode==='guozhan'){
							if(name.indexOf('gz_shibing')===0){
								name=name.slice(3,11);
							}
							else{
								if(lib.config.mode_config.guozhan.guozhanSkin&&lib.character[name]&&lib.character[name][4].contains('gzskin'))  gzbool=true;
								name=name.slice(3);
							}
						}
						else{
							modeimage=mode;
						}
					}
					else if(lib.character[name]){
						nameinfo=lib.character[name];
					}
					else if(name.indexOf('::')!==-1){
						name=name.split('::');
						modeimage=name[0];
						name=name[1];
					}

					if(!modeimage&&nameinfo&&nameinfo[4]){
						for(var i=0;i<nameinfo[4].length;i++){
							if(nameinfo[4][i].indexOf('ext:')===0){
								extimage=nameinfo[4][i];break;
							}
							else if(nameinfo[4][i].indexOf('mode:')===0){
								modeimage=nameinfo[4][i].slice(5);break;
							}
							else if(nameinfo[4][i].indexOf('character:')===0){
								name=nameinfo[4][i].slice(10);break;
							}
						}
					}

					if(extimage&&!change_extimage){
						if(extimage.indexOf('../')!==-1) extimage=extimage.slice(0,extimage.indexOf('../'));
						var src=extimage.replace(/ext:/g,'extension/');
						var str=src.substring(0,src.lastIndexOf('/'));
						img.onerror=function(){
							num=1;
							change_extimage=true;
							loadImage(_0xOqU8);
						};
						if(lib.config.extension_假装无敌_qingyao_Skin_load==="order"){
							img.src=lib.assetURL+str+'/'+name+'_pifu'+num+ext;
						}else{
							game.hasDirectory(str,function(){
								game.getFileList(str,function(folders,files){
									let loadNum=0;
									for(let i of files){
										if(i.indexOf(name)!==0) continue;
										if(name.length+4>=i.length) continue;
										const names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
										if(names!=null&&ImageRe.test(names.join(""))){
											img.onload();
											loadNum++;
											if(loadNum>1) break;
										}
									}
								});
							},function(){
								delete lib.config['skin'][name];
								game.saveConfig('skin',lib.config['skin']);
							});
							img.onerror();
						}
					}else{
						img.onerror=function(){
							if(skin_num<=0&&player.qingyao_Skin_Node&&player.qingyao_Skin_Node.remove) player.qingyao_Skin_Node.remove();
							List.length>0&&loadImage(List.shift());
						};
						if(lib.config.extension_假装无敌_qingyao_Skin_load==="order"){
							img.src=lib.assetURL+'image/skin/'+name+'/'+num+ext;
						}else{
							var url='image/skin/'+name;
							game.hasDirectory(url,function(){
								game.getFileList('image/skin/'+name,function(folders,files){
									var loadNum=0;
									for(var i of files){
										var names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
										if(names!=null&&ImageRe.test(names.join(""))&&names.length>1){
											img.onload();
											loadNum++;
											if(loadNum>1) break;
										};
									};
								});
							},function(){
								delete lib.config['skin'][name];
								game.saveConfig('skin',lib.config['skin']);
							});
							img.onerror();
						};
					};
				}else{
					List.length>0&&loadImage(List.shift());
				}
			};
			if(lib.config.extension_假装无敌_qingyao_skin_fluent){
				if(player.classList&&(player.classList.contains('player')||player.classList.contains('button'))){
					if(player.qingyao_Skin_Node) player.qingyao_Skin_Node.remove();
					player.qingyao_Skin_Node=ui.create.div(player,event=>{event.stopPropagation();event.preventDefault();});
					var div=ui.create.div('.qingyao_skin',player.qingyao_Skin_Node);
					get.is.mobileMe(player)&&div.css({
						left:'90px',
					});
					player.qingyao_Skin_Node.setAttribute('style','transition-property:opacity,background,box-shadow;display:block !important;z-index:999999999;width: 100%;height: 100%;pointer-events: none;');
					div.addEventListener('endDang',function(e){
						e.stopPropagation();
						window.qingyao_charactercard(player,false);
					});
					var position=game.getExtensionConfig('假装无敌','qingyao_skin_position');
					if(position){
						div.css({
							transform:`translate(${position[0]}px,${position[1]}px)`,
						});
						div._translate=position;
					}
					div.addEventListener('moveStop',function () {
						game.saveExtensionConfig('假装无敌','qingyao_skin_position',this._translate);
					});
					window.zyile_dragZoom&&window.zyile_dragZoom(div,player);
				}
			}else{
				List.length>0&&loadImage(List.shift());
			}
		};

		if(config.qingyao_Skin_Loading_time=='start'){
		/**
		 * 使用原本事件来进行操作
		 */
			lib.element.player.inits.push(
				(player)=>Skin(player)
			)
			if(!Array.isArray(lib.element.player._uninits)){
				lib.element.player._uninits=[
					(player)=>Skin(player)
				];
			}else{
				lib.element.player._uninits.push((player)=>Skin(player));
			}
		}else{
			/**
			 * 使用数据劫持来进行操作
			 */
			Object.defineProperty(HTMLDivElement.prototype,'name1',{
				get:function(){
					return this._qingyao_NAME1;
				},
				set:function(value){
					this._qingyao_NAME1=value;
					if(!this.classList||this.classList.contains('card')) return void 0;
					if(lib.config.extension_假装无敌_qingyao_Skin_area=='all'){
						if(this.classList.contains('player')||this.classList.contains('button')){
							Skin(this);
						}
					}else if(this.classList.contains(lib.config.extension_假装无敌_qingyao_Skin_area)){
						Skin(this);
					};
				},
				configurable: true,
			});
			Object.defineProperty(HTMLDivElement.prototype,'name2',{
				get:function(){
					return this._qingyao_NAME2;
				},
				set:function(value){
					this._qingyao_NAME2=value;
					if(!this.classList||this.classList.contains('card')) return void 0;
					if(lib.config.extension_假装无敌_qingyao_Skin_area=='all'){
						if(this.classList.contains('player')||this.classList.contains('button')){
							Skin(this);
						}
					}else if(this.classList.contains(lib.config.extension_假装无敌_qingyao_Skin_area)){
						Skin(this);
					}
				},
				configurable:true,
			});
			Object.defineProperty(HTMLDivElement.prototype,'link',{
				get:function(){
					return this._qingyao_LINK;
				},
				set:function(value){
					this._qingyao_LINK=value;
					if(lib.config.extension_假装无敌_qingyao_Skin_area=='all'){
						if(this.classList.contains('player')||this.classList.contains('button')){
							Skin(this);
						}
					}else if(this.classList.contains(lib.config.extension_假装无敌_qingyao_Skin_area)){
						Skin(this);
					}
				},
				configurable:true,
			});
		}
		window.qingyao_charactercard=function(player,resume){
			if(player.qingyao_charactercard){
				if(window.getComputedStyle(player.qingyao_charactercard,null).display=='none'){
					player.qingyao_charactercard.style.display='block';
					player.qingyao_charactercard.style.animation="dialog_start2 .3s";
					if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.pause2();
				}
				window.getComputedStyle(player.qingyao_charactercard.cloNode,null).display=='none'?(player.qingyao_charactercard.cloNode.style.display=''):void 0;
				if(!lib.config.extension_假装无敌_qingyao_Skin_Node_guanbi) player.qingyao_charactercard.cloNode.style.display='none';
				return undefined;
			}
			var playerName1=false,playerName2=false,playerLink=false;
			if(player.classList.contains('unseen')&&game.me!==player) playerName1=true;
			if(player.classList.contains('unseen2')&&game.me!==player) playerName2=true;

			var changeskin=function(player,name,avatar){
				if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].contains('minskins')) return undefined;
				if(lib.config.qingyao_Skin[name]&&lib.config.qingyao_Skin[name].toString().indexOf('ext:')!==-1){
					avatar.style.backgroundImage="url('"+lib.assetURL+lib.config.qingyao_Skin[name].toString().replace(/ext:/g,'extension/')+"')";
					game.broadcastAll(function(avatar){
						avatar.style.backgroundImage="url('"+lib.assetURL+lib.config.qingyao_Skin[name].toString().replace(/ext:/g,'extension/')+"')";
					},avatar);
				}
				let yxy=ui.create.div('.qingyao_character_skin_yxy_div');
				ui.create.div('.qingyao_character_skin_yxy',yxy);
				let nameskin=name;
				let nameskin2=name;
				let createButtons=function(num,src,_src,modular){
					let name=num;
					if(typeof num=='string'){
						name=num;
						if(num.lastIndexOf("(")!==-1){
							name=num.slice(0,num.lastIndexOf("("));
						}else if(num.lastIndexOf(".")!==-1){
							name=num.slice(0,num.lastIndexOf("."));
						}
						name=name.replace(nameskin2,'').replace(/^_pifu[0-9]/g,'');
						if(name.match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]",'g'))===null){
							name=get.translation(nameskin2);
						}
					}
					if(typeof name==='number') name=get.translation(nameskin2);
					if(!node.content[modular]) (node.content[modular]=ui.create.div(node.content,'.qingyao_skin_Button_modular'))&&(node.content[modular].onmousewheel=function(evt){
						let node=this;
						let num=6;
						let speed=16;
						clearInterval(node.interval);
						evt.preventDefault();
						if(evt.detail > 0 || evt.wheelDelta < 0){
							node.interval=setInterval(function(){
								if(num--&&Math.abs(node.scrollLeft+node.clientWidth-node.scrollWidth)>0){
									node.scrollLeft +=speed;
								}
								else{
									clearInterval(node.interval);
								}
							},16);
						}
						else{
							node.interval=setInterval(function(){
								if(num--&&node.scrollLeft>0){
									node.scrollLeft -=speed;
								}
								else{
									clearInterval(node.interval);
								}
							},16);
						}
					});

					var FragmentSysImg=document.createDocumentFragment(),
					SyscImage=ui.create.node('img');
					SyscImage.src=src;
					FragmentSysImg.appendChild(SyscImage);

					let button=ui.create.div('.qingyao_character_skin_Button',node.content[modular],function(e){
						!lib.config['skin']&&(game.saveConfig('skin',lib.config['skin']={}));
						if(button._link){
							//不是扩展皮肤
							if(window.decodeURI(_src).toString().indexOf('extension')===-1){
								lib.config['skin'][nameskin]=this._link;
								game.saveConfig('skin',lib.config['skin']);
							}
							/*//这是是否开启了解锁	_Unlock
							if(this.hasOwnProperty("_Unlock")&&lib.config[[nameskin]+'_pifu_'+[this._link]+'_'+isExtensionSkin+'_goumai']!==true){
								if(lib.config[this._Unlock.currency]-this._Unlock.quantity<0){
									// lib.qingyao_layer.msg("货币不足！",{
									// 	icon:2,
									// 	protype:4,
									// 	time:5e2,
									// });
									return;
								}else{
									lib.config[lib.config[this._Unlock.currency]]=lib.config[lib.config[this._Unlock.currency]]-this._Unlock.quantity;
									game.saveConfigValue(this._Unlock.currency);
									try{
										lib.config.extension_假装无敌_qingyao_coin_update&&eval('"use strict";{'+lib.config.extension_假装无敌_qingyao_coin_update.toString()+'}');
									}catch(e){
										if(config.skin_update_error){
											game.log("extension_假装无敌_qingyao_coin_update："+e);
											game.print("extension_假装无敌_qingyao_coin_update："+e);
											lib.qingyao_layer.alert(e.toString(),{title:'更新货币时出错！',icon:2});
											console.error(e);
										}
									}
									this._page.remove();
									lib.config[[nameskin]+'_pifu_'+[this._link]+'_'+this.isExtensionSkin+'_goumai']=true;
									game.saveConfig([nameskin]+'_pifu_'+[this._link]+'_'+this.isExtensionSkin+'_goumai',true);
									lib.qingyao_layer.msg("解锁成功",{icon:1,item:5e2});
								}
							}*/
						}
						//开始武将换肤
						if(avatar){
							game.broadcastAll(function(avatar,that){
								//渐变换肤（好像还是会卡。。。？？？还是尽量别用了
								avatar.style.backgroundImage=that.style.backgroundImage;
							},avatar,this);
						}
						//保存扩展上换肤的路径
						if(Array.isArray(lib.character[nameskin][4])&&lib.character[nameskin][4].length>0){
							for(let i=0;i<lib.character[nameskin][4].length;i++){
								if(lib.character[nameskin][4][i].indexOf('ext')!==-1){
									if(window.decodeURI(this._src).indexOf('extension')!==-1){
										let Ufem8='ext:'+this._src.slice(this._src.lastIndexOf('extension/')+10);
										if(!lib.config.qingyao_Skin) lib.config.qingyao_Skin={};
										lib.config.qingyao_Skin[nameskin]=window.decodeURI(Ufem8);
										game.saveConfig('qingyao_Skin',lib.config.qingyao_Skin);
										lib.character[nameskin][4][i]=window.decodeURI(Ufem8);
										break;
									}else{
										lib.character[nameskin][4][i]=lib.character[nameskin][4][i]+'../../../../'+_src;
										lib.config.qingyao_Skin[nameskin]=lib.character[nameskin][4][i];
										game.saveConfig('qingyao_Skin',lib.config.qingyao_Skin);
									}
								}else{
									lib.config['skin'][nameskin]=this._link;
									lib.character[nameskin][4][i]=window.decodeURI(lib.character[nameskin][4][i].replace(/ext:/g,'extension/'));
									game.saveConfig('skin',lib.config['skin']);
								}
							}
						}else{
							lib.config['skin'][nameskin]=this._link;
							this._link&&this._link.toString&&(lib.character[nameskin][4]=[this._link.toString()]);
							game.saveConfig('skin',lib.config['skin']);
						}
						//如果是原画的话直接清空不保存。
						if(!this._link){
							delete lib.config['skin'][nameskin];
							game.saveConfig('skin',lib.config['skin']);
						}
						this.appendChild(yxy);
						yxy.finished=true;
					});
					button._src=src;
					button._URL=_src;
					button._LinkName=name;
					button.style.backgroundImage='url("'+src+'")';
					let isExtensionSkin='';
					if(window.decodeURI(_src).toString().indexOf('extension')!==-1) isExtensionSkin='_extension';
					if(num===-1){
						lib.config.SKIN_INFO[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']=lib.config.SKIN_INFO[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']||'经典';
						lib.config.SKIN_INFO_GradeOf[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']=lib.config.SKIN_INFO_GradeOf[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']||'原画';
					}
					let skin_info=lib.config.SKIN_INFO[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']||name;
					let SKIN_INFO_GradeOf=lib.config.SKIN_INFO_GradeOf[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info'];
					let Skin_info_div=ui.create.div('.qingyao_Skin_div',button,event=>{event.stopPropagation()});
					button._info=Skin_info_div;
					let info_Input=ui.create.div('.qingyao_Skin_info',button._info,skin_info||'    ')
					var js_name=_src.slice(_src.lastIndexOf('/')+1,_src.lastIndexOf('.'));
					if(js_name!==nameskin2)
						button._link=js_name;
					if(lib.character[nameskin][4]){
						for(let _LFc28 of lib.character[nameskin][4]){
							if(yxy.finished) break;
							if(_LFc28.replace(/ext:/g,'extension/').indexOf(_src)!==-1){
								button.appendChild(yxy);
							}
						}
					}
					var vyS5Z='url("'+window.decodeURI(_src).toString()+'")';
					var $vyS5Z=vyS5Z.substring(5,vyS5Z.length-2);
					var	gPHT1=window.decodeURI(avatar.style.backgroundImage).toString();
					if(gPHT1===vyS5Z||gPHT1.indexOf($vyS5Z)!==-1) button.appendChild(yxy);
					button.style.cursor="pointer";
					return button;
				};
				var num=1,change_extimage=false,change_character=false,change_modeimage=false,gz_skin=false,re_skin=false;
				var loadImage=function(){
					var img=new Image(),

					Fragment=document.createDocumentFragment();
					Fragment.appendChild(img);

					img.onload=function(){
						createButtons(num,img.src,img._src,nameskin2);
						num++;
						loadImage();
					};
					img.onerror=function(){
						if(typeof player.name=='string'&&lib.character[player.name]&&!playerName1){
							playerName1=true;
							changeskin(player,player.name,player.node.avatar,true);
						}else if(typeof player.name1=='string'&&lib.character[player.name1]&&!playerName1){
							playerName1=true;
							changeskin(player,player.name1,player.node.avatar,true);
						}else if(typeof player.name2=='string'&&lib.character[player.name2]&&!playerName2){
							playerName2=true;
							changeskin(player,player.name2,player.node.avatar2);
						}else if(typeof player.link=='string'&&lib.character[player.link]&&!playerLink){
							playerLink=true;
							changeskin(player,player.link,player.node.character);
						}
					};
					var ext='.jpg',dbimage=null,extimage=null,modeimage=null;
					var nameinfo;
					var gzbool=false;
					var mode=get.mode();
					if(lib.characterPack['mode_'+mode]&&lib.characterPack['mode_'+mode][name]){
						if(mode==='guozhan'){
							if(name.indexOf('gz_shibing')===0){
								name=name.slice(3,11);
							}
							else{
								if(lib.config.mode_config.guozhan.guozhanSkin&&lib.character[name]&&lib.character[name][4].contains('gzskin'))  gzbool=true;
								name=name.slice(3);
							}
						}
						else{
							modeimage=mode;
						}
					}
					else if(lib.character[name]){
						nameinfo=lib.character[name];
					}
					else if(name.indexOf('::')!==-1){
						name=name.split('::');
						modeimage=name[0];
						name=name[1];
					}
					if(!modeimage&&nameinfo&&nameinfo[4]){
						for(var i=0;i<nameinfo[4].length;i++){
							if(nameinfo[4][i].indexOf('ext')===0){
								extimage=nameinfo[4][i];break;
							}
							else if(nameinfo[4][i].indexOf('mode:')===0){
								modeimage=nameinfo[4][i].slice(5);break;
							}
							else if(nameinfo[4][i].indexOf('character:')===0){
								name=nameinfo[4][i].slice(10);break;
							}else if(nameinfo[4][i].indexOf('extension')===0){
								extimage=nameinfo[4][i];break;
							}
						}
					}
					/******************************************************************************/
					if(!change_character){
						img.src=lib.assetURL+'image/character/'+(gzbool?'gz_':'')+name+ext;
						img._src='image/character/'+(gzbool?'gz_':'')+name+ext;
						change_character=true;
						img.onload=function(){
							createButtons(-1,img.src,img._src,nameskin2);
							loadImage();
						};
						img.onerror=function(){
							loadImage();
						};
					}else if(modeimage&&!change_modeimage){
						img.src=lib.assetURL+'image/mode/'+modeimage+'/character/'+name+ext;
						img._src='image/mode/'+modeimage+'/character/'+name+ext;
						change_modeimage=true;
						img.onload=function(){
							createButtons(-1,img.src,img._src,nameskin2);
							loadImage();
						};
						img.onerror=function(){
							loadImage();
						};
					}else if(extimage&&!change_extimage){
						if(extimage.indexOf('../')!=-1) extimage=extimage.slice(0,extimage.indexOf('../'));
						var src=extimage.replace(/ext:/g,'extension/');
						var str=src.substring(0,src.lastIndexOf('/'));
						img.onerror=function(){
							num=1;
							change_extimage=true;
							loadImage();
						};
						img.onload=function(){
							createButtons((num-1),img.src,img._src,nameskin2);
							num++;
							loadImage();
						};
						if(lib.config.extension_假装无敌_qingyao_Skin_load=="order"){
							if(num==1){
								img.src=lib.assetURL+str+'/'+name+ext;
								img._src=str+'/'+name+ext;
							}else{
								img.src=lib.assetURL+str+'/'+name+'_pifu'+(num-1)+ext;
								img._src=str+'/'+name+'_pifu'+(num-1)+ext;
							}
						}else{
							game.hasDirectory(str,function(){
								game.getFileList(str,function(folders,files){
									for(var i of files){
										if(i.indexOf(name)!==0) continue;
										var names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
										if(names!=null&&ImageRe.test(names.join(""))&&names.length>1){
											createButtons(i.toString(),lib.assetURL+str+"/"+i,str+"/"+i,nameskin2);
										}
									}
								});
							},function(){
								delete lib.config['skin'][name];
								game.saveConfig('skin',lib.config['skin']);
							});
							img.onerror();
						}
					}else{
						img.onload=function(){
							createButtons(num,img.src,img._src,nameskin2);
							num++;
							loadImage();
						};
						img._src='image/skin/'+name+'/'+num+ext;
						if(lib.config.extension_假装无敌_qingyao_Skin_load==="order"){
							img.src=lib.assetURL+'image/skin/'+name+'/'+num+ext;
						}else{
							var url='image/skin/'+name;
							game.hasDirectory(url,function(){
								game.getFileList('image/skin/'+name,function(folders,files){
									for(var i of files){
										var names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
										if(names!=null&&ImageRe.test(names.join(""))&&names.length>1){
											createButtons(i.toString(),lib.assetURL+url+"/"+i,url+"/"+i,nameskin2);
										}
									}
								});
							},function(){
								delete lib.config['skin'][name];
								game.saveConfig('skin',lib.config['skin']);
							});
							img.onerror();
						}
					}
				};
				loadImage();
			};
			if(typeof player.name=='string'&&lib.character[player.name]&&!playerName1){
				playerName1=true;
				changeskin(player,player.name,player.node.avatar,true);
			}else if(typeof player.name1=='string'&&lib.character[player.name1]&&!playerName1){
				playerName1=true;
				changeskin(player,player.name1,player.node.avatar,true);
			}else if(typeof player.name2=='string'&&lib.character[player.name2]&&!playerName2){
				playerName2=true;
				changeskin(player,player.name2,player.node.avatar2);
			}else if(typeof player.link=='string'&&lib.character[player.link]&&!playerLink){
				playerLink=true;
				changeskin(player,player.link,player);
			}
			var node=ui.create.div('.qingyao_character_skin_Node');
			/*node.listen(function(event){
				event.stopPropagation();
			});*/
			lib.setScroll(node);
			node.cloNode=ui.create.div(ui.window,'.qingyao_Skin_Node_guanbi',function(event){
				this.delete();
				NodeClose(event);
			});
			if(!lib.config.extension_假装无敌_qingyao_Skin_Node_guanbi) node.cloNode.style.display='none';
			var clo=ui.create.div(node);
			ui.create.node(clo,'span','X').finished=true;
			node.clo=clo;
			clo.finished=true;
			clo.classList.add('qingyao_character_skin_Close');
			var NodeClose=function(event){
				node.delete();
				node.cloNode.delete();
				delete player.qingyao_charactercard
				event.stopPropagation();
				event.preventDefault();
				if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.resume2();
				return false;
			};
			clo.addEventListener('click',NodeClose);
			var minimize=ui.create.div(node,'.qingyao_Skin_minimize');
			minimize.finished=true;
			minimize.addEventListener('click',function(event){
				event.stopPropagation();
				event.preventDefault();
				node.cloNode.style.display='none';
				node.style.animation="moveBottom 1s";
				if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.resume2();
				window.setTimeout(()=>{
					node.style.display='none';
				},300);
				return false;
			});

			ui.create.div('.qingyao_character_skin_tswz', "<span style='color:#EDDCA9;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);'>选择更换武将皮肤</span>",node);
			node.content=ui.create.div(node,'.qingyao_character_skin_content');
			node.content.finished=true;
			if(lib.config.touchscreen){
				lib.setScroll(node.content);
			}
			player.qingyao_charactercard=node;
			if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.pause2();
			ui.window.appendChild(node);
			window.placePoppedCharacter(node,player);
			window.zyile_dragZoom&&window.zyile_dragZoom(node);
			return node;
		};
	}else{
		var Skin=function(player,value,avatar){
			var playerSkin=(avatar||player);
			if(!lib.character[value]||typeof value!=='string'){
				if(playerSkin&&playerSkin.qingyao_Skin_Node) return playerSkin.qingyao_Skin_Node.remove();
				return;
			}

			var num=1,skin_num=0,change_extimage=false;
			var loadImage=function(){
				var img=new Image(),
				Fragment=document.createDocumentFragment();
				Fragment.appendChild(img);

				img.onload=function(){
					num++;
					skin_num++;
					if(skin_num>0){
						if(player.classList&&(player.classList.contains('player')||player.classList.contains('button'))){
							if(playerSkin.qingyao_Skin_Node) playerSkin.qingyao_Skin_Node.remove();
							playerSkin.qingyao_Skin_Node=ui.create.div(playerSkin,event=>{event.stopPropagation();event.preventDefault();});
							var div=ui.create.div(playerSkin.qingyao_Skin_Node);
							div.classList.add('qingyao_skin');
							playerSkin.qingyao_Skin_Node.setAttribute('style','transition-property:opacity,background,box-shadow;display:block !important;z-index:99999;width: 100%;height: 100%;pointer-events: none;');
							div.addEventListener('endDang',function(e){
								e.stopPropagation();
								window.qingyao_charactercard(value,false,playerSkin,player);
							},false);
							var position=game.getExtensionConfig('假装无敌','qingyao_skin_position');
							if(position){
								div.css({
									transform:`translate(${position[0]}px,${position[1]}px)`,
								});
								div._translate=position;
							}
							div.addEventListener('moveStop',function () {
								game.saveExtensionConfig('假装无敌','qingyao_skin_position',this._translate);
							});
							window.zyile_dragZoom&&window.zyile_dragZoom(div,player);
						}
					}else{
						if(playerSkin.qingyao_Skin_Node) playerSkin.qingyao_Skin_Node.remove();
						loadImage();
					}
				}
				img.onerror=function(){
					loadImage();
				};
				var ext='.jpg',dbimage=null,extimage=null,modeimage=null,nameskin=value,name=value;
				var nameinfo;
				var gzbool=false;
				var mode=get.mode();
				if(lib.characterPack['mode_'+mode]&&lib.characterPack['mode_'+mode][name]){
					if(mode=='guozhan'){
						if(name.indexOf('gz_shibing')==0){
							name=name.slice(3,11);
						}
						else{
							if(lib.config.mode_config.guozhan.guozhanSkin&&lib.character[name]&&lib.character[name][4].contains('gzskin'))  gzbool=true;
							name=name.slice(3);
						}
					}
					else{
						modeimage=mode;
					}
				}
				else if(lib.character[name]){
					nameinfo=lib.character[name];
				}
				else if(name.indexOf('::')!=-1){
					name=name.split('::');
					modeimage=name[0];
					name=name[1];
				}
				if(!modeimage&&nameinfo&&nameinfo[4]){
					for(var i=0;i<nameinfo[4].length;i++){
						if(nameinfo[4][i].indexOf('ext:')==0){
							extimage=nameinfo[4][i];break;
						}
						else if(nameinfo[4][i].indexOf('mode:')==0){
							modeimage=nameinfo[4][i].slice(5);break;
						}
						else if(nameinfo[4][i].indexOf('character:')==0){
							name=nameinfo[4][i].slice(10);break;
						}
					}
				}
				if(extimage&&!change_extimage){
					if(extimage.indexOf('../')!=-1) extimage=extimage.slice(0,extimage.indexOf('../'));
					var src=extimage.replace(/ext:/g,'extension/');
					var str=src.substring(0,src.lastIndexOf('/'));
					change_extimage=true;
					img.onerror=function(){
						num=1;
						loadImage();
					};
					if(lib.config.extension_假装无敌_qingyao_Skin_load=="order"){
						img.src=lib.assetURL+str+'/'+name+'_pifu'+num+ext;
					}else{
						game.hasDirectory(str,function(){
							game.getFileList(str,function(folders,files){
								for(var i of files){
									if(i.indexOf(name)!==0) continue;
									if(name.length+4>=i.length) continue;
									var names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
									if(names!=null&&ImageRe.test(names.join(""))&&names.length>1){
										img.onload();
										if(skin_num>1) return;
									}
								}
							});
						},function(){
							delete lib.config['skin'][name];
							game.saveConfig('skin',lib.config['skin']);
						});
						img.onerror();
					}
				}else{
					if(lib.config.extension_假装无敌_qingyao_Skin_load=="order"){
						img.src=lib.assetURL+'image/skin/'+name+'/'+num+ext;
						img.onerror=null;
					}else{
						var url='image/skin/'+name;
						game.hasDirectory(url,function(){
							game.getFileList('image/skin/'+name,function(folders,files){
								for(var i of files){
									var names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
									if(names!=null&&ImageRe.test(names.join(""))&&names.length>1){
										img.onload();
										if(skin_num>1) return void 0;
									}
								}
							});
						},function(){
							delete lib.config['skin'][name];
							game.saveConfig('skin',lib.config['skin']);
						});
					}
				}
			};
			if(lib.config.extension_假装无敌_qingyao_skin_fluent){
				if(player.classList&&(player.classList.contains('player')||player.classList.contains('button'))){
					playerSkin.qingyao_Skin_Node=ui.create.div(playerSkin,event=>{
						event.stopPropagation();event.preventDefault();
					});
					var div=ui.create.div(playerSkin.qingyao_Skin_Node);
					div.classList.add('qingyao_skin');
					playerSkin.qingyao_Skin_Node.setAttribute('style','display:block !important;z-index:99999;width: 100%;height: 100%;pointer-events: none;');
					div.addEventListener('endDang',function(e){
						e.stopPropagation();
						window.qingyao_charactercard(value,false,playerSkin,player);
					},true);
					var position=game.getExtensionConfig('假装无敌','qingyao_skin_position');
					if(position){
						div.css({
							transform:`translate(${position[0]}px,${position[1]}px)`,
						});
						div._translate=position;
					}
					div.addEventListener('moveStop',function () {
						game.saveExtensionConfig('假装无敌','qingyao_skin_position',this._translate);
					});
					window.zyile_dragZoom&&window.zyile_dragZoom(div,player);
				}
			}else loadImage();
		};

		if(config.qingyao_Skin_Loading_time=='start'){
			lib.element.player.inits.push(
				function(player){
					Skin(player,player.name,player.node&&player.node.avatar);
					Skin(player,player.name2,player.node&&player.node.avatar2);
				}
			);
			if(!Array.isArray(lib.element.player._uninits)){
				lib.element.player._uninits=[
					function(player){
						Skin(player,player.name,player.node&&player.node.avatar);
						Skin(player,player.name2,player.node&&player.node.avatar2);
					}
				];
			}else{
				lib.element.player._uninits.push(function(player){
					Skin(player,player.name,player.node&&player.node.avatar);
					Skin(player,player.name2,player.node&&player.node.avatar2);
				});
			}
		}else{
			Object.defineProperty(HTMLDivElement.prototype,'name1',{
				get:function(){
					return this._qingyao_NAME1;
				},
				set:function(value){
					// debugger
					this._qingyao_NAME1=value;
					if(!this.classList||this.classList.contains('card')) return void 0;
					if(lib.config.extension_假装无敌_qingyao_Skin_area=='all'){
						if(this.classList.contains('player')||this.classList.contains('button')){
							Skin(this,value,this.node&&this.node.avatar);
						}
					}else if(this.classList.contains(lib.config.extension_假装无敌_qingyao_Skin_area)){
						Skin(this,value,this.node&&this.node.avatar);
					}
				},
				configurable:true,
			});
			Object.defineProperty(HTMLDivElement.prototype,'name2',{
				get:function(){
					return this._qingyao_NAME2;
				},
				set:function(value){
					this._qingyao_NAME2=value;
					if(!this.classList||this.classList.contains('card')) return void 0;
					if(lib.config.extension_假装无敌_qingyao_Skin_area=='all'){
						if(this.classList.contains('player')||this.classList.contains('button')){
							Skin(this,value,this.node&&this.node.avatar2);
						}
					}else if(this.classList.contains(lib.config.extension_假装无敌_qingyao_Skin_area)){
						Skin(this,value,this.node&&this.node.avatar2);
					};
				},
				configurable:true,
			});
			Object.defineProperty(HTMLDivElement.prototype,'link',{
				get:function(){
					return this._qingyao_LINK;
				},
				set:function(value){
					this._qingyao_LINK=value;
					if(!this.classList||this.classList.contains('card')) return void 0;
					if(lib.config.extension_假装无敌_qingyao_Skin_area=='all'){
						if(this.classList.contains('player')||this.classList.contains('button')){
							Skin(this,value,undefined);
						}
					}else if(this.classList.contains(lib.config.extension_假装无敌_qingyao_Skin_area)){
						Skin(this,value,undefined);
					}
				},
				configurable:true,
			});
		}
		window.qingyao_charactercard=function(name,resume,avatar,that){
			if(!name) return undefined;
			if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].contains('minskins')) return undefined;
			if(avatar.qingyao_charactercard){
				if(window.getComputedStyle(avatar.qingyao_charactercard,null).display=='none'){
					avatar.qingyao_charactercard.style.display='block';
					avatar.qingyao_charactercard.style.animation="dialog_start2 .3s";
					if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.pause2();
				}
				window.getComputedStyle(avatar.qingyao_charactercard.cloNode,null).display=='none'?(avatar.qingyao_charactercard.cloNode.style.display=''):void 0;
				if(!lib.config.extension_假装无敌_qingyao_Skin_Node_guanbi) avatar.qingyao_charactercard.cloNode.style.display='none';
				return undefined;
			}
			if(lib.config.qingyao_Skin[name]&&lib.config.qingyao_Skin[name].toString().indexOf('ext:')!==-1){
				avatar.style.backgroundImage="url('"+lib.assetURL+lib.config.qingyao_Skin[name].toString().replace(/ext:/g,'extension/')+"')";
				game.broadcastAll(function(avatar){
					avatar.style.backgroundImage="url('"+lib.assetURL+lib.config.qingyao_Skin[name].toString().replace(/ext:/g,'extension/')+"')";
				},avatar);
			}
			var node=ui.create.div('.qingyao_character_skin_Node');
			avatar.qingyao_charactercard=node;
			var zindex=(window.getComputedStyle(that,null).zIndex||6);
			/*node.listen(function(event){
				event.stopPropagation();
			});*/
			lib.setScroll(node);
			node.cloNode=ui.create.div(ui.window,'.qingyao_Skin_Node_guanbi',function(event){
				this.delete();
				NodeClose(event);
			});
			if(!lib.config.extension_假装无敌_qingyao_Skin_Node_guanbi) node.cloNode.style.display='none';
			var clo=ui.create.div(node,'.qingyao_character_skin_Close');
			clo.finished=true;
			node.clo=clo;
			ui.create.node(clo,'span','X').finished=true;
			var NodeClose=function(event){
				node.delete();
				node.cloNode.delete();
				delete avatar.qingyao_charactercard
				event.stopPropagation();
				event.preventDefault();
				if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.resume2();
				return false;
			};
			clo.addEventListener('click',NodeClose);

			var minimize=ui.create.div(node,'.qingyao_Skin_minimize');
			minimize.finished=true;
			minimize.addEventListener('click',function(event){
				event.stopPropagation();
				event.preventDefault();
				node.cloNode.style.display='none';
				node.style.animation="moveBottom 1s";
				if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.resume2();
				window.setTimeout(()=>{
					node.style.display='none';
				},300);
				return false;
			});

			var tswz=ui.create.div(node);
			tswz.classList.add('qingyao_character_skin_tswz');
			tswz.innerHTML="<span style='color:#EDDCA9;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);'>选择更换武将皮肤</span>";
			var d=ui.create.div(node,'.qingyao_character_skin_content');
			node.content=d;
			node.content.finished=true;
			var yxy=ui.create.div('.qingyao_character_skin_yxy_div');
			ui.create.div('.qingyao_character_skin_yxy',yxy);
			var nameskin=name;
			var nameskin2=name;
			var changeskin=function(){
				var createButtons=function(num,src,_src){
					if(lib.config.touchscreen){
						lib.setScroll(d);
					}
					let name=num;
					if(typeof num=='string'){
						if(num.lastIndexOf("(")!==-1){
							name=num.slice(0,num.lastIndexOf("("));
						}else if(num.lastIndexOf(".")!==-1){
							name=num.slice(0,num.lastIndexOf("."));
						}
						name=name.replace(nameskin2,'').replace(/^_pifu[0-9]/g,'');
						if(name.match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]",'g'))===null){
							name=get.translation(nameskin2);
						}
					}
					if(typeof name==='number') name=get.translation(nameskin2);
					var FragmentSysImg=document.createDocumentFragment(),
					SyscImage=ui.create.node('img');
					SyscImage.src=src;
					FragmentSysImg.appendChild(SyscImage);
					var button=ui.create.div('.qingyao_character_skin_Button',node.content,function(e){
						!lib.config['skin']&&(game.saveConfig('skin',lib.config['skin']={}));
						if(button._link){
							//不是扩展皮肤
							if(window.decodeURI(_src).toString().indexOf('extension')===-1){
								lib.config['skin'][nameskin]=this._link;
								game.saveConfig('skin',lib.config['skin']);
							}
						}
						//开始武将换肤
						if(avatar){
							game.broadcastAll(function(avatar,that){
								//渐变换肤（好像还是会卡。。。？？？还是尽量别用了
								avatar.style.backgroundImage=that.style.backgroundImage;
							},avatar,this);
						}
						//保存扩展上换肤的路径
						if(Array.isArray(lib.character[nameskin][4])&&lib.character[nameskin][4].length>0){
							for(var i=0;i<lib.character[nameskin][4].length;i++){
								if(lib.character[nameskin][4][i].indexOf('ext')!==-1){
									if(window.decodeURI(this._src).indexOf('extension')!==-1){
										var Ufem8='ext:'+this._src.slice(this._src.lastIndexOf('extension/')+10);
										if(!lib.config.qingyao_Skin) lib.config.qingyao_Skin={};
										lib.config.qingyao_Skin[nameskin]=window.decodeURI(Ufem8);
										game.saveConfig('qingyao_Skin',lib.config.qingyao_Skin);
										lib.character[nameskin][4][i]=window.decodeURI(Ufem8);
										break;
									}else{
										lib.character[nameskin][4][i]=lib.character[nameskin][4][i]+'../../../../'+_src;
										lib.config.qingyao_Skin[nameskin]=lib.character[nameskin][4][i];
										game.saveConfig('qingyao_Skin',lib.config.qingyao_Skin);
									}
								}else{
									lib.config['skin'][nameskin]=this._link;
									lib.character[nameskin][4][i]=window.decodeURI(lib.character[nameskin][4][i].replace(/ext:/g,'extension/'));
									game.saveConfig('skin',lib.config['skin']);
								}
							}
						}else{
							lib.config['skin'][nameskin]=this._link;
							this._link&&this._link.toString&&(lib.character[nameskin][4]=[this._link.toString()]);
							game.saveConfig('skin',lib.config['skin']);
						}
						//如果是原画的话直接清空不保存。
						if(!this._link){
							delete lib.config['skin'][nameskin];
							game.saveConfig('skin',lib.config['skin']);
						}
						this.appendChild(yxy);
						yxy.finished=true;
					});

					button._src=src;
					button._URL=_src;
					button._LinkName=name;
					button.style.backgroundImage='url("'+src+'")';
					var isExtensionSkin='';
					if(window.decodeURI(_src).toString().indexOf('extension')!==-1) isExtensionSkin='_extension';
					if(num===-1){
						lib.config.SKIN_INFO[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']=lib.config.SKIN_INFO[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']||'经典';
						lib.config.SKIN_INFO_GradeOf[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']=lib.config.SKIN_INFO_GradeOf[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']||'原画';
					}
					var skin_info=lib.config.SKIN_INFO[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info']||name;
					var SKIN_INFO_GradeOf=lib.config.SKIN_INFO_GradeOf[[nameskin]+'_pifu'+[num]+isExtensionSkin+'_info'];
					var Skin_info_div=ui.create.div('.qingyao_Skin_div',button,event=>{event.stopPropagation()});
					button._info=Skin_info_div;
					var info_Input=ui.create.div('.qingyao_Skin_info',button._info,skin_info||'    ')
					var js_name=_src.slice(_src.lastIndexOf('/')+1,_src.lastIndexOf('.'));
					if(js_name!==nameskin2){	//判断是不是原图
						button._link=js_name;
					}
					if(lib.character[nameskin][4]){
						for(var _LFc28 of lib.character[nameskin][4]){
							if(yxy.finished) break;
							if(_LFc28.replace(/ext:/g,'extension/').indexOf(_src)!==-1){
								button.appendChild(yxy);
							}
						}
					}
					var vyS5Z='url("'+window.decodeURI(_src).toString()+'")';
					var $vyS5Z=vyS5Z.substring(5,vyS5Z.length-2);
					var	gPHT1=window.decodeURI(avatar.style.backgroundImage).toString();
					if(gPHT1===vyS5Z||gPHT1.indexOf($vyS5Z)!==-1) button.appendChild(yxy);
					button.style.cursor="pointer";
				};
				/**************************************************************************************************/
				var num=1,change_extimage=false,change_character=false,change_modeimage=false;
				var loadImage=function(){
					var img=new Image(),
					Fragment=document.createDocumentFragment();
					Fragment.appendChild(img);

					img.onload=null;
					img.onerror=null;

					var ext='.jpg',dbimage=null,extimage=null,modeimage=null;
					var nameinfo;
					var gzbool=false;
					var mode=get.mode();
					if(lib.characterPack['mode_'+mode]&&lib.characterPack['mode_'+mode][name]){
						if(mode==='guozhan'){
							if(name.indexOf('gz_shibing')===0){
								name=name.slice(3,11);
							}
							else{
								if(lib.config.mode_config.guozhan.guozhanSkin&&lib.character[name]&&lib.character[name][4].contains('gzskin'))  gzbool=true;
								name=name.slice(3);
							}
						}
						else{
							modeimage=mode;
						}
					}
					else if(lib.character[name]){
						nameinfo=lib.character[name];
					}
					else if(name.indexOf('::')!==-1){
						name=name.split('::');
						modeimage=name[0];
						name=name[1];
					}
					if(!modeimage&&nameinfo&&nameinfo[4]){
						for(var i=0;i<nameinfo[4].length;i++){
							if(nameinfo[4][i].indexOf('ext')===0){
								extimage=nameinfo[4][i];break;
							}
							else if(nameinfo[4][i].indexOf('mode:')===0){
								modeimage=nameinfo[4][i].slice(5);break;
							}
							else if(nameinfo[4][i].indexOf('character:')===0){
								name=nameinfo[4][i].slice(10);break;
							}
						}
					}
					/*******************************************************************************/
					if(!change_character){
						img.src=lib.assetURL+'image/character/'+(gzbool?'gz_':'')+name+ext;
						img._src='image/character/'+(gzbool?'gz_':'')+name+ext;
						change_character=true;
						img.onload=function(){
							createButtons(-1,img.src,img._src);
							loadImage();
						};
						img.onerror=function(){
							loadImage();
						};
					}else if(modeimage&&!change_modeimage){
						img.src=lib.assetURL+'image/mode/'+modeimage+'/character/'+name+ext;
						img._src='image/mode/'+modeimage+'/character/'+name+ext;
						change_modeimage=true;
						img.onload=function(){
							createButtons(-1,img.src,img._src);
							loadImage();
						};
						img.onerror=function(){
							loadImage();
						};
					}else if(extimage&&!change_extimage){
						if(extimage.indexOf('../')!=-1) extimage=extimage.slice(0,extimage.indexOf('../'));
						var src=extimage.replace(/ext:/g,'extension/');
						var str=src.substring(0,src.lastIndexOf('/'));
						img.onerror=function(){
							num=1;
							change_extimage=true;
							loadImage();
						};
						img.onload=function(){
							createButtons((num-1),img.src,img._src);
							num++;
							loadImage();
						};
						if(lib.config.extension_假装无敌_qingyao_Skin_load=="order"){
							if(num==1){
								img.src=lib.assetURL+str+'/'+name+ext;
								img._src=str+'/'+name+ext;
							}else{
								img.src=lib.assetURL+str+'/'+name+'_pifu'+(num-1)+ext;
								img._src=str+'/'+name+'_pifu'+(num-1)+ext;
							}
						}else{
							game.hasDirectory(str,function(){
								game.getFileList(str,function(folders,files){
									for(var i of files){
										if(i.indexOf(name)!=0) continue;
										var names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
										if(names!=null&&ImageRe.test(names.join(""))&&names.length>1){
											createButtons(i.toString(),lib.assetURL+str+"/"+i,str+"/"+i);
										}
									}
								});
							},function(){
								delete lib.config['skin'][name];
								game.saveConfig('skin',lib.config['skin']);
							});
							img.onerror();
						}
					} else{
						img.onload=function(){
							createButtons(num,img.src,img._src);
							num++;
							loadImage();
						};
						if(lib.config.extension_假装无敌_qingyao_Skin_load=="order"){
							img.src=lib.assetURL+'image/skin/'+name+'/'+num+ext;
						}else{
							var url='image/skin/'+name;
							game.hasDirectory(url,function(){
								game.getFileList('image/skin/'+name,function(folders,files){
									for(var i of files){
										var names=i.toString().match(new RegExp("[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.",'g'));
										if(names!=null&&ImageRe.test(names.join(""))&&names.length>1){
											createButtons(i.toString(),lib.assetURL+url+"/"+i,url+"/"+i);
										}
									}
								});
							},function(){
								delete lib.config['skin'][name];
								game.saveConfig('skin',lib.config['skin']);
							});
						}
						img._src='image/skin/'+name+'/'+num+ext;
					}
				};
				loadImage();
			};
			changeskin();
			if(lib.config.extension_假装无敌_qingyao_Skin_suspend) game.pause2();
			ui.window.appendChild(node);
			window.placePoppedCharacter(node,that);
			window.zyile_dragZoom&&window.zyile_dragZoom(node,ui.window);
			return node;
		};
	}

	window.placePoppedCharacter=function(div,player){
		if(lib.config.extension_假装无敌_qingyao_Skin_placePopped==="center"){
			var style={
				top: 'calc(50% - 120px)',
				left: 'calc(50% - 236px)',
			};
			for(var i in style){
				div.style[i]=style[i];
			}
			div.style.animation='dialog_start2 0.3s';
			div.style.WebkitAnimation='dialog_start2 0.3s';
		}else if(lib.config.extension_假装无敌_qingyao_Skin_placePopped==="Location"){
			var pc=player.getBoundingClientRect();
			var dc=div.getBoundingClientRect();
			if(lib.extensionPack['十周年UI']){
				var zoom=(window.getComputedStyle(player,null).zoom||1);
				('ontouchstart' in document)?(zoom=1):void 0;
				if(!(ui.window.offsetHeight-pc.top>dc.height)){
					div.style.top=(pc.top-dc.height)*zoom+'px';
					lib.config.extension_假装无敌_bounce==='updown'&&div.classList.add('qingyao_bounceInTop');
				}else{
					div.style.top=pc.bottom*zoom+'px';
					lib.config.extension_假装无敌_bounce==='updown'&&div.classList.add('qingyao_bounceInBottom');
				}
				if(!(ui.window.offsetWidth-pc.left>div.offsetWidth)){
					div.style.right=((ui.window.offsetWidth-pc.right)*zoom)+'px';
					lib.config.extension_假装无敌_bounce==='about'&&div.classList.add('qingyao_bounceInRight');
				}else{
					div.style.left=(pc.left-10)*zoom+'px';
					lib.config.extension_假装无敌_bounce==='about'&&div.classList.add('qingyao_bounceInLeft');
				}
				return '十周年UI布局';
			}
			if('ontouchstart' in document){
				if(ui.window.offsetHeight-pc.top/game.documentZoom>dc.height/game.documentZoom){
					div.style.top=pc.bottom/game.documentZoom+'px';
					lib.config.extension_假装无敌_bounce==='updown'&&div.classList.add('qingyao_bounceInTop');
				}else{
					div.style.bottom=ui.window.offsetHeight-pc.top/game.documentZoom+'px';
					lib.config.extension_假装无敌_bounce==='updown'&&div.classList.add('qingyao_bounceInBottom');
				}
				if(!(ui.window.offsetWidth-pc.left/game.documentZoom>dc.width/game.documentZoom)){
					div.style.right=(ui.window.offsetWidth-(pc.left+pc.width)/game.documentZoom)*(window.getComputedStyle(player,null).zoom||1)+'px';
					lib.config.extension_假装无敌_bounce==='about'&&div.classList.add('qingyao_bounceInRight');
				}else{
					div.style.left=pc.left/game.documentZoom-10+'px';
					lib.config.extension_假装无敌_bounce==='about'&&div.classList.add('qingyao_bounceInLeft');
				}
			}else{
				var zoom=(window.getComputedStyle(player,null).zoom||1);
				if(ui.window.offsetHeight-pc.top/game.documentZoom+player.offsetHeight>div.offsetHeight){
					if(pc.top/game.documentZoom-div.offsetHeight-dc.top<0){
						div.style.top=pc.bottom/game.documentZoom*zoom+'px';
						lib.config.extension_假装无敌_bounce==='updown'&&div.classList.add('qingyao_bounceInBottom');
					}
					else{
						div.style.top=(pc.top-dc.height)/game.documentZoom*zoom+'px';
						lib.config.extension_假装无敌_bounce==='updown'&&div.classList.add('qingyao_bounceInTop');
					}
				}else{
					div.style.bottom=player.offsetHeight+'px';
				}
				if(!(ui.window.offsetWidth-pc.left/game.documentZoom>div.offsetWidth)){
					div.style.left=(pc.left-dc.width+pc.width)/game.documentZoom*zoom+4+'px';
					lib.config.extension_假装无敌_bounce==='about'&&div.classList.add('qingyao_bounceInRight');
				}else{
					div.style.left=pc.left/game.documentZoom*zoom-7+'px';
					lib.config.extension_假装无敌_bounce==='about'&&div.classList.add('qingyao_bounceInLeft');
				}
			}
		}
	};

};


window.qyImport(function(lib,game,ui,get,ai,_status,config){
	if(game.getExtensionConfig('假装无敌','qingyao_skin_Gradient_Preloading_images')){
		let onload=function(){
			let imgs=ui.create.div(document.body,{
				visibility: 'hidden',
				width: '0',
				height: '0',
				opacity: '0',
			});
			let	ReadFileList=function(fob){
				game.getFileList("extension/假装无敌/"+fob,function(folders,files){
					if(!files.length) return undefined;
					for(var j of files){
						let img=ui.create.node(imgs,'img');
						img.src=lib.assetURL+'extension/假装无敌/'+fob+'/'+j;
						img.addEventListener('load',function(){
							this.style.display="none";
						});
						img.addEventListener('error',function(){
							this.style.display="none";
						});
					}
				});
			};
			game.ensureDirectory('extension/假装无敌/redskin',function(){ReadFileList('redskin')});
			game.ensureDirectory('extension/假装无敌/purpleskin',function(){ReadFileList('purpleskin')});
			game.ensureDirectory('extension/假装无敌/yellowskin',function(){ReadFileList('yellowskin')});
		};
		onload();
	}

	if(!lib.config.qingyao_Skin) game.saveConfig('qingyao_Skin',{});
	if(!config.qingyao_Skin_enable) return undefined;
	for(var i in lib.config.qingyao_Skin){
		var character=lib.character[i];
		if(!character||!character[4]) continue;
		for(var j=0;j<character[4].length;j++){
			if(character[4][j].indexOf('ext')===-1) continue;
			try{
				character[4][j]=lib.config.qingyao_Skin[i].toString().replace(/extension/g,'ext:');
			}catch(e){}
		}
	}
});