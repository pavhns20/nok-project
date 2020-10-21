define(["require","exports","tslib","react","modules/core/i18n","modules/core/uri","modules/clean/teams/admin/modals/action_utility_modal","modules/clean/components/modals/show_modal","modules/clean/teams/admin/modals/modal_ajax","modules/clean/viewer"],(function(e,a,s,t,o,n,r,l,d,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t=s.__importDefault(t),a.ResetPasswordModal=function(e){var a=e.userId,s=e.userName,l=e.onRequestClose,d=void 0===l?function(){}:l,i=e.onPrimaryAction,u=void 0===i?function(){}:i,c=e.onSecondaryAction,m=void 0===c?function(){}:c,f=o.intl.formatMessage({id:"nVU2en",defaultMessage:"They can still access Dropbox through previously linked devices, however. You can see and unlink those devices on their <a>member page.</a>"},{a:function(e){return a?t.default.createElement("a",{"aria-label":o.intl.formatMessage({id:"nacs1m",defaultMessage:"member page"}),href:new n.URI({path:"/team/admin/members/member",query:{id:a.toString()}}).toString()},e):t.default.createElement("span",null,e)}}),_=o.intl.formatMessage({id:"J+IPZ5",defaultMessage:"<s>This member</s> will have to change their password the next time they sign in to Dropbox or link a new device."},{s:function(e){return t.default.createElement("strong",null,e)}});return t.default.createElement(r.ActionUtilityModal,{title:o.intl.formatMessage({id:"5XVoEE",defaultMessage:"Reset password for {username}"},{username:s}),primaryAction:o.intl.formatMessage({id:"P7deO/",defaultMessage:"Reset Password"}),id:"reset-password-modal",onPrimaryAction:u,onSecondaryAction:m,onRequestClose:d,className:"modal-reset-password"},t.default.createElement("div",null,t.default.createElement("p",null,_),t.default.createElement("p",null,f)))},a.RESET_PASSWORD_URL="/account/team/reset_password",a.SUCCESS_NOTIFY=o.intl.formatMessage({id:"FSZhfb",defaultMessage:"User‘s password reset."}),a.ResetPasswordModalAction=function(e){var t=e.userId,o=e.accountId,n=e.teamAuthParams,r=e.successCallback,l=s.__rest(e,["userId","accountId","teamAuthParams","successCallback"]);return d.modalAjax({modal:a.ResetPasswordModal,ajax:{url:a.RESET_PASSWORD_URL,data:{user_id:t,account_id:o},subject_user:i.Viewer.get_viewer().work_user,teamAuthParams:n},notify:{successNotify:a.SUCCESS_NOTIFY}})(s.__assign({userId:t,accountId:o,teamAuthParams:n,success:r},l))},a.showResetPasswordModal=function(e){return l.showModal(t.default.createElement(a.ResetPasswordModalAction,s.__assign({},e)))}}));
//# sourceMappingURL=reset_password_modal.min.js-vflKRJX11.map