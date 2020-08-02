webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_styles_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../src/styles/page.css */ "./src/styles/page.css");
/* harmony import */ var _src_styles_page_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_styles_page_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/nav */ "./src/Components/nav/index.js");
var _jsxFileName = "C:\\Users\\Owner\\hacks\\payid\\sponge\\interface\\pages\\about.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function AboutPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("div", {
    id: "hpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_src_Components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "About Sponge"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Sponge is an open-source mobile ecommerce service for social media, layered on top of PayID. Simple, mobile and modular e-commerce shop pages for social media that are shareable with a single link."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "In the same way that the seamless integration of eBay and PayPal revolutionized Web 2.0 or how WordPress and WooCommerce allowed everyone to create a blog + shop, Sponge will act as the catalyst of change in bridging the old, Web 2.0, with the new, Web 3.0. It will enable global commerce through PayID and introduce social media users to blockchain-based payments in a world that is still reliant on traditional banking, Zelle, Shopify and Cash App. This is a game-changer. And it could very well bring PayID to the mainstream (once polished). Thus, the main focus of Sponge is to then facilitate the connection between social networks, e-commerce purchases and payment networks for the global economy.")), __jsx("a", {
    href: "https://payid.org",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "footerImg",
    src: "/pay_id.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
}

_s(AboutPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = AboutPage;
;
/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

var _c;

$RefreshReg$(_c, "AboutPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFFakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFNBQ0E7QUFBSyxNQUFFLEVBQUMsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TUFGRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdXNCQU5GLENBRkYsRUFpQkk7QUFBRyxRQUFJLEVBQUMsbUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsT0FBRyxFQUFDLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQWpCSixDQURBO0FBdUJEOztHQTNCTUYsUztVQUVVRSxxRDs7O0tBRlZGLFM7QUEyQk47QUFFWUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZDliYmRiZmI3MDQyYmVhYWUzYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyLH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJy4vLi4vc3JjL3N0eWxlcy9wYWdlLmNzcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL3NyYy9Db21wb25lbnRzL25hdic7XHJcblxyXG5mdW5jdGlvbiBBYm91dFBhZ2UoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJocGdcIj5cclxuICAgICAgPE5hdmJhci8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxyXG4gICAgICAgIDxoMT5BYm91dCBTcG9uZ2U8L2gxPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgU3BvbmdlIGlzIGFuIG9wZW4tc291cmNlIG1vYmlsZSBlY29tbWVyY2Ugc2VydmljZSBmb3Igc29jaWFsIG1lZGlhLCBsYXllcmVkIG9uIHRvcCBvZiBQYXlJRC5cclxuICAgICAgICAgIFNpbXBsZSwgbW9iaWxlIGFuZCBtb2R1bGFyIGUtY29tbWVyY2Ugc2hvcCBwYWdlcyBmb3Igc29jaWFsIG1lZGlhIHRoYXQgYXJlIHNoYXJlYWJsZSB3aXRoIGEgc2luZ2xlIGxpbmsuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgIEluIHRoZSBzYW1lIHdheSB0aGF0IHRoZSBzZWFtbGVzcyBpbnRlZ3JhdGlvbiBvZiBlQmF5IGFuZCBQYXlQYWwgcmV2b2x1dGlvbml6ZWQgV2ViIDIuMCBvciBob3cgV29yZFByZXNzIGFuZCBXb29Db21tZXJjZSBhbGxvd2VkIGV2ZXJ5b25lIHRvIGNyZWF0ZSBhIGJsb2cgKyBzaG9wLCBTcG9uZ2Ugd2lsbCBhY3QgYXMgdGhlIGNhdGFseXN0IG9mIGNoYW5nZSBpbiBicmlkZ2luZyB0aGUgb2xkLCBXZWIgMi4wLCB3aXRoIHRoZSBuZXcsIFdlYiAzLjAuXHJcblxyXG5JdCB3aWxsIGVuYWJsZSBnbG9iYWwgY29tbWVyY2UgdGhyb3VnaCBQYXlJRCBhbmQgaW50cm9kdWNlIHNvY2lhbCBtZWRpYSB1c2VycyB0byBibG9ja2NoYWluLWJhc2VkIHBheW1lbnRzIGluIGEgd29ybGQgdGhhdCBpcyBzdGlsbCByZWxpYW50IG9uIHRyYWRpdGlvbmFsIGJhbmtpbmcsIFplbGxlLCBTaG9waWZ5IGFuZCBDYXNoIEFwcC5cclxuXHJcblRoaXMgaXMgYSBnYW1lLWNoYW5nZXIuIEFuZCBpdCBjb3VsZCB2ZXJ5IHdlbGwgYnJpbmcgUGF5SUQgdG8gdGhlIG1haW5zdHJlYW0gKG9uY2UgcG9saXNoZWQpLiBUaHVzLCB0aGUgbWFpbiBmb2N1cyBvZiBTcG9uZ2UgaXMgdG8gdGhlbiBmYWNpbGl0YXRlIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gc29jaWFsIG5ldHdvcmtzLCBlLWNvbW1lcmNlIHB1cmNoYXNlcyBhbmQgcGF5bWVudCBuZXR3b3JrcyBmb3IgdGhlIGdsb2JhbCBlY29ub215LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BheWlkLm9yZ1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVySW1nXCIgc3JjPVwiL3BheV9pZC5wbmdcIi8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=