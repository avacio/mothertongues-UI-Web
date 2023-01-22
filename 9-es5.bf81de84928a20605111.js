function _createForOfIteratorHelper(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=_unsupportedIterableToArray(n))){var t=0,e=function(){};return{s:e,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return i=n.done,n},e:function(n){a=!0,r=n},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,t):void 0}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"73jO":function(n,t,e){"use strict";e.r(t),e.d(t,"BrowseModule",(function(){return $}));var o=e("2kYt"),r=e("PCNd"),i=e("sEIs"),a=e("C05f"),c=e("ZTXN"),s=e("kuMc"),g=e("YtkY"),l=e("pKmL"),_=e("EM62"),p=e("29Wa"),d=e("R7+U"),b=e("mFH5"),u=e("PBFl"),C=e("A7yd"),O=e("bFHC"),h=e("wzew"),M=e("s2Ay");function P(n,t){if(1&n&&(_.Tb(0,"mat-option",14),_.Cc(1),_.Sb()),2&n){var e=t.$implicit;_.lc("value",e),_.Bb(1),_.Ec(" ",e," ")}}function m(n,t){if(1&n){var e=_.Ub();_.Tb(0,"li",15),_.Tb(1,"button",16),_.bc("click",(function(){_.uc(e);var n=t.$implicit;return _.fc().scrollTo(n)})),_.Cc(2),_.Sb(),_.Sb()}if(2&n){var o=t.$implicit,r=_.fc();_.Fb("chosen",r.highlightLetter(o)),_.Bb(2),_.Dc(o)}}var x=function(n,t,e){return{startIndex:n,endIndex:t,length:e}};function f(n,t){if(1&n){var e=_.Ub();_.Tb(0,"div",17),_.Tb(1,"mat-toolbar",18),_.Tb(2,"button",19),_.bc("click",(function(){return _.uc(e),_.fc().prevX()})),_.Tb(3,"mat-icon",20),_.Cc(4,"navigate_before"),_.Sb(),_.Tb(5,"span",21),_.Cc(6),_.gc(7,"translate"),_.Sb(),_.Sb(),_.Tb(8,"button",22),_.bc("click",(function(){return _.uc(e),_.fc().prevX()})),_.Tb(9,"mat-icon",20),_.Cc(10,"navigate_before"),_.Sb(),_.Sb(),_.Tb(11,"p",23),_.Cc(12),_.gc(13,"translate"),_.gc(14,"async"),_.gc(15,"async"),_.gc(16,"async"),_.Sb(),_.Tb(17,"button",24),_.bc("click",(function(){return _.uc(e),_.fc().nextX()})),_.Tb(18,"span",25),_.Cc(19),_.gc(20,"translate"),_.Sb(),_.Tb(21,"mat-icon",26),_.Cc(22,"navigate_next"),_.Sb(),_.Sb(),_.Tb(23,"button",27),_.bc("click",(function(){return _.uc(e),_.fc().nextX()})),_.Tb(24,"mat-icon",26),_.Cc(25,"navigate_next"),_.Sb(),_.Sb(),_.Sb(),_.Tb(26,"div",28),_.Pb(27,"mtd-entry-list",29),_.Sb(),_.Sb()}if(2&n){var o,r=_.fc();_.Bb(6),_.Ec("",_.hc(7,4,"mtd.pages.browse.previous")," "),_.Bb(6),_.Dc(_.ic(13,6,"mtd.pages.browse.showing",_.qc(17,x,_.hc(14,9,r.startIndex$)+1,_.hc(15,11,r.startIndex$)+r.currentX.length,null==(o=_.hc(16,13,r.currentEntries$))?null:o.length))),_.Bb(7),_.Dc(_.hc(20,15,"mtd.pages.browse.next")),_.Bb(8),_.lc("entries",r.currentX)}}var w,v,y,k=[{path:"",component:(w=function(){function n(t,e){var o=this;_classCallCheck(this,n),this.bookmarkService=t,this.mtdService=e,this.selectedCategory="words",this.startIndex$=new a.a(0),this.default_shown=8,this.letterSelectOptions={header:"Select a Letter"},this.categorySelectOptions={header:"Select a Category"},this.routeAnimationsElements=l.e,this.unsubscribe$=new c.a,this.displayCategories$=this.mtdService.category_keys$,this.currentEntries$=new a.a(this.mtdService.dataDict_value),this.mtdService.dataDict$.pipe(Object(s.a)(this.unsubscribe$)).subscribe((function(n){o.currentEntries$.next(n),o.initializeEntries()})),this.currentEntries$.pipe(Object(g.a)((function(n){return o.getXFrom(o.startIndex$.value,n)})),Object(s.a)(this.unsubscribe$)).subscribe((function(n){return o.currentX=n})),this.startIndex$.pipe(Object(g.a)((function(n){return o.getXFrom(n,o.currentEntries$.getValue())})),Object(s.a)(this.unsubscribe$)).subscribe((function(n){return o.currentX=n})),this.initializeEntries()}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.unsubscribe$.next()}},{key:"getXFrom",value:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.default_shown;return t.slice(n,n+e)}},{key:"initializeEntries",value:function(){this.letterInit()}},{key:"letterNeverStarts",value:function(n){return this.displayLetters$.pipe(Object(g.a)((function(t){return-1===t.indexOf(n)})))}},{key:"highlightLetter",value:function(n){return this.letters.indexOf(n)===this.currentX[0].sorting_form[0]}},{key:"letterInit",value:function(){var n=this;this.letters=this.mtdService.config_value.L1.lettersInLanguage,this.displayLetters$=this.currentEntries$.pipe(Object(g.a)((function(t){var e,o=[],r=_createForOfIteratorHelper(n.letters);try{for(r.s();!(e=r.n()).done;){var i,a=e.value,c=n.letters.indexOf(a),s=_createForOfIteratorHelper(t);try{for(s.s();!(i=s.n()).done;){var g=i.value;if(g.sorting_form[0]===c){g.firstWordIndex=c,o.push(a);break}}}catch(l){s.e(l)}finally{s.f()}}}catch(l){r.e(l)}finally{r.f()}return o})))}},{key:"prevX",value:function(){var n=this.startIndex$.value;this.startIndex$.next(n-this.default_shown>0?n-=this.default_shown:0)}},{key:"nextX",value:function(){var n=this.startIndex$.value;n+this.default_shown<this.currentEntries$.getValue().length?this.startIndex$.next(n+=this.default_shown):this.startIndex$.next(Math.max(this.currentEntries$.getValue().length-this.default_shown,0))}},{key:"scrollTo",value:function(n){var t,e=this.letters.indexOf(n),o=_createForOfIteratorHelper(this.currentEntries$.getValue());try{for(o.s();!(t=o.n()).done;){var r=t.value;if(r.sorting_form[0]===e){this.startIndex$.next(this.currentEntries$.getValue().indexOf(r));break}}}catch(i){o.e(i)}finally{o.f()}}},{key:"selectCategory",value:function(n){var t=this;"words"===n?this.mtdService.dataDict$.pipe(Object(g.a)((function(n){return t.currentEntries$.next(n)}))).subscribe().unsubscribe():this.mtdService.categories$.pipe(Object(g.a)((function(e){return t.currentEntries$.next(e[n])}))).subscribe().unsubscribe(),this.selectedCategory=n,this.startIndex$.next(0),this.letterInit()}}]),n}(),w.\u0275fac=function(n){return new(n||w)(_.Ob(l.a),_.Ob(l.d))},w.\u0275cmp=_.Ib({type:w,selectors:[["mtd-browse"]],decls:21,vars:13,consts:[[1,"background"],[1,"gradient"],[1,"page__content","page__content--center","container"],[1,"row"],[1,"browse__controls__container","offset-lg-1","col-lg-4"],[1,"browse__categories",3,"ngClass"],[3,"selectionChange"],["value","words"],[3,"value",4,"ngFor","ngForOf"],[1,"browse__alphabet__container",3,"ngClass"],[1,"browse__alphabet__grid"],["class","browse__alphabet__letter",3,"chosen",4,"ngFor","ngForOf"],[1,"browse__entries__container","col-lg-7",3,"ngClass"],["class","browse__entries",4,"ngIf"],[3,"value"],[1,"browse__alphabet__letter"],["mat-button","",3,"click"],[1,"browse__entries"],[1,"browse__toolbar"],["color","accent","mat-flat-button","","aria-label","See previous entries",1,"browse__nav","browse__nav--left","browse__nav--web","color-white",3,"click"],[1,"browse__nav--left--icon"],[1,"browse__nav--left--text"],["color","accent","mat-icon-button","","aria-label","See previous entries",1,"browse__nav","browse__nav--left","browse__nav--mobile",3,"click"],[1,"browse__entries--progress"],["color","accent","mat-flat-button","","aria-label","See following entries",1,"browse__nav","browse__nav--right","color-white","browse__nav--web",3,"click"],[1,"browse__nav--right--text"],[1,"browse__nav--right--icon"],["color","accent","mat-icon-button","","aria-label","See following entries",1,"browse__nav","browse__nav--right","browse__nav--mobile",3,"click"],[1,"browse__entry__list__container"],[3,"entries"]],template:function(n,t){1&n&&(_.Tb(0,"div",0),_.Tb(1,"div",1),_.Tb(2,"div",2),_.Tb(3,"div",3),_.Tb(4,"div",4),_.Tb(5,"div",5),_.Tb(6,"mat-form-field"),_.Tb(7,"mat-label"),_.Cc(8),_.gc(9,"translate"),_.Sb(),_.Tb(10,"mat-select",6),_.bc("selectionChange",(function(n){return t.selectCategory(n.value)})),_.Tb(11,"mat-option",7),_.Cc(12,"All Entries"),_.Sb(),_.Bc(13,P,2,2,"mat-option",8),_.gc(14,"async"),_.Sb(),_.Sb(),_.Sb(),_.Tb(15,"div",9),_.Tb(16,"ul",10),_.Bc(17,m,3,3,"li",11),_.gc(18,"async"),_.Sb(),_.Sb(),_.Sb(),_.Tb(19,"div",12),_.Bc(20,f,28,21,"div",13),_.Sb(),_.Sb(),_.Sb(),_.Sb(),_.Sb()),2&n&&(_.Bb(5),_.lc("ngClass",t.routeAnimationsElements),_.Bb(3),_.Dc(_.hc(9,7,"mtd.pages.browse.select-category")),_.Bb(5),_.lc("ngForOf",_.hc(14,9,t.displayCategories$)),_.Bb(2),_.lc("ngClass",t.routeAnimationsElements),_.Bb(2),_.lc("ngForOf",_.hc(18,11,t.displayLetters$)),_.Bb(2),_.lc("ngClass",t.routeAnimationsElements),_.Bb(1),_.lc("ngIf",t.currentX))},directives:[o.i,p.a,p.d,d.a,b.l,o.j,o.k,u.a,C.a,O.a,h.a],pipes:[M.c,o.b],styles:[".browse__categories[_ngcontent-%COMP%]{text-align:center;padding:0 20px;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.browse__alphabet__grid[_ngcontent-%COMP%]{width:90%;margin:20px auto;list-style-type:none;padding:0;overflow:hidden;opacity:.95;border-radius:15px}.browse__alphabet__letter[_ngcontent-%COMP%]{display:block;text-align:center;padding:5px;text-decoration:none;float:left;cursor:pointer}.browse__entries[_ngcontent-%COMP%]{max-height:100vh;overflow-y:none}.browse__entries--progress[_ngcontent-%COMP%]{margin:0 auto!important;font-size:smaller}.browse__entries__container[_ngcontent-%COMP%]{max-height:10vh}@media screen and (max-width:900px){.browse__nav--web[_ngcontent-%COMP%]{display:none!important}}@media screen and (min-width:900px){.browse__nav--mobile[_ngcontent-%COMP%]{display:none!important}}.browse__nav--left[_ngcontent-%COMP%]{width:100px}.browse__nav--left--icon[_ngcontent-%COMP%]{font-size:xx-large!important;position:absolute!important;left:0!important;top:3px!important}.browse__nav--left--text[_ngcontent-%COMP%]{margin-left:15px}.browse__nav--right[_ngcontent-%COMP%]{width:100px}.browse__nav--right--icon[_ngcontent-%COMP%]{font-size:xx-large!important;position:absolute!important;right:5px!important;top:3px!important}.browse__nav--right--text[_ngcontent-%COMP%]{margin-right:15px}","@media screen and (max-width:768px){.desktop-only[_ngcontent-%COMP%]{display:none}}@media screen and (min-width:768px){.mobile-only[_ngcontent-%COMP%]{display:none}}.page__content[_ngcontent-%COMP%]{min-height:calc(100vh - 208px)}.theme-wrapper[_ngcontent-%COMP%]{height:100%;width:100%}.centered[_ngcontent-%COMP%]{text-align:center;margin:0 auto}.entry-list-container[_ngcontent-%COMP%], .results[_ngcontent-%COMP%]{height:60vh}.entry-list-container[_ngcontent-%COMP%], .results[_ngcontent-%COMP%], .search__results[_ngcontent-%COMP%]{max-height:53em;overflow-y:auto;max-width:53.125em;margin:5vh auto 9.375em;border-radius:.3125em}mat-sidenav-container[_ngcontent-%COMP%]{height:100%;width:100%}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;width:100%;display:flex;z-index:10}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]{margin:0 10px 0 0}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:24px}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;padding-top:4px;text-overflow:ellipsis}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding.center[_ngcontent-%COMP%]{text-align:center}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;top:-2px;width:48px;height:48px}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]{margin-right:10px}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{margin:0 0 0 20px;width:40px;font-size:14px}@media (max-width:992px){mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]{min-width:0;padding:0 10px}}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:1 0 auto;margin-top:64px;overflow:hidden}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{flex:0 0 auto;padding:0 15px;text-align:center}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{padding:10px 0}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:padding .5s;display:inline-block;padding:20px 5px}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:30px;width:35px}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:75px;padding:0 0 0 3px;overflow:hidden;text-align:left;white-space:nowrap;transition:width .5s}@media (min-width:992px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 10px}}@media (max-width:768px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:0;padding:0}}@media (max-width:576px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 5px}}@media (min-width:576px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]{position:relative}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;right:15px}}@media (max-width:600px){mat-sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:56px!important}}mat-sidenav[_ngcontent-%COMP%]{width:250px}mat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]{height:64px;padding:8px 10px;font-size:20px;font-weight:500}mat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:48px;margin:2px 10px 0 0}mat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:3px}mat-sidenav[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]{padding-top:0}.copyright-link[_ngcontent-%COMP%]{position:relative!important;margin-left:15px}",'h1[_ngcontent-%COMP%]{text-align:center;font-size:3em}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{font-size:1.5em}.background[_ngcontent-%COMP%]{overflow:auto;padding:80px 0 0;position:relative}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{text-align:center;margin:50px;z-index:1}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-weight:700;padding:20px 10px 30px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 5px 10px 0}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.actions-main[_ngcontent-%COMP%]{text-transform:uppercase;padding:3px 24px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:1px}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{max-width:700px;margin:50px auto;letter-spacing:.01px;overflow-wrap:break-word;z-index:1;overflow:hidden}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:.9em;display:inline-block;word-wrap:break-word;white-space:normal;margin:0 0 10px}.background[_ngcontent-%COMP%]:before{top:0;background:url(intro.e80aa3482ddc7cead285.jpg) no-repeat top;background-size:cover}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before, .background[_ngcontent-%COMP%]:before{position:absolute;left:0;bottom:0;right:0;content:"";z-index:0}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{top:51%}.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative}.follow-releases[_ngcontent-%COMP%]{max-width:700px;margin:0 auto 60px}.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:40px}.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-bottom:3px solid}.follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:80%;margin:20px auto 0;border-radius:5px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.contributors[_ngcontent-%COMP%]{max-width:700px;margin:0 auto 60px}.contributors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-bottom:3px solid}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:8px;width:100px;display:inline-block;text-align:center}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:10px 0 0;line-height:16px}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;width:100px;border:5px solid;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@media (max-width:768px){.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin:50px 0}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%], .follow-releases[_ngcontent-%COMP%]{width:auto}.follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}}@media (max-width:576px){.background[_ngcontent-%COMP%]{padding:40px 0 0}.background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1em}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin:40px 0 0}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:10px 0 20px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{width:auto;margin:40px auto}.follow-releases[_ngcontent-%COMP%]{margin:0 auto 40px}}.contributor[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:medium}div.row.contributor[_ngcontent-%COMP%]{margin:25px}img.bio[_ngcontent-%COMP%]{width:100%;max-width:250px;height:auto;-o-object-fit:cover;object-fit:cover}img[_ngcontent-%COMP%]{border-radius:50%;border:3px solid;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.img__container[_ngcontent-%COMP%]{width:250px;min-width:250px;margin-left:auto;margin-right:auto}@media only screen and (max-width:500px){#about__page[_ngcontent-%COMP%]{width:100%!important;margin:0!important}}@media only screen and (max-width:1300px){#about__page[_ngcontent-%COMP%]{margin-left:10vw;margin-right:10vw}}@media only screen and (max-width:1900px){#about__page[_ngcontent-%COMP%]{margin:0 auto}}hr[_ngcontent-%COMP%]{width:100%;margin-top:50px}.content__container[_ngcontent-%COMP%]{padding:35px 20px;border-radius:15px}'],changeDetection:0}),w),data:{title:"mtd.menu.browse"}}],S=((y=function n(){_classCallCheck(this,n)}).\u0275mod=_.Mb({type:y}),y.\u0275inj=_.Lb({factory:function(n){return new(n||y)},imports:[[i.k.forChild(k)],i.k]}),y),$=((v=function n(){_classCallCheck(this,n)}).\u0275mod=_.Mb({type:v}),v.\u0275inj=_.Lb({factory:function(n){return new(n||v)},imports:[[o.c,r.a,S]]}),v)}}]);