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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var subjectName = router.query[0];
  var teachers = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useTeacherFromSubjectNameQuery"])({
    variables: {
      subjectName: subjectName
    }
  });
  console.log(teachers);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: "hello"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(SubjectPage, "+28cyU3Yqaz+QVg4w1KmAUlNMTo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzdWJqZWN0TmFtZV0vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN1YmplY3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3ViamVjdE5hbWUiLCJxdWVyeSIsInRlYWNoZXJzIiwidXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5IiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsV0FBZ0IsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWEsQ0FBYixDQUF6QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseUZBQThCLENBQUM7QUFBQ0MsYUFBUyxFQUFFO0FBQUNKLGlCQUFXLEVBQUVBO0FBQWQ7QUFBWixHQUFELENBQS9DO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBRUEsc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBVkQ7O0dBQU1MLFc7VUFDV0UscUQsRUFHRUksaUY7OztLQUpiTixXO0FBWVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzdWJqZWN0TmFtZV0uNDkwMzBjMGE1NzAwMzQ3N2E4NmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5cclxuY29uc3QgU3ViamVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gIGNvbnN0IHN1YmplY3ROYW1lOiBhbnkgPSByb3V0ZXIucXVlcnlbMF1cclxuXHJcbiAgY29uc3QgdGVhY2hlcnMgPSB1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkoe3ZhcmlhYmxlczoge3N1YmplY3ROYW1lOiBzdWJqZWN0TmFtZX19KTsgXHJcbiAgY29uc29sZS5sb2codGVhY2hlcnMpOyBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPmhlbGxvPC9oMT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YmplY3RQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9