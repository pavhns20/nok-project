define(["require","exports","tslib","react","classnames","prop-types"],(function(e,t,r,i,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importStar(i),n=r.__importDefault(n),s=r.__importStar(s);var c=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.ref=i.createRef(),t}return r.__extends(t,e),Object.defineProperty(t.prototype,"intl",{get:function(){return this.context.localization.intl},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"className",{get:function(){return n.default("sc-sticker-nav-item",{"sc-sticker-nav-item-is-selected":this.props.isSelected})},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){this.props.isSelected&&this.ref.current&&this.ref.current.focus()},t.prototype.render=function(){var e=this.props,t=e.isSelected,r=e.stickerPack,n=e.onClick;return i.createElement("button",{ref:this.ref,className:this.className,"aria-label":this.intl.formatMessage({id:"u842ND",defaultMessage:"Select {description}"},{description:r.description}),onClick:n,role:"tab","aria-selected":t},i.createElement("div",{className:"sc-sticker-nav-item-image-container"},i.createElement("img",{src:r.url,alt:r.description})))},t})(i.Component);t.StickerTabComponent=c,c.contextTypes={localization:s.object}}));
//# sourceMappingURL=sticker_tab.min.js-vflBXzCTR.map