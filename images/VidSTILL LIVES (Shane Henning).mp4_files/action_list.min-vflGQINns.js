define(["require","exports","tslib","external/lodash","rondo/v1/actions/types","rondo/v1/invariant","rondo/v1/behavior/saga_handler","redux-saga/effects"],(function(t,n,r,e,a,i,o,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e=r.__importStar(e),n.createActionList=function(){for(var t=[],c=0;c<arguments.length;c++)t[c]=arguments[c];var s=e.flatten(t.filter((function(t){return!!t}))),f=a.isActionCreator(s[s.length-1])?void 0:s.pop();i.invariant(s.length>0,"Action list must have at least one action creator"),i.invariant(0===s.filter((function(t){return!a.isActionCreator(t)})).length,"Every parameter to action list but the last one has to be an action creator or list of action creators. Optionally set last parameter only to a behavior type");var d=function(t){return s[0](t)};d.dispatch=s[0].dispatch,d.action=s[0].action,d.type=s[0].type,d.init=s[0].hasOwnProperty("init")?s[0].init:function(){},d.__type__=a.ACTION_FIELD_TYPE;var l=function(t){return s?(s.forEach((function(n){return t(n)})),d):d};return d.rawWatch=function(t,n){return l((function(r){return r.rawWatch(t,n)}))},d.watch=function(t,n){return l((function(r){return r.watch(t,n)}))},d.rawHandle=function(t,n){return l((function(r){return r.rawHandle(t,n)}))},d.handle=function(t,n){return l((function(r){return r.handle(t,n)}))},d.rawHandleError=function(t,n){return l((function(r){return r.rawHandleError(t,n)}))},d.handleError=function(t,n){return l((function(r){return r.handleError(t,n)}))},d.takeLatest=function(t,n){return i.invariant(!!n||!!f,"takeLatest requires behavior to attach to (are you missing a useIn?)"),o.addSagaHandler(t,u.takeLatest,s,n||f),d},d.takeEvery=function(t,n){return i.invariant(!!n||!!f,"takeEvery requires behavior to attach to (are you missing a useIn?)"),o.addSagaHandler(t,u.takeEvery,s,n||f),d},d.takeLeading=function(t,n){return i.invariant(!!n||!!f,"takeLeading requires behavior to attach to (are you missing a useIn?)"),o.addSagaHandler(t,u.takeLeading,s,n||f),d},d.useIn=function(t){return n.createActionList.apply(void 0,r.__spread(s.map((function(n){return n.useIn(t)})),[t]))},d}}));
//# sourceMappingURL=action_list.min.js-vflndpR_p.map