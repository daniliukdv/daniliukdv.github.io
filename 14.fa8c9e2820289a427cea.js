(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{EjV3:function(n,l,e){var t=e("mrSG").__decorate,r=e("mrSG").__metadata;Object.defineProperty(l,"__esModule",{value:!0});var u=e("CcnG"),o=e("Ip0R"),i=function(){function n(){this.strokeWidth="2",this.fill="none",this.animationDuration="2s"}return t([u.Input(),r("design:type",Object)],n.prototype,"style",void 0),t([u.Input(),r("design:type",String)],n.prototype,"styleClass",void 0),t([u.Input(),r("design:type",String)],n.prototype,"strokeWidth",void 0),t([u.Input(),r("design:type",String)],n.prototype,"fill",void 0),t([u.Input(),r("design:type",String)],n.prototype,"animationDuration",void 0),t([u.Component({selector:"p-progressSpinner",template:'\n        <div class="ui-progress-spinner" [ngStyle]="style" [ngClass]="styleClass">\n            <svg class="ui-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">\n                <circle class="ui-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10"/>\n            </svg>\n        </div>\n    '})],n)}();l.ProgressSpinner=i,l.ProgressSpinnerModule=function(){return t([u.NgModule({imports:[o.CommonModule],exports:[i],declarations:[i]})],function(){})}()},Ge8E:function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e.d(l,"b",function(){return o});var t=e("CcnG"),r=(e("EjV3"),e("Ip0R")),u=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function o(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","ui-progress-spinner"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,r.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275did"](2,278528,null,0,r.NgStyle,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),(n()(),t["\u0275eld"](3,0,null,null,1,":svg:svg",[["class","ui-progress-spinner-svg"],["viewBox","25 25 50 50"]],[[4,"animation-duration",null]],null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,0,":svg:circle",[["class","ui-progress-spinner-circle"],["cx","50"],["cy","50"],["r","20"],["stroke-miterlimit","10"]],[[1,"fill",0],[1,"stroke-width",0]],null,null,null,null))],function(n,l){var e=l.component;n(l,1,0,"ui-progress-spinner",e.styleClass),n(l,2,0,e.style)},function(n,l){var e=l.component;n(l,3,0,e.animationDuration),n(l,4,0,e.fill,e.strokeWidth)})}},RLCR:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),r=function(){return function(){}}(),u=e("pMnS"),o=e("Ip0R"),i=e("Ge8E"),s=e("EjV3"),a=e("qc5V"),c=function(){function n(n){this.apiService=n}return n.prototype.getReports=function(){return this.apiService.request("GET","report?year=2019&month=5",{})},n}(),d=function(){function n(n){this.reportsService=n,this.loading=!0,this.plansList=[{title:"Standard plan",key:"standard"},{title:"Business plan",key:"business"},{title:"Premium plan",key:"premium"}],this.clientCardsList=[{title:"New customers",key:"new_customers",icon:"assets/images/icons/user.png",class:"new"},{title:"Cancelled users",key:"canceled_customers",icon:"assets/images/icons/close.png",class:"cancelled"},{title:"Paused clients",key:"paused_customers",icon:"assets/images/icons/pause.png",class:"paused"}]}return n.prototype.ngOnInit=function(){this.getReports()},n.prototype.getReports=function(){var n=this;this.reportsService.getReports().subscribe(function(l){for(var e=0,t=n.clientCardsList;e<t.length;e++){var r=t[e];r.counter=l.data[r.key]}for(var u=0,o=n.plansList;u<o.length;u++){var i=o[u];i.counter=l.data.customers_total[i.key],i.monthlyRevenue=l.data.customers_amount[i.key]}n.loading=!1})},n}(),p=t["\u0275crt"]({encapsulation:0,styles:[[".reports-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.reports-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.reports-cards-wrapper[_ngcontent-%COMP%]{margin-top:20px;width:100%;display:flex;justify-content:space-between}.reports-colored-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;flex-grow:1;width:100%;border-radius:4px}.reports-colored-card[_ngcontent-%COMP%]:not(:last-child){margin-right:30px}.reports-colored-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;text-align:center;padding:20px 0}.reports-colored-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-transform:uppercase;font-size:16px;margin-bottom:10px}.reports-colored-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;align-items:center;padding-bottom:20px;position:relative}.reports-colored-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]::after{content:'';position:absolute;height:3px;max-width:30%;display:block;left:0;right:0;bottom:0;margin:0 auto}.reports-colored-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px;display:block;margin-right:10px}.reports-colored-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:36px}.reports-colored-card[_ngcontent-%COMP%]   .orange-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:48px}.reports-outline-card[_ngcontent-%COMP%]{background:0 0;border-radius:5px}.reports-outline-card[_ngcontent-%COMP%]   .orange-card[_ngcontent-%COMP%]{background:0 0}.reports-outline-card[_ngcontent-%COMP%]   .orange-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px}.reports-outline-card[_ngcontent-%COMP%]   .orange-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:36px;color:#a0a0a0}"]],data:{}});function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,14,"div",[["class","reports-colored-card"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","orange-card"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t["\u0275ted"](3,null,[" "," "])),(n()(),t["\u0275eld"](4,0,null,null,3,"p",[["class","card-details"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,0,"img",[["src","assets/images/icons/peoples.png"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](7,null,["",""])),(n()(),t["\u0275eld"](8,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Monthly revenue"])),(n()(),t["\u0275eld"](11,0,null,null,3,"p",[["class","card-details"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,null,0,"img",[["src","assets/images/icons/cards.png"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](14,null,["$ ",""]))],null,function(n,l){n(l,3,0,l.context.$implicit.title),n(l,7,0,l.context.$implicit.counter),n(l,14,0,l.context.$implicit.monthlyRevenue)})}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","reports-colored-card reports-outline-card"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,o.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t["\u0275eld"](2,0,null,null,6,"div",[["class","orange-card"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,["",""])),(n()(),t["\u0275eld"](5,0,null,null,3,"p",[["class","card-details"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](8,null,["",""]))],function(n,l){n(l,1,0,"reports-colored-card reports-outline-card",l.context.$implicit.class)},function(n,l){n(l,4,0,l.context.$implicit.title),n(l,6,0,l.context.$implicit.icon),n(l,8,0,l.context.$implicit.counter)})}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"p-progressSpinner",[],null,null,null,i.b,i.a)),t["\u0275did"](1,49152,null,0,s.ProgressSpinner,[],null,null)],null,null)}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"div",[["class","white-background"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","reports-header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Reports"])),(n()(),t["\u0275eld"](4,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["May 2019"])),(n()(),t["\u0275eld"](6,0,null,null,2,"div",[["class","reports-cards-wrapper"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](8,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](9,0,null,null,2,"div",[["class","reports-cards-wrapper"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](11,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](13,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,8,0,e.plansList),n(l,11,0,e.clientCardsList),n(l,13,0,e.loading)},null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-reports",[],null,null,null,C,p)),t["\u0275did"](1,114688,null,0,d,[c],null,null)],function(n,l){n(l,1,0)},null)}var y=t["\u0275ccf"]("app-reports",d,v,{},{},[]),h=e("ZYCi"),_=function(){return function(){}}();e.d(l,"ReportsModuleNgFactory",function(){return M});var M=t["\u0275cmf"](r,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[t.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,c,c,[a.a]),t["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),t["\u0275mpd"](1073742336,s.ProgressSpinnerModule,s.ProgressSpinnerModule,[]),t["\u0275mpd"](1073742336,h.o,h.o,[[2,h.u],[2,h.k]]),t["\u0275mpd"](1073742336,_,_,[]),t["\u0275mpd"](1073742336,r,r,[]),t["\u0275mpd"](1024,h.i,function(){return[[{path:"",component:d}]]},[])])})},qc5V:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var t=e("t/Na"),r=e("AytR"),u=e("CcnG"),o=e("ZYCi"),i=function(){function n(n,l){this.http=n,this.router=l}return n.prototype.request=function(n,l,e,t){void 0===t&&(t=!0);var u={body:e};return t&&(u.headers=this.authHeaders()),this.http.request(n.toUpperCase(),r.a.apiUrl+"/"+l,u)},n.prototype.logout=function(){localStorage.clear(),this.router.navigate(["/sign-in"])},n.prototype.authHeaders=function(){var n=new t.HttpHeaders;return(n=n.append("Access-Control-Allow-Credentials","true")).append("Authorization",this.token())},n.prototype.token=function(){return"Bearer "+localStorage.getItem("token")},n.ngInjectableDef=u.defineInjectable({factory:function(){return new n(u.inject(t.HttpClient),u.inject(o.k))},token:n,providedIn:"root"}),n}()}}]);