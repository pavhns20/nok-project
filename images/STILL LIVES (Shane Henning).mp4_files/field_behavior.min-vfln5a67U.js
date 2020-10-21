define(["require","exports","tslib","external/lodash","rondo/v1/index","rondo-forms/v1/field/field_validation_behavior","rondo-forms/v1/field/field_lifecycle_behavior"],(function(e,i,a,t,l,n,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.FieldBehavior=function(e){var i=e.initialValue,r=e.fieldValue,c=e.fieldChangeAction,d=e.parseValue,u=void 0===d?function(e){return e}:d,s=e.equalValue,h=void 0===s?t.isEqual:s,f=e.clearValue,v=e.allowNonValid,V=e.clearActions,A=e.commitActions,F=e.resetActions,g=e.validator,p=function(){var e=this;this.actionFieldChange=l.createAction(),this.actionFieldChanged=l.createAction(),this.actionSetValue=l.createOrUseIn(this,c).handle((function(e,i){var a=i.fieldValue;return{fieldValue:u(a)}})),this.actionFieldSet=l.createOrUseIn(this,c).handle((function(e,i){var a=u(i);return{fieldValue:a,initialValue:a}})),this.fieldValue=l.createSelector((function(e){return e.fieldValue})),this.fieldChanged=l.whenFieldChanged("fieldValue",(function(){e.actionFieldChanged()})),l.extendBehavior(this,o.FieldLifecycleBehavior({initialValue:i,fieldChangeAction:this.actionFieldChange,fieldValue:this.fieldValue,clearValue:f,clearActions:V,commitActions:A,resetActions:F,equalValue:h})),l.extendBehavior(this,n.FieldValidationBehavior({fieldValue:this.fieldValue,validAction:this.actionSetValue,validateAction:this.actionFieldChange,validator:g,allowNonValid:v}))},m=(function(e){function t(){var a=null!==e&&e.apply(this,arguments)||this;return a.initialState=function(){return{fieldValue:i}},a}return a.__extends(t,e),t.displayName="FieldBehavior",t})(p),C=(function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(i,e),i.displayName="FieldBehavior",i})(p);return r?C:m},i.FieldArrayBehavior=function(e){var a=e.initialValue,n=e.fieldValue,o=e.fieldChangeAction,r=e.parseValue,c=void 0===r?function(e){return e}:r,d=e.equalValue,u=void 0===d?t.isEqual:d,s=e.clearValue,h=e.allowNonValid,f=e.clearActions,v=e.commitActions,V=e.resetActions,A=e.validator,F=e.idExtractor,g=void 0===F?t.identity:F;return(function(){function e(){var e=this;this.actionFieldRemove=l.createAction().watch((function(i,a){var l=c(a),n=t.differenceWith(e.getFieldValue(i),t.isArray(l)?l:[l],t.isEqual);e.actionFieldChange(n)})),this.actionFieldAdd=l.createAction().watch((function(i,a){var t=e.getFieldValue(i).concat(c(a));e.actionFieldChange(t)})),this.actionFieldReplace=l.createAction().watch((function(i,a){var l=i.fieldValue,n=a.v,o=a.id,r=c([n]),d=t.findIndex(l,(function(e){return g(e)===o}));if(!(d<0)){var u=l.slice();u.splice(d,1,r[0]),e.actionFieldChange(u)}})),l.extendBehavior(this,i.FieldBehavior({initialValue:a,fieldValue:n,fieldChangeAction:o,parseValue:c,equalValue:u,clearValue:s,allowNonValid:h,clearActions:f,commitActions:v,resetActions:V,validator:A}))}return e.prototype.getFieldValue=function(e){return n?n():e.fieldValue},e.displayName="FieldBehavior",e})()}}));
//# sourceMappingURL=field_behavior.min.js-vfl6F7n8r.map