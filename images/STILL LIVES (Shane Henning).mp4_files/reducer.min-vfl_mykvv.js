define(["require","exports","tslib","redux-actions","external/lodash","modules/clean/teams/admin/modals/modal_ajax/types"],(function(e,a,n,i,r,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),r=n.__importStar(r);a.createReducer=function(e){var a=(function(e){return Object.keys(e).reduce((function(a,i){if(a[i+"/"+s.FIELD_CHANGE]=function(e,a){var r;return n.__assign(n.__assign({},e),((r={})[i]=n.__assign(n.__assign({},e[i]),{fieldValue:a.payload.fieldValue}),r))},e[i].hasOwnProperty("fieldType")&&"array"===e[i].fieldType){a[i+"/"+s.FIELD_ADD]=function(e,a){var s,l=e[i].fieldValue,t=a.payload.fieldValue;return n.__assign(n.__assign({},e),((s={})[i]=n.__assign(n.__assign({},e[i]),{fieldValue:l.concat(r.isArray(t)?t:[t])}),s))},a[i+"/"+s.FIELD_REMOVE]=function(e,a){var s,l=e[i].fieldValue,t=a.payload.fieldValue,u=r.isArray(t)?t:[t],_=r.difference(l,u);return n.__assign(n.__assign({},e),((s={})[i]=n.__assign(n.__assign({},e[i]),{fieldValue:_}),s))}}return a}),{})})(e),l=(function(e){return Object.keys(e).reduce((function(a,n){return a[n]={fieldValue:e[n].fieldValue,valid:!0,dirty:!1},a}),{})})(e);return i.handleActions(a,l)}}));
//# sourceMappingURL=reducer.min.js-vflM5W4l9.map