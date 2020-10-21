define("modules/clean/flux/flux_store",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(function(){function e(e){this._listeners=[],this._dispatcher=e,this._dispatchToken=this._dispatcher.register(this.__invokeOnDispatch.bind(this)),this.__hasChanged=!1}return e.prototype.teardown=function(){this._dispatcher.unregister(this._dispatchToken)},e.prototype.getDispatcher=function(){return this._dispatcher},e.prototype.getDispatchToken=function(){return this._dispatchToken},e.prototype.addListener=function(e){var t=this;return this._listeners.push(e),function(){return t._listeners=Array.from(t._listeners).filter((function(t){return t!==e}))}},e.prototype.hasChanged=function(){return this.__hasChanged},e.prototype.__emitChange=function(){this.__hasChanged=!0},e.prototype.__invokeOnDispatch=function(e){if(this.__hasChanged=!1,this.__onDispatch(e),this.__hasChanged)return Array.from(this._listeners).map((function(e){return e()}))},e})();t.FluxStore=n})),define("modules/clean/photos/thumb_loading/generic_thumb_store",["require","exports","modules/clean/photos/thumb_loading/http2_thumb_loader","modules/core/exception"],(function(e,t,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(function(){function e(e,t){this.loaderBatches=!1,this.thumbUrlToData={},this.callbackByRequestId={},this.loaderBatches=!!t,this.thumbLoader=e||new n.Http2ThumbLoader}return e.prototype.is_batching=function(){return this.loaderBatches},e.prototype.bind_url=function(e,t){var n=this;if(a.assert(!!t.onSuccess,"missing onSuccess handler"),this.thumbUrlToData[e])return t.onRequest&&t.onRequest(!0),t.onSuccess(!0),null;var o=this.thumbLoader.get_request_id();this.callbackByRequestId[o]=t;return this.thumbLoader.load_image(e,o,(function(){var e=n.callbackByRequestId[o];e&&e.onRequest&&e.onRequest(!1)}),(function(t){n.thumbUrlToData[e]=t;var a=n.callbackByRequestId[o];a&&a.onSuccess(!1)}),(function(){var e=n.callbackByRequestId[o];e&&e.onError&&e.onError()}),(function(){return n.callbackByRequestId.hasOwnProperty(o)})),o},e.prototype.unbind_url=function(e){e&&(delete this.callbackByRequestId[e],this.thumbLoader.cancel_thumb(e))},e.prototype.get_thumb=function(e){return this.thumbUrlToData[e]?this.thumbUrlToData[e]:null},e})();t.GenericThumbStore=o})),define("modules/clean/photos/thumb_loading/http2_thumb_loader",["require","exports","modules/clean/photos/thumb_loading/utils"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(function(){function e(){this.http2RequestId=0}return e.prototype.get_request_id=function(){return this.http2RequestId+=1,this.http2RequestId.toString()},e.prototype.load_image=function(e,t,a,o,r,i){a(),n.load_individual_image(e,1,o,r,i)},e.prototype.cancel_thumb=function(e){},e})();t.Http2ThumbLoader=a})),define("modules/clean/photos/thumb_loading/utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.load_individual_image=function(e,t,n,a,o){var r=new Image;r.onload=function(){return n(e)},r.onerror=function(){t>0&&o()?(t-=1,r.src=e):a()},r.src=e}})),define("modules/clean/react/file_uploader/file_uploader",["require","exports","tslib","react","modules/core/exception"],(function(e,t,n,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a);var r=null,i=(function(t){function i(e){var n=t.call(this,e)||this;return n.handleAllFileUploadsComplete=function(e){e.find((function(e){return!!n.state.uploadErrorTypes&&e.errorType===n.state.uploadErrorTypes.OVER_QUOTA_ERROR}))&&!n.isPaidTeamViewer()&&i.showModal("out-of-quota"),n.props.onAllFileUploadsComplete&&n.props.onAllFileUploadsComplete(e)},n.path=n.props.initialPath?n.props.initialPath:"/",n.hasPermissionToUploadToFolder=!!n.props.initialPermission,n.state={fileUploader:void 0,uploaderStore:void 0,uploaderActions:void 0,oqModalTypes:void 0,viewer:void 0,uploadErrorTypes:void 0},n.props.loadOnRender&&i.requireFileUploader({}),r?o.reportStack("Only one FileUploader component may be rendered to the page at any time.You have tried to instantiate multiple uploaders.",{severity:o.SEVERITY.CRITICAL}):r=n,e.shouldInitialize&&i.initialized(),n}return n.__extends(i,t),i.showModal=function(e){r&&(r.refs.fileUploader?e&&"regular"!==e?"out-of-quota"===e&&r.state.oqModalTypes?r.refs.fileUploader.showOQModal({context:r.state.oqModalTypes.WENT_OQ_DURING_UPLOAD}):"team-onboarding"===e&&r.refs.fileUploader.showModalWithTeamOnboarding():r.refs.fileUploader.showModal():(e=e||"regular",i.requireFileUploader({modalType:e})))},i.requireFileUploader=function(t){var a=t.modalType,o=t.handleUploadButtonClick,s=t.folderUpload,l=function(e){var t=e[0].FileUploader,n=e[1].uploaderStore,l=e[2].UploaderActions,u=e[3].UploaderOverQuotaModalContexts,d=e[4].Viewer,c=e[5].UploadErrorType;r&&(r.setAsyncRequiredUploaderModules(t,l,n,u,d,c),i.onInitialized.then((function(){a&&i.showModal(a),o&&i.handleUploadButtonClick(!!s)})))};l.perfName="file_uploader",Promise.all([new Promise((function(t,n){e(["modules/clean/react/file_uploader/uploader_new"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/clean/react/file_uploader/store"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/clean/react/file_uploader/actions"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/clean/react/file_uploader/oq_drag_drop_modal_types"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/clean/viewer"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/clean/react/file_uploader/constants"],t,n)})).then(n.__importStar)]).then(l)},i.prototype.componentDidUpdate=function(e){!e.shouldInitialize&&this.props.shouldInitialize&&i.initialized()},i.prototype.componentWillUnmount=function(){r=null},i.loadCoreComponent=function(){r&&r.state.fileUploader||i.requireFileUploader({})},i.isCoreComponentDefined=function(){return!!r&&!!r.state.fileUploader},i.setPathAndPermissions=function(e){r&&r.state.uploaderActions&&r.state.uploaderActions.setPath(e)},i.setPath=function(e){r&&(r.state.uploaderActions?r.state.uploaderActions.setPath({path:e}):(e||(e="/"),r.path=e))},i.setUser=function(e){r&&(r.state.uploaderActions?r.state.uploaderActions.setUser({user:e}):r.user=e||void 0)},i.prototype.setAsyncRequiredUploaderModules=function(e,t,n,a,o,r){this.setState({fileUploader:e,uploaderStore:n,uploaderActions:t,oqModalTypes:a,viewer:o,uploadErrorTypes:r}),this.props.needToSetStoreValues&&(void 0!==this.user&&t.setUser({user:this.user}),t.setPath({path:this.path,hasPermissionToUploadToFolder:this.hasPermissionToUploadToFolder}))},i.handleUploadButtonClick=function(e,t){r&&(r.refs.fileUploader?r.refs.fileUploader.handleUploadButtonClick(e,t):i.requireFileUploader({handleUploadButtonClick:!0,folderUpload:e}))},i.isDraggingFilesHelper=function(e){if(!r)return!1;if(!r.state.uploaderStore)return!1;var t=r.state.uploaderStore;return!!t.numDraggingFiles()&&(e?t.isInternalTransfer():!t.isInternalTransfer())},i.isDraggingInternalFiles=function(){return i.isDraggingFilesHelper(!0)},i.isDraggingExternalFiles=function(){return i.isDraggingFilesHelper(!1)},i.isUploadModalOpen=function(){return!!r&&(!!r.state.uploaderStore&&r.state.uploaderStore.isUploadModalOpen())},i.prototype.isPaidTeamViewer=function(){return!(!this.user||!this.state.viewer||!this.user.is_team||this.state.viewer.get_viewer().team_is_limited)},i.prototype.render=function(){var e=this.props,t=e.autoTeamGroupId,n=e.isContentManager,o=e.getCMUriForFqPath,r=e.getBrowseContext,i=e.ajaxInterceptor,s=e.onFileUploadComplete,l=e.onModalDismissed,u=e.dragAndDropEnabled,d=e.shouldShowDestinationLink,c=e.uploaderPostTTIExperiments,p=e.chooseDestination,h=e.rootNSIDForCM,m=e.handleClickNewFolder,f=e.uploadConsumerInterface,_=e.useUploadKit,g=e.parallelFileUploads,y=e.shouldInitialize;if(!this.state.fileUploader||!y)return a.default.createElement("div",null);var b=this.state.fileUploader;return a.default.createElement(b,{ref:"fileUploader",key:1,autoTeamGroupId:t,isContentManager:n,getCMUriForFqPath:o,getBrowseContext:r,ajaxInterceptor:i,onFileUploadComplete:s,onAllFileUploadsComplete:this.handleAllFileUploadsComplete,onModalDismissed:l,dragAndDropEnabled:u,shouldShowDestinationLink:d,uploaderPostTTIExperiments:c,chooseDestination:p,rootNSIDForCM:h,handleClickNewFolder:m,uploadConsumerInterface:f,useUploadKit:_,parallelFileUploads:g})},i.onInitialized=new Promise((function(e){i.initialized=function(){e()}})),i.defaultProps={shouldInitialize:!0},i})(a.default.Component);t.FileUploaderController=i})),define("modules/clean/react/maestro/layout/search",["require","exports","tslib","classnames","react","spectrum/media_table_skeleton","modules/clean/react/async/loadable","modules/clean/react/maestro/layout/chrome","modules/core/i18n"],(function(e,t,n,a,o,r,i,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),o=n.__importDefault(o),t.AsyncMaestroSearchSidebar=i.Loadable({loader:function(){return n.__awaiter(void 0,void 0,void 0,(function(){return n.__generator(this,(function(t){switch(t.label){case 0:return[4,Promise.all([new Promise((function(t,n){e(["modules/clean/search/single_page/sidebar"],t,n)})).then(n.__importStar)])];case 1:return[2,t.sent()[0].SearchSidebar]}}))}))}}),t.AsyncMaestroSearchView=i.Loadable({loader:function(){return n.__awaiter(void 0,void 0,void 0,(function(){return n.__generator(this,(function(t){switch(t.label){case 0:return[4,Promise.all([new Promise((function(t,n){e(["modules/clean/search/single_page/view"],t,n)})).then(n.__importStar)])];case 1:return[2,t.sent()[0].SearchView]}}))}))},loading:function(e){var t=e.inputBox;return t.current&&t.current.value?o.default.createElement(r.MediaTableSkeleton,{numRows:15}):null},loadError:function(){return o.default.createElement("div",null,l.intl.formatMessage({id:"V2lejD",defaultMessage:"Something went wrong. Please reload the page."}))}});var u=(function(e){function r(n){var a=e.call(this,n)||this;return a.handleSearchExit=function(){a.setState({isSearching:!1})},a.handleSearchEnter=function(){a.setState({isSearching:!0})},a.renderSearchSidebar=function(e,n){return o.default.createElement(t.AsyncMaestroSearchSidebar,{key:"search",user:a.props.user,responsive:e,scrollableSidebarRef:n})},a.renderEmbeddedApp=function(e){return[a.inSearchMode?o.default.createElement(t.AsyncMaestroSearchView,{key:"search",user:a.props.user,responsive:e,inputBox:a.state.inputBox}):null,o.default.createElement("div",{style:{display:a.inSearchMode?"none":void 0},key:"app"},"function"==typeof a.props.embeddedAppRegion?a.props.embeddedAppRegion(e):a.props.embeddedAppRegion)]},a.state={isSearching:n.searchBarProps&&n.searchBarProps.isSearching||!1,inputBox:o.default.createRef()},a}return n.__extends(r,e),Object.defineProperty(r.prototype,"inSearchMode",{get:function(){return this.props.searchBarProps&&"full-page"===this.props.searchBarProps.searchVariant&&this.props.user&&this.state.isSearching},enumerable:!0,configurable:!0}),r.prototype.render=function(){var e=a.default({"maestro-chrome--search":!0,"maestro-chrome--search-active":this.inSearchMode,"exp-details-pane-variants":this.inSearchMode&&this.props.wideSecondarySidebar},this.props.chromeClass);return o.default.createElement(s.MaestroChrome,n.__assign({},this.props,{actionSidebarRegion:this.inSearchMode?this.renderSearchSidebar:this.props.actionSidebarRegion,searchBarProps:n.__assign(n.__assign({},this.props.searchBarProps||{}),{isSearching:this.state.isSearching,onSearchExit:this.handleSearchExit,onSearchEnter:this.handleSearchEnter,inputBoxRef:this.state.inputBox}),embeddedAppRegion:this.renderEmbeddedApp,titleClass:"page-header__title--search",chromeClass:e,scrollableSidebarRegion:this.inSearchMode?this.renderSearchSidebar:this.props.scrollableSidebarRegion,useScrollableSidebar:!0}))},r})(o.default.PureComponent);t.SearchChrome=u}));var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};define("modules/clean/sharing/wizard/async_wizard_modals",["require","exports"],(function(e,t){"use strict";function n(t){new Promise((function(t,n){e(["modules/clean/sharing/wizard/wizard_modals"],t,n)})).then(__importStar).then(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.asyncShareExistingFolder=function(e,t,a,o){n((function(n){n.shareExistingFolder(e,t,a,o)}))},t.asyncShowShareAFolderWizardModal=function(e,t){n((function(n){var a=n.showShareAFolderWizardModal(e);t&&t(a)}))}})),define("modules/clean/react/actions_menu/view",["require","exports","tslib","classnames","react","dig-components/badges","dig-components/buttons","dig-components/icons","dig-components/icons/src","dig-components/menu","dig-components/tooltips","dig-components/typography","modules/clean/react/badge","modules/clean/react/css","modules/clean/user_education/react/user_education_effect","modules/clean/user_education/user_education_client"],(function(e,t,n,a,o,r,i,s,l,u,d,c,p,h,m,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),o=n.__importStar(o);var _=function(e,t,n){return function(){f.UEClient.sendEvent(e,t),n&&n()}},g=function(e){var t=e.tooltip,n=e.placement;return o.default.createElement(d.Tooltip,{title:t,placement:n||"left"},o.default.createElement(c.Text,{color:"faint",className:"actions_menu__tooltip"},o.default.createElement(s.UIIcon,{src:l.InfoLine})))},y=function(e){var t,l;return o.default.createElement("nav",{className:"actions_menu"},e.primaryMenuItems&&e.primaryMenuItems.length?o.default.createElement("div",{className:"actions_menu__primary"},null===(t=e.primaryMenuItems)||void 0===t?void 0:t.map((function(e){return"function"==typeof e?e():o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Button,{key:e.key||e.displayName,variant:e.buttonVariant&&"secondary"===e.buttonVariant?"opacity":"primary",disabled:e.disabled,onClick:_("AppActionsView","PrimaryButtonTextClicked",e.handleClick),className:e.className},o.default.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:"PrimaryButtonText",useSpan:!0},e.displayName)),e.tooltip&&o.default.createElement(g,{tooltip:e.tooltip,placement:e.tooltipPlacement}))})),e.shouldCollapseActions&&o.default.createElement(E,n.__assign({},e,{primaryMenuItems:void 0,className:"actions_menu__overflow"}))):null,e.primarySubnode,!e.shouldCollapseActions&&!e.hideSidebarCtas&&o.default.createElement("ul",null,null===(l=e.secondaryMenuItems)||void 0===l?void 0:l.map((function(e){return"function"==typeof e?e():o.default.createElement("li",{key:e.key||e.displayName},o.default.createElement(i.Button,{variant:"transparent",disabled:e.disabled,hasNoUnderline:!0,"aria-label":e.ariaLabel,className:a.default("actions_menu__button",e.className),withIconLeft:e.icon&&o.default.createElement(s.UIIcon,{src:e.icon}),onClick:_("AppActionsView","SecondaryActionMenu-text-"+e.iconName+"-Clicked",e.handleClick)},o.default.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:"SecondaryActionMenu-text-"+e.iconName,useSpan:!0},e.displayName,e.badge&&o.default.createElement(r.AccessoryBadge,{className:"actions_menu__badge"},p.badgeVariantToText[e.badge.variant]))),e.tooltip?o.default.createElement(g,{tooltip:e.tooltip,placement:e.tooltipPlacement}):null)}))))},b=function(e){return o.default.createElement(u.Menu.ActionItem,{disabled:e.disabled,value:e,"aria-label":e.ariaLabel,"aria-pressed":e.ariaPressed,className:e.className,withLeftAccessory:e.icon&&o.default.createElement(s.UIIcon,{src:e.icon}),withRightAccessory:"badge"in e&&e.badge?o.default.createElement(r.AccessoryBadge,null,p.badgeVariantToText[e.badge.variant]):e.tooltip&&o.default.createElement(g,{tooltip:e.tooltip,placement:e.tooltipPlacement})},o.default.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:"SecondaryActionMenu-text-"+e.iconName,useSpan:!0},e.displayName))},v=function(e){_("AppActionsView","SecondaryActionMenu-text-"+e.iconName+"-Clicked",e.handleClick)()},S=function(e){var t=e.item;return"function"==typeof t?null:o.default.createElement(b,n.__assign({},t))},E=function(e){var t,a;return 0===(null===(t=e.primaryMenuItems)||void 0===t?void 0:t.length)&&0===(null===(a=e.secondaryMenuItems)||void 0===a?void 0:a.length)?null:o.default.createElement(u.Menu.Wrapper,{onSelection:v,className:e.className},(function(t){var a,r,d=t.getContentProps,c=t.getTriggerProps;return o.default.createElement(o.default.Fragment,null,o.default.createElement(m.UserEducationEffect,{containerName:"AppActionsPopover",name:"OverflowButton",useSpan:!0},o.default.createElement(i.IconButton,n.__assign({variant:"transparent"},c({onClick:e.onContextMenuClick}),{"aria-label":e.popoverTriggerLabel}),o.default.createElement(s.UIIcon,{src:l.MoreHorizontalLine}))),o.default.createElement(u.Menu.Content,n.__assign({},d(),{placement:"bottom-end"}),o.default.createElement(u.Menu.Segment,null,null===(a=e.primaryMenuItems)||void 0===a?void 0:a.map((function(e,t){return o.default.createElement(S,{item:e,key:t})})),null===(r=e.secondaryMenuItems)||void 0===r?void 0:r.map((function(e,t){return o.default.createElement(S,{item:e,key:t})})))))}))};t.ActionsMenu=h.requireCssWithComponent((function(e){var t=e.handleComponentTTI;return o.useEffect((function(){t&&t("AppActionsView")}),[t]),e.responsive&&e.responsive.isResponsive&&!e.responsive.isMatchedLarge?o.default.createElement(E,n.__assign({},e)):o.default.createElement(y,n.__assign({},e))}),["/static/css/dig-components/index.web-vflf6uHPG.css","/static/css/react/actions_menu-vfl3tT3lN.css"])}));
//# sourceMappingURL=pkg-browse-core.min.js-vfljhBpkb.map