define(["require","exports","modules/clean/rondo/behavior/logger_behavior"],(function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.dateEvent=function(e){return{eventName:"date_range_change",extra:{date_range_start:e.from,date_range_end:e.to}}},n.memberEvent=function(e){if(e&&e[0]&&!e[0].content.pending)return{eventName:(e[0].content.on_team?"member_known":"member_unknown")+"_added",extra:{}}},n.memberReplaceEvent=function(e){return e.v.invalid?{eventName:"member_invalid_added",extra:{}}:{eventName:(e.v.on_team?"member_known":"member_unknown")+"_added",extra:{}}},n.memberRemoveEvent=function(e){return{eventName:"member_"+(e[0].content.invalid?"invalid":e[0].content.on_team?"known":"unknown")+"_removed",extra:{}}},n.fileEvent=function(e){if(e)return{eventName:"content_search_applied",extra:{}}},n.collapsedFilterEvent=function(e){return function(n){return{eventName:e+"_collapsed_clear",extra:{}}}},n.LoggerCreator=function(e,n){return t.LoggerBehavior({loggingFunction:e,actionsToLog:n})}}));
//# sourceMappingURL=filter_logger.min.js-vfle-LiEa.map