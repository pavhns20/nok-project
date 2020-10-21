define(["require","exports","tslib","react","modules/core/i18n","modules/clean/teams/admin/modals/action_utility_modal","modules/clean/teams/admin/modals/modal_ajax","modules/clean/components/modals/show_modal","modules/clean/viewer"],(function(e,a,t,s,o,i,n,r,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),s=t.__importDefault(s),a.Reset2FAModal=function(e){e.userId;var a=e.userDisplayName,t=e.onRequestClose,n=void 0===t?function(){}:t,r=e.onPrimaryAction,l=void 0===r?function(){}:r,d=e.onSecondaryAction,u=void 0===d?function(){}:d,m=o.intl.formatMessage({id:"qpa1ie",defaultMessage:"Reset two-step verification for {user_display_name}"},{user_display_name:a}),c=o.intl.formatMessage({id:"1tjeem",defaultMessage:"This member will be signed out of dropbox.com immediately, so they can set up two-step verification again."}),_=o.intl.formatMessage({id:"RMV6vY",defaultMessage:"Reset"});return s.default.createElement(i.ActionUtilityModal,{title:m,primaryAction:_,onPrimaryAction:l,onSecondaryAction:u,onRequestClose:n},c)},a.RESET_2FA_URL="/account/team/reset_2fa",a.SUCCESS_NOTIFY=function(e){return o.intl.formatMessage({id:"Mc2g5W",defaultMessage:"Two-step verification reset for {user_display_name}"},{user_display_name:e})},a.Reset2FAModalAction=function(e){var s=e.userId,o=e.userDisplayName,i=t.__rest(e,["userId","userDisplayName"]),r=a.SUCCESS_NOTIFY(o);return n.modalAjax({modal:a.Reset2FAModal,ajax:{url:a.RESET_2FA_URL,data:{user_id:s},subject_user:l.Viewer.get_viewer().work_user},notify:{successNotify:r}})(t.__assign({userId:s,userDisplayName:o},i))},a.showReset2FAModal=function(e){return r.showModal(s.default.createElement(a.Reset2FAModalAction,t.__assign({},e)))}}));
//# sourceMappingURL=reset_2fa_modal.min.js-vflG0QgIh.map