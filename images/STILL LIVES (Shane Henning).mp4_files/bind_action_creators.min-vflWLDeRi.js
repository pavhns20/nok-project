define(["require","exports","tslib","rondo/v1/actions"],(function(e,r,t,n){"use strict";function o(e,r){return function(){return r(e.apply(this,arguments))}}Object.defineProperty(r,"__esModule",{value:!0}),r.bindActionCreator=o,r.bindActionCreatorsRecursive=function e(r,i){var c,u,a=Object.keys(r),f={};try{for(var l=t.__values(a),s=l.next();!s.done;s=l.next()){var y=s.value,d=r[y];"function"==typeof d?f[y]=n.isActionCreator(d)?d:o(d,i):"object"==typeof d&&(f[y]=e(d,i))}}catch(e){c={error:e}}finally{try{s&&!s.done&&(u=l.return)&&u.call(l)}finally{if(c)throw c.error}}return f}}));
//# sourceMappingURL=bind_action_creators.min.js-vflxVU89H.map