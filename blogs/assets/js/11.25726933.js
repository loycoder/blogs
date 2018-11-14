(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{172:function(t,e,r){"use strict";r.r(e);var i=r(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),r("p",[t._v("type : subject")]),t._m(5),t._m(6),t._m(7),r("p",[t._v("对应内容是commit 目的的简短描述，一般不超过50个字符")]),r("p",[t._v("推荐文章：")]),r("p",[r("a",{attrs:{href:"https://www.conventionalcommits.org/zh/v1.0.0-beta.2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("约定式提交"),r("OutboundLink")],1)]),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5b4328bbf265da0fa21a6820",target:"_blank",rel:"noopener noreferrer"}},[t._v("必须知道的 Git 分支开发规范"),r("OutboundLink")],1)]),r("p",[r("a",{attrs:{href:"http://www.open-open.com/lib/view/open1451353135339.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 在团队中的最佳实践--如何正确使用Git Flow"),r("OutboundLink")],1)]),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34223150",target:"_blank",rel:"noopener noreferrer"}},[t._v("优雅的提交你的 Git Commit Message"),r("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ai前端git规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ai前端git规范","aria-hidden":"true"}},[this._v("#")]),this._v(" AI前端Git规范")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"git分支命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git分支命名","aria-hidden":"true"}},[this._v("#")]),this._v(" Git分支命名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("master：主分支，负责记录上线版本的迭代，该分支代码与线上代码是完全一致的。")]),e("li",[this._v("develop：开发分支，该分支记录相对稳定的版本，所有的feature分支和bugfix分支都从该分支创建。其它分支为短期分支，其完成功能开发之后需要删除")]),e("li",[this._v("feature/*：特性（功能）分支，用于开发新的功能，不同的功能创建不同的功能分支，功能分支开发完成并自测通过之后，需要合并到 develop 分支，之后删除该分支。")]),e("li",[this._v("bugfix/*：bug修复分支，用于修复不紧急的bug，普通bug均需要创建bugfix分支开发，开发完成自测没问题后合并到 develop 分支后，删除该分支。")]),e("li",[this._v("release/*：发布分支，用于代码上线准备，该分支从develop分支创建，创建之后由测试同学发布到测试环境进行测试，测试过程中发现bug需要开发人员在该release分支上进行bug修复，所有bug修复完后，在上线之前，需要合并该release分支到master分支和develop分支。")]),e("li",[this._v("hotfix/*：紧急bug修复分支，该分支只有在紧急情况下使用，从master分支创建，用于紧急修复线上bug，修复完成后，需要合并该分支到master分支以便上线，同时需要再合并到develop分支。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/9/1647e5710a461adc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"git-commit-message格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-message格式","aria-hidden":"true"}},[this._v("#")]),this._v(" Git Commit Message格式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"type-指提交类型："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-指提交类型：","aria-hidden":"true"}},[this._v("#")]),this._v(" type 指提交类型：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("type: commit 的类型")]),r("li",[t._v("feature: 新特性")]),r("li",[t._v("fix: 修改问题")]),r("li",[t._v("style: 代码格式修改")]),r("li",[t._v("test: 测试用例修改")]),r("li",[t._v("docs: 文档修改")]),r("li",[t._v("refactor: 代码重构")]),r("li",[t._v("misc: 其他修改, 比如构建流程, 依赖管理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"subject-指提交描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subject-指提交描述","aria-hidden":"true"}},[this._v("#")]),this._v(" subject 指提交描述")])}],!1,null,null,null);e.default=a.exports}}]);