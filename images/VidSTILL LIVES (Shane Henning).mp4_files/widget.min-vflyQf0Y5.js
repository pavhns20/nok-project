define(["require","exports","tslib","external/lodash","prop-types","react","react-redux","rondo/v1/index"],(function(e,t,r,o,n,i,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.widget=function(e,t,c){var u,p=c?c.context:void 0;return(u=(function(n){function u(r){var i=n.call(this,r)||this;return i.getChildContext=function(){return p?Object.keys(p).reduce((function(e,t){return e[t]=o.get(i.behaviorStore.getState(),p[t]),e}),{}):{}},i.createBehavior=a.markAround(i.id,"mounting")((function(){i.behaviorStore=new a.BehaviorStore({behavior:e,displayName:i._displayName,initialState:i.props?i.props.initialState:void 0,slice:i.props.slice,selector:i.props.selector,options:c,store:i.props.store||i.context&&i.context.store}),i.behaviorStore.create();var r=a.markAround(i.id,"stateToProps")((function(e){return i.behaviorStore.getStateWithSelectors(e)}));i.WidgetComp=s.connect(r,(function(e){return a.bindActionCreatorsRecursive(i.behaviorStore.actions,e)}),a.markAround(i.id,"props")((function(e,t,r){return o.merge({},e,t,r)})))(t)})),i.id=i._generateUniqueId(),a.markStart(i.id,"load"),i}return r.__extends(u,n),Object.defineProperty(u.prototype,"store",{get:function(){return this.behaviorStore.store},enumerable:!0,configurable:!0}),u.prototype._generateUniqueId=function(){return"WIDGET-"+(this._displayName?this._displayName+"-":"")+(this.props.slice?this.props.slice+"-":"")+Math.random().toString(36).substr(2,9)},Object.defineProperty(u.prototype,"_displayName",{get:function(){return this.constructor.displayName},enumerable:!0,configurable:!0}),u.prototype.UNSAFE_componentWillMount=function(){this.createBehavior()},u.prototype.componentDidMount=function(){a.markEnd(this.id,"load")},u.prototype.componentWillUnmount=function(){this.behaviorStore.behaviorWidget.unregister()},u.prototype.render=function(){var e=this.WidgetComp;return i.createElement(s.Provider,{store:this.behaviorStore.store},i.createElement(e,r.__assign({},this.props)))},u})(i.Component)).contextTypes={store:n.object},u.childContextTypes=p?Object.keys(p).reduce((function(e,t){return e[t]=n.any,e}),{}):{},u},t.widgetComponent=function(e,r){return function(o){t.widget(e,o,r)}}}));
//# sourceMappingURL=widget.min.js-vflHweFsW.map