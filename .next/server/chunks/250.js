exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 1652:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__s5YX8"
};


/***/ }),

/***/ 2712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar_4.c362c4ce.png","height":320,"width":453,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEX////HzcuZjIM5MjL//vjIxcDp7OOw1t779uj9+/P779i0ycna2MqvraeBenewnID4z6D0rCbmwF1gW1igzN6kekj/0mHMoWbalivIWtEaAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAN0lEQVQImRXGSRKAIBAAsWadQVEWBf3/SykuqQDgNxCzatq5rdcjEa6vRhGDdf+UV06MG62XJywa4QFwAc+GDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 2480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2086);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


const Date = ({ dateString , formatStyle  })=>{
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, formatStyle)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Date);


/***/ }),

/***/ 5593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2086);

const Loader = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "flex items-center text-base font-bold",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                className: "animate-spin mr-2 h-5 w-5 text-fore-primary",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                ]
            }),
            "Loading..."
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 2089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2086);
/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1652);
/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8757);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const components = {
    a: (a)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: a.href,
            rel: "noopener noreferrer",
            target: "_blank",
            children: a.children
        });
    },
    img: (img)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: img.src,
            alt: img.alt,
            width: 400,
            height: 300,
            quality: 50,
            layout: "responsive",
            objectFit: "contain",
            objectPosition: "center"
        });
    }
};
const PostBody = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: (_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().markdown),
            components: components,
            children: content
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostBody);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PostHeader)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2086);
// EXTERNAL MODULE: ./src/components/Date.jsx
var components_Date = __webpack_require__(2480);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.3.2_react-dom@18.2.0_react@18.1.0/node_modules/next/image.js
var next_image = __webpack_require__(8757);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/CoverImage.jsx


const CoverImage = ({ title , url  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "relative w-full my-4 pb-[55%]",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: url,
            quality: 60,
            alt: `Cover image for ${title}`,
            layout: "fill",
            objectFit: "cover",
            placeholder: "blur",
            blurDataURL: `${url}?auto=format,compress&q=1&blur=500&w=2`,
            priority: true
        })
    });
};
/* harmony default export */ const components_CoverImage = (CoverImage);

// EXTERNAL MODULE: ./src/components/PostTitle.jsx
var PostTitle = __webpack_require__(5430);
// EXTERNAL MODULE: ./src/configs/icons.jsx
var icons = __webpack_require__(9467);
// EXTERNAL MODULE: ./public/images/avatar_4.png
var avatar_4 = __webpack_require__(2712);
;// CONCATENATED MODULE: ./src/components/PostHeader.jsx







const PostHeader = ({ post  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PostTitle/* default */.Z, {
                children: post.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex items-center mb-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: avatar_4/* default */.Z,
                            width: 42,
                            height: 42,
                            alt: "Stefan Kudla",
                            className: "rounded-full",
                            placeholder: "blur"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 text-sm",
                            children: [
                                "Ashish Dhomne |",
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx(components_Date/* default */.Z, {
                                    dateString: post.created_at,
                                    formatStyle: "LLLL dd, yyyy"
                                }),
                                " |",
                                " ",
                                post.metadata.category.title
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_CoverImage, {
                title: post.title,
                url: post.metadata.cover_image.imgix_url
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-row justify-between sm:items-center pb-8 border-b",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sm:flex items-center gap-x-2",
                    children: post.metadata.live_url ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                href: post.metadata.live_url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "flex items-center text-accent hover:text-gray-500 text-sm md:ml-4 w-fit",
                                children: [
                                    "Live Site",
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(icons/* ExternalLinkIcon */.h0, {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                href: post.metadata.repo_url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "flex items-center text-accent hover:text-gray-500 text-sm",
                                children: [
                                    "Github Repo",
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(icons/* ExternalLinkIcon */.h0, {})
                                    })
                                ]
                            })
                        ]
                    }) : undefined
                })
            })
        ]
    });
};
/* harmony default export */ const components_PostHeader = (PostHeader);


/***/ }),

/***/ 5430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2086);

const PostTitle = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-fore-primary text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal leading-tight md:leading-none mb-12 mt-4",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTitle);


/***/ })

};
;