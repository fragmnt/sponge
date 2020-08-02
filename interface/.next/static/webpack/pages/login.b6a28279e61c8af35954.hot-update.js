webpackHotUpdate_N_E("pages/login",{

/***/ "./src/Components/auth/login.js":
/*!**************************************!*\
  !*** ./src/Components/auth/login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _styles_forms_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/forms.css */ "./src/styles/forms.css");
/* harmony import */ var _styles_forms_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_forms_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Owner\\hacks\\payid\\sponge\\interface\\src\\Components\\auth\\login.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LoginForm = function LoginForm() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])(),
      register = _useForm.register,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(values) {
    return console.log(values);
  };

  var handleSubmit = function handleSubmit() {// ...send to API
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "formBrk",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Email"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 31
    }
  }), __jsx("input", {
    className: "fInp",
    name: "email",
    placeholder: "example@domain.com",
    ref: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), errors.email && errors.email.message), __jsx("div", {
    className: "formBrk",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 32
    }
  }), __jsx("input", {
    className: "fInp",
    name: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    ref: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), errors.email && errors.email.message), __jsx("button", {
    className: "bbtn",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Log in"));
};

_s(LoginForm, "KjlfnGrXSec07plfDYAvor6y4og=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"]];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlbWFpbCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsaUJBRVFDLCtEQUFPLEVBRmY7QUFBQSxNQUViQyxRQUZhLFlBRWJBLFFBRmE7QUFBQSxNQUVIQyxNQUZHLFlBRUhBLE1BRkc7O0FBR3BCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLE1BQU07QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixDQUFKO0FBQUEsR0FBdkI7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTSxDQUN2QjtBQUNILEdBRkQ7O0FBSUEsU0FDSTtBQUFNLFlBQVEsRUFBRUEsWUFBWSxDQUFDSixRQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsRUFDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURyQixFQUVEO0FBQ0EsYUFBUyxFQUFDLE1BRFY7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGVBQVcsRUFBQyxvQkFIZDtBQUlFLE9BQUcsRUFBRUYsUUFBUSxFQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQyxFQVFBQyxNQUFNLENBQUNNLEtBQVAsSUFBZ0JOLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxPQVI3QixDQURELEVBWUE7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxFQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHZCLEVBRUE7QUFDQSxhQUFTLEVBQUMsTUFEVjtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsZUFBVyxFQUFDLDhEQUhkO0FBSUUsT0FBRyxFQUFFUixRQUFRLEVBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBUUNDLE1BQU0sQ0FBQ00sS0FBUCxJQUFnQk4sTUFBTSxDQUFDTSxLQUFQLENBQWFDLE9BUjlCLENBWkEsRUF1QkE7QUFBUSxhQUFTLEVBQUMsTUFBbEI7QUFBeUIsUUFBSSxFQUFDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkEsQ0FESjtBQTJCSCxDQXBDRDs7R0FBTVYsUztVQUUwQkMsdUQ7OztLQUYxQkQsUztBQXNDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYjZhMjgyNzllNjFjOGFmMzU5NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2Zvcm1zLmNzcyc7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdmFsdWVzID0+IGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIC4uLnNlbmQgdG8gQVBJXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CcmtcIj5cclxuICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+PGJyLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJmSW5wXCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGVAZG9tYWluLmNvbVwiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbC5tZXNzYWdlfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CcmtcIj5cclxuICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPjxici8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZklucFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKLigKLigKJcIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwubWVzc2FnZX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkxvZyBpbjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==