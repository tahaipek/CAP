(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-946ccf4c"],{"36bd":function(t,s,e){},"6f56":function(t,s,e){"use strict";e("36bd")},c2d8:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-row",[e("h1",{attrs:{"page-line":"","mb-4":""}},[t._v(t._s(t.$t("Subscriber")))]),e("b-table-simple",{attrs:{"caption-top":"",responsive:""}},[e("caption",[t._v(t._s(t.$t("SubscriberDescription")))]),e("b-thead",{attrs:{"head-variant":"secondary"}},[e("b-tr",[e("b-th",[t._v(t._s(t.$t("Group")))]),e("b-th",[t._v(t._s(t.$t("Name")))]),e("b-th",[t._v(t._s(t.$t("Method")))])],1)],1),e("b-tbody",[t._l(t.subscribers,(function(s){return t._l(s.values,(function(n,r){return e("b-tr",{key:s.group+r},[0==r?e("b-td",{staticClass:"align-middle",attrs:{rowspan:s.childCount}},[t._v(" "+t._s(s.group)+" ")]):t._e(),e("b-td",{staticClass:"text-left align-middle"},[t._v(" "+t._s(n.topic)+" ")]),e("b-td",[e("div",{staticClass:"snippet-code text-left align-middle"},[e("code",[e("pre",[e("span",{staticClass:"type"},[t._v(t._s(n.implName))]),t._v(":"),e("br"),e("span",{domProps:{innerHTML:t._s(n.methodEscaped)}},[t._v(t._s(n.methodEscaped))])])])])])],1)}))}))],2)],1)],1)},r=[],a=e("bc3a"),i=e.n(a),c={data:function(){return{subscribers:{}}},mounted:function(){var t=this;i.a.get("/subscriber").then((function(s){t.subscribers=s.data}))}},o=c,b=(e("6f56"),e("2877")),u=Object(b["a"])(o,n,r,!1,null,null,null);s["default"]=u.exports}}]);