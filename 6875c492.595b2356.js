(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{168:function(e,a,t){"use strict";t.r(a);t(237);var r=t(0),n=t.n(r),l=t(213),c=t(222),o=t(209);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,s=a.name,i=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"'},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',s,'"'),n.a.createElement(o.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},214:function(e,a,t){"use strict";t(51),t(23),t(18),t(17),t(70);var r=t(0),n=t.n(r),l=t(208),c=t.n(l),o=t(207),s=t(210),i=t(211);t(127);a.a=function(e){var a=Object(r.useState)(!1),l=a[0],m=a[1],u=Object(r.useRef)(null),d=Object(o.a)().siteConfig,h=(void 0===d?{}:d).themeConfig.algolia,p=Object(s.b)(),g=Object(i.a)().navigateToSearchPage;var v=function(e){void 0===e&&(e=!0),l||Promise.all([Promise.all([t.e(4),t.e(71)]).then(t.t.bind(null,215,7)),t.e(45).then(t.t.bind(null,216,7))]).then((function(a){var t=a[0].default;m(!0),window.docsearch=t,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,a,t){a.stopPropagation();var r=document.createElement("a");r.href=t.url;var n="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;p.push(n)}}),e&&u.current.focus()}(e)}))},b=Object(r.useCallback)((function(){v(),l&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(r.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(r.useCallback)((function(e){var a="mouseover"!==e.type;v(a)})),_=Object(r.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||g(e.target.value)}));return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:E,onKeyDown:_,ref:u}))}},222:function(e,a,t){"use strict";t(72);var r=t(0),n=t.n(r),l=t(208),c=t.n(l),o=t(206),s=t(209),i=t(231),m=t(128),u=t.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,m,h=e.children,p=e.frontMatter,g=e.metadata,v=e.truncated,b=e.isBlogPostPage,E=void 0!==b&&b,f=g.date,_=g.permalink,N=g.tags,k=g.readingTime,w=p.author,x=p.title,y=p.author_url||p.authorURL,S=p.author_title||p.authorTitle,O=p.author_image_url||p.authorImageURL;return n.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(a=E?"h1":"h2",t=f.substring(0,10).split("-"),r=t[0],l=d[parseInt(t[1],10)-1],m=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},E?x:n.a.createElement(s.a,{to:_},x)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:f,className:u.a.blogPostDate},l," ",m,", ",r," ",k&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},O&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:y,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:O,alt:w})),n.a.createElement("div",{className:"avatar__intro"},w&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:y,target:"_blank",rel:"noreferrer noopener"},w)),n.a.createElement("small",{className:"avatar__subtitle"},S)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(o.a,{components:i.a},h)),(N.length>0||v)&&n.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(s.a,{to:g.permalink,"aria-label":"Read more about "+x},n.a.createElement("strong",null,"Read More")))))}},237:function(e,a,t){var r=t(24).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||t(11)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);