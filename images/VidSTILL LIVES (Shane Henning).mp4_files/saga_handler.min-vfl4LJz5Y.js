define(["require","exports","tslib"],(function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(e,a,t,r){var i=this;this.create=function(){var e=i.fn.bind(i.affectedBehavior),a=i.actionBehaviors.map((function(e){return e.actionType?e.behavior.path.concat(e.actionType).join("/"):e.type()}));return function(){return n.__generator(this,(function(t){switch(t.label){case 0:return[4,this.takeFn(a,(function(a){for(var t=a.payload,r=a.meta,i=a.error,o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e.apply(void 0,n.__spread([t,r,i],o))}))];case 1:return t.sent(),[2]}}))}.bind(i)},this.fn=e,this.actionBehaviors=t,this.takeFn=a,this.affectedBehavior=r};a.SagaHandler=t,a.addSagaHandler=function(e,a,n,r){r.sagaHandlers=r.sagaHandlers||[],r.sagaHandlers.push(new t(e,a,n,r))}}));
//# sourceMappingURL=saga_handler.min.js-vflGum_2_.map