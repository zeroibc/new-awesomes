webpackJsonp([4],{"4IPu":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"repo-detail"},[e("banner",{attrs:{repo:t.repo}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"bar"}),e("div",{staticClass:"clearfix"}),e("article",{staticClass:"repo-con",domProps:{innerHTML:t._s(t.marked(t.repo.about_zh||t.repo.about))}}),e("div",{staticClass:"com-wrap"},[e("comment",{attrs:{flag:"repo-comment",typ:"REPO",idcd:t.repo.id}})],1)])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"con-headers"},[e("span",[t._v("暂无中文翻译，我来翻译")])])}],n={render:i,staticRenderFns:s};a.a=n},"8+zT":function(t,a,e){"use strict";function i(t){e("VqSZ")}var s=e("It5z"),n=e("t+ou"),r=e("J0+h"),o=i,c=r(s.a,n.a,o,"data-v-08aae49a",null);a.a=c.exports},"90Jt":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row top-bar"},[e("div",{staticClass:"col"},[e("span",{staticClass:"category"},[e("nuxt-link",{staticClass:"rootyp",attrs:{to:"/repos/"+t.repo.rootyp}},[t._v(t._s(t.repo.rootyp_zh))]),e("nuxt-link",{staticClass:"typcd",attrs:{to:"/repos/"+t.repo.rootyp+"/"+t.repo.typcd}},[t._v(t._s(t.repo.typcd_zh))])],1)]),e("div",{staticClass:"col right"},[e("a",{staticStyle:{color:"#EF015B"},attrs:{href:"https://gitter.im/"+t.repo.full_name,title:"聊天室",target:"_blank"}},[e("icon",{attrs:{name:"gitter",width:"15px"}})],1),e("a",{staticStyle:{color:"#F48024"},attrs:{href:"http://stackoverflow.com/questions/tagged/"+t.repo.name,title:"上 Stackoverflow 提问",target:"_blank"}},[e("icon",{attrs:{name:"stackoverflow",width:"15px"}})],1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-sm-0",staticStyle:{"margin-bottom":"20px"}},[e("nuxt-link",{attrs:{to:"/repo/"+t.repo.owner+"/"+t.repo.alia}},[e("img",{staticClass:"cover",attrs:{src:t.cdn(t.repo.cover,"repo","repo")}})])],1),e("div",{staticClass:"col-md-8 col-sm-12"},[e("h1",[t._v(t._s(t.repo.alia))]),e("p",[t._v(t._s(t.repo.description_cn||t.repo.description))]),e("div",{staticClass:"links"},[e("a",{staticClass:"home",attrs:{href:t.repo.homepage,target:"_blank"}},[e("icon",{attrs:{name:"home"}},[t._v("官 网")])],1),e("a",{staticClass:"download",attrs:{href:"https://api.github.com/repos/"+t.repo.full_name+"/zipball",target:"_blank"}},[e("icon",{attrs:{name:"download",width:"35px"}})],1),e("a",{staticClass:"github",attrs:{href:t.repo.html_url,target:"_blank"}},[e("icon",{attrs:{name:"github"}},[t._v("GitHub")])],1)]),e("div"),e("div",{staticClass:"params row"},[e("div",{staticClass:"col-md-6 col-sm-12 left"},[e("icon",{attrs:{name:"star",width:"15px"}},[t._v(t._s(t.repo.stargazers_count)+" ")]),e("icon",{attrs:{name:"fork",width:"15px"}},[t._v(t._s(t.repo.forks_count)+" ")]),e("icon",{attrs:{name:"clock",width:"15px"}},[t._v(t._s(t.repo.forks_count)+" ")])],1),e("div",{staticClass:"col-md-6 col-sm-12"},[e("div",{staticClass:"iuse"},[t._l(t.repo.usings,function(a){return e("nuxt-link",{attrs:{to:"/mem/"+a.mem.id,title:a.mem.nc}},[e("img",{staticClass:"mem-tx",attrs:{src:t.cdn(a.mem.avatar,"mem")}})])}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.repo.using>5,expression:"repo.using > 5"}]},[t._v("等")]),e("span",[t._v(t._s(t.repo.using)+" 人在用")]),e("span",{staticClass:"use-btn",class:"has-"+t.isUsing,on:{click:t.switchUsing}},[t._v("我在用       ")])],2)])]),e("div",{staticClass:"favor",class:"has-"+t.isMark,on:{click:t.switchMark}},[e("icon",{attrs:{name:"heart",width:"35px",height:"35px"}}),e("div",[t._v(t._s(t.repo.mark))])],1)])])])])},s=[],n={render:i,staticRenderFns:s};a.a=n},DI3q:function(t,a,e){"use strict";function i(t){e("suw3")}var s=e("kGtk"),n=e("90Jt"),r=e("J0+h"),o=i,c=r(s.a,n.a,o,"data-v-41f18fb8",null);a.a=c.exports},EZ5I:function(t,a,e){"use strict";function i(t){e("MRDe")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("ce9L"),n=e("4IPu"),r=e("J0+h"),o=i,c=r(s.a,n.a,o,null,null);a.default=c.exports},It5z:function(t,a,e){"use strict";var i=e("lC5x"),s=e.n(i),n=e("J0Oq"),r=e.n(n),o=e("YFWx"),c=e("tra3"),d=e.n(c);a.a={props:["flag","typ","idcd"],data:function(){return{coms:[],comcon:"",isSubmiting:!1,editing:null,setval:{time:Date.now(),val:""},subMap:{new:{ready:"提交",ing:"提交中..."},edit:{ready:"更新评论",ing:"更新中..."}},showeditor:!1}},computed:{session:function(){return this.$store.state.session}},methods:{setEditVal:function(t){this.setval={time:Date.now(),val:t}},list:function(){var t=this;this.idcd&&this.idcd>0&&Object(o.a)().get("comment?typ="+this.typ+"&idcd="+this.idcd).then(function(a){var e=a.data.items;t.coms=e})},submit:function(){if(!this.showLogin()){if(""===this.comcon.trim())return void this.$alert("danger","评论内容不能为空");this.isSubmiting=!0,this.editing?this.update():this.save()}},save:function(){function t(){return a.apply(this,arguments)}var a=r()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().post("comment",{typ:this.typ,idcd:this.idcd,con:this.comcon});case 2:a=t.sent,this.$alert("success","发布评论成功！"),this.coms.push(a.data.item),this.setEditVal(""),this.isSubmiting=!1;case 7:case"end":return t.stop()}},t,this)}));return t}(),update:function(){function t(){return a.apply(this,arguments)}var a=r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().put("comment/"+this.editing.id,{con:this.comcon});case 2:this.$alert("success","更新评论成功！"),this.editing.con=this.comcon,this.setEditVal(""),this.isSubmiting=!1,this.editing=null;case 7:case"end":return t.stop()}},t,this)}));return t}(),destroy:function(){function t(t,e){return a.apply(this,arguments)}var a=r()(s.a.mark(function t(a,e){var i,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=this,confirm("确认删除该评论？不是手抖吧！")){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Object(o.a)().delete("comment/"+a.id);case 5:n=t.sent,n.data.status&&(this.$alert("success","删除评论成功！"),i.coms.splice(e,1));case 7:case"end":return t.stop()}},t,this)}));return t}(),scrollToEditor:function(t){d()("html,body").animate({scrollTop:d()(t.target).closest(".comment-wraper").find(".editor-go").offset().top-100})},edit:function(t,a){this.scrollToEditor(a),this.editing=t,this.setEditVal(t.con)},cancelEditing:function(){this.editing=null,this.setEditVal("")},reply:function(t,a){this.scrollToEditor(a),this.setEditVal(this.comcon+"@"+t.mem.nc+" ")},processAt:function(t){return t.replace(/@([^:：?\s@]+)/g,'<a href="#" class="ata">@$1</a>')},switchFavor:function(t){this.showLogin()||Object(o.a)().post("oper",{opertyp:"FAVOR",typ:"COMMENT",idcd:t.id}).then(function(a){t.favor=a.data.amount,t.isFavor=a.data.has})}},watch:{idcd:function(){this.list()}},created:function(){function t(){return a.apply(this,arguments)}var a=r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.list();case 1:case"end":return t.stop()}},t,this)}));return t}(),components:{editor:function(){return e.e(44).then(e.bind(null,"g1Qn"))}},mounted:function(){this.showeditor=!0}}},MRDe:function(t,a,e){var i=e("gXAe");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("XkoO")("a5e2c8d6",i,!0)},VqSZ:function(t,a,e){var i=e("dIQ7");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("XkoO")("7a25db4e",i,!0)},ce9L:function(t,a,e){"use strict";var i=e("YFWx"),s=e("DI3q"),n=e("8+zT");a.a={asyncData:function(t){var a=(t.req,t.params);t.query;return Object(i.a)().get("repo/"+a.owner+"/"+a.name).then(function(t){return{repo:t.data}})},head:function(){return{title:this.repo.alia+" - Awesomes",meta:[{hid:"description",name:"description",content:this.repo.description_cn},{hid:"keywords",name:"keywords",content:this.repo.alia+","+this.repo.alia+"源码,"+this.repo.alia+"下载,"+this.repo.alia+"文档,"+this.repo.alia+"资源库"}]}},components:{Banner:s.a,Comment:n.a}}},dIQ7:function(t,a,e){a=t.exports=e("BkJT")(!1),a.push([t.i,".citem[data-v-08aae49a]{position:relative;padding-left:35px;margin-bottom:30px}.citem:hover .opers .extra[data-v-08aae49a]{display:inline-block}.citem .time[data-v-08aae49a]{color:#ababab;margin-left:10px}.citem .opers[data-v-08aae49a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.citem .opers a[data-v-08aae49a]{color:#ddd;display:inline-block;margin-right:10px}.citem .opers a.up[data-v-08aae49a]{background-color:hsla(0,0%,95%,.8);color:#909090;padding:3.2px;padding:.2rem;padding-right:8px;padding-right:.5rem;border-radius:2px}.citem .opers a.up.has-true[data-v-08aae49a]{background-color:rgba(240,173,78,.24);color:#ff9b00}.citem .opers svg[data-v-08aae49a]{width:15px;height:15px;float:left;margin-right:3px}.citem .opers .extra[data-v-08aae49a]{display:none}.editor-go[data-v-08aae49a]{margin-bottom:40px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.editor-box[data-v-08aae49a]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-right:10px}article[data-v-08aae49a]{margin:10px 0}.sub-btn[data-v-08aae49a]{padding:12.8px 16px;padding:.8rem 1rem}.cancel-edit[data-v-08aae49a]{margin-left:10px;color:#da552f}.mem-tx[data-v-08aae49a]{width:25px;height:25px;border-radius:100%;display:block;position:absolute;left:0;top:5px}",""])},gXAe:function(t,a,e){a=t.exports=e("BkJT")(!1),a.push([t.i,".repo-detail .container{max-width:1000px}.repo-detail article.repo-con{font-size:15px;border:1px solid #ddd;border-top:1px solid #eee;padding:20px;margin-top:20px;line-height:27px;word-break:break-all}.repo-detail article.repo-con img{max-width:100%}.repo-detail .con-headers{margin-top:10px;border:1px solid #eee;border-bottom:0;border-radius:4px;padding:15px 20px;border-bottom-left-radius:0;border-bottom-right-radius:0}.repo-detail .bar{height:10px;background-color:#eee;float:left;width:100%}.repo-detail .com-wrap{padding:50px 0}",""])},kGtk:function(t,a,e){"use strict";var i=e("YFWx");a.a={props:["repo"],data:function(){return{isMark:!1,isUsing:!1}},methods:{hasMarked:function(){var t=this;this.$store.state.session&&Object(i.a)().get("oper/is",{params:{opertyp:"MARK",idcd:this.repo.id,typ:"REPO"}}).then(function(a){t.isMark=a.data})},hasUsing:function(){var t=this;this.$store.state.session&&Object(i.a)().get("oper/is",{params:{opertyp:"USING",idcd:this.repo.id,typ:"REPO"}}).then(function(a){t.isUsing=a.data})},switchMark:function(){var t=this;this.showLogin()||Object(i.a)().post("oper",{opertyp:"MARK",typ:"REPO",idcd:this.repo.id}).then(function(a){t.repo.mark=a.data.amount,t.isMark=a.data.has})},switchUsing:function(){var t=this;this.showLogin()||Object(i.a)().post("oper",{opertyp:"USING",typ:"REPO",idcd:this.repo.id}).then(function(a){t.repo.using=a.data.amount,t.isUsing=a.data.has})}},created:function(){this.hasMarked(),this.hasUsing()}}},suw3:function(t,a,e){var i=e("tmCy");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("XkoO")("17ad44fe",i,!0)},"t+ou":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"comment-wraper"},[e("div",{staticClass:"editor-go"},[e("button",{staticClass:"btn btn-danger sub-btn",attrs:{disabled:t.isSubmiting},on:{click:t.submit}},[e("icon",{attrs:{name:"send",width:"20px"}},[t._v(t._s(t.subMap[t.editing?"edit":"new"][t.isSubmiting?"ing":"ready"]))])],1),e("div",{staticClass:"editor-box"},[t.showeditor?e("editor",{attrs:{flag:t.flag,setval:t.setval,placeholder:"我有话说"},model:{value:t.comcon,callback:function(a){t.comcon=a},expression:"comcon"}}):t._e()],1)]),t._l(t.coms,function(a,i){return e("div",{staticClass:"citem"},[e("nuxt-link",{attrs:{to:"/mem/"+a.mem.id}},[e("img",{staticClass:"mem-tx",attrs:{src:t.cdn(a.mem.avatar,"mem")}}),e("strong",[t._v(t._s(a.mem.nc))])]),e("span",{staticClass:"time"},[t._v(t._s(t.timeago(a.created_at)))]),e("article",{domProps:{innerHTML:t._s(t.processAt(t.marked(a.con)))}}),e("div",{staticClass:"opers"},[e("a",{staticClass:"up",class:"has-"+a.isFavor,attrs:{href:"javascript:void(0)"},on:{click:function(e){t.switchFavor(a)}}},[e("icon",{attrs:{name:"arrow-up"}},[t._v(t._s(a.favor))])],1),e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.reply(a,e)}}},[e("icon",{attrs:{name:"reply"}},[t._v("回复")])],1),t.session&&a.mem.id==t.session.id?e("a",{staticClass:"extra",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.edit(a,e)}}},[e("span",[t._v("编辑")])]):t._e(),t.session&&a.mem.id==t.session.id?e("a",{staticClass:"extra",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.destroy(a,i)}}},[e("span",[t._v("删除  ")])]):t._e()])],1)})],2)},s=[],n={render:i,staticRenderFns:s};a.a=n},tmCy:function(t,a,e){a=t.exports=e("BkJT")(!1),a.push([t.i,".banner[data-v-41f18fb8]{background:#f7f8fa;padding:20px}.banner .top-bar[data-v-41f18fb8]{margin-bottom:10px}.banner .category[data-v-41f18fb8]{font-size:12.8px;font-size:.8rem}.banner .category a[data-v-41f18fb8]{display:inline-block;padding:8px 12px;text-align:center;background-color:#f5f5f5;color:#ddd}.banner .category .rootyp[data-v-41f18fb8]{background-color:#ddd;color:#fff}.banner .container[data-v-41f18fb8]{max-width:1000px}.banner .right[data-v-41f18fb8]{text-align:right}.banner .right a[data-v-41f18fb8]{margin-left:15px}.banner .cover[data-v-41f18fb8]{padding:10px;background-color:#fff;-webkit-box-shadow:1px 1px 10px #f4f4f4;box-shadow:1px 1px 10px #f4f4f4;max-width:100%}.banner .links[data-v-41f18fb8]{padding:20px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:576px){.banner .links[data-v-41f18fb8]{display:none}}.banner .links .github[data-v-41f18fb8],.banner .links .home[data-v-41f18fb8]{display:inline-block;padding:5px 20px;color:#fff;text-decoration:none;background-color:#eee;margin-right:40px;border-radius:100px;overflow:hidden}.banner .links .github.home[data-v-41f18fb8],.banner .links .home.home[data-v-41f18fb8]{background-color:#19c2ff}.banner .links .github.github[data-v-41f18fb8],.banner .links .home.github[data-v-41f18fb8]{background-color:#ef4245}.banner .links .github svg[data-v-41f18fb8],.banner .links .home svg[data-v-41f18fb8]{float:left;width:15px;height:15px;margin-right:5px}.banner .links .download[data-v-41f18fb8]{color:#29b996;margin-right:40px}.banner .links .download svg[data-v-41f18fb8]{width:35px;height:35px}.banner .params[data-v-41f18fb8]{color:rgba(81,162,81,.91);padding:10px 0}.banner .params .v-icon[data-v-41f18fb8]{margin-right:30px}.banner .params .left[data-v-41f18fb8]{font-weight:700}.banner .favor[data-v-41f18fb8]{width:35px;color:#ccc;display:inline-block;text-align:center;position:absolute;right:0;top:20px;cursor:pointer}.banner .favor.has-true[data-v-41f18fb8]{color:#f14a1e}.banner .iuse[data-v-41f18fb8]{color:#bbb;text-align:right}.banner .iuse .use-btn[data-v-41f18fb8]{color:#bbb;padding:5px 10px;display:inline-block;cursor:pointer;background-color:#d3d8dc;color:#aab1b7}.banner .iuse .use-btn.has-true[data-v-41f18fb8]{background-color:#37c700;color:#fff}.banner .iuse span[data-v-41f18fb8]{margin-left:10px;margin-right:0}.banner .iuse svg[data-v-41f18fb8]{fill:#aaa}.banner .iuse .mem-tx[data-v-41f18fb8]{width:24px;height:24px;border-radius:100%;margin:0 -3px;padding:1px;display:inline-block;background-color:#fff}",""])}});
//# sourceMappingURL=index.761f766d07c6a439cd0f.js.map