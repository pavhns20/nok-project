define(["require","exports","tslib","react","modules/clean/react/css","modules/core/i18n","modules/core/uri","classnames","dig-components/typography"],(function(e,s,t,i,a,n,r,o,l){"use strict";function m(e){var s=e.role,t=e.newTab,a=e.topMargin,m=e.isEmailInviteJustInTimeLicensingEnabled;return i.default.createElement(l.Text,{color:"faint",size:"small",className:o.default("member-invite-disclosure",{"member-invite-disclosure--top-margin":a})},m?n.intl.formatMessage({id:"nD3QmP",defaultMessage:"Members can also send invites."}):n.intl.formatMessage({id:"p97tP/",defaultMessage:"Members can send invites and add licenses."})," ",i.default.createElement(l.Link,{href:new r.URI({scheme:"https",authority:"www.dropbox.com",path:"/team/admin/settings/membership_approval",query:{role:s,source:"disclosure"}}).toString(),target:t?"_blank":""},n.intl.formatMessage({id:"lbgCXK",defaultMessage:"Change setting"})))}Object.defineProperty(s,"__esModule",{value:!0}),i=t.__importDefault(i),o=t.__importDefault(o),s.MemberInviteDisclosureWithoutCSS=m,s.MemberInviteDisclosure=a.requireCssWithComponent(m,["/static/css/admin/teams/components/member_invite_disclosure-vfldzKoSz.css"])}));
//# sourceMappingURL=member_invite_disclosure.min.js-vflSWVUlT.map