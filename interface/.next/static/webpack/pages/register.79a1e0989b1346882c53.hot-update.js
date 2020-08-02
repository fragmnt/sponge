webpackHotUpdate_N_E("pages/register",{

/***/ "./src/Components/auth/register.js":
/*!*****************************************!*\
  !*** ./src/Components/auth/register.js ***!
  \*****************************************/
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
    _jsxFileName = "C:\\Users\\Owner\\hacks\\payid\\sponge\\interface\\src\\Components\\auth\\register.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var RegistrationForm = function RegistrationForm() {
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
      columnNumber: 1
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Email"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }), __jsx("input", {
    name: "email",
    placeholder: "example@domain.com",
    ref: register({
      required: "Required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    }),
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 32
    }
  }), __jsx("input", {
    className: "fInp",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    name: "password",
    ref: register({
      required: "Required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid password, try something more secure"
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), errors.email && errors.email.message), __jsx("div", {
    className: "formBrk",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Username"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 36
    }
  }), __jsx("input", {
    className: "fInp",
    name: "username",
    placeholder: "Your username",
    ref: register({
      required: "Required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Username must be unique and between 4-32 characters long"
      },
      validate: function validate(value) {
        return value !== "admin" || "Nice try!";
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), errors.username && errors.username.message), __jsx("button", {
    className: "bbtn",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "Create my store"));
};

_s(RegistrationForm, "KjlfnGrXSec07plfDYAvor6y4og=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"]];
});

_c = RegistrationForm;
/* harmony default export */ __webpack_exports__["default"] = (RegistrationForm);

var _c;

$RefreshReg$(_c, "RegistrationForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25Gb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiZXJyb3JzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwiZW1haWwiLCJ2YWxpZGF0ZSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsaUJBRUNDLCtEQUFPLEVBRlI7QUFBQSxNQUVwQkMsUUFGb0IsWUFFcEJBLFFBRm9CO0FBQUEsTUFFVkMsTUFGVSxZQUVWQSxNQUZVOztBQUczQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxNQUFNO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FBSjtBQUFBLEdBQXZCOztBQUVBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FDdkI7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBTSxZQUFRLEVBQUVBLFlBQVksQ0FBQ0osUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1I7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURSLEVBQzRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFENUIsRUFFUTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsZUFBVyxFQUFDLG9CQUZkO0FBR0UsT0FBRyxFQUFFRixRQUFRLENBQUM7QUFDWk8sY0FBUSxFQUFFLFVBREU7QUFFWkMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRSwwQ0FEQTtBQUVQQyxlQUFPLEVBQUU7QUFGRjtBQUZHLEtBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlIsRUFhU1QsTUFBTSxDQUFDVSxLQUFQLElBQWdCVixNQUFNLENBQUNVLEtBQVAsQ0FBYUQsT0FidEMsQ0FEUSxFQWlCQTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEdkIsRUFFQTtBQUNBLGFBQVMsRUFBQyxNQURWO0FBRUUsZUFBVyxFQUFDLDhEQUZkO0FBR0UsUUFBSSxFQUFDLFVBSFA7QUFJRSxPQUFHLEVBQUVWLFFBQVEsQ0FBQztBQUNaTyxjQUFRLEVBQUUsVUFERTtBQUVaQyxhQUFPLEVBQUU7QUFDUEMsYUFBSyxFQUFFLDBDQURBO0FBRVBDLGVBQU8sRUFBRTtBQUZGO0FBRkcsS0FBRCxDQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQWNDVCxNQUFNLENBQUNVLEtBQVAsSUFBZ0JWLE1BQU0sQ0FBQ1UsS0FBUCxDQUFhRCxPQWQ5QixDQWpCQSxFQWtDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEekIsRUFFRTtBQUNBLGFBQVMsRUFBQyxNQURWO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxlQUFXLEVBQUMsZUFIZDtBQUlFLE9BQUcsRUFBRVYsUUFBUSxDQUFDO0FBQ1ZPLGNBQVEsRUFBRSxVQURBO0FBRVZDLGFBQU8sRUFBRTtBQUNQQyxhQUFLLEVBQUUsMENBREE7QUFFUEMsZUFBTyxFQUFFO0FBRkYsT0FGQztBQU1WRSxjQUFRLEVBQUUsa0JBQUFILEtBQUs7QUFBQSxlQUFJQSxLQUFLLEtBQUssT0FBVixJQUFxQixXQUF6QjtBQUFBO0FBTkwsS0FBRCxDQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQWVHUixNQUFNLENBQUNZLFFBQVAsSUFBbUJaLE1BQU0sQ0FBQ1ksUUFBUCxDQUFnQkgsT0FmdEMsQ0FsQ0YsRUFvREE7QUFBUSxhQUFTLEVBQUMsTUFBbEI7QUFBeUIsUUFBSSxFQUFDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcERBLENBREo7QUF3REgsQ0FqRUQ7O0dBQU1aLGdCO1VBRTBCQyx1RDs7O0tBRjFCRCxnQjtBQW1FU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNzlhMWUwOTg5YjEzNDY4ODJjNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2Zvcm1zLmNzcyc7XHJcblxyXG5jb25zdCBSZWdpc3RyYXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtyZWdpc3RlciwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7IFxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB2YWx1ZXMgPT4gY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gLi4uc2VuZCB0byBBUElcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG48ZGl2IGNsYXNzTmFtZT1cImZvcm1CcmtcIj5cclxuICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPjxici8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGRvbWFpbi5jb21cIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgZW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwubWVzc2FnZX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQnJrXCI+XHJcbiAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD48YnIvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZJbnBcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKLigKLigKJcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJSZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICBwYXR0ZXJuOiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJpbnZhbGlkIHBhc3N3b3JkLCB0cnkgc29tZXRoaW5nIG1vcmUgc2VjdXJlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbC5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQnJrXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZJbnBcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiUmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXNlcm5hbWUgbXVzdCBiZSB1bmlxdWUgYW5kIGJldHdlZW4gNC0zMiBjaGFyYWN0ZXJzIGxvbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4gdmFsdWUgIT09IFwiYWRtaW5cIiB8fCBcIk5pY2UgdHJ5IVwiXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lLm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBteSBzdG9yZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==