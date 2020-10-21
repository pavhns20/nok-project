define("modules/clean/account_photo_modal/account_header",["require","exports","tslib","jquery"],(function(e,t,n,s){"use strict";function i(t,i,a){s.default(t).add(i).on("click",(function(t){t.preventDefault(),new Promise((function(t,n){e(["modules/clean/account_photo_modal/controller"],t,n)})).then(n.__importStar).then((function(e){return(0,e.AccountPhotoModalController.show)()}))})),s.default(document).on("db:account_photo:photo_set",(function(e){return s.default(i).addClass(a)})),s.default(document).on("db:account_photo:photo_deleted",(function(e){return s.default(i).removeClass(a)}))}Object.defineProperty(t,"__esModule",{value:!0}),s=n.__importDefault(s),t.init=i,t.initialize_module=function(e){i(e.open_modal_button_selector,e.add_photo_link_selector,e.hide_add_photo_link_class)}})),define("modules/clean/dropbox_nav",["require","exports","tslib","jquery","modules/clean/analytics"],(function(e,t,n,s,i){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),s=n.__importDefault(s),i=n.__importStar(i),a=(function(){function e(){var e=this;s.default(".composer-nav-item").click((function(){return e.log_click("composer_nav_link_click")})),s.default(".mailbox-nav-item").click((function(){return e.log_click("mailbox_nav_link_click")}))}return e.prototype.log_click=function(e){return i.WebMiscActivityLogger.log(e)},e})(),t.default=a})),define("modules/clean/growth/admin_console_ad",["require","exports","tslib","jquery","modules/clean/analytics","modules/clean/dbmodal","modules/core/browser"],(function(e,t,n,s,i,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=n.__importDefault(s);var r=function(e,t,n){var r=this;this.handleCTAClick=function(e){if(e.preventDefault(),e.target){var t=s.default(e.target).attr("href");i.TeamsWebActionsLogger.log("click_admin_console_ad_cta",{},(function(){return o.redirect(t)}))}},this.handleLinkClick=function(e){return e.preventDefault(),i.TeamsWebActionsLogger.log("click_admin_console_ad"),r.modal.show(),s.default(r.cta_selector).off(),s.default(r.cta_selector).click(r.handleCTAClick)},this.cta_selector=n,this.modal=new a.DBModal({element_id:t}),s.default(e).click(this.handleLinkClick)};t.AdminConsoleAd=r})),define("modules/clean/teams/limited_team_invite_modal",["require","exports","tslib","create-react-class","react","prop-types","external/lodash","modules/clean/ajax","modules/clean/analytics","modules/clean/contacts/contact","modules/clean/react/modal","modules/clean/teams/limited_team_invite_form","modules/clean/viewer","modules/core/html","modules/core/i18n","modules/core/notify","modules/core/uri","dig-components/typography","modules/clean/loggers/join_flow_logger"],(function(e,t,n,s,i,a,o,r,l,u,m,c,d,_,f,p,g,h,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=n.__importDefault(s),i=n.__importDefault(i),a=n.__importStar(a),o=n.__importStar(o),r=n.__importStar(r);var b=d.Viewer.get_viewer(),M=s.default({displayName:"LimitedTeamInviteModal",propTypes:{onInvited:a.func,onDismiss:a.func,populatedCustomMessage:a.string,populatedContacts:a.arrayOf(a.instanceOf(u.Contact)),memberInviteLimit:a.number,maxTeamSize:a.number,includeCustomMessage:a.bool,isMemberInviteExperiment:a.bool,numAvailableLicenses:a.number,source:a.string},getInitialState:function(){return{canProceed:!1,submitting:!1}},_canProceed:function(){return(null!=this.refs.members?this.refs.members.areAllContactsValid():void 0)&&!(null!=this.refs.members?this.refs.members.isEmpty():void 0)},onClickInvite:function(e){var t=this;return e.preventDefault(),this.refs.members.getFinalData((function(e){var n=e.emails,s=e.custom_message,i=t._canProceed();if(t.setState({canProceed:i}),i){var a=n.length-t.props.numAvailableLicenses;l.TeamsWebActionsLogger.log("invite_member_open_invite_click",{source:t.props.source,member_invite_on:t.props.isMemberInviteExperiment,invite_count:n.length,licenses_to_add:a});var u={emails:n,custom_message:s,team_id:b.team_id};return t.props.isMemberInviteExperiment&&(u.extra=JSON.stringify({member_send_invite_experiment_enabled:!0,origin:t.props.source}),u.invite_source=v.InviteSource.MEMBER_INVITE,t.props.numAvailableLicenses<n.length&&(u.charge_for_new_licenses=!0,u.expected_overage=n.length-t.props.numAvailableLicenses)),t.setState({submitting:!0}),r.WebRequest({url:"/account/team/add_users",subject_user:b.work_user,data:u,complete:function(){if(t.isMounted())return t.setState({submitting:!1})},success:function(e){e=JSON.parse(e);var n=o.values(e.users),s=e.num_suggested||0;if(n.length>0||s>0){if(null!=t.props.memberInviteLimit){var i=t.props.memberInviteLimit-n.length;if(i>0){var a={tk:t.props.memberInviteLimit,_camp:"flash"},r=new g.URI({path:"/team/upgrade",query:a}),l=f.intl.formatMessage({id:"NP7zf1",defaultMessage:"{count, plural, one{Members invited. You can invite {count} more member before you need to upgrade to Dropbox Business. <a>Upgrade now.</a>} other{Members invited. You can invite {count} more members before you need to upgrade to Dropbox Business. <a>Upgrade now.</a>}}"},{count:i,a:function(e){return'<a href="'+r.toString()+'">'+e+"</a>"}});p.Notify.success(new _.HTML(l))}}else 0===s?p.Notify.success(f.intl.formatMessage({id:"axSi6e",defaultMessage:"{num_invited, plural, one {Invited.} other {Invited # people.}}"},{num_invited:n.length})):s>0&&n.length>0?p.Notify.success(f.intl.formatMessage({id:"SX0gpY",defaultMessage:"{num_invites, plural, one {Invited # person} other {Invited # people}}."},{num_invites:n.length})+" "+f.intl.formatMessage({id:"lbndFp",defaultMessage:"{num_suggested, plural, one {# invite sent to admin} other {# invites sent to admin}}."},{num_suggested:s})):p.Notify.success(f.intl.formatMessage({id:"upmba9",defaultMessage:"We couldn’t send the {num_suggested, plural, one{invite} other {invites}}, but we let the admin know. Contact them for next steps."},{num_suggested:s}));return"function"==typeof t.props.onInvited&&t.props.onInvited(u),t.refs.modal.close()}return p.Notify.error(f.intl.formatMessage({id:"bLA3rA",defaultMessage:"There was a problem completing this request."}))},error:function(e){return"rate-limit"===e.getResponseHeader("x-dropbox-app-error")?p.Notify.error(new _.HTML(f.intl.formatMessage({id:"hQ0rRo",defaultMessage:"{team_name} has reached the maximum number of team members allowed on Dropbox Basic. Please <a>contact sales</a> to add more members to your team."},{team_name:b.team_name,a:function(e){return'<a href="/business/contact">'+e+"</a>"}}))):(l.TeamsWebActionsLogger.log("invite_member_open_invite_error",{source:t.props.source,member_invite_on:t.props.isMemberInviteExperiment,client:!0}),p.Notify.error(f.intl.formatMessage({id:"bLA3rA",defaultMessage:"There was a problem completing this request."})))}})}}))},onDismissModal:function(){return l.TeamsWebActionsLogger.log("canceled_invite_team_members",{source:this.props.source}),"function"==typeof this.props.onDismiss?this.props.onDismiss():void 0},onMembersFormChange:function(){return this.setState({canProceed:this._canProceed()})},_getAcceptButtonText:function(){return this.props.isMemberInviteExperiment?f.intl.formatMessage({id:"sTZgnw",defaultMessage:"Invite"}):f.intl.formatMessage({id:"Rv3nXX",defaultMessage:"{count, plural, one{Send invite} other{Send invites}}"},{count:(null!=this.refs.members?this.refs.members.getContacts().length:void 0)||0})},render:function(){var e=this.props.isMemberInviteExperiment?f.intl.formatMessage({id:"wJfr5U",defaultMessage:"Invite people to {team_name}"},{team_name:b.team_name}):f.intl.formatMessage({id:"nvkATX",defaultMessage:"Invite members to your team"});return i.default.createElement(m.Modal,{title:e,acceptButtonText:this._getAcceptButtonText(),dismissButtonText:f.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),onAccept:this.onClickInvite,onDismiss:this.onDismissModal,acceptButtonDisabled:!this.state.canProceed,submitting:this.state.submitting,className:"limited-team-invite-modal",ref:"modal"},this.props.isMemberInviteExperiment&&i.default.createElement(h.Text,{size:"standard",color:"inherit"},f.intl.formatMessage({id:"FVq+2q",defaultMessage:"Invite people to the team without waiting for admin approval"})),i.default.createElement(c.LimitedTeamInviteForm,{ref:"members",user:b.work_user,onChange:this.onMembersFormChange,errorMessageSpaceFixed:!0,populatedCustomMessage:this.props.populatedCustomMessage,populatedContacts:this.props.populatedContacts,autofocusTokenizer:!0,memberInviteLimit:this.props.memberInviteLimit,maxTeamSize:this.props.maxTeamSize,includeCustomMessage:this.props.includeCustomMessage,emailPlaceholder:this.props.isMemberInviteExperiment?f.intl.formatMessage({id:"hK3Vsp",defaultMessage:"Email"}):void 0}))}});t.default=M})),define("modules/clean/teams/suggest_invites_modal",["require","exports","tslib","react","modules/clean/ajax","modules/clean/analytics","modules/clean/react/modal","modules/clean/teams/limited_team_invite_form","modules/clean/viewer","modules/core/browser","modules/core/i18n","modules/core/notify"],(function(e,t,n,s,i,a,o,r,l,u,m,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=n.__importDefault(s),i=n.__importStar(i),u=n.__importStar(u);var d=s.default.createElement,_=l.Viewer.get_viewer(),f=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={canProceed:!1,submitting:!1},t._canProceed=function(){return null==t.refs.members&&t.props.populatedContacts&&t.props.populatedContacts.length>0||(null!=t.refs.members?t.refs.members.areAllContactsValid():void 0)&&!(null!=t.refs.members?t.refs.members.isEmpty():void 0)},t.onClickInvite=function(e){return e.preventDefault(),t.refs.members.getFinalData((function(e){var n=e.emails,s=t._canProceed();if(t.setState({canProceed:s}),s)return t.setState({submitting:!0}),i.WebRequest({url:"/team/manage/suggest-members",data:{emails:n,url:u.get_href(),source:t.props.source},complete:function(){return t.setState({submitting:!1})},success:function(){var e=null;return e=n.length>1?m.intl.formatMessage({id:"fpr7DD",defaultMessage:"Thanks for your suggestions! We’ve sent them to the team admin."}):m.intl.formatMessage({id:"WPlbud",defaultMessage:"Thanks for your suggestion! We’ve sent it to the team admin."}),c.Notify.success(e),t.refs.modal.close()}})}))},t.onClickCancel=function(){var e=t.props,n=e.numProvisionedLicenses,s=e.teamId,i=e.teamMembersLimit,o=e.teamType;a.TeamsWebActionsLogger.log("suggest_members_cancel",{license_limit:i,provisioned_licenses:n,team_id:s,team_type:o,url:u.get_href(),source:t.props.source})},t.onMembersFormChange=function(){return t.setState({canProceed:t._canProceed()})},t}return n.__extends(t,e),t.prototype._getTitle=function(){return this.props.membersSendInviteExperimentEnabled?m.intl.formatMessage({id:"wJfr5U",defaultMessage:"Invite people to {team_name}"},{team_name:_.team_name}):m.intl.formatMessage({id:"oyKRm9",defaultMessage:"Suggest {team_name} team members"},{team_name:_.team_name})},t.prototype._getAcceptButton=function(){return this.props.membersSendInviteExperimentEnabled?m.intl.formatMessage({id:"sTZgnw",defaultMessage:"Invite"}):m.intl.formatMessage({id:"cosq0F",defaultMessage:"Send suggestions"})},t.prototype._getSubTitle=function(){return this.props.membersSendInviteExperimentEnabled?m.intl.formatMessage({id:"z5wsaS",defaultMessage:"We’ll invite them once the admin approves"}):m.intl.formatMessage({id:"JLaj68",defaultMessage:"We’ll email your suggestions to your team admin, so they can send out invitations."})},t.prototype._getPlaceholder=function(){return this.props.membersSendInviteExperimentEnabled?m.intl.formatMessage({id:"hK3Vsp",defaultMessage:"Email"}):m.intl.formatMessage({id:"UOL9zS",defaultMessage:"Email addresses"})},t.prototype.render=function(){return void 0===_.work_user?null:d(o.Modal,{className:"no-scroll-modal",title:this._getTitle(),acceptButtonText:this._getAcceptButton(),dismissButtonText:m.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),onAccept:this.onClickInvite,onDismiss:this.onClickCancel,acceptButtonDisabled:!this.state.canProceed,autoFocusPrimaryInput:!1,submitting:this.state.submitting,ref:"modal"},s.default.createElement("div",{className:"suggest_invite_modal_notice"},this._getSubTitle()),s.default.createElement(r.LimitedTeamInviteForm,{ref:"members",user:_.work_user,onChange:this.onMembersFormChange,errorMessageSpaceFixed:!1,includeCustomMessage:!1,emailPlaceholder:this._getPlaceholder(),populatedContacts:this.props.populatedContacts,autofocusTokenizer:!0}))},t.displayName="SuggestInvitesModal",t})(s.default.Component);t.SuggestInvitesModal=f})),define("modules/clean/unity_browse_interface",["require","exports","tslib","modules/clean/unity/check_file_cache","modules/clean/unity/features"],(function(e,t,n,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=n.__importDefault(s);var a=(function(){function e(){}return e.initClass=function(){var e=this;this.BATCH_SIZE_LIMIT=100,this.CHECK_FILES_PADDING=50,this.check_file_callback=function(e){return s.default.set_batch(e)},this.browse_visible_change_callback=function(t,n,s,a){if(t.length){var o=Math.max(0,s-e.CHECK_FILES_PADDING),r=Math.min(t.length-1,a+e.CHECK_FILES_PADDING),l=t.slice(o,+r+1||void 0),u=e._get_files_to_check(l);if(u.length)return e._remove_unneeded_items_from_cache(l),(function(){for(var t=[];u.length;){var s=u.splice(0,e.BATCH_SIZE_LIMIT);t.push(i.UnityFeatures.check_file_batch(s,n,e.check_file_callback))}return t})()}},this._get_files_to_check=function(e){return(function(){for(var t=[],n=0,i=Array.from(e);n<i.length;n++){var a=i[n];a.bytes>=0&&!0!==s.default.is_cached_and_locally_available(a.ns_id,a.ns_path)&&t.push(a)}return t})()},this._remove_unneeded_items_from_cache=function(e){for(var t={},n=0,a=Array.from(e);n<a.length;n++){var o=a[n];if(!0===s.default.is_cached_and_locally_available(o.ns_id,o.ns_path)){var r=s.default.get(o.ns_id,o.ns_path);t[i.UnityFeatures.server_path(o.ns_id,o.ns_path)]=r}}return s.default.clear(),s.default.set_batch(t)}},e})();a.initClass();var o=a;s.default&&i.UnityFeatures.isUnitySupported()||(o=void 0),t.default=o})),define("modules/clean/sharing/sharing_model_modals",["require","exports","tslib","jquery","modules/clean/analytics"],(function(e,t,n,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=n.__importDefault(s),i=n.__importStar(i),t.initialize_module=function(t){return i.LegacySharingVortexLogger.log("initialize-sharing-model-modals"),t.instances.forEach((function(t){return s.default("#"+t.accept_button_dom_id).on("click",(function(t){return new Promise((function(t,n){e(["legacy_js/dropbox"],t,n)})).then(n.__importStar).then((function(e){var t=e.SharingModel,n=e.Modal;return t.do_remove(n.vars)}))})),s.default("#"+t.cancel_button_dom_id).on("click",(function(t){return new Promise((function(t,n){e(["legacy_js/dropbox"],t,n)})).then(n.__importStar).then((function(e){return e.Modal.hide()}))}))}))}}));
//# sourceMappingURL=pkg-legacy-ag.min.js-vflwB56hi.map