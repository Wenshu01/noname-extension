(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380f77d4","chunk-b310dbce"],{"0419":function(e,t,o){var n={"./3024-day.css":"e27f","./3024-night.css":"2c09","./abbott.css":"6f22","./abcdef.css":"6d0c","./ambiance-mobile.css":"8b9e","./ambiance.css":"0f7c","./ayu-dark.css":"cc5a","./ayu-mirage.css":"5514","./base16-dark.css":"8c2e","./base16-light.css":"cc10","./bespin.css":"89e2","./blackboard.css":"7393","./cobalt.css":"a8d9","./colorforth.css":"03a9","./darcula.css":"7ba3","./dracula.css":"0109","./duotone-dark.css":"e8b0","./duotone-light.css":"b6fc","./eclipse.css":"01cb","./elegant.css":"ac1e","./erlang-dark.css":"a5242","./gruvbox-dark.css":"15ad","./hopscotch.css":"0176","./icecoder.css":"46ff","./idea.css":"b866","./isotope.css":"1ddb","./juejin.css":"6838","./lesser-dark.css":"7b0e","./liquibyte.css":"cdf4","./lucario.css":"737c","./material-darker.css":"ebe1","./material-ocean.css":"5a25","./material-palenight.css":"d79d","./material.css":"d2e8","./mbo.css":"9603","./mdn-like.css":"eb8f","./midnight.css":"1ad7","./monokai.css":"7a7a","./moxer.css":"30c5","./neat.css":"bbca","./neo.css":"d5db","./night.css":"471d","./nord.css":"3dad","./oceanic-next.css":"8725","./panda-syntax.css":"fade","./paraiso-dark.css":"1b85","./paraiso-light.css":"281e","./pastel-on-dark.css":"068cb","./railscasts.css":"4946","./rubyblue.css":"acdf","./seti.css":"ed9c","./shadowfox.css":"7f1a","./solarized.css":"8c06","./ssms.css":"eafa","./the-matrix.css":"c9a2","./tomorrow-night-bright.css":"2618","./tomorrow-night-eighties.css":"1759","./ttcn.css":"4659","./twilight.css":"7aa3","./vibrant-ink.css":"ad99","./xq-dark.css":"bd58","./xq-light.css":"8d7e","./yeti.css":"f0df","./yonce.css":"498a5","./zenburn.css":"5bee"};function i(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="0419"},"0481":function(e,t,o){"use strict";var n=o("23e7"),i=o("a2bf6"),a=o("7b0b"),s=o("07fa"),r=o("5926"),l=o("65f0");n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),o=s(t),n=l(t,0);return n.length=i(n,t,t,o,0,void 0===e?1:r(e)),n}})},4069:function(e,t,o){var n=o("44d2");n("flat")},"43ba":function(e,t,o){},8417:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container",staticStyle:{"margin-top":"2vh"}},[e.showSearch?o("el-form",{ref:"queryForm",attrs:{inline:!0,"label-width":"auto"}},[o("el-form-item",{attrs:{label:"请选择主题",prop:"postCode"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择",size:"small"},model:{value:e.cmTheme,callback:function(t){e.cmTheme=t},expression:"cmTheme"}},e._l(e.cmThemeOptions,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"请选择编辑模式",prop:"postCode"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择",size:"small"},on:{change:e.onEditorModeChange},model:{value:e.cmEditorMode,callback:function(t){e.cmEditorMode=t},expression:"cmEditorMode"}},e._l(e.cmEditorModeOptions,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",[o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.copyValue}},[e._v("复制内容")]),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.open=!e.open}}},[e._v("修改校验规则")]),o("el-dropdown",{staticStyle:{"margin-left":"10px"},attrs:{"split-button":"",type:"primary",size:"small"},on:{click:function(t){return e.execCommand(e.execCommandValue)},command:e.handleCommand}},[e._v(" "+e._s(e.execCommandTranslate[e.execCommandValue])+" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.execCommandTranslate,(function(t,n){return o("el-dropdown-item",{key:n,attrs:{command:n}},[e._v(e._s(t)+" ")])})),1)],1)],1)],1):e._e(),o("code-mirror-editor",{ref:"cmEditor",attrs:{cmTheme:e.cmTheme,cmMode:e.cmMode,autoFormatJson:e.autoFormatJson,jsonIndentation:e.jsonIndentation,lintOptions:e.lintOptions,newValue:e.editorValue}}),o("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[o("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"90px"}},e._l(e.lintOptions.options,(function(t,n){return o("el-row",{key:n},["object"!==typeof e.lintOptions.options[n]?o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:n,prop:n}},["boolean"===typeof e.lintOptions.options[n]?o("el-switch",{attrs:{"active-text":n},model:{value:e.lintOptions.options[n],callback:function(t){e.$set(e.lintOptions.options,n,t)},expression:"lintOptions.options[key]"}}):"number"===typeof e.lintOptions.options[n]?o("el-input-number",{attrs:{size:"mini",min:0,max:100},model:{value:e.lintOptions.options[n],callback:function(t){e.$set(e.lintOptions.options,n,t)},expression:"lintOptions.options[key]"}}):o("el-input",{model:{value:e.lintOptions.options[n],callback:function(t){e.$set(e.lintOptions.options,n,t)},expression:"lintOptions.options[key]"}})],1)],1):e._e(),o("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:12}},[e._v(" "+e._s(e.lintOptions.message[n])+" ")])],1)})),1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),o("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},i=[],a=(o("b64b"),o("e9c4"),o("347b")),s=o("8f94"),r={name:"Codemirror",components:{CodeMirrorEditor:a["a"]},watch:{toggleExpandAll:function(e){var t=this;this.$nextTick((function(){e?t.collapseAll():t.expandAll()}))}},activated:function(){var e=this;this.$nextTick((function(){requestAnimationFrame((function(){e.$el.scrollTop=e.scrollTop}))}))},beforeRouteLeave:function(e,t,o){this.scrollTop=this.$el.scrollTop,o()},data:function(){return{scrollTop:0,editorValue:"",execCommandTranslate:{find:"查找",replace:"替换",insertSoftTab:"缩进",findNext:"查找下一个",findPrev:"查找上一个",replaceAll:"替换全部",undo:"撤销上次修改",redo:"重做上次修改"},execCommandValue:"find",toggleExpandAll:!1,open:!1,title:"修改Codemirror校验代码标准",lintOptions:{options:{esnext:!0,strict:!1,asi:!0,boss:!0,undef:!0,eqnull:!0,evil:!0,expr:!0,funcscope:!0,sub:!0,supernew:!0,validthis:!0,proto:!0,maxerr:15,loopfunc:!0,laxcomma:!0,globals:{game:!0,get:!0,lib:!0,ui:!0,ai:!0,event:!0,card:!0,cards:!0,source:!0,player:!0,target:!0,targets:!0,skill:!0,trigger:!0,result:!0,_status:!0},bitwise:!0,camelcase:!1,curly:!1,eqeqeq:!1,es3:!1,forin:!1,freeze:!0,immed:!1,indent:2,latedef:!0,newcap:!1,noarg:!0,noempty:!1,nonbsp:!1,nonew:!1,plusplus:!1,quotemark:!1,unused:!1,trailing:!1,browser:!0,devel:!0},message:{esnext:"允许使用ES6标准",bitwise:"禁用位运算符(如^，&)",camelcase:"使用驼峰命名(camelCase)或全大写下划线命名(UPPER_CASE)",curly:"if、for、while等语句中使用{}来明确代码块",eqeqeq:"强制使用===和!==替代==和!=",es3:"强制使用ECMAScript 3规范",forin:"在for in循环中使用Object.prototype.hasOwnProperty()来过滤原型链中的属性",freeze:"禁止复写原生对象(如Array, Date)的原型",immed:"匿名函数调用必须",indent:"代码缩进宽度（空格数）",latedef:"变量定义前禁止使用",newcap:"构造函数名首字母必须大写",noarg:"禁止使用arguments.caller和arguments.callee",noempty:"禁止出现空的代码块",nonbsp:"禁止”non-breaking whitespace”这是Mac键盘在某种情况下可以键入的字符，据说会破坏非UTF8编码的页面。",nonew:"禁止使用构造器",plusplus:"禁止使用++和–",quotemark:"统一使用单引号或双引号",undef:"禁止使用不在全局变量列表中的未定义的变量",unused:"禁止定义变量却不使用",strict:"强制使用ES5的严格模式",trailing:"禁止行尾空格",asi:"允许省略分号",boss:"允许在if，for，while语句中使用赋值",eqnull:"允许==null",evil:"允许使用eval",expr:"允许应该出现赋值或函数调用的地方使用表达式",funcscope:"允许在控制体内定义变量而在外部使用",sub:"允许person['name'] JSHint推荐使用person.name代替person['name']",supernew:"允许new function() {…}和new Object",validthis:"允许严格模式下在非构造函数中使用this",proto:"允许 proto 不是所有的浏览器都支持__proto__.",maxerr:"扫描代码中累计到的最大错误数量",loopfunc:"允许循环中定义函数",laxcomma:"允许逗号开头的编码样式",browser:"暴露浏览器属性的全局变量，列如 window,document;注意:这个选项不暴露变量 alert或 console。",devel:"这个选项定义了全局变量,通常用于日志调试: console, alert等等。"}},showSearch:!0,cmTheme:"default",cmThemeOptions:["default","eclipse","3024-day","3024-night","abcdef","ambiance","ayu-dark","ayu-mirage","base16-dark","base16-light","bespin","blackboard","cobalt","colorforth","darcula","dracula","duotone-dark","duotone-light","elegant","erlang-dark","gruvbox-dark","hopscotch","icecoder","idea","isotope","lesser-dark","liquibyte","lucario","material","material-darker","material-palenight","material-ocean","mbo","mdn-like","midnight","monokai","moxer","neat","neo","night","nord","oceanic-next","panda-syntax","paraiso-dark","paraiso-light","pastel-on-dark","railscasts","rubyblue","seti","shadowfox","solarized dark","solarized light","the-matrix","tomorrow-night-bright","tomorrow-night-eighties","ttcn","twilight","vibrant-ink","xq-dark","xq-light","yeti","yonce","zenburn"],cmEditorMode:"default",cmEditorModeOptions:["default","json","sql","javascript","css","xml","html","yaml","markdown"],cmMode:"javascript",jsonIndentation:2,autoFormatJson:!1}},created:function(){var e,t=null===(e=this.$route.params)||void 0===e?void 0:e.newValue;t&&(this.editorValue=t),this.initOptions()},methods:{fullScreen:function(){var e=this;this.$nextTick((function(){var t,o,n,i;null===(t=e.$refs.cmEditor)||void 0===t||null===(o=t.$refs)||void 0===o||null===(n=o.myCm)||void 0===n||null===(i=n.codemirror)||void 0===i||i.setOption("fullScreen",!0)}))},cancel:function(){this.open=!1},submitForm:function(){var e=this;this.$nextTick((function(){var t,o,n,i;null===(t=e.$refs.cmEditor)||void 0===t||null===(o=t.$refs)||void 0===o||null===(n=o.myCm)||void 0===n||null===(i=n.codemirror)||void 0===i||i.setOption("lint",e.lintOptions)})),this.open=!1,this.setItemLintOption()},initOptions:function(){var e=this.getItemLintOption();Object.keys(e).length===Object.keys(this.lintOptions.options).length&&(this.lintOptions.options=e)},setItemLintOption:function(){localStorage.setItem("lintOption",JSON.stringify(this.lintOptions.options))},getItemLintOption:function(){return JSON.parse(localStorage.getItem("lintOption")||"{}")},collapseAll:function(){var e=this.$refs.cmEditor.$refs.myCm.codemirror;e.operation((function(){for(var t=e.firstLine(),o=e.lastLine();t<=o;t++)e.foldCode(s["CodeMirror"].Pos(t,0),null,"fold")}))},expandAll:function(){var e=this.$refs.cmEditor.$refs.myCm.codemirror;e.operation((function(){for(var t=e.firstLine(),o=e.lastLine();t<=o;t++)e.foldCode(s["CodeMirror"].Pos(t,0),null,"unfold")}))},onEditorModeChange:function(e){switch(e){case"json":this.cmMode="application/json";break;case"sql":this.cmMode="sql";break;case"javascript":this.cmMode="javascript";break;case"xml":this.cmMode="xml";break;case"css":this.cmMode="css";break;case"html":this.cmMode="htmlmixed";break;case"yaml":this.cmMode="yaml";break;default:this.cmMode="application/json"}},setStyle:function(){var e="position: absolute; top: 80px; left: 50px; right: 200px; bottom: 20px; padding: 2px; height: auto;";this.$refs.cmEditor.setStyle(e)},getValue:function(){var e=this.$refs.cmEditor.getValue();return console.log(e),e},copyValue:function(){var e=this.getValue();this.copy(e)},setValue:function(e){this.$refs.cmEditor.setValue(e)},execCommand:function(e){this.$refs.cmEditor.execCommand(e)},handleCommand:function(e){this.execCommandValue=e,this.execCommand(e)},indentAuto:function(){this.$refs.cmEditor.$refs.myCm.codemirror.indentSelection("smart")}}},l=r,c=(o("86c6"),o("2877")),d=Object(c["a"])(l,n,i,!1,null,"ab2c695e",null);t["default"]=d.exports},8538:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Search",{attrs:{columns:e.columns,"get-pack-info":e.getSkillFindCharacterPack,"lib-code-str":"skill",weightOptions:e.weight,name:"Skill"}})},i=[],a=o("2909"),s=(o("0481"),o("4069"),o("d81d"),o("99af"),o("14d9"),o("caad"),o("2532"),o("b64b"),o("9d59")),r={name:"Skill",components:{Search:s["a"]},activated:function(){var e=this;this.$nextTick((function(){requestAnimationFrame((function(){e.$el.scrollTop=e.scrollTop}))}))},beforeRouteLeave:function(e,t,o){this.scrollTop=this.$el.scrollTop,o()},data:function(){return{scrollTop:0,columns:[{key:0,label:"技能ID",visible:!0},{key:1,label:"技能名称",visible:!0},{key:2,label:"技能拼音",visible:!1},{key:3,label:"所在武将/包",visible:!0},{key:4,label:"描述",visible:!0},{key:5,label:"操作",visible:!0}],weight:[{key:"key",label:"技能ID",value:8},{key:"name",label:"技能名称",value:0},{key:"pinyin",label:"技能拼音",value:0},{key:"info",label:"技能介绍",value:8}]}},methods:{getSkillFindCharacterPack:function(e){var t="无",o="无";for(var n in lib.character)if(lib.character.hasOwnProperty(n)){var i=lib.character[n],s=[].concat(i[3]).map((function(e,t,o){var n=[e],i=lib.skill[e];return i&&(i.group&&n.push.apply(n,Object(a["a"])([].concat(i.group))),i.hasOwnProperty("derivation")&&n.push.apply(n,Object(a["a"])([].concat(i.derivation)))),n})).flat(2);if(s.includes(e)){o=n;break}}if("无"===o)return"无\t/\t无";for(var r in lib.characterPack)if(lib.characterPack.hasOwnProperty(r)){var l=lib.characterPack[r];if(Object.keys(l).includes(o)){t=r;break}}return"".concat(get.translation(o),"\t/\t").concat(get.translation(t+"_character_config"))}}},l=r,c=o("2877"),d=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=d.exports},"86c6":function(e,t,o){"use strict";o("43ba")},9767:function(e,t,o){"use strict";var n=o("23e7"),i=o("857a"),a=o("af03");n({target:"String",proto:!0,forced:a("fontcolor")},{fontcolor:function(e){return i(this,"font","color",e)}})},a2bf6:function(e,t,o){"use strict";var n=o("e8b5"),i=o("07fa"),a=o("3511"),s=o("0366"),r=function(e,t,o,l,c,d,u,m){var p,f,b=c,h=0,v=!!u&&s(u,m);while(h<l)h in o&&(p=v?v(o[h],h,t):o[h],d>0&&n(p)?(f=i(p),b=r(e,t,p,f,b,d-1)-1):(a(b+1),e[b]=p),b++),h++;return b};e.exports=r}}]);