
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/test/test","pages/subNVue/popup","pages/subNVue/Npopup","components/popup/popup","pages/found/found","pages/message/message","pages/mine/mine","pages/login/login","pages/setting/setting","pages/search/search","pages/agreement/agreement","pages/index/save"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"DDDD","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"list":[{"pagePath":"pages/index/index","iconPath":"static/icon/tab_icon_index.png","selectedIconPath":"static/icon/tab_icon_indexed.png"},{"pagePath":"pages/found/found","iconPath":"static/icon/tab_icon_found.png","selectedIconPath":"static/icon/tab_icon_founded.png"},{"pagePath":"pages/message/message","iconPath":"static/icon/tab_icon_msg.png","selectedIconPath":"static/icon/tab_icon_msged.png"},{"pagePath":"pages/mine/mine","iconPath":"static/icon/tab_icon_mine.png","selectedIconPath":"static/icon/tab_icon_mined.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"dddd","compilerVersion":"3.0.7","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/test/test","meta":{},"window":{}},{"path":"/pages/subNVue/popup","meta":{"isNVue":true},"window":{}},{"path":"/pages/subNVue/Npopup","meta":{},"window":{}},{"path":"/components/popup/popup","meta":{},"window":{}},{"path":"/pages/found/found","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":true}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false,"titleNView":true,"background":"#efeff4","subNVues":[{"id":"popup","path":"pages/subNVue/popup","type":"popup","style":{"type":"popup","mask":"rgba(0,0,0,0.5)","position":"absolute","background":"transparent"}}]}},{"path":"/pages/setting/setting","meta":{},"window":{"navigationBarTitleText":"设置","titleNView":true}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":false}},{"path":"/pages/agreement/agreement","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/save","meta":{},"window":{"navigationBarTitleText":"书签","titleNView":true,"background":"#efeff4","subNVues":[{"id":"popup","path":"pages/subNVue/popup","type":"popup","style":{"type":"popup","mask":"rgba(0,0,0,0.5)","position":"absolute","background":"transparent"}}]}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
