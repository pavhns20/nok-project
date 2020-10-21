define(["require","exports","tslib","react","spectrum/button"],(function(e,t,r,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a);var s=function(e){var t=e.intl,r=e.onClickRetry,s=e.children,o=a.useState(!1),m=o[0],c=o[1],i=r&&function(){c(!0),r()};return a.createElement("div",{className:"sc-comment-stream-error-container"},a.createElement("div",{className:"sc-comment-stream-error-title"},t.formatMessage({id:"xiT5su",defaultMessage:"Couldn’t load comments"})),a.createElement("div",{className:"sc-comment-stream-error-subtext"},s),i&&a.createElement("div",{className:"sc-comment-stream-error-button-container"},a.createElement(n.Button,{onClick:i,disabled:m,variant:"secondary"},t.formatMessage({id:"ns3cFM",defaultMessage:"Reload"}))))};t.CommentStreamError=function(e){return a.createElement(s,Object.assign({},e),e.intl.formatMessage({id:"3j97WR",defaultMessage:"But it’s probably just a fluke. Reload comments or try refreshing the page."}))},t.CommentStreamPermissionsError=function(e){var t=e.intl;return a.createElement(s,{intl:t},t.formatMessage({id:"weHxO6",defaultMessage:"Something went wrong on our end."}))}}));
//# sourceMappingURL=comment_stream_error.min.js-vfloN4DNQ.map