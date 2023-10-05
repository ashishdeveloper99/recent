"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547,197];
exports.modules = {

/***/ 2929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2086);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_cosmic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5926);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2048);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7297);






const Works = ({ allPosts , allWorkCategories , preview  })=>{
    const [filterCategory, setFilterCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All");
    const filteredPosts = allPosts.filter((work)=>work.metadata.category.title === filterCategory);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_4__/* .PageMeta */ .Vj, {
                title: "Works | Developer Portfolio",
                description: "The works of this developer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                preview: preview,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl md:text-3xl text-fore-primary font-bold",
                        children: "Works"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex gap-x-4 my-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "All" === filterCategory ? "cursor-pointer font-bold filter--active transition" : "cursor-pointer text-fore-subtle transition",
                                onClick: ()=>setFilterCategory("All"),
                                children: "All"
                            }, "All"),
                            allWorkCategories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: category.title === filterCategory ? "cursor-pointer font-bold filter--active transition" : "cursor-pointer text-fore-subtle transition hover:text-accent",
                                    onClick: ()=>setFilterCategory(category.title),
                                    children: category.title
                                }, category.title))
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        allPosts: filterCategory === "All" ? allPosts : filteredPosts,
                        postType: "works",
                        home: false
                    })
                ]
            })
        ]
    });
};
async function getStaticProps({ preview =null  }) {
    const allPosts = await (0,_lib_cosmic__WEBPACK_IMPORTED_MODULE_2__/* .getAllPosts */ .Bd)(preview, "works") || [];
    const allWorkCategories = await (0,_lib_cosmic__WEBPACK_IMPORTED_MODULE_2__/* .getAllCategories */ .tG)("work-categories") || [];
    return {
        props: {
            allPosts,
            allWorkCategories,
            preview
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);


/***/ }),

/***/ 5422:
/***/ ((module) => {

module.exports = require("cosmicjs");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86,295,467,206,926], () => (__webpack_exec__(2929)));
module.exports = __webpack_exports__;

})();