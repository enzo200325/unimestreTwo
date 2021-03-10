webpackHotUpdate_N_E("pages/[subjectName]",{

/***/ "./src/pages/[subjectName]/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/[subjectName]/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");


var _jsxFileName = "C:\\Dev\\Projects\\unimestreTwo\\web\\src\\pages\\[subjectName]\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var SubjectPage = function SubjectPage() {
  _s();

  var _teachers$, _teachers$$data;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var subjectName = router.query.subjectName;
  console.log(subjectName);
  var teachers = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useTeacherFromSubjectNameQuery"])({
    variables: {
      subjectName: subjectName
    }
  });
  teachers = (_teachers$ = teachers[0]) === null || _teachers$ === void 0 ? void 0 : (_teachers$$data = _teachers$.data) === null || _teachers$$data === void 0 ? void 0 : _teachers$$data.getTeacherFromSubjectName;
  console.log(teachers);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: "hello"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(SubjectPage, "hcB1Cw0ozlW5YEJPry8d67dp9g4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useTeacherFromSubjectNameQuery"]];
});

_c = SubjectPage;
/* harmony default export */ __webpack_exports__["default"] = (SubjectPage);

var _c;

$RefreshReg$(_c, "SubjectPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzdWJqZWN0TmFtZV0vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN1YmplY3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3ViamVjdE5hbWUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ0ZWFjaGVycyIsInVzZVRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJnZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEd0IsTUFFakJDLFdBRmlCLEdBRUdGLE1BQU0sQ0FBQ0csS0FGVixDQUVqQkQsV0FGaUI7QUFJeEJFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxXQUFaO0FBRUEsTUFBSUksUUFBYSxHQUFHQyx5RkFBOEIsQ0FBQztBQUFDQyxhQUFTLEVBQUU7QUFBQ04saUJBQVcsRUFBRUE7QUFBZDtBQUFaLEdBQUQsQ0FBbEQ7QUFDQUksVUFBUSxpQkFBR0EsUUFBUSxDQUFDLENBQUQsQ0FBWCxrRUFBRyxXQUFhRyxJQUFoQixvREFBRyxnQkFBbUJDLHlCQUE5QjtBQUNBTixTQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtBQUVBLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQWJEOztHQUFNUCxXO1VBQ1dFLHFELEVBS0tNLGlGOzs7S0FOaEJSLFc7QUFlU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3N1YmplY3ROYW1lXS44YmQ0OTQ5ZDI4OTFkNzYxNGFiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkgfSBmcm9tIFwiLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuXHJcblxyXG5jb25zdCBTdWJqZWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgXHJcbiAgY29uc3Qge3N1YmplY3ROYW1lfTogYW55ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnNvbGUubG9nKHN1YmplY3ROYW1lKVxyXG5cclxuICBsZXQgdGVhY2hlcnM6IGFueSA9IHVzZVRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeSh7dmFyaWFibGVzOiB7c3ViamVjdE5hbWU6IHN1YmplY3ROYW1lfX0pOyBcclxuICB0ZWFjaGVycyA9IHRlYWNoZXJzWzBdPy5kYXRhPy5nZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lOyBcclxuICBjb25zb2xlLmxvZyh0ZWFjaGVycyk7IFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+aGVsbG88L2gxPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViamVjdFBhZ2U7ICJdLCJzb3VyY2VSb290IjoiIn0=