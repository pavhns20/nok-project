define("modules/clean/account/change_email_modals",["require","exports","tslib","create-react-class","react","react-dom","react-dom-factories","prop-types","jquery","modules/clean/account/email_verify_reasons","modules/clean/account/set_password_modal","modules/clean/form","modules/clean/react/input_dig","modules/clean/react/modal_controller","modules/clean/react/modal_dig","modules/clean/viewer","modules/core/i18n","modules/core/notify"],(function(e,t,i,a,r,s,n,o,l,u,d,m,f,c,p,g,h,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=i.__importDefault(a),r=i.__importDefault(r),s=i.__importStar(s),n=i.__importDefault(n),o=i.__importStar(o),l=i.__importDefault(l),u=i.__importStar(u),m=i.__importStar(m),f=i.__importStar(f),c=i.__importStar(c);var y=r.default.createElement,v=r.default.createFactory(f.text),M=r.default.createFactory(f.password),b=[u.ADD_COMMENT,u.SUBSCRIBE_TO_COMMENTS,u.SHARE_FILEVIEWER],w=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getSSOWarning=function(){var e=g.Viewer.get_viewer().is_paired&&"work"===t.props.user.role,i=t.props.user.sso_required;return e&&i?n.default.div({className:"db-modal-message"},h.intl.formatMessage({id:"OcwzuU",defaultMessage:"Your {team} Dropbox uses single sign-on. If you change your email address you may not be able to sign in."},{team:g.Viewer.get_viewer().team_name})):null},t.getInboxWarning=function(){var e=g.Viewer.get_viewer().is_paired;return 0===t.props.inboxCount?null:e&&"personal"===t.props.user.role?n.default.div({className:"db-modal-message"},h.intl.formatMessage({id:"ykCKqp",defaultMessage:"{count, plural, one{Your {count} existing shared folder invitation in your personal Dropbox will be removed if you change your email address.} other{Your {count} existing shared folder invitations in your personal Dropbox will be removed if you change your email address.}}"},{count:t.props.inboxCount})):e&&"work"===t.props.user.role?n.default.div({className:"db-modal-message"},h.intl.formatMessage({id:"ocI36k",defaultMessage:"{count, plural, one{Your {count} existing shared folder invitation in your {team} Dropbox will be removed if you change your email address.} other{Your {count} existing shared folder invitations in your {team} Dropbox will be removed if you change your email address.}}"},{count:t.props.inboxCount,team:g.Viewer.get_viewer().team_name})):n.default.div({className:"db-modal-message"},h.intl.formatMessage({id:"xt5oUg",defaultMessage:"{count, plural, one{Your {count} existing shared folder invitation will be removed if you change your email address.} other{Your {count} existing shared folder invitations will be removed if you change your email address.}}"},{count:t.props.inboxCount}))},t.showChange=function(e){return e.preventDefault(),t.refs.modal.close(),"function"==typeof t.props.onContinue?t.props.onContinue():void 0},t}return i.__extends(t,e),t.prototype.render=function(){return y(p.Modal,{title:h.intl.formatMessage({id:"yU6FXl",defaultMessage:"Warning!"}),acceptButtonText:h.intl.formatMessage({id:"ARhWBm",defaultMessage:"Continue anyway"}),dismissButtonText:h.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),onAccept:this.showChange,ref:"modal",style:"default-maestro"},this.getSSOWarning(),this.getInboxWarning())},t.displayName="ChangeEmailWarningModal",t.propTypes={user:o.object,inboxCount:o.number,onContinue:o.func},t})(r.default.Component);t.ChangeEmailWarningModal=w;var E=a.default({displayName:"ChangeEmailModal",mounted:!1,propTypes:{user:o.object,onChange:o.func,onVerificationCheck:o.func,fromCheckup:o.bool,reason:o.string},getInitialState:function(){return{submitting:!1,errors:{},userConfirmedSetPassword:!1}},render:function(){var e=this;return this.props.user.has_never_set_password&&!this.state.userConfirmedSetPassword?y(d.SetPasswordModal,{email:this.props.user.email,reason:h.intl.formatMessage({id:"JNMhbv",defaultMessage:"For your security, Dropbox requires you to set a password to change your email."}),onUserConfirm:function(){return e.setState({userConfirmedSetPassword:!0})},closeOnConfirm:!1}):Array.from(b).includes(this.props.reason)?y(p.Modal,{title:h.intl.formatMessage({id:"+8WJrK",defaultMessage:"Update ‘{email}’"},{email:this.props.user.email}),className:"change-email-modal--maestro",acceptButtonText:h.intl.formatMessage({id:"p0ZP1q",defaultMessage:"Update email"}),dismissButtonText:h.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),onAccept:this.handleSubmit,submitting:this.state.submitting,ref:"modal",style:"default-maestro"},n.default.form({action:"/account/change_email",className:"change-email-form",onSubmit:this.handleSubmit,onKeyDown:this.handleKey,ref:"form"},n.default.div({className:"change-email-message"},this.getPrompt()),n.default.div({className:"change-email-inputs"},n.default.div({className:"change-email-input"},n.default.div({className:"change-email-input-label"},h.intl.formatMessage({id:"mMKYfC",defaultMessage:"New email"})),v({name:"email",label:h.intl.formatMessage({id:"mx5U0y",defaultMessage:"you@mail.com"}),error:this.state.errors.email,autoComplete:"off"})),n.default.div({className:"change-email-input"},n.default.div({className:"change-email-input-label"},h.intl.formatMessage({id:"VvZ36k",defaultMessage:"Confirm email"})),v({name:"confirm_email",label:h.intl.formatMessage({id:"mx5U0y",defaultMessage:"you@mail.com"}),error:this.state.errors.confirm_email,autoComplete:"off"})),n.default.div({className:"change-email-input"},n.default.div({className:"change-email-input-label"},h.intl.formatMessage({id:"PItzXQ",defaultMessage:"Dropbox password"})),M({name:"password",label:h.intl.formatMessage({id:"TpeyP2",defaultMessage:"Minimum 5 characters"}),error:this.state.errors.password,autoComplete:"off"})),n.default.input({type:"hidden",name:"_subject_uid",value:this.props.user.id}),n.default.input({type:"hidden",name:"from_checkup",value:!!this.props.fromCheckup})))):y(p.Modal,{title:h.intl.formatMessage({id:"+8WJrK",defaultMessage:"Update ‘{email}’"},{email:this.props.user.email}),className:"change-email-modal",acceptButtonText:h.intl.formatMessage({id:"p0ZP1q",defaultMessage:"Update email"}),dismissButtonText:h.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),onAccept:this.handleSubmit,submitting:this.state.submitting,ref:"modal"},n.default.form({action:"/account/change_email",className:"change-email-form",onSubmit:this.handleSubmit,onKeyDown:this.handleKey,ref:"form"},n.default.div({},this.getPrompt()),n.default.div({className:"change-email-inputs"},v({name:"email",label:h.intl.formatMessage({id:"mMKYfC",defaultMessage:"New email"}),error:this.state.errors.email,autoComplete:"off"}),v({name:"confirm_email",label:h.intl.formatMessage({id:"VvZ36k",defaultMessage:"Confirm email"}),error:this.state.errors.confirm_email,autoComplete:"off"}),M({name:"password",label:h.intl.formatMessage({id:"PItzXQ",defaultMessage:"Dropbox password"}),error:this.state.errors.password,autoComplete:"off"}),n.default.input({type:"hidden",name:"_subject_uid",value:this.props.user.id}),n.default.input({type:"hidden",name:"from_checkup",value:!!this.props.fromCheckup}))))},componentDidMount:function(){this.mounted=!0},componentWillUnmount:function(){this.mounted=!1},handleKey:function(e){if(13===e.keyCode&&"INPUT"===(null!=e.target?e.target.tagName:void 0))return this.handleSubmit(e)},handleSubmit:function(e){if(e.preventDefault(),!this.state.submitting)return this.submit()},submit:function(){this.setState({submitting:!0,errors:{}});var e=l.default(s.findDOMNode(this.refs.form));return m.submit(e,this._success,this._error,this._complete)},_success:function(e){var t=this.refs.form,i=l.default(s.findDOMNode(t)).find('input[name="email"]').val(),a="NEEDS_VERIFICATION"===e;return c.unmountModal(),a?"function"==typeof this.props.onVerificationCheck?this.props.onVerificationCheck(i):void 0:"function"==typeof this.props.onChange?this.props.onChange(i):void 0},_error:function(e){return"string"==typeof e?_.Notify.error(e):e?this.setState({errors:e}):_.Notify.error(h.intl.formatMessage({id:"bLA3rA",defaultMessage:"There was a problem completing this request."}))},_complete:function(){if(this.mounted)return this.setState({submitting:!1})},getPrompt:function(){var e=g.Viewer.get_viewer().is_paired,t=this.props.user.email_verified;return e&&"personal"===this.props.user.role?t?h.intl.formatMessage({id:"C8/58i",defaultMessage:"Enter a new email address for your personal Dropbox. You’ll need to verify your new email address in order to finish updating your personal email."}):h.intl.formatMessage({id:"NQu9yB",defaultMessage:"Enter a new email address for your personal Dropbox."}):e&&"work"===this.props.user.role?t?h.intl.formatMessage({id:"cKlOYj",defaultMessage:"Enter a new email address for your {team} Dropbox. You’ll need to verify your new email address in order to finish updating your {team} email."},{team:g.Viewer.get_viewer().team_name}):h.intl.formatMessage({id:"NQu9yB",defaultMessage:"Enter a new email address for your personal Dropbox."}):t?h.intl.formatMessage({id:"s+lUgT",defaultMessage:"You’ll need to verify your new email address in order to finish updating your email."}):""}});t.ChangeEmailModal=E})),define("modules/clean/account/email",["require","exports","tslib","react","jquery","modules/clean/account/change_email_modals","modules/clean/account/email_verify","modules/clean/account/verify_email_modals","modules/clean/react/modal_controller","modules/clean/viewer","modules/core/browser","modules/core/exception","modules/core/i18n","modules/core/notify","modules/core/uri"],(function(e,t,i,a,r,s,n,o,l,u,d,m,f,c,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=i.__importDefault(a),r=i.__importDefault(r),n=i.__importDefault(n),l=i.__importStar(l),d=i.__importStar(d),m=i.__importStar(m);var g=a.default.createElement,h=(function(){function e(e){this.role=e,this.role?this.user=u.Viewer.get_viewer().get_user_by_role(this.role,!0):this.user=u.Viewer.get_viewer().deprecated_first_user_in_the_cookie,this.email_to_verify=null!=this.user?this.user.email:void 0,this.verify_for_change=!1}return e.initClass=function(){this.prototype.polling=!1,this.prototype.show_resend=!1},e.getForRole=function(t){return this.initalized||(this.legacy=new e(null),this.personal=new e("personal"),this.work=new e("work"),null!=this.reason&&this.propagate_reason(),this.initalized=!0),"personal"===t?this.personal:"work"===t?this.work:this.legacy},e.get_for_user=function(e){return this.getForRole(e.role)},e.reset=function(){return this.initalized=!1},e.set_reason=function(e){if(this.reason=e,this.initalized)return this.propagate_reason()},e.propagate_reason=function(){var e=this;return[this.legacy,this.personal,this.work].map((function(t){return t.reason=e.reason}))},e.prototype.set_email_to_verify=function(e){return this.email_to_verify=e,this.verify_for_change=this.email_to_verify!==this.user.email},e.prototype.send_email=function(e,t){return n.default.send_verification_email(this.user,this.email_to_verify,e,t)},e.prototype.send_email_and_show_resend_modal=function(e,t){var i=this;return this.send_email(e,(function(){return i.email_sent(t,e,!0)}))},e.prototype.flash_email_sent_notification=function(){return c.Notify.success(f.intl.formatMessage({id:"BwpcMZ",defaultMessage:"Verification email sent to {email}"},{email:this.email_to_verify}))},e.prototype.ensure_polling=function(e){var t=this;return n.default.listen_for_verification(this.user,this.email_to_verify,(function(){return null!=e?(t.user.is_email_verified=!0,e()):d.reload()}))},e.prototype.email_sent=function(e,t,i){return this.show_resend=!0,this.show(null,t),i&&this.flash_email_sent_notification(),this.ensure_polling(e)},e.prototype.show=function(t,i){return null!=i&&e.set_reason(i),this.show_resend?this.show_resend_verify_modal(i):this.show_verify_modal(t,i)},e.prototype.show_verify_modal=function(t,i){var a=this;return null==i&&(i=this.verify_for_change?"change_email":e.reason),null==i&&m.reportStack("Email Verification reason should not be null",{severity:m.SEVERITY.NONCRITICAL,tags:["email_verify:null_reason"]}),l.mountModal(g(o.VerifyEmailModal,{user:this.user,reason:i,email:this.email_to_verify,onShowChange:function(){return _.show(a.user,i)},onEmailSent:function(){return e.get_for_user(a.user).email_sent(t,i,!0)}}))},e.prototype.show_resend_verify_modal=function(t){var i=this;return null==t&&(t=this.verify_for_change?"change_email":e.reason),null==t&&m.reportStack("Email Verification reason should not be null",{severity:m.SEVERITY.NONCRITICAL,tags:["email_verify:null_reason"]}),l.mountModal(g(o.ResendVerifyEmailModal,{user:this.user,email:this.email_to_verify,reason:t,onShowChange:function(){return _.show(i.user,t)},onEmailSent:function(){return e.get_for_user(i.user).email_sent(null,t,!0)}}))},e.prototype.verified_or_send_and_show=function(e,t){var i=this;return this.user.is_email_verified?("function"==typeof t&&t(),!0):(this.send_email(e,(function(){return i.email_sent((function(){return i.close(),"function"==typeof t?t():void 0}),e)})),!1)},e.prototype.verified_or_show=function(e){return!(!this.user||!this.user.is_email_verified)||(this.show(null,e),!1)},e.prototype.show_sent_modal=function(){return l.mountModal(g(o.VerifyEmailSentModal,{email:this.email_to_verify}))},e.prototype.show_verified_modal=function(){return l.mountModal(g(o.EmailVerifiedModal,{reason:e.REASON,email:this.email_to_verify}))},e.prototype.show_verified_and_changed_modal=function(){return l.mountModal(g(o.ChangedEmailVerifiedModal,{user:this.user,email:this.email_to_verify}))},e.prototype.close=function(){return l.unmountModal()},e})();t.EmailVerification=h,h.initClass();var _={inbox_counts:{},set_inbox_counts:function(e){return r.default.extend(this.inbox_counts,e)},show:function(e,t){var i=u.Viewer.get_viewer().get_user_by_id(e);return this._should_show_warning(i)?this._show_warning_modal(i,t):this._show_change_modal(i,t)},_should_show_warning:function(e){var t=u.Viewer.get_viewer().is_paired&&"work"===e.role&&e.sso_required,i=this.inbox_counts[e.id]>0;return t||i},_show_change_modal:function(e,t){return l.mountModal(g(s.ChangeEmailModal,{user:e,reason:t,onChange:function(t){return _.trigger_change(e,t),"/account"!==p.URI.parse(d.get_href()).getPath()?d.redirect("/home?send_verification_email=1"):t!==e.email?d.reload():void 0},onVerificationCheck:function(i){_.trigger_change(e,i,e.is_email_verified);var a=h.get_for_user(e);return a.set_email_to_verify(i),a.email_sent(null,t,!0)}}))},_show_warning_modal:function(e,t){var i=this;return l.mountModal(g(s.ChangeEmailWarningModal,{user:e,inboxCount:this.inbox_counts[e.id],onContinue:function(){return i._show_change_modal(e,t)}}))},listen_for_change:function(e,t){var i=this._email_change_event_for_user(e);return r.default(document).on(i,t)},trigger_change:function(e,t,i){var a=this._email_change_event_for_user(e);return r.default(document).trigger(a,[t,i])},_email_change_event_for_user:function(e){return"db:email_changed:"+e.id}};t.ChangeEmail=_,t.initialize_module=function(e){h.set_reason(e.reason),_.set_inbox_counts(e.inbox_counts)}})),define("modules/clean/account/email_verify",["require","exports","tslib","modules/clean/ajax"],(function(e,t,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=i.__importStar(a);var r={_POLLING:{},send_verification_email:function(e,t,i,r){return a.WebRequest({url:"/sendverifyemail",data:{email:t,reason:i},success:function(){return r()},subject_user:e})},check_verification:function(e,t,i,r){return a.SilentBackgroundRequest({url:"/isemailverified",data:{email:t},success:function(e){return"ok"===e?i():r()},subject_user:e})},listen_for_verification:function(e,t,i){var a=e.id+":"+t;if(!this._POLLING[a])return this._POLLING[a]=!0,this._poll_for_verification(e,t,i)},_poll_for_verification:function(e,t,i){var a=this;return this.check_verification(e,t,i,(function(){return setTimeout((function(){return a._poll_for_verification(e,t,i)}),4e3)}))}};t.default=r})),define("modules/clean/account/set_password_modal",["require","exports","tslib","react","modules/clean/ajax","modules/clean/react/modal_controller","modules/clean/react/modal_dig","modules/core/i18n","modules/core/notify"],(function(e,t,i,a,r,s,n,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=i.__importDefault(a),r=i.__importStar(r),s=i.__importStar(s);var u=(function(e){function t(t){var i=e.call(this,t)||this;return i.state={sent:!1,submitting:!1},i}return i.__extends(t,e),t.prototype.resetResponseSuccess=function(e){"OK"===e.status?(l.Notify.success(o.intl.formatMessage({id:"SSwbgo",defaultMessage:"Sent an email to {email}"},{email:this.props.email})),this.setState({sent:!0,submitting:this.state.submitting})):this.resetEmailError()},t.prototype.resetEmailError=function(){l.Notify.error(o.intl.formatMessage({id:"fUWqZP",defaultMessage:"Could not send email. Please try again"}))},t.prototype.sendResetEmail=function(e){var t=this;e.preventDefault(),this.setState({sent:this.state.sent,submitting:!0}),r.FormWebRequest({url:"/ajax_reset_start",data:{email:this.props.email},success:function(e){return t.resetResponseSuccess(JSON.parse(e))},error:function(){return t.resetEmailError()},complete:function(){t.setState({sent:t.state.sent,submitting:!1})}})},t.prototype.userConfirmSetPassword=function(){this.props.onUserConfirm?this.props.onUserConfirm():s.unmountModal()},t.showInstance=function(e){s.mountModal(a.default.createElement(t,i.__assign({},e)))},t.prototype.render=function(){var e=this,t=o.intl.formatMessage({id:"W/iS2m",defaultMessage:"Dropbox will send an email to {email} with further instructions. You may need to check your spam folder or unblock no-reply@dropbox.com."},{email:this.props.email}),i=this.state.sent?o.intl.formatMessage({id:"Vep7Pr",defaultMessage:"Resend email"}):o.intl.formatMessage({id:"YZqQHq",defaultMessage:"Send email"}),r=o.intl.formatMessage({id:"WLFHmg",defaultMessage:"I’ve set a password"}),s=this.sendResetEmail.bind(this),l=this.userConfirmSetPassword.bind(this),u=a.default.createElement(n.ModalButtons,null,a.default.createElement(n.ModalButton,{variant:"primary",disabled:!this.state.sent,onClick:l},r),a.default.createElement(n.ModalButton,{variant:"opacity",onClick:s},i));return a.default.createElement(n.Modal,{title:o.intl.formatMessage({id:"6EcMoR",defaultMessage:"Set Password"}),onAccept:function(){return e.userConfirmSetPassword()},buttonComponent:u},a.default.createElement("p",null,this.props.reason),a.default.createElement("p",null,t))},t})(a.default.Component);t.SetPasswordModal=u})),define("modules/clean/account/verify_email_modals",["require","exports","tslib","create-react-class","prop-types","react","react-dom-factories","modules/clean/account/email_verify","modules/clean/account/email_verify_reasons","modules/clean/analytics","modules/clean/react/modal_controller","modules/clean/react/modal_dig","modules/clean/viewer","modules/core/i18n"],(function(e,t,i,a,r,s,n,o,l,u,d,m,f,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=i.__importDefault(a),r=i.__importStar(r),s=i.__importDefault(s),n=i.__importDefault(n),o=i.__importDefault(o),l=i.__importStar(l),d=i.__importStar(d);var p=s.default.createElement,g=[l.ADD_COMMENT,l.SUBSCRIBE_TO_COMMENTS,l.SHARE_FILEVIEWER],h={renderChangeEmail:function(){return s.default.createElement("span",{className:"change-email-before-verify",onClick:this.showChangeEmail},c.intl.formatMessage({id:"O7A3yo",defaultMessage:"Update email address"}))}},_=a.default({displayName:"VerifyEmailModal",mixins:[h],propTypes:{user:r.object,reason:r.string,email:r.string,onEmailSent:r.func,onShowChange:r.func},_getStyle:function(){return Array.from(g).includes(this.props.reason)?"default-maestro":"default"},render:function(){var e={reason:this.props.reason};return u.UserActivityLogger.log("web","email_verify_shown",e),p(m.Modal,{title:c.intl.formatMessage({id:"xna7ek",defaultMessage:"Verify your email address"}),className:"verify-email",acceptButtonText:c.intl.formatMessage({id:"YZqQHq",defaultMessage:"Send email"}),dismissButtonText:c.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),onAccept:this.sendEmail,ref:"modal",style:this._getStyle(),altAction:this.renderChangeEmail()},n.default.div({className:"db-modal-message"},n.default.div({},this.getPrompt())))},sendEmail:function(e){return e.preventDefault(),o.default.send_verification_email(this.props.user,this.props.email,this.props.reason,this.emailSent)},close:function(){d.unmountModal()},emailSent:function(){return this.close(),"function"==typeof this.props.onEmailSent?this.props.onEmailSent():void 0},showChangeEmail:function(e){var t={reason:this.props.reason};return u.UserActivityLogger.log("web","email_verify_change_first",t),e.preventDefault(),this.close(),"function"==typeof this.props.onShowChange?this.props.onShowChange():void 0},getPrompt:function(){switch(this.props.reason){case l.ADD_COMMENT:return c.intl.formatMessage({id:"MUsgY7",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can add comments. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.SUBSCRIBE_TO_COMMENTS:return c.intl.formatMessage({id:"6V/0tc",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can subscribe. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.SHARE_FOLDER:return c.intl.formatMessage({id:"/9wYHW",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to share folders. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.NEW_DFB_TEAM_TRY:case l.NEW_DFB_TEAM_BUY:return c.intl.formatMessage({id:"VBZAUX",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to add members to your team. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.SHMODAL:case l.SHARE_FILEVIEWER:return c.intl.formatMessage({id:"RjbzMT",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to share links. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.CREATE_API_APP:return c.intl.formatMessage({id:"JOloNw",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can register an API app. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.PUBLIC_FOLDER:return c.intl.formatMessage({id:"7yrmLd",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to enable your Public folder. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.CHANGE_EMAIL:var e=f.Viewer.get_viewer().is_paired;return e&&"personal"===this.props.user.role?c.intl.formatMessage({id:"Ffd3Cn",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to finish updating your personal email. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email}):e&&"work"===this.props.user.role?c.intl.formatMessage({id:"KwhW+R",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to finish updating your {team} email. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email,team:f.Viewer.get_viewer().team_name}):c.intl.formatMessage({id:"AK48XH",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to finish updating your email. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.CREATE_FILE_COLLECTOR:return c.intl.formatMessage({id:"RC9i/z",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> to create file requests. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.GIFT_BUY:return c.intl.formatMessage({id:"KbGi73",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can send gifts to your friends. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.REFER_FRIENDS:return c.intl.formatMessage({id:"1gSGkC",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can invite friends. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.CREATE_TEAM:return c.intl.formatMessage({id:"RIYXok",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can create or join a team. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});case l.CLOUD_DOCS:return c.intl.formatMessage({id:"Owrqe1",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can open or create this document type. It’s as simple as clicking the link in the verification email we send to you."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});default:return c.intl.formatMessage({id:"CIqO2V",defaultMessage:"Verify your email address at <strong>{email}</strong> to share folders and ensure your account can be recovered."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email})}}});t.VerifyEmailModal=_;var y=a.default({displayName:"ResendVerifyEmailModal",mixins:[h],propTypes:{user:r.object,email:r.string,reason:r.string,onEmailSent:r.func,onShowChange:r.func},_getStyle:function(){return this._isMaestroDesign?"default-maestro":"default"},_isMaestroDesign:function(){return Array.from(g).includes(this.props.reason)},render:function(){var e={reason:this.props.reason};return u.UserActivityLogger.log("web","email_verify_resend_shown",e),p(m.Modal,{title:c.intl.formatMessage({id:"xna7ek",defaultMessage:"Verify your email address"}),ref:"modal",style:this._getStyle(),altAction:this.renderChangeEmail(),acceptButtonText:c.intl.formatMessage({id:"Vep7Pr",defaultMessage:"Resend email"}),onAccept:this.sendEmail,dismissButtonText:c.intl.formatMessage({id:"6bRQ0U",defaultMessage:"Done"}),onDismiss:this.close},n.default.div({className:"db-modal-message"},n.default.div({},this.getPrompt())))},close:function(){d.unmountModal()},showChangeEmail:function(e){var t={reason:this.props.reason};return u.UserActivityLogger.log("web","email_verify_resend_change_first",t),e.preventDefault(),this.close(),"function"==typeof this.props.onShowChange?this.props.onShowChange():void 0},sendEmail:function(e){return e.preventDefault(),o.default.send_verification_email(this.props.user,this.props.email,this.props.reason,this.emailSent)},emailSent:function(){return this.close(),"function"==typeof this.props.onEmailSent?this.props.onEmailSent():void 0},getPrompt:function(){var e=f.Viewer.get_viewer().is_paired;return this.props.reason===l.REFER_FRIENDS?c.intl.formatMessage({id:"0EC+2K",defaultMessage:"Dropbox needs to verify your email address <strong>{email}</strong> before you can invite friends. Check your inbox and click the link in the email to verify your address. If you can’t find it, check your spam folder."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email}):this.props.reason!==l.CHANGE_EMAIL?c.intl.formatMessage({id:"4cGCaz",defaultMessage:"Dropbox has sent a verification email to <strong>{email}</strong>. Check your inbox and click on the link in the email to verify your address. If you can't find it, check your spam folder or click the button to resend the email."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email}):e&&"personal"===this.props.user.role?c.intl.formatMessage({id:"IGvssg",defaultMessage:"Dropbox has sent a verification email to <strong>{email}</strong>. Check your inbox and click on the link in the email to finish updating your personal email. If you can't find it, check your spam folder or click the button to resend the email."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email}):e&&"work"===this.props.user.role?c.intl.formatMessage({id:"lyCL5/",defaultMessage:"Dropbox has sent a verification email to <strong>{email}</strong>. Check your inbox and click on the link in the email to finish updating your {team} email. If you can't find it, check your spam folder or click the button to resend the email."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email,team:f.Viewer.get_viewer().team_name}):c.intl.formatMessage({id:"R42wB6",defaultMessage:"Dropbox has sent a verification email to <strong>{email}</strong>. Check your inbox and click on the link in the email to finish updating your email. If you can't find it, check your spam folder or click the button to resend the email."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email})}});t.ResendVerifyEmailModal=y;var v=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){var e=c.intl.formatMessage({id:"4cGCaz",defaultMessage:"Dropbox has sent a verification email to <strong>{email}</strong>. Check your inbox and click on the link in the email to verify your address. If you can't find it, check your spam folder or click the button to resend the email."},{strong:function(e){return s.default.createElement("strong",null,e)},email:this.props.email});return p(m.Modal,{title:c.intl.formatMessage({id:"HLFmts",defaultMessage:"Verification email sent!"}),acceptButtonText:c.intl.formatMessage({id:"6bRQ0U",defaultMessage:"Done"})},n.default.div({},e))},t.displayName="VerifyEmailSentModal",t.propTypes={email:r.string},t})(s.default.Component);t.VerifyEmailSentModal=v;var M=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getPrompt=function(){switch(t.props.reason){case l.CREATE_TEAM:return c.intl.formatMessage({id:"N3E0i0",defaultMessage:"Thanks for verifying your email address: <strong>{email}</strong>. Now you can invite members to your team."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email});case l.SHARE_FOLDER:return c.intl.formatMessage({id:"gIys9n",defaultMessage:"Thanks for verifying your email address: <strong>{email}</strong>. You can now share and receive files on Dropbox."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email});case l.CREATE_API_APP:return c.intl.formatMessage({id:"p6s3Z6",defaultMessage:"Thanks for verifying your email address: <strong>{email}</strong>. You can now register API apps."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email});case l.PUBLIC_FOLDER:return c.intl.formatMessage({id:"xNtgXg",defaultMessage:"Thanks for verifying your email address. You can now enable the Public folder for your <strong>{email}</strong> Dropbox."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email});default:return c.intl.formatMessage({id:"QVjnVd",defaultMessage:"Thanks for verifying your email address: <strong>{email}</strong>."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email})}},t}return i.__extends(t,e),t.prototype.render=function(){return p(m.Modal,{title:c.intl.formatMessage({id:"dnty4U",defaultMessage:"Your email address is now verified"}),acceptButtonText:c.intl.formatMessage({id:"6bRQ0U",defaultMessage:"Done"})},n.default.div({},this.getPrompt()))},t.displayName="EmailVerifiedModal",t.propTypes={reason:r.string,email:r.string},t})(s.default.Component);t.EmailVerifiedModal=M;var b=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getPrompt=function(){var e=f.Viewer.get_viewer().is_paired;return e&&"personal"===t.props.user.role?c.intl.formatMessage({id:"adehgM",defaultMessage:"Thanks for verifying your email address <strong>{email}</strong>. Your personal account has successfully been changed."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email}):e&&"work"===t.props.user.role?c.intl.formatMessage({id:"2P31GH",defaultMessage:"Thanks for verifying your email address <strong>{email}</strong>. Your {team} account has successfully been changed."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email,team:f.Viewer.get_viewer().team_name}):c.intl.formatMessage({id:"n0cvb8",defaultMessage:"Thanks for verifying your email address <strong>{email}</strong>. Your account has successfully been changed."},{strong:function(e){return s.default.createElement("strong",null,e)},email:t.props.email})},t}return i.__extends(t,e),t.prototype.render=function(){return p(m.Modal,{title:c.intl.formatMessage({id:"dnty4U",defaultMessage:"Your email address is now verified"}),acceptButtonText:c.intl.formatMessage({id:"6bRQ0U",defaultMessage:"Done"})},n.default.div({},this.getPrompt()))},t.displayName="ChangedEmailVerifiedModal",t.propTypes={email:r.string,user:r.object},t})(s.default.Component);t.ChangedEmailVerifiedModal=b}));
//# sourceMappingURL=pkg-account.min.js-vflStYrsj.map