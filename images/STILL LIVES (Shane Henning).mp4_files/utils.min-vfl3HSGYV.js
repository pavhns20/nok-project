define(["require","exports","tslib"],(function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validStringType=function(e){return e?"valid":"error"},r.asyncIsValid=function(e,n){return void 0===n&&(n=function(){return{message:void 0}}),function(i){return t.__awaiter(void 0,void 0,void 0,(function(){var s,o,a,u,d,c,v;return t.__generator(this,(function(t){switch(t.label){case 0:s=!0,o=void 0,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e.validate(i)];case 2:return t.sent(),[3,4];case 3:return a=t.sent(),s=!1,o=a,[3,4];case 4:return u=n(s,i,o),d=u.type,c=void 0===d?r.validStringType(s):d,v=u.message,[2,{valid:s,type:c,message:v}]}}))}))}},r.errorMessageCreator=function(e,r){return void 0===r&&(r="error"),function(t,n,i){return t?{type:"valid",message:void 0}:{type:r,message:e(n,i)}}},r.isPromise=function(e){return void 0!==e.then}}));
//# sourceMappingURL=utils.min.js-vflCX8Huo.map