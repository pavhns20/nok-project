define("modules/clean/avatar/overflow_count_pill",["require","exports","tslib","react","react-dom-factories","prop-types","modules/clean/avatar/size","modules/clean/avatar/style","modules/clean/css","modules/core/i18n"],(function(e,t,n,a,r,s,i,o,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r),s=n.__importStar(s),l=n.__importStar(l);var c=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.componentDidMount=function(){return l.require_css("/static/css/scooter/scooter-scoped-vfl5wRSGl.css")},t.prototype.render=function(){var e=" +"+this.props.count+" ",t=u.intl.formatMessage({id:"kOMHR0",defaultMessage:"{count, plural, one{{count} more member} other{{count} more members}}"},{count:this.props.count});return null!=this.props.onClick?r.default.button({className:o.getClassName(this.props.dimension,["overflow-pill c-avatar--meta u-unbutton"]),onClick:this.props.onClick},r.default.span({"aria-hidden":!0},e),r.default.span({className:"ax-visually-hidden"},t)):r.default.div({className:o.getClassName(this.props.dimension,["overflow-pill c-avatar--meta"])},r.default.span({"aria-hidden":!0},e),r.default.span({className:"ax-visually-hidden"},t))},t.displayName="OverflowCountPill",t.propTypes={dimension:s.oneOf(i.VALID_AVATAR_DIMENSIONS).isRequired,count:s.number.isRequired,onClick:s.func},t})(a.default.Component);t.default=c})),define("modules/clean/sharing/ui_notifications_util",["require","exports","tslib","react","modules/clean/em_string","modules/clean/react/snackbar","spectrum-sharing/utils/sharing_constants","modules/core/i18n"],(function(e,t,n,a,r,s,i,o){"use strict";function l(e){var t=function(e){e.preventDefault(),e.currentTarget.select()};return a.default.createElement("span",{className:"snackbar-title__link-url"},a.default.createElement("input",{readOnly:!0,autoFocus:!0,type:"text","aria-label":o.intl.formatMessage({id:"ExhGkl",defaultMessage:"Shared link URL"}),value:e,onClick:t,onFocus:t}))}Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),t.sharingNotificationError=function(e){return s.Snackbar.fail(e,"sharing-notification")},t.sharingNotificationInfo=function(e){return s.Snackbar.generic(e,"sharing-notification")},t.sharingNotificationInProgress=function(e,t){return s.Snackbar.sync(e,t,"sharing-notification")},t.sharingNotificationSuccess=function(e){return s.Snackbar.complete(e,"sharing-notification")},t.showInBandShareSuccessSnackbar=function(e){var t;s.Snackbar.complete((t=e,o.intl.formatMessage({id:"Fbyffs",defaultMessage:"Shared <st>{folder_name}</st>."},{st:function(e){return a.default.createElement("strong",null,e)},folder_name:r.Emstring.em_snippet(t,i.SNIPPET_SIZES.FILENAME)})),"sharing-notification")},t.showCopyLinkSuccessSnackbar=function(e,t){var n=(function(e,t){var n=l(e);if("editor"===t)return o.intl.formatMessage({id:"YJc3aM",defaultMessage:"Link copied. Allows editing.{br}{copiedUrlDisplay}"},{br:a.default.createElement("br",null),copiedUrlDisplay:n});return o.intl.formatMessage({id:"EK/q5b",defaultMessage:"Link copied. Allows viewing.{br}{copiedUrlDisplay}"},{br:a.default.createElement("br",null),copiedUrlDisplay:n})})(e,t);return s.Snackbar.complete(n,"sharing-notification")},t.showCopyLinkErrorSnackbar=function(e,t){var n=(function(e,t){var n=l(e);return o.intl.formatMessage({id:"/a2n+f",defaultMessage:"Couldn't copy the link, but we think it was a fluke. Try copying again.{br}{copiedUrlDisplay}"},{br:a.default.createElement("br",null),copiedUrlDisplay:n})})(e);return s.Snackbar.failSticky(n,"sharing-notification")},t.showCopyLinkNoPermissionSnackbar=function(){var e=o.intl.formatMessage({id:"Xxcol+",defaultMessage:"Couldn't copy the link. You don't have permission to create a link to this content."});return s.Snackbar.failSticky(e,"sharing-notification")}})),define("modules/clean/sharing/views/hover_close_button",["require","exports","tslib","classnames","react","prop-types","modules/clean/react/sprite","modules/core/i18n"],(function(e,t,n,a,r,s,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r),s=n.__importStar(s);var l=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hover:!1},t}return n.__extends(t,e),t.prototype.render=function(){var e=this,t=o.intl.formatMessage({id:"lNU//O",defaultMessage:"Close Modal"});return r.default.createElement("button",n.__assign({},this.props,{"aria-label":t,className:a.default("c-borderless-button",this.props.className),onMouseOut:function(){return e.setState({hover:!1})},onMouseOver:function(){return e.setState({hover:!0})}}),r.default.createElement(i.Sprite,{group:"web",name:this.state.hover?"xclose":"xclose_light_gray",alt:t}))},t.displayName="HoverCloseButton",t.propTypes={className:s.string},t})(r.default.Component);t.default=l})),define("spectrum-sharing/components/sharing_modal_banner",["require","exports","tslib","spectrum-sharing/components/sharing_modal_banner/sharing_modal_banner"],(function(e,t,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(a,t)})),define("spectrum-sharing/components/sharing_modal_banner/sharing_modal_banner",["require","exports","tslib","classnames","react"],(function(e,t,n,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importStar(r);var s=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.typeClassName=function(){return"scl-sharing-modal-banner--"+this.props.type},t.prototype.render=function(){var e,t=this.props,n=t.borderHidden,s=t.className,i=t.message,o=a.default("scl-sharing-modal-banner",this.typeClassName(),s,((e={})["scl-sharing-modal-banner--bottom-border"]=!n,e));return r.createElement("div",{className:o},i)},t})(r.PureComponent);t.SharingModalBanner=s,s.defaultProps={type:"default"}}));
//# sourceMappingURL=pkg-sharing-sync-and-share-page.min.js-vflsKGnKo.map