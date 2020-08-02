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
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Email"), __jsx("input", {
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
      lineNumber: 17,
      columnNumber: 9
    }
  }), errors.email && errors.email.message, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Password"), __jsx("input", {
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
      lineNumber: 31,
      columnNumber: 9
    }
  }), errors.email && errors.email.message, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Username"), __jsx("input", {
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
      lineNumber: 45,
      columnNumber: 9
    }
  }), errors.username && errors.username.message, __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Submit"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25Gb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiZXJyb3JzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwiZW1haWwiLCJ2YWxpZGF0ZSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxpQkFFQ0MsK0RBQU8sRUFGUjtBQUFBLE1BRXBCQyxRQUZvQixZQUVwQkEsUUFGb0I7QUFBQSxNQUVWQyxNQUZVLFlBRVZBLE1BRlU7O0FBRzNCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLE1BQU07QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixDQUFKO0FBQUEsR0FBdkI7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTSxDQUN2QjtBQUNILEdBRkQ7O0FBSUEsU0FDSTtBQUFNLFlBQVEsRUFBRUEsWUFBWSxDQUFDSixRQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsRUFHQTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsZUFBVyxFQUFDLG9CQUZkO0FBR0UsT0FBRyxFQUFFRixRQUFRLENBQUM7QUFDWk8sY0FBUSxFQUFFLFVBREU7QUFFWkMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRSwwQ0FEQTtBQUVQQyxlQUFPLEVBQUU7QUFGRjtBQUZHLEtBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEEsRUFjQ1QsTUFBTSxDQUFDVSxLQUFQLElBQWdCVixNQUFNLENBQUNVLEtBQVAsQ0FBYUQsT0FkOUIsRUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkEsRUFpQkE7QUFDRSxlQUFXLEVBQUMsOERBRGQ7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLE9BQUcsRUFBRVYsUUFBUSxDQUFDO0FBQ1pPLGNBQVEsRUFBRSxVQURFO0FBRVpDLGFBQU8sRUFBRTtBQUNQQyxhQUFLLEVBQUUsMENBREE7QUFFUEMsZUFBTyxFQUFFO0FBRkY7QUFGRyxLQUFELENBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCQSxFQTRCQ1QsTUFBTSxDQUFDVSxLQUFQLElBQWdCVixNQUFNLENBQUNVLEtBQVAsQ0FBYUQsT0E1QjlCLEVBOEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBOUJBLEVBK0JBO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFXLEVBQUMsZUFGZDtBQUdFLE9BQUcsRUFBRVYsUUFBUSxDQUFDO0FBQ1ZPLGNBQVEsRUFBRSxVQURBO0FBRVZDLGFBQU8sRUFBRTtBQUNQQyxhQUFLLEVBQUUsMENBREE7QUFFUEMsZUFBTyxFQUFFO0FBRkYsT0FGQztBQU1WRSxjQUFRLEVBQUUsa0JBQUFILEtBQUs7QUFBQSxlQUFJQSxLQUFLLEtBQUssT0FBVixJQUFxQixXQUF6QjtBQUFBO0FBTkwsS0FBRCxDQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkEsRUEyQ0NSLE1BQU0sQ0FBQ1ksUUFBUCxJQUFtQlosTUFBTSxDQUFDWSxRQUFQLENBQWdCSCxPQTNDcEMsRUE2Q0E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0NBLENBREo7QUFpREgsQ0ExREQ7O0dBQU1aLGdCO1VBRTBCQyx1RDs7O0tBRjFCRCxnQjtBQTREU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuZDNkYWI0YWM0OTNlZTIzM2E5ZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5jb25zdCBSZWdpc3RyYXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtyZWdpc3RlciwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7IFxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB2YWx1ZXMgPT4gY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gLi4uc2VuZCB0byBBUElcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cclxuICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBkb21haW4uY29tXCJcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJSZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICBwYXR0ZXJuOiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJpbnZhbGlkIGVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLm1lc3NhZ2V9XHJcblxyXG4gICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgcGFzc3dvcmQsIHRyeSBzb21ldGhpbmcgbW9yZSBzZWN1cmVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLm1lc3NhZ2V9XHJcbiAgXHJcbiAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiUmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICBwYXR0ZXJuOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXNlcm5hbWUgbXVzdCBiZSB1bmlxdWUgYW5kIGJldHdlZW4gNC0zMiBjaGFyYWN0ZXJzIGxvbmdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbHVlID0+IHZhbHVlICE9PSBcImFkbWluXCIgfHwgXCJOaWNlIHRyeSFcIlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lICYmIGVycm9ycy51c2VybmFtZS5tZXNzYWdlfVxyXG4gIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==