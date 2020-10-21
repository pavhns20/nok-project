define(["require","exports","tslib","react","comments2/components/annotation_utils","comments2/components/comment/annotation_toggle","comments2/components/comment/time_coded_comment","comments2/components/comment_editor/comment_editor"],(function(t,e,n,o,i,r,m,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(function(t){function e(){var e=t.apply(this,arguments)||this;return e.onPost=function(t){var n=e.props,o=n.onPost,i=n.pendingAnnotation;o&&o(t,i)},e}return n.__extends(e,t),Object.defineProperty(e.prototype,"timeCode",{get:function(){return m.calculateTimeCode(this.props.pendingAnnotation.time,i.isVideoAnnotation(this.props.pendingAnnotation)?this.props.pendingAnnotation.timeSec:void 0,this.props.frameRate,this.props.framePreciseCommentsEnabled)},enumerable:!0,configurable:!0}),e.prototype.render=function(){var t=this.props,e=t.playerIntegrationEnabled,i=t.tooltipComponent,m=n.__rest(t,["playerIntegrationEnabled","tooltipComponent"]),a=o.createElement(r.AnnotationToggle,{disabled:!e,label:this.timeCode});return i&&(a=o.createElement(i,null,a)),o.createElement(s.CommentEditor,Object.assign({},m,{annotation:a,onPost:this.onPost}))},e})((o=n.__importStar(o)).PureComponent);e.TimeCodedCommentEditor=a}));
//# sourceMappingURL=time_coded_comment_editor.min.js-vflKjoK93.map