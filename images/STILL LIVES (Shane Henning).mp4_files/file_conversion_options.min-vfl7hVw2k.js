define(["require","exports","tslib","dig-components/menu","modules/clean/react/css","modules/clean/react/file_viewer/open_button/types","modules/clean/react/sprite","react"],(function(e,t,n,i,r,o,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.isFileConversionAction=function(e){return[o.OpenButtonAction.DECOMPRESS_FILE].includes(e.type)},t.prototype.render=function(){var e=this.props.openOptions.filter(this.isFileConversionAction);if(!e.length)return null;var t=e.map((function(e){return l.default.createElement(i.Menu.ActionItem,{key:e.text,value:e,withLeftAccessory:e.spriteName?l.default.createElement(s.Sprite,{group:"web",name:e.spriteName,alt:""}):l.default.createElement("img",{alt:"",src:e.iconUrl,width:24,height:24})},l.default.createElement("span",null,e.text))}));return l.default.createElement(i.Menu.Segment,{key:"file-conversions"},t)},t})((l=n.__importDefault(l)).default.Component);t.FileConversionOptions=r.requireCssWithComponent(u,["/static/css/app_actions/index-vflWo59zK.css"])}));
//# sourceMappingURL=file_conversion_options.min.js-vflzffgud.map