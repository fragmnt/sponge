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
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Username"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 36
    }
  }), __jsx("input", {
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
      lineNumber: 50,
      columnNumber: 13
    }
  }), errors.username && errors.username.message), __jsx("button", {
    className: "bbtn",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25Gb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiZXJyb3JzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwiZW1haWwiLCJ2YWxpZGF0ZSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsaUJBRUNDLCtEQUFPLEVBRlI7QUFBQSxNQUVwQkMsUUFGb0IsWUFFcEJBLFFBRm9CO0FBQUEsTUFFVkMsTUFGVSxZQUVWQSxNQUZVOztBQUczQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxNQUFNO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FBSjtBQUFBLEdBQXZCOztBQUVBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FDdkI7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBTSxZQUFRLEVBQUVBLFlBQVksQ0FBQ0osUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1I7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURSLEVBQzRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFENUIsRUFFUTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsZUFBVyxFQUFDLG9CQUZkO0FBR0UsT0FBRyxFQUFFRixRQUFRLENBQUM7QUFDWk8sY0FBUSxFQUFFLFVBREU7QUFFWkMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRSwwQ0FEQTtBQUVQQyxlQUFPLEVBQUU7QUFGRjtBQUZHLEtBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlIsRUFhU1QsTUFBTSxDQUFDVSxLQUFQLElBQWdCVixNQUFNLENBQUNVLEtBQVAsQ0FBYUQsT0FidEMsQ0FEUSxFQWlCQTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEdkIsRUFFQTtBQUNFLGVBQVcsRUFBQyw4REFEZDtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsT0FBRyxFQUFFVixRQUFRLENBQUM7QUFDWk8sY0FBUSxFQUFFLFVBREU7QUFFWkMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRSwwQ0FEQTtBQUVQQyxlQUFPLEVBQUU7QUFGRjtBQUZHLEtBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFhQ1QsTUFBTSxDQUFDVSxLQUFQLElBQWdCVixNQUFNLENBQUNVLEtBQVAsQ0FBYUQsT0FiOUIsQ0FqQkEsRUFpQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUN5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHpCLEVBRUU7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLGVBQVcsRUFBQyxlQUZkO0FBR0UsT0FBRyxFQUFFVixRQUFRLENBQUM7QUFDVk8sY0FBUSxFQUFFLFVBREE7QUFFVkMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRSwwQ0FEQTtBQUVQQyxlQUFPLEVBQUU7QUFGRixPQUZDO0FBTVZFLGNBQVEsRUFBRSxrQkFBQUgsS0FBSztBQUFBLGVBQUlBLEtBQUssS0FBSyxPQUFWLElBQXFCLFdBQXpCO0FBQUE7QUFOTCxLQUFELENBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBY0dSLE1BQU0sQ0FBQ1ksUUFBUCxJQUFtQlosTUFBTSxDQUFDWSxRQUFQLENBQWdCSCxPQWR0QyxDQWpDRixFQWtEQTtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUF5QixRQUFJLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFsREEsQ0FESjtBQXNESCxDQS9ERDs7R0FBTVosZ0I7VUFFMEJDLHVEOzs7S0FGMUJELGdCO0FBaUVTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci42YmY3OWZhYjM3YzA5NThhM2VjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZm9ybXMuY3NzJztcclxuXHJcbmNvbnN0IFJlZ2lzdHJhdGlvbkZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBlcnJvcnMgfSA9IHVzZUZvcm0oKTsgXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHZhbHVlcyA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICAvLyAuLi5zZW5kIHRvIEFQSVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiZm9ybUJya1wiPlxyXG4gICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+PGJyLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGVAZG9tYWluLmNvbVwiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiUmVxdWlyZWRcIixcclxuICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBlbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbC5tZXNzYWdlfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CcmtcIj5cclxuICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPjxici8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgcGFzc3dvcmQsIHRyeSBzb21ldGhpbmcgbW9yZSBzZWN1cmVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CcmtcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciB1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzZXJuYW1lIG11c3QgYmUgdW5pcXVlIGFuZCBiZXR3ZWVuIDQtMzIgY2hhcmFjdGVycyBsb25nXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbHVlID0+IHZhbHVlICE9PSBcImFkbWluXCIgfHwgXCJOaWNlIHRyeSFcIlxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lICYmIGVycm9ycy51c2VybmFtZS5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmJ0blwiIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgbXkgc3RvcmU8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=