define(["require","exports","tslib","modules/clean/datetime","modules/clean/rondo/router/location_utils","modules/clean/teams/admin/pages/activity/filters/initial_values","modules/clean/rondo/components/members_picker/contacts_picker_behavior","modules/clean/teams/admin/pages/activity/activity_api","modules/clean/rondo/components/team_picker/team_picker_behavior","modules/clean/teams/admin/pages/activity/filters/types"],(function(e,t,n,i,a,r,m,s,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),t.filtersToURLSearch=function(e){var t,n={from:i.format_date(new Date(e.date.from),"y-MM-dd-HH-mm"),to:i.format_date(new Date(e.date.to),"y-MM-dd-HH-mm")};e.members&&e.members.length>0&&((t=e.members.filter((function(e){return!e.content.invalid&&!e.content.pending})).map((function(e){return e.key}))).length>0&&(n.member=t.join(",")));e.teams&&e.teams.length>0&&((t=e.teams.map((function(e){return e.content.dbtid}))).length>0&&(n.team_ids=t.join(",")));return e.file&&(n.asset_prefix=e.file),e.activity&&e.activity.length&&(n.event_types=e.activity.map((function(e){return e.event_type[".tag"]})).join(",")),void 0!==e.participants&&e.participants!==l.InvolveNoneTeamMembers.DEFAULT&&(n.include_only_non_team_member_events=e.participants===l.InvolveNoneTeamMembers.YES),n},t.selectedActivities=function(e,t){for(var n=[],i=0,a=t;i<a.length;i++)for(var r=0,m=a[i].activities;r<m.length;r++){var s=m[r];e.indexOf(s.id)>=0&&n.push(s)}return n},t.urlSearchToFilters=function(e,i){return n.__awaiter(void 0,void 0,void 0,(function(){var c,u,d,p,_,v,f,b,y,g;return n.__generator(this,(function(n){switch(n.label){case 0:return c=a.searchToParams(e),u={},c.event_types?(d=c.event_types.split(","),u.activity=t.selectedActivities(d,i)):u.activity=r.emptyListFilterValueClear(),p=r.datemeTimeFilterValueClear(),c.from&&(_=c.from.split("-").map((function(e){return Number(e)}))).length>=3&&(p.from=new Date(_[0],_[1]-1,_[2],_[3]||0,_[4]||0).getTime()),c.to&&(v=c.to.split("-").map((function(e){return Number(e)}))).length>=3&&(p.to=new Date(v[0],v[1]-1,v[2],v[3]||0,v[4]||0).getTime()),u.date=p,u.file=c.asset_prefix||r.fileFilterValueClear(),c.member?[4,s.partakers({accounts_ids:c.member.split(",")})[0]]:[3,2];case 1:return f=n.sent(),u.members=f.results.map((function(e){return m.parseTokenObject(e)})),[3,3];case 2:u.members=r.emptyListFilterValueClear(),n.label=3;case 3:return c.team_ids?[4,o.fetchTeamData(!0)]:[3,5];case 4:b=n.sent(),y=c.team_ids.split(","),g=b.filter((function(e){return y.includes(e.dbtid)})),u.teams=g.map((function(e){return o.parseTeamSingleTokenObject(e)})),n.label=5;case 5:return u.participants=void 0===c.include_only_non_team_member_events?r.emptyEnumValueClear():c.include_only_non_team_member_events?l.InvolveNoneTeamMembers.YES:l.InvolveNoneTeamMembers.NO,[2,u]}}))}))}}));
//# sourceMappingURL=filters_url.min.js-vflWJvpLP.map