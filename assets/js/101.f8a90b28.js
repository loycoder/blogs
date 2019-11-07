(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{416:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《深入浅出nodejs》"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《深入浅出nodejs》","aria-hidden":"true"}},[t._v("#")]),t._v(" 《深入浅出NodeJS》")]),t._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[t._v("#")]),t._v(" request")]),t._v(" "),a("p",[t._v("对TCP连接的读操作，http模块将其封装为ServerRequest对象。报文头通过http_parser进行解析")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("报文头第一行（请求行）")]),t._v("如： GET / HTTP/1.1\n"),a("ul",[a("li",[t._v("req.method")]),t._v(" "),a("li",[t._v("req.url")]),t._v(" "),a("li",[t._v("req.httpVersion")])])]),t._v(" "),a("li",[a("code",[t._v("其余报头（首部字段）是很规律的")]),t._v(" "),a("ul",[a("li",[t._v("req.headers")])])]),t._v(" "),a("li",[a("code",[t._v("报文体部分抽象为一个只读流")]),t._v("。如果业务逻辑要读取报文中的数据，要在这个数据流结束后才能操作。如：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffers "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trunk "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" buffers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trunk"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'end'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("concat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffers"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// TODO")]),t._v("\n        res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("HTTP请求对象和HTTP响应对象是相对较底层的封装，现行的Web框架如Connect和Express都是在这两个对象的基础上进行高层封装的。")])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" response")]),t._v(" "),a("ul",[a("li",[t._v("报文体头api：res.setHeader和res.writeHeader\n"),a("ul",[a("li",[t._v("可以调用setHeader多次设置，但只有调用writeHeader后，才会写入到连接中。")]),t._v(" "),a("li",[t._v("Date、Connection等响应头字段，node自动添加上了。")])])]),t._v(" "),a("li",[t._v("报文体api: res.write和res.end\n"),a("ul",[a("li",[t._v("end会先调用write发送数据，然后发送信号告知服务器这次响应结束")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("务必在结束时调用res.end结束请求。")])]),t._v(" "),a("blockquote",[a("p",[t._v("一旦开始了发送数据，setHeader和writeHeader将不再生效")])])])},[],!1,null,null,null);e.options.__file="book-node.md";s.default=e.exports}}]);