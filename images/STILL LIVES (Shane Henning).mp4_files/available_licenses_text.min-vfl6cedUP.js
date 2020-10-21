define(["require","exports","tslib","react","modules/core/i18n","dig-components/typography"],(function(e,i,n,s,t,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.shouldRenderAvailableLicenses=function(){return!(!this.props.isReseller&&this.props.isSelfServe)||!this.props.isNCCT&&!this.props.isEmailInviteJustInTimeLicensingEnabled},Object.defineProperty(t.prototype,"availableLicenseText",{get:function(){return i.AvailableLicensesStringBuilder.getAvailableLicenseText(this.props)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return this.shouldRenderAvailableLicenses()?s.default.createElement(a.Text,{"data-testid":"available-licenses-text",variant:"label",id:this.props.id,className:this.props.className,size:this.props.textSize,color:this.props.textColor},this.availableLicenseText):null},t.defaultProps={numRemainingLicenses:0,numInvitees:0,isSelfServe:!0,textSize:"small",textColor:"faint"},t})((s=n.__importDefault(s)).default.Component);i.AvailableLicensesText=l,i.AvailableLicensesStringBuilder={getAvailableLicenseText:function(e){var n=e.numInvitees,s=e.numRemainingLicenses,t=e.isReseller,a=e.resellerContact,l=e.isSelfServe;return 0===n?0===s?i.AvailableLicensesStringBuilder.noInviteesNoAvailableLicenses():i.AvailableLicensesStringBuilder.noInviteesHasAvailableLicenses(s):s<0?t?a&&a.name&&a.phone?i.AvailableLicensesStringBuilder.requiresAdditionalLicensesResellerWithContactInfo(n,a.name,a.phone):i.AvailableLicensesStringBuilder.requiresAdditionalLicensesResellerWithoutContactInfo(n):l?i.AvailableLicensesStringBuilder.requiresAdditionalLicensesDefault(n):i.AvailableLicensesStringBuilder.requiresAdditionalLicenseNotSelfServe(n):1===n?0===s?i.AvailableLicensesStringBuilder.singleInviteeNoAvailableLicenses():i.AvailableLicensesStringBuilder.singleInviteeHasAvailableLicenses(s):0===s?i.AvailableLicensesStringBuilder.multiInviteeNoAvailableLicenses():i.AvailableLicensesStringBuilder.multiInviteeHasAvailableLicenses(s)},noInviteesNoAvailableLicenses:function(){return t.intl.formatMessage({id:"iJCr3W",defaultMessage:"You have no licenses available."})},noInviteesHasAvailableLicenses:function(e){return t.intl.formatMessage({id:"HP1brc",defaultMessage:"{numRemainingLicenses, plural, one{You have {numRemainingLicenses} available license.} other{You have {numRemainingLicenses} available licenses.}}"},{numRemainingLicenses:e})},requiresAdditionalLicensesResellerWithContactInfo:function(e,i,n){return t.intl.formatMessage({id:"vUZrvL",defaultMessage:"{numInvitees, plural, one{You need more licenses for this invitation. Contact {resellerName} at {resellerPhone} to add more.} other{You need more licenses for these invitations. Contact {resellerName} at {resellerPhone} to add more.}}"},{numInvitees:e,resellerName:i,resellerPhone:n})},requiresAdditionalLicensesResellerWithoutContactInfo:function(e){return t.intl.formatMessage({id:"B+Z5a5",defaultMessage:"{numInvitees, plural, one{You need more licenses for this invitation. Contact your reseller to add more.} other{You need more licenses for these invitations. Contact your reseller to add more.}}"},{numInvitees:e})},requiresAdditionalLicenseNotSelfServe:function(e){return t.intl.formatMessage({id:"E1J8cw",defaultMessage:"{numInvitees, plural, one{You need more licenses for this invitation. Please contact your account executive to purchase licenses.} other{You need more licenses for these invitations. Please contact your account executive to purchase licenses.}}"},{numInvitees:e})},requiresAdditionalLicensesDefault:function(e){return t.intl.formatMessage({id:"MO3yiv",defaultMessage:"{numInvitees, plural, one{You need more licenses for this invitation.} other{You need more licenses for these invitations.}}"},{numInvitees:e})},singleInviteeNoAvailableLicenses:function(){return t.intl.formatMessage({id:"HfawA2",defaultMessage:"After this invitation, you’ll have no remaining licenses."})},singleInviteeHasAvailableLicenses:function(e){return t.intl.formatMessage({id:"Ihl6eV",defaultMessage:"{numRemainingLicenses, plural, one{After this invitation, you’ll have {numRemainingLicenses} remaining license.} other{After this invitation, you’ll have {numRemainingLicenses} remaining licenses.}}"},{numRemainingLicenses:e})},multiInviteeNoAvailableLicenses:function(){return t.intl.formatMessage({id:"MAKL0W",defaultMessage:"After these invitations, you’ll have no remaining licenses."})},multiInviteeHasAvailableLicenses:function(e){return t.intl.formatMessage({id:"JjwP/n",defaultMessage:"{numRemainingLicenses, plural, one{After these invitations, you’ll have {numRemainingLicenses} remaining license.} other{After these invitations, you’ll have {numRemainingLicenses} remaining licenses.}}"},{numRemainingLicenses:e})}}}));
//# sourceMappingURL=available_licenses_text.min.js-vfl5xK7xj.map