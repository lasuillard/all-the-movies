webpackJsonp([1],{JNda:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},s,!1,function(t){n("Waih")},null,null).exports,r=n("/ocq"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("router-link",{attrs:{to:{name:"movies"}}},[this._v("Movie List")])],1)},staticRenderFns:[]};var v=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a,!1,function(t){n("JNda")},"data-v-0273967c",null).exports,c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("Movie List")]),t._v(" "),t._l(t.movies,function(e){return n("div",{staticClass:"movie"},[n("img",{staticClass:"poster",attrs:{src:e.PosterIMG,width:"300",height:"420"}}),t._v(" "),n("div",[n("strong",[t._v(" "+t._s(e.MovieTitle)+" ")]),t._v(" "),n("router-link",{attrs:{to:{name:"movie-info",params:{id:e.MovieID}}}},[t._v("More")])],1)])})],2)},staticRenderFns:[]};var u=n("VU/8")({created:function(){var t=this;this.$http.get("api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},c,!1,function(t){n("YMTU")},null,null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.movie.MovieTitle))])])},staticRenderFns:[]},m=n("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}},l,!1,null,null,null).exports;i.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"home",component:v},{path:"movies/",name:"movies",component:u},{path:"movies/:id",name:"movie-info",component:m}]}),h=n("mtWM"),d=n.n(h);i.a.config.productionTip=!1,i.a.prototype.$http=d.a,new i.a({el:"#app",router:p,components:{App:o},template:"<App/>"})},Waih:function(t,e){},YMTU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eb8cffc13692bb3b036e.js.map