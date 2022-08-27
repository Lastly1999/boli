/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nconst { Header , Content  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const items1 = [\n        {\n            key: \"blogs\",\n            label: `文章`\n        },\n        {\n            key: \"tags\",\n            label: `标签`\n        },\n        {\n            key: \"infos\",\n            label: `信息`\n        }\n    ];\n    const menuSwitch = (menuInfo)=>{\n        console.log(menuInfo);\n        router.push(menuInfo.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\GitProject\\\\boli\\\\packages\\\\client\\\\pages\\\\_app.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        onClick: menuSwitch,\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            \"blogs\"\n                        ],\n                        items: items1\n                    }, void 0, false, {\n                        fileName: \"D:\\\\GitProject\\\\boli\\\\packages\\\\client\\\\pages\\\\_app.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\GitProject\\\\boli\\\\packages\\\\client\\\\pages\\\\_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\GitProject\\\\boli\\\\packages\\\\client\\\\pages\\\\_app.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\GitProject\\\\boli\\\\packages\\\\client\\\\pages\\\\_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\GitProject\\\\boli\\\\packages\\\\client\\\\pages\\\\_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\GitProject\\\\boli\\\\packages\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVnQjtBQUM5QyxNQUFNLEVBQUVFLE1BQU0sR0FBRUMsT0FBTyxHQUFFLEdBQUdILHdDQUFNO0FBQ0s7QUFHdkMsU0FBU0ssS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBRTFCLE1BQU1LLE1BQU0sR0FBdUI7UUFDakM7WUFDRUMsR0FBRyxFQUFFLE9BQU87WUFDWkMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNFRCxHQUFHLEVBQUUsTUFBTTtZQUNYQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0VELEdBQUcsRUFBRSxPQUFPO1lBQ1pDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaO0tBQ0Y7SUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsUUFBYSxHQUFLO1FBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO1FBQ3JCTCxNQUFNLENBQUNRLElBQUksQ0FBQ0gsUUFBUSxDQUFDSCxHQUFHLENBQUM7S0FDMUI7SUFFRCxxQkFDRSw4REFBQ1Ysd0NBQU07OzBCQUNMLDhEQUFDRSxNQUFNO2dCQUFDZSxTQUFTLEVBQUMsUUFBUTs7a0NBQ3hCLDhEQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsTUFBTTs7Ozs7NEJBQUc7a0NBQ3hCLDhEQUFDaEIsc0NBQUk7d0JBQUNrQixPQUFPLEVBQUVQLFVBQVU7d0JBQUVRLEtBQUssRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsWUFBWTt3QkFBQ0MsbUJBQW1CLEVBQUU7NEJBQUMsT0FBTzt5QkFBQzt3QkFBRUMsS0FBSyxFQUFFZCxNQUFNOzs7Ozs0QkFBSTs7Ozs7O29CQUNwRzswQkFDVCw4REFBQ1Qsd0NBQU07MEJBQ0wsNEVBQUNHLE9BQU87OEJBQ04sNEVBQUVHLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7O3dCQUNyQjs7Ozs7b0JBQ0g7Ozs7OztZQUNGLENBQ1Y7Q0FFRjtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhY2thZ2VzL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBNZW51UHJvcHMgfSBmcm9tIFwiYW50ZFwiXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBpdGVtczE6IE1lbnVQcm9wc1snaXRlbXMnXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiBcImJsb2dzXCIsXHJcbiAgICAgIGxhYmVsOiBg5paH56ugYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJ0YWdzXCIsXHJcbiAgICAgIGxhYmVsOiBg5qCH562+YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJpbmZvc1wiLFxyXG4gICAgICBsYWJlbDogYOS/oeaBr2AsXHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICBjb25zdCBtZW51U3dpdGNoID0gKG1lbnVJbmZvOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1lbnVJbmZvKVxyXG4gICAgcm91dGVyLnB1c2gobWVudUluZm8ua2V5KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICA8TWVudSBvbkNsaWNrPXttZW51U3dpdGNofSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snYmxvZ3MnXX0gaXRlbXM9e2l0ZW1zMX0gLz5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICA8IENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTWVudSIsIkhlYWRlciIsIkNvbnRlbnQiLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsIml0ZW1zMSIsImtleSIsImxhYmVsIiwibWVudVN3aXRjaCIsIm1lbnVJbmZvIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwidGhlbWUiLCJtb2RlIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();