define(["require","exports","tslib","modules/core/i18n","spectrum/modal","modules/clean/react/css","modules/core/browser","react","modules/clean/growth/user_action/tracker","modules/core/uri","modules/clean/analytics","modules/clean/teams/admin/widgets/open_team_join_onboarding_modal/constants"],(function(e,o,n,t,a,i,s,r,l,d,c,m){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),s=n.__importStar(s),r=n.__importDefault(r);var u=(function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.project=m.PROJECT,o}return n.__extends(o,e),o})(l.GrowthUserActionTracker);o.OpenTeamJoinTracker=u;var p=t.intl.formatMessage({id:"uftyLv",defaultMessage:"Quickly add coworkers"}),_=t.intl.formatMessage({id:"iVWGYQ",defaultMessage:"Try this out"}),g=t.intl.formatMessage({id:"G/mBvO",defaultMessage:"Close"}),f=t.intl.formatMessage({id:"VhHjXE",defaultMessage:"Take a look"}),h=new d.URI({path:"/team/admin/settings/membership_approval",query:{show_open_team_join_tooltip:"True"}}),y=(function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.state={isOpen:!0},o.onPrimaryAction=function(){c.TeamsWebActionsLogger.log("continue_open_join_onboarding_modal"),c.TeamsWebActionsLogger.log("show_open_join_setting_tooltip"),s.redirect(h.toString())},o.onSecondaryAction=function(){c.TeamsWebActionsLogger.log("dismiss_open_join_onboarding_modal"),o.setState({isOpen:!1})},o.closeModal=function(){o.setState({isOpen:!1})},o.trackView=function(){var e=o.props.userId;new u(e).track(m.OpenTeamJoinUserAction.ONBOARDING_MODAL_VIEW),c.TeamsWebActionsLogger.log("show_open_join_onboarding_modal")},o}return n.__extends(o,e),o.prototype.render=function(){var e=t.intl.formatMessage({id:"qf0sHf",defaultMessage:"Save yourself some work and let people with an {domains} email join your team automatically."},{domains:this.props.domains.join(", ")});return r.default.createElement(a.UtilityModal,{title:p,onReady:this.trackView,primaryAction:f,onPrimaryAction:this.onPrimaryAction,secondaryAction:g,onSecondaryAction:this.onSecondaryAction,open:this.state.isOpen,onRequestClose:this.closeModal,bodyId:"open-team-join-onboarding-modal",bodyClassName:"open-team-join-onboarding-modal",ariaLabel:"an on-boarding modal to introduce new feature which can set team to auto-join"},r.default.createElement("h1",{className:"open-team-join-onboarding-modal__preheader"},_),r.default.createElement("div",{className:"open-team-join-onboarding-modal__body"},e))},o})(r.default.PureComponent);o.OpenTeamJoinOnboardingModalView=y,o.OpenTeamJoinOnboardingModal=i.requireCssWithComponent(y,["/static/css/team_success/open_team_join/onboarding_modal-vflSGoup_.css"])}));
//# sourceMappingURL=open_team_join_onboarding_modal.min.js-vflDj_4Eg.map