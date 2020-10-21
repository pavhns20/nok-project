define(["require","exports","tslib","external/lodash","modules/clean/teams/admin/pages/activity/filters/members_picker_behavior","modules/clean/rondo/forms/behaviors/form_auto_submit_behavior","modules/clean/rondo/forms/behaviors/form_behavior","modules/clean/teams/admin/pages/activity/activity_api","modules/clean/rondo/forms/behaviors/form_submit_behavior","rondo/v1/index","modules/clean/teams/admin/pages/activity/filters/initial_values","modules/clean/teams/admin/pages/activity/filters/submit","modules/clean/rondo/components/members_picker/contacts_picker_behavior","modules/clean/teams/admin/pages/activity/filters/filters_url","modules/clean/teams/admin/pages/activity/filters/filter_logger","modules/clean/teams/admin/pages/activity/behaviors/activity_page","modules/clean/rondo/components/members_picker/contacts_picker_behavior","modules/clean/teams/admin/pages/activity/behaviors/activity_logger"],(function(e,t,i,a,r,l,s,n,o,c,m,u,d,v,h,p,f,y){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=i.__importStar(a),t.FiltersBehaviorFactory=function(e,t){return(function(){function r(){var r=this;this.initialState=function(){return{allowSetFilter:!1}},this.actionAllowSetFilters=c.createAction().handle((function(){return{allowSetFilter:!0}})),this.actionClearFilters=c.createAction().watch((function(){r.actionSetValues({fieldsToValue:m.filtersValuesClear()})})),this.canSubmitFilters=c.createSelector((function(e){return e.allowSetFilter})),this.actionSubmit=c.createOrUseIn(this,p.activityPage.actionSubmit).watch((function(){var e=r.validValues(),t=v.filtersToURLSearch(e),i=p.activityPage.search();a.isEqual(t,i)||p.activityPage.actionLocationPush({search:t,merge:!1})})),this.actionSetMemberFilter=c.createOrUseIn(this,p.activityPage.filters.actionSetMemberFilter).watch((function(e,t){var a=t.account_id,l=t.email;return i.__awaiter(r,void 0,void 0,(function(){var e;return i.__generator(this,(function(t){switch(t.label){case 0:return[4,n.partakerByAccountIdAndEmail(l,a)];case 1:return(e=t.sent())&&this.actionSetValues({fieldsToValue:i.__assign(i.__assign({},m.filtersValuesClearNoDate()),{members:e.map((function(e){return d.parseTokenObject(e)}))})}),[2]}}))}))})),this.acionSetActivityFilter=c.createOrUseIn(this,p.activityPage.filters.actionSetActivityFilter).watch((function(e,t){var a=t;a&&r.actionSetValues({fieldsToValue:i.__assign(i.__assign({},m.filtersValuesClearNoDateAndTeams()),{activity:[a]})})})),c.extendBehavior(this,l.FormAutoSubmitBehavior({commitAction:p.activityPage.actionResults,dirtyAction:p.activityPage.actionDirty,submitFunction:t,submitAction:[p.activityPage.actionSubmit,p.activityPage.actionFetch],fields:e,additionalStateFieldsGenerator:o.additionalStateFieldsAPIv2,submitPartialValid:!0,canSubmit:this.canSubmitFilters}))}return r.displayName="Filters",r})()};var F=(function(){function e(){this.initialState=function(){return{}},this.date=s.FieldBehaviorFactory({initialValue:m.datemeTimeFilterValueClear(),clearValue:m.datemeTimeFilterValueClear()}),this.members=c.createBehavior(f.TypeAheadFactory(r.ActivityDataSource)),this.participants=s.FieldBehaviorFactory({initialValue:m.emptyEnumValueClear(),clearValue:m.emptyEnumValueClear()}),this.file=s.FieldBehaviorFactory({initialValue:m.fileFilterValueClear(),clearValue:m.fileFilterValueClear()}),this.teams=s.FieldArrayBehaviorFactory({initialValue:m.emptyListFilterValueClear(),clearValue:m.emptyListFilterValueClear()}),this.activity=s.FieldArrayBehaviorFactory({initialValue:m.emptyListFilterValueClear(),clearValue:m.emptyListFilterValueClear()}),c.extendBehavior(this,t.FiltersBehaviorFactory({file:this.file,teams:this.teams,activity:this.activity,members:this.members,participants:this.participants,date:this.date},u.submit)),c.extendBehavior(this,h.LoggerCreator(y.logActivityPageEventToHive,[{action:this.date.actionFieldChange,parser:h.dateEvent},{action:this.members.actionFieldAdd,parser:h.memberEvent},{action:this.members.actionFieldReplace,parser:h.memberReplaceEvent},{action:this.members.actionFieldRemove,parser:h.memberRemoveEvent},{action:this.actionClearFilters,parser:function(){return{eventName:"clear_filters",extra:{}}}},{action:this.date.actionClear,parser:h.collapsedFilterEvent("date")},{action:this.members.actionClear,parser:h.collapsedFilterEvent("member")},{action:this.file.actionClear,parser:h.collapsedFilterEvent("file")},{action:this.activity.actionClear,parser:h.collapsedFilterEvent("activity")},{action:this.file.actionFieldChange,parser:h.fileEvent}]))}return e.displayName="FiltersBehaviorInherit",e})();t.FiltersBehavior=F}));
//# sourceMappingURL=filters_behavior.min.js-vfloBZ1wN.map