define("modules/clean/react/starred/actions",["require","exports","tslib","modules/clean/flux/dispatcher","modules/clean/react/starred/api","modules/clean/react/starred/constants","modules/clean/react/starred/model"],(function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=r.__importStar(o);var n=(function(){function e(){}return e.fetchStatuses=function(t,r,n){return void 0===n&&(n=!1),n||e.markAsLoading(r),o.fetchStatuses(t,r).then((function(e){a.Dispatcher.dispatch({type:s.StarredActionTypes.SET_STATUS,starredStatuses:i.statusResultsToStarredStatuses(e)})})).catch((function(e){return a.Dispatcher.dispatch({type:s.StarredActionTypes.LOAD_FAILURE,idTypePairs:r}),Promise.reject(e)}))},e.markAsLoading=function(e){a.Dispatcher.dispatch({type:s.StarredActionTypes.LOADING,idTypePairs:e})},e.update=function(e,t,r,i){var n,d={id:t,type:r};a.Dispatcher.dispatch({type:s.StarredActionTypes.LOADING,idTypePairs:[d]});var c=o.update(e,t,r,i);return c.then((function(){return n=i})).catch((function(e){throw n=!i,e})).finally((function(){a.Dispatcher.dispatch({type:s.StarredActionTypes.SET_STATUS,starredStatuses:[{idTypePair:{id:t,type:r},starred:n}]})})),c},e})();t.StarredActions=n})),define("modules/clean/react/starred/api",["require","exports","modules/clean/ajax"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,a){return new Promise((function(o,s){(a?r.SilentBackgroundRequest:r.WebRequest)({url:e,type:"POST",dataType:"json",data:t,success:o,error:function(e,t,r){return s(Error("error: "+r+", status: "+t))}})}))};t.fetchStatuses=function(e,t){return a("/starred/get_status",{role:e,resources_json:JSON.stringify(t)},!0)},t.update=function(e,t,r,o){return a("/starred/update",{role:e,resource_id:t,id_type:r,is_starred:o},!0)}})),define("modules/clean/react/starred/star",["require","exports","tslib","classnames","react","dig-components/icons","dig-components/icons/src","dig-components/tooltips","modules/clean/react/css","modules/clean/react/snackbar","modules/clean/react/starred/actions","modules/clean/react/starred/starred_activity_logger","modules/clean/react/starred/store","modules/core/i18n"],(function(e,t,r,a,o,s,i,n,d,c,l,u,p,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a);var _=(function(e){function t(t){var r=e.call(this,t)||this;return r.onStoreUpdate=function(){var e=r.getStateFromStore();r.setState(e)},r.onClick=function(e){if(e.stopPropagation(),e.preventDefault(),!r.state.isLoading){var t=!r.state.isStarred;u.starredActivityLogger.logClick(r.props.user,r.props.id,r.props.idType,r.props.isDir,r.props.source,t),r.props.onStarClick&&r.props.onStarClick(t),l.StarredActions.update(r.props.user.role,r.props.id,r.props.idType,t).catch((function(e){var a;a=r.props.itemName?t?m.intl.formatMessage({id:"Wkf4xC",defaultMessage:"There was a problem starring {item_name}"},{item_name:r.props.itemName}):m.intl.formatMessage({id:"7P/SUF",defaultMessage:"There was a problem unstarring {item_name}"},{item_name:r.props.itemName}):t?m.intl.formatMessage({id:"c1LjRL",defaultMessage:"There was a problem starring your selection"}):m.intl.formatMessage({id:"hpC7/0",defaultMessage:"There was a problem unstarring your selection"}),c.Snackbar.fail(a)}))}},r.state=r.getStateFromStore(),r.removeStoreListener=p.StarredStore.addListener(r.onStoreUpdate),r}return r.__extends(t,e),t.prototype.componentWillUnmount=function(){this.removeStoreListener&&this.removeStoreListener()},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.id===e.id&&this.props.idType===e.idType||this.setState(this.getStateFromStore(e))},t.prototype.getStateFromStore=function(e){void 0===e&&(e=this.props);var t={id:e.id,type:e.idType};return{isLoading:p.StarredStore.getIsLoading(t),isStarred:p.StarredStore.getIsStarred(t)}},t.prototype.getTooltipContent=function(){return this.props.isReadOnly?this.state.isStarred?m.intl.formatMessage({id:"LAVXPn",defaultMessage:"Starred"}):null:this.state.isStarred?m.intl.formatMessage({id:"XQNf7s",defaultMessage:"Remove from Starred"}):m.intl.formatMessage({id:"iGfiaV",defaultMessage:"Add to Starred"})},t.prototype.render=function(){if(void 0===this.state.isStarred)return null;if(this.props.isReadOnly&&!this.state.isStarred)return null;var e={star__toggle:!0,"star__toggle--starred":this.state.isStarred,"star__toggle--unstarred":!this.state.isStarred&&!this.props.isTabbing,"star__toggle--loading":this.state.isLoading},t=this.getTooltipContent();return o.default.createElement(n.Tooltip,{title:t,placement:this.props.tooltipPlacement||"top"},o.default.createElement("button",{className:a.default(e),role:"button","aria-pressed":this.state.isStarred,"aria-label":t,onClick:this.onClick,onDoubleClick:this.onClick,disabled:this.props.isReadOnly,tabIndex:this.props.tabIndex},o.default.createElement(s.UIIcon,{src:this.state.isStarred?i.StarFill:i.StarLine})))},t.displayName="Star",t})((o=r.__importDefault(o)).default.PureComponent);t.Star=d.requireCssWithComponent(_,["/static/css/starred/star-vflBbANbh.css"])})),define("modules/clean/react/starred/starred_activity_logger",["require","exports","modules/clean/react/home/api","modules/clean/react/home/starred/constants","modules/clean/react/starred/constants","modules/clean/web_user_action_logger","modules/clean/web_user_action_events"],(function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[o.StarredSource.HOME_STARRED,o.StarredSource.HOME_RECENTS],d=(function(){function e(){}return e.prototype.logClick=function(e,t,o,d,c,l){if("BROWSE"===c)return Promise.resolve();var u=[];if(n.includes(c)){var p=l?a.StarredLoggingTypes.CLICK_STAR:a.StarredLoggingTypes.CLICK_UNSTAR;u.push(r.logHomeActivity({eventName:p,role:e.role,extra:{resource_id:t,id_type:o,is_dir:d}}))}var m=l?i.WebUserActionLogEvent.STAR:i.WebUserActionLogEvent.REMOVE_STAR;return u.push(s.WebUserActionLog.log(e.id,m,{resource_id:t,id_type:o,is_dir:d,role:e.role,source:c})),Promise.all(u)},e})();t.StarredActivityLogger=d,t.starredActivityLogger=new d})),define("modules/clean/react/starred/store",["require","exports","tslib","external/lodash","modules/clean/flux/dispatcher","modules/clean/flux/flux_store","modules/clean/react/starred/constants","modules/clean/react/home/starred/constants","modules/clean/react/starred/id_type_pair"],(function(e,t,r,a,o,s,i,n,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a);var c=(function(e){function t(){var t=e.call(this,o.Dispatcher)||this;return t.idsToLoadingState={},t.idsToStarred={},t}return r.__extends(t,e),t.prototype.getLoadingStates=function(){return this.idsToLoadingState},t.prototype.hasIdTypePair=function(e){return this.idsToLoadingState.hasOwnProperty(d.idTypePairToString(e))},t.prototype.getLoadingState=function(e){return this.idsToLoadingState[d.idTypePairToString(e)]},t.prototype.getIsStarred=function(e){return this.idsToStarred[d.idTypePairToString(e)]},t.prototype.getAllStarredPairStrings=function(){return Object.keys(a.pickBy(this.idsToStarred,(function(e){return e})))},t.prototype.getIsLoading=function(e){return this.getLoadingState(e)===i.StarredLoadingState.LOADING},t.prototype.onLoading=function(e){var t={};e.forEach((function(e){return t[d.idTypePairToString(e)]=i.StarredLoadingState.LOADING})),this.idsToLoadingState=r.__assign(r.__assign({},this.idsToLoadingState),t)},t.prototype.onSetStatus=function(e){void 0===e&&(e=[]);var t={},a={};e.forEach((function(e){var r=d.idTypePairToString(e.idTypePair);t[r]=i.StarredLoadingState.LOAD_SUCCESS,a[r]=e.starred})),this.idsToLoadingState=r.__assign(r.__assign({},this.idsToLoadingState),t),this.idsToStarred=r.__assign(r.__assign({},this.idsToStarred),a)},t.prototype.onLoadFailure=function(e){var t=this,a={};e.forEach((function(e){var r=d.idTypePairToString(e),o=t.idsToLoadingState[r];void 0!==o&&o!==i.StarredLoadingState.LOADING||(a[r]=i.StarredLoadingState.LOAD_FAILED)})),this.idsToLoadingState=r.__assign(r.__assign({},this.idsToLoadingState),a)},t.prototype.__onDispatch=function(e){var t=e.action;switch(t.type){case i.StarredActionTypes.LOADING:this.onLoading(t.idTypePairs),this.__emitChange();break;case i.StarredActionTypes.SET_STATUS:case n.StarredResourceActionTypes.LOAD_SUCCESS:this.onSetStatus(t.starredStatuses),this.__emitChange();break;case i.StarredActionTypes.LOAD_FAILURE:this.onLoadFailure(t.idTypePairs),this.__emitChange();break;default:return}},t})(s.FluxStore);t._StarredStoreClass=c,t.StarredStore=new c})),define("modules/clean/react/starred/model",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.statusResultsToStarredStatuses=function(e){return e.map((function(e){var t=e.id,r=e.type,a=e.is_starred,o=e.canonical_id,s=e.canonical_id_type,i={idTypePair:{id:t,type:r},starred:a};return o&&s&&(i.canonicalIdTypePair={id:o,type:s}),i}))}})),define("modules/clean/react/home/starred/constants",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarredResourceActionTypes={LOADING_INITIAL:"HOME_STARRED_LOADING_INITIAL",LOADING_ALL:"HOME_STARRED_LOADING_ALL",LOAD_SUCCESS:"HOME_STARRED_LOAD_SUCCESS",LOAD_FAILURE:"HOME_STARRED_LOAD_FAILURE",HIDE_EMPTY_SECTION:"HOME_STARRED_HIDE_EMPTY_SECTION"},t.NOT_PAPER_USER_ERROR="not_paper_user",t.StarredLoggingTypes={CLICK_STAR:"click_star",CLICK_UNSTAR:"click_unstar"},t.StarredLoadingTypes={INITIAL:"INITIAL",ALL:"ALL"},t.LOAD_ALL_ITEMS_COUNT=1e3,t.INITIAL_STARRED_ITEMS_LIMIT=5})),define("modules/clean/react/home/starred/conditional_interface",["require","exports","modules/clean/react/home/starred/starred_resource_store","modules/clean/react/starred/star","modules/clean/react/home/recents/recent_activity_starred","modules/clean/react/home/starred/starred_view","modules/clean/react/starred/id_type_pair"],(function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStarredResourceStore=r.getStarredResourceStore,t.Star=a.Star,t.getIdTypePairFromRecentItem=o.getIdTypePairFromRecentItem,t.StarredView=s.StarredView,t.RootComponent=s.RootComponent,t.idTypePairToString=i.idTypePairToString})),define("modules/clean/react/home/starred/actions",["require","exports","modules/clean/flux/dispatcher","modules/clean/react/home/starred/constants","modules/clean/react/home/starred/models/starred_item","modules/clean/react/starred/model","modules/core/exception"],(function(e,t,r,a,o,s,i){"use strict";function n(e,t){return r.Dispatcher.dispatch({type:a.StarredResourceActionTypes.LOAD_FAILURE,error:t,loadingType:e}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.onRetrieveStarredError=n;var d=(function(){function e(){}return e.handleRetrieveStarredPayload=function(e,t,d){if("success"!==d.status)throw n(t,d.status);if(!d.items||void 0===d.has_more)throw i.reportStack("Home starred items request returned success without items or hasMore",{severity:i.SEVERITY.NONCRITICAL}),n(t,new Error("Invalid server response for Starred getItems"));var c=d.items.map(o.starredItemFromJson),l=s.statusResultsToStarredStatuses(c.map(o.starredItemModelToStarredStatus));r.Dispatcher.dispatch({type:a.StarredResourceActionTypes.LOAD_SUCCESS,hasMore:d.has_more,items:c,starredStatuses:l,loadingType:t}),e().then((function(e){return(0,e.getStarredStatusMetadata)(l)}))},e})();t.StarredActions=d})),define("modules/clean/react/home/starred/models/starred_item",["require","exports","modules/clean/react/home/constants"],(function(e,t,r){"use strict";function a(e,t){var a,o=r.DisplayTypeToResourceType[e];return o===r.FILE_RESOURCE_TYPE?{fqPath:(a=t).fq_path}:o===r.FOLDER_RESOURCE_TYPE?{fqPath:(a=t).fq_path,targetNsId:a.target_ns_id,isTeamMemberFolder:a.is_team_member_folder}:{}}Object.defineProperty(t,"__esModule",{value:!0}),t.starredItemFromJson=function(e){return{title:e.title,resourceId:e.resource_id,idType:e.id_type,displayType:e.display_type,url:e.url,isMounted:e.is_mounted,perNodeMetadata:e.per_node_metadata,details:a(e.display_type,e.details),icon:e.icon}},t.detailsFromJson=a,t.starredItemModelToStarredStatus=function(e){return{id:e.resourceId,type:e.idType,is_starred:!0}}})),define("modules/clean/react/home/starred/starred_item",["require","exports","tslib","react","dig-components/buttons","dig-components/typography","modules/clean/filepath","modules/clean/navigation","modules/clean/react/home/constants","modules/clean/react/home/post_tti/api","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/util/paper_utils","modules/clean/react/home/util/post_tti_components","modules/clean/react/home/util/rendering_utils","modules/clean/react/home/util/resource_icon","modules/clean/react/starred/constants","modules/clean/react/starred/id_type_pair","modules/clean/react/starred/star","spectrum-sharing/utils/sharing_constants","modules/clean/user_education/react/user_education_effect","modules/core/i18n","modules/clean/pnm/utils"],(function(e,t,r,a,o,s,i,n,d,c,l,u,p,m,_,S,h,g,f,y,T,I){"use strict";var L,E;Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a);var A=((L={})[d.FILE_RESOURCE_TYPE]=!0,L[d.FOLDER_RESOURCE_TYPE]=!0,L),v=r.__assign(r.__assign({},A),((E={})[d.PAPER_DOCUMENT_RESOURCE_TYPE]=!0,E)),R=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getLoggingInfo=function(){var e=d.DisplayTypeToResourceType[t.props.item.displayType];return{resourceId:t.props.item.resourceId,resourceType:e,position:t.props.position}},t.onClick=function(e){e.stopPropagation(),e.preventDefault();var r=d.DisplayTypeToResourceType[t.props.item.displayType];r!==d.FILE_RESOURCE_TYPE||n.isMetaKeyPressed(e)?r!==d.FOLDER_RESOURCE_TYPE||n.isMetaKeyPressed(e)?n.logAndNavigate(t.props.item.url,t.logOpen,n.NavigationMethod.NEW_TAB):n.logAndNavigate(t.props.item.url,t.logOpen,n.NavigationMethod.REDIRECT):(e.preventDefault(),c.waitForHomeTTI().then((function(e){return e.openInFileViewer(h.idTypePairToString({type:t.props.item.idType,id:t.props.item.resourceId}),t.logOpen)})))},t.logEvent=function(e){var r=t.getLoggingInfo();return e(r.resourceId,r.resourceType,r.position)},t.logOpen=function(){return t.logEvent(l.homeActivityLogger.logOpenStarredItem)},t.logClickShare=function(){return t.logEvent(l.homeActivityLogger.logClickStarOverflowShare)},t.handleShare=function(e){if(e.preventDefault(),e.stopPropagation(),t.props.item.displayType!==d.PAPER_DOCUMENT_RESOURCE_TYPE){t.logClickShare();var r=d.DisplayTypeToResourceType[t.props.item.displayType]===d.FOLDER_RESOURCE_TYPE,a=r?t.props.item.details.targetNsId:null,o=t.props.item.details.fqPath;c.waitForHomeTTI().then((function(e){e.asyncShowShareModal(t.props.user,{fqPath:o,isFolder:r,origin:f.SHARE_ACTION_ORIGIN_TYPE.STARRED,targetNsId:a})}))}else u.sharePaperDoc(t.props.item.url,t.logClickShare)},t}return r.__extends(t,e),t.prototype.renderActions=function(){var e=d.DisplayTypeToResourceType[this.props.item.displayType],t=!!(this.props.item.details&&"isTeamMemberFolder"in this.props.item.details)&&this.props.item.details.isTeamMemberFolder,r=this.props.item.isMounted;return!(e in v)||t||I.hasValidLinkNode(this.props.item.perNodeMetadata)||e in A&&!r?null:a.default.createElement(o.Button,{onClick:this.handleShare,variant:"opacity",className:"starred-item__action starred-item__action--hover-only starred-item__action--desktop-only"},T.intl.formatMessage({id:"At94iP",defaultMessage:"Share"}))},t.prototype.render=function(){var e=this.props,t=e.item,r=e.user,o=e.position,n=t.details&&"fqPath"in t.details?t.details.fqPath:void 0,d=!!t.details&&"targetNsId"in t.details,c=n&&"web"===i.file_extension(n)&&t.url||void 0,l=t.title;return a.default.createElement("div",{className:"starred-item"},a.default.createElement(_.HomeResourceIcon,{className:"starred-item__icon",key:"icon",displayType:t.displayType,fileName:t.title,shortcutUrlForIcon:c,icon:t.icon}),a.default.createElement("div",{className:"starred-item__content",key:"userEducation"},a.default.createElement(y.UserEducationEffect,{containerName:"StarredItem",name:"starred-item-"+String(o)}),a.default.createElement(s.Text,{color:"standard"},a.default.createElement(s.Link,{key:"name",onClick:this.onClick,href:t.url,variant:"monochromatic",hasNoUnderline:!0,className:"starred-item__title",tabIndex:0},m.truncateTitle(l))),a.default.createElement(g.Star,{user:r,id:t.resourceId,idType:t.idType,isDir:d,itemName:t.title,source:S.StarredSource.HOME_STARRED})),a.default.createElement("div",{className:"starred-item__actions"},a.default.createElement("div",{className:"starred-item__action starred-item__action--hover-only starred-item__action--desktop-only"},a.default.createElement(p.PostTTIStarredItemFileActions,{starredItem:t,user:r})),this.renderActions()))},t.displayName="StarredItem",t})(a.default.PureComponent);t.StarredItem=R})),define("modules/clean/react/home/starred/starred_item_list",["require","exports","tslib","react","react-dom","modules/clean/react/home/post_tti/api","modules/clean/react/home/starred/constants","modules/clean/react/home/starred/starred_empty_state","modules/clean/react/home/starred/starred_item","modules/clean/react/home/store","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/util/show_hide_link"],(function(e,t,r,a,o,s,i,n,d,c,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a),o=r.__importDefault(o);var p=(function(e){function t(t){var a=e.call(this,t)||this;return a.toggleShowAll=function(){return r.__awaiter(a,void 0,void 0,(function(){var e,t,a;return r.__generator(this,(function(r){switch(r.label){case 0:return e=!this.state.showAll,l.homeActivityLogger.logClickShowAll("starred",e),this.setState({showAll:e}),e&&this.props.hasMore?[4,s.waitForHomeTTI()]:[3,2];case 1:(0,r.sent().loadAllStarredItems)(),r.label=2;case 2:return(t=o.default.findDOMNode(this.refs.lastUnhiddenStar))&&(a=t.querySelector("a"))&&a.focus(),[2]}}))}))},a.state={showAll:!1},a}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.itemModels,t=this.state.showAll,r=c.getUser(),o=Math.max(e.length-i.INITIAL_STARRED_ITEMS_LIMIT,0),s=o&&!t?e.slice(0,i.INITIAL_STARRED_ITEMS_LIMIT):e;return a.default.createElement("div",{className:"starred"},a.default.createElement("div",{className:"starred-container"},s.length?a.default.createElement("div",{className:"starred-list"},s.map((function(e,t){return a.default.createElement(d.StarredItem,{key:e.resourceId,item:e,user:r,position:t,ref:t===i.INITIAL_STARRED_ITEMS_LIMIT-1?"lastUnhiddenStar":void 0})}))):a.default.createElement(n.StarredEmptyState,null),o?a.default.createElement(u.ShowHideLink,{onClick:this.toggleShowAll,isExpanded:t,hiddenItemCount:o,canLoadMore:!1}):null))},t.displayName="StarredItemList",t})(a.default.PureComponent);t.StarredItemList=p})),define("modules/clean/react/home/starred/starred_resource_store",["require","exports","tslib","modules/clean/flux/dispatcher","modules/clean/react/home/constants","modules/clean/react/home/starred/constants","modules/clean/react/starred/constants","modules/clean/react/home/starred/actions","modules/clean/react/starred/store","modules/clean/react/home/util/logging/availability_logger","modules/clean/flux/flux_store","modules/clean/react/home/post_tti/api"],(function(e,t,r,a,o,s,i,n,d,c,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=(function(e){function t(){var t=e.call(this,a.Dispatcher)||this;return t.orderedIds=[],t.itemsById={},t.loadingState=o.LoadingStates.LOADING,t.hasMore=!0,t.hasLoadedInitial=!1,t.hasLoadedAll=!1,t.isPaperUser=!0,c.getHomeAvailabilityLogger().handlePrefetch(o.HomePrefetchTypes.RETRIEVE_STARRED,(function(e){return n.StarredActions.handleRetrieveStarredPayload(u.waitForHomeTTI,s.StarredResourceActionTypes.LOADING_INITIAL,e)})),t}return r.__extends(t,e),t.prototype.getStarredStore=function(){return d.StarredStore},t.prototype.clearPresentableItemsCache=function(){this.presentableItemsCache=null},t.prototype.getItems=function(){var e=this;return this.presentableItemsCache||(this.presentableItemsCache=this.orderedIds.map((function(t){return e.itemsById[t]})).filter((function(t){var r={id:t.resourceId,type:t.idType},a=e.getStarredStore().getLoadingState(r),o=e.getStarredStore().getIsStarred(r);return a===i.StarredLoadingState.LOADING||o}))),this.presentableItemsCache},t.prototype.getItem=function(e){return this.itemsById[e]},t.prototype.getLoadingState=function(){return this.loadingState},t.prototype.getHasMore=function(){return this.hasMore},t.prototype.getHasLoadedInitial=function(){return this.hasLoadedInitial},t.prototype.getHasLoadedAll=function(){return this.hasLoadedAll},t.prototype.getIsPaperUser=function(){return this.isPaperUser},t.prototype.onItemsLoading=function(){this.loadingState=o.LoadingStates.LOADING},t.prototype.onItemsLoadSuccess=function(e,t){var r=this;e.forEach((function(e){r.itemsById[e.resourceId]=e})),this.loadingState=o.LoadingStates.SUCCESS,this.orderedIds=e.map((function(e){return e.resourceId})),this.hasMore=t,e.length&&this.clearPresentableItemsCache()},t.prototype.onItemsLoadFailure=function(e){this.loadingState=o.LoadingStates.FAILURE,e&&e===s.NOT_PAPER_USER_ERROR&&(this.isPaperUser=!1)},t.prototype.onItemsLoadComplete=function(e,t){e!==s.StarredLoadingTypes.INITIAL&&t||(this.hasLoadedInitial=!0),e!==s.StarredLoadingTypes.ALL&&t||(this.hasLoadedAll=!0)},t.prototype.onStatusChange=function(){u.waitForHomeTTI().then((function(e){return(0,e.loadAllStarredItems)()})),this.clearPresentableItemsCache()},t.prototype.__onDispatch=function(e){var t=e.action;switch(t.type){case s.StarredResourceActionTypes.LOADING_INITIAL:case s.StarredResourceActionTypes.LOADING_ALL:this.onItemsLoading(),this.__emitChange();break;case s.StarredResourceActionTypes.LOAD_SUCCESS:this.onItemsLoadSuccess(t.items,t.hasMore),this.onItemsLoadComplete(t.loadingType,t.hasMore),this.__emitChange();break;case s.StarredResourceActionTypes.LOAD_FAILURE:this.onItemsLoadFailure(t.error),this.onItemsLoadComplete(t.loadingType,!0),this.__emitChange();break;case i.StarredActionTypes.LOADING:this.clearPresentableItemsCache(),this.__emitChange();break;case i.StarredActionTypes.SET_STATUS:this.onStatusChange(),this.__emitChange()}},t})(l.FluxStore);t.PrivateStarredResourceStoreClass=p;var m=null;t.getStarredResourceStore=function(){return null===m&&(m=new p),m}})),define("modules/clean/react/home/starred/starred_view",["require","exports","tslib","react","modules/clean/react/home/constants","modules/clean/react/home/starred/constants","modules/clean/react/home/starred/starred_item_list","modules/clean/react/home/starred/starred_layout","modules/clean/react/home/starred/starred_resource_store","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/util/logging/timing_component","modules/clean/react/home/util/logging/timing_logger"],(function(e,t,r,a,o,s,i,n,d,c,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=(function(e){function t(t){var r=e.call(this,t)||this;return r.onStoreUpdate=function(){return r.setState(r.getStateFromStore())},r.removeStoreListener=d.getStarredResourceStore().addListener(r.onStoreUpdate),r.state=r.getStateFromStore(),r}return r.__extends(t,e),t.prototype.getStateFromStore=function(){var e=d.getStarredResourceStore(),t=e.getLoadingState(),r=e.getItems(),a=e.getHasMore(),i=e.getHasLoadedInitial();if(t===o.LoadingStates.SUCCESS&&u.homeTimingLogger.logTTData(o.HomeSections.STARRED)){var n=r.length>s.INITIAL_STARRED_ITEMS_LIMIT;c.homeActivityLogger.logStarredShown(r.length,n,a)}return{itemModels:r,hasLoadedInitial:i,hasMore:a,canShowSpinner:t===o.LoadingStates.LOADING&&!e.getHasLoadedAll()}},t.prototype.componentWillUnmount=function(){this.removeStoreListener&&this.removeStoreListener()},t.prototype.render=function(){var e=this.props,t=e.canRenderItems,o=e.isHiddenByUser;return t?a.default.createElement(n.StarredLayout,r.__assign({isHiddenByUser:o,starredComponent:i.StarredItemList},this.state)):null},t.displayName="StarredView",t})((a=r.__importDefault(a)).default.PureComponent);t.StarredView=l.timingComponent(p,o.HomeSections.STARRED),t.RootComponent=function(e){return a.default.createElement(t.StarredView,r.__assign({},e))}})),define("modules/clean/react/home/util/paper_utils",["require","exports","modules/clean/navigation"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sharePaperDoc=function(e,t){r.logAndNavigate(e+"?openSharing=1",t)}})),define("modules/clean/react/home/util/rendering_utils",["require","exports","modules/clean/em_string","modules/core/i18n"],(function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a.intl.formatMessage({id:"YhUh+a",defaultMessage:"Untitled"});t.truncateTitle=function(e){return r.Emstring.em_snippet(e.trim().length?e:o,30)}})),define("modules/clean/react/home/recents/recent_activity_starred",["require","exports","tslib","external/lodash","modules/clean/react/starred/id_type_pair"],(function(e,t,r,a,o){"use strict";function s(e){return e.resource_id&&e.id_type?{id:e.resource_id,type:e.id_type}:null}Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a),t.getIdTypePair=s,t.getIdTypePairsByRecentActivityItems=function(e){var t={};return e.forEach((function(e){var r=s(e);r&&(t[o.idTypePairToString(r)]=r)})),a.values(t)},t.getIdTypePairFromRecentItem=function(e){return e.resourceId&&e.idType?{id:e.resourceId,type:e.idType}:null}}));
//# sourceMappingURL=pkg-starred.min.js-vflH6NHuA.map