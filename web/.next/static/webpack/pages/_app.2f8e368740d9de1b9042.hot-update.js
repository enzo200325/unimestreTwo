webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, TeacherFromSubjectNameDocument, useTeacherFromSubjectNameQuery, GetLectureTimesDocument, useGetLectureTimesQuery, MeDocument, useMeQuery, GetNotesDocument, useGetNotesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDocument", function() { return LogoutDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogoutMutation", function() { return useLogoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherFromSubjectNameDocument", function() { return TeacherFromSubjectNameDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTeacherFromSubjectNameQuery", function() { return useTeacherFromSubjectNameQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLectureTimesDocument", function() { return GetLectureTimesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetLectureTimesQuery", function() { return useGetLectureTimesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotesDocument", function() { return GetNotesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetNotesQuery", function() { return useGetNotesQuery; });
/* harmony import */ var C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");



var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$();

function _templateObject7() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query getNotes {\n  noteComplete {\n    id\n    userId\n    lecture {\n      time\n      day\n      teacher {\n        name\n      }\n    }\n    user {\n      username\n    }\n  }\n}\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Me {\n  me {\n    username\n    id\n  }\n}\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query getLectureTimes {\n  lectureTimes {\n    id\n    teacher {\n      name\n    }\n    day\n    time\n  }\n}\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query TeacherFromSubjectName($subjectName: String!) {\n  getTeacherFromSubjectName(subjectName: $subjectName) {\n    teacher\n    lectures {\n      day\n      time\n      link\n      id\n    }\n  }\n}\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Register($username: String!, $password: String!, $name: String!, $code: String!) {\n  registerUser(code: $code, name: $name, username: $username, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      username\n      id\n    }\n  }\n}\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Logout {\n  logout\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      username\n      id\n    }\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
function useLoginMutation() {
  _s();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LoginDocument);
}

_s(useLoginMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
function useLogoutMutation() {
  _s2();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LogoutDocument);
}

_s2(useLogoutMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
function useRegisterMutation() {
  _s3();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](RegisterDocument);
}

_s3(useRegisterMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var TeacherFromSubjectNameDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4());
function useTeacherFromSubjectNameQuery() {
  _s4();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: TeacherFromSubjectNameDocument
  }, options));
}

_s4(useTeacherFromSubjectNameQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var GetLectureTimesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject5());
function useGetLectureTimesQuery() {
  _s5();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: GetLectureTimesDocument
  }, options));
}

_s5(useGetLectureTimesQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject6());
function useMeQuery() {
  _s6();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}

_s6(useMeQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var GetNotesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject7());
function useGetNotesQuery() {
  _s7();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: GetNotesDocument
  }, options));
}

_s7(useGetNotesQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJMb2dpbkRvY3VtZW50IiwiZ3FsIiwidXNlTG9naW5NdXRhdGlvbiIsIlVycWwiLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQiLCJ1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJHZXRMZWN0dXJlVGltZXNEb2N1bWVudCIsInVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5IiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJHZXROb3Rlc0RvY3VtZW50IiwidXNlR2V0Tm90ZXNRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUE2U08sSUFBTUEsYUFBYSxHQUFHQyxrREFBSCxtQkFBbkI7QUFlQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUNqQyxTQUFPQyxnREFBQSxDQUF3REgsYUFBeEQsQ0FBUDtBQUNEOztHQUZlRSxnQjtVQUNQQyxnRDs7O0FBQ1I7QUFDTSxJQUFNQyxjQUFjLEdBQUdILGtEQUFILG9CQUFwQjtBQU1BLFNBQVNJLGlCQUFULEdBQTZCO0FBQUE7O0FBQ2xDLFNBQU9GLGdEQUFBLENBQTBEQyxjQUExRCxDQUFQO0FBQ0Q7O0lBRmVDLGlCO1VBQ1BGLGdEOzs7QUFDUjtBQUNNLElBQU1HLGdCQUFnQixHQUFHTCxrREFBSCxvQkFBdEI7QUFlQSxTQUFTTSxtQkFBVCxHQUErQjtBQUFBOztBQUNwQyxTQUFPSixnREFBQSxDQUE4REcsZ0JBQTlELENBQVA7QUFDRDs7SUFGZUMsbUI7VUFDUEosZ0Q7OztBQUNSO0FBQ00sSUFBTUssOEJBQThCLEdBQUdQLGtEQUFILG9CQUFwQztBQWNBLFNBQVNRLDhCQUFULEdBQThIO0FBQUE7O0FBQUEsTUFBdEZDLE9BQXNGLHVFQUFKLEVBQUk7QUFDbkksU0FBT1AsNkNBQUE7QUFBNkNRLFNBQUssRUFBRUg7QUFBcEQsS0FBdUZFLE9BQXZGLEVBQVA7QUFDRDs7SUFGZUQsOEI7VUFDUE4sNkM7OztBQUNSO0FBQ00sSUFBTVMsdUJBQXVCLEdBQUdYLGtEQUFILG9CQUE3QjtBQWFBLFNBQVNZLHVCQUFULEdBQWdIO0FBQUE7O0FBQUEsTUFBL0VILE9BQStFLHVFQUFKLEVBQUk7QUFDckgsU0FBT1AsNkNBQUE7QUFBc0NRLFNBQUssRUFBRUM7QUFBN0MsS0FBeUVGLE9BQXpFLEVBQVA7QUFDRDs7SUFGZUcsdUI7VUFDUFYsNkM7OztBQUNSO0FBQ00sSUFBTVcsVUFBVSxHQUFHYixrREFBSCxvQkFBaEI7QUFTQSxTQUFTYyxVQUFULEdBQXNGO0FBQUE7O0FBQUEsTUFBbEVMLE9BQWtFLHVFQUFKLEVBQUk7QUFDM0YsU0FBT1AsNkNBQUE7QUFBeUJRLFNBQUssRUFBRUc7QUFBaEMsS0FBK0NKLE9BQS9DLEVBQVA7QUFDRDs7SUFGZUssVTtVQUNQWiw2Qzs7O0FBQ1I7QUFDTSxJQUFNYSxnQkFBZ0IsR0FBR2Ysa0RBQUgsb0JBQXRCO0FBbUJBLFNBQVNnQixnQkFBVCxHQUFrRztBQUFBOztBQUFBLE1BQXhFUCxPQUF3RSx1RUFBSixFQUFJO0FBQ3ZHLFNBQU9QLDZDQUFBO0FBQStCUSxTQUFLLEVBQUVLO0FBQXRDLEtBQTJETixPQUEzRCxFQUFQO0FBQ0Q7O0lBRmVPLGdCO1VBQ1BkLDZDOzs7QUFDUiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJmOGUzNjg3NDBkOWRlMWI5MDQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCAqIGFzIFVycWwgZnJvbSAndXJxbCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE1ha2VPcHRpb25hbDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdPzogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgTWFrZU1heWJlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS106IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE9taXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gUGljazxULCBFeGNsdWRlPGtleW9mIFQsIEs+Pjtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xuICAvKiogVGhlIGphdmFzY3JpcHQgYERhdGVgIGFzIHN0cmluZy4gVHlwZSByZXByZXNlbnRzIGRhdGUgYW5kIHRpbWUgYXMgdGhlIElTTyBEYXRlIHN0cmluZy4gKi9cbiAgRGF0ZVRpbWU6IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgdXNlcnM6IEFycmF5PFVzZXI+O1xuICBtZT86IE1heWJlPFVzZXI+O1xuICB0ZWFjaGVycz86IE1heWJlPEFycmF5PFRlYWNoZXI+PjtcbiAgc3ViamVjdHM6IEFycmF5PFN1YmplY3Q+O1xuICBnZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lOiBBcnJheTxSZXNwb25zZT47XG4gIGxlY3R1cmVUaW1lczogQXJyYXk8TGVjdHVyZVRpbWU+O1xuICBjb2RlczogQXJyYXk8Q29kZT47XG4gIG5vdGVzOiBBcnJheTxOb3RlPjtcbiAgbm90ZUNvbXBsZXRlOiBBcnJheTxOb3RlPjtcbiAgZ2V0Tm90ZXNGcm9tTGVjdHVyZTogQXJyYXk8Tm90ZT47XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5R2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZUFyZ3MgPSB7XG4gIHN1YmplY3ROYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlHZXROb3Rlc0Zyb21MZWN0dXJlQXJncyA9IHtcbiAgbGVjdHVyZUlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFRlYWNoZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVGVhY2hlcic7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgbmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGVjdHVyZVRpbWVzOiBBcnJheTxMZWN0dXJlVGltZT47XG4gIHN1YmplY3Q6IFN1YmplY3Q7XG4gIHN1YmplY3RJZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIExlY3R1cmVUaW1lID0ge1xuICBfX3R5cGVuYW1lPzogJ0xlY3R1cmVUaW1lJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBkYXk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGluaz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgdGVhY2hlcklkOiBTY2FsYXJzWydGbG9hdCddO1xuICB0ZWFjaGVyOiBUZWFjaGVyO1xufTtcblxuZXhwb3J0IHR5cGUgU3ViamVjdCA9IHtcbiAgX190eXBlbmFtZT86ICdTdWJqZWN0JztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGVhY2hlcnM6IEFycmF5PFRlYWNoZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAncmVzcG9uc2UnO1xuICB0ZWFjaGVyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGVjdHVyZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbn07XG5cbmV4cG9ydCB0eXBlIENvZGUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnQ29kZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdmFsdWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTm90ZSA9IHtcbiAgX190eXBlbmFtZT86ICdOb3RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBkZXNjcmlwdGlvbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXI6IFVzZXI7XG4gIHVzZXJJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgbGVjdHVyZTogTGVjdHVyZVRpbWU7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgcmVnaXN0ZXJVc2VyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBhZGRUZWFjaGVyOiBUZWFjaGVyO1xuICByZW1vdmVUZWFjaGVyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgYWRkU3ViamVjdDogU3ViamVjdDtcbiAgYWRkTGVjdHVyZVRpbWU6IExlY3R1cmVUaW1lO1xuICBhZGRDb2RlczogQXJyYXk8Q29kZT47XG4gIGFkZE5vdGU6IE5vdGU7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJVc2VyQXJncyA9IHtcbiAgY29kZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZFRlYWNoZXJBcmdzID0ge1xuICBzdWJqZWN0TmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlbW92ZVRlYWNoZXJBcmdzID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRTdWJqZWN0QXJncyA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkTGVjdHVyZVRpbWVBcmdzID0ge1xuICB0ZWFjaGVyTmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkYXk6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZENvZGVzQXJncyA9IHtcbiAgY29kZXM6IEFycmF5PFNjYWxhcnNbJ1N0cmluZyddPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGROb3RlQXJncyA9IHtcbiAgbGVjdHVyZUlkOiBTY2FsYXJzWydGbG9hdCddO1xuICB1c2VyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAndXNlcm5hbWUnIHwgJ2lkJz5cbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2xvZ291dCc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNvZGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZWdpc3RlclVzZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHN1YmplY3ROYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBnZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lOiBBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ3Jlc3BvbnNlJyB9XG4gICAgJiBQaWNrPFJlc3BvbnNlLCAndGVhY2hlcic+XG4gICAgJiB7IGxlY3R1cmVzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnIH1cbiAgICAgICYgUGljazxMZWN0dXJlVGltZSwgJ2RheScgfCAndGltZScgfCAnbGluaycgfCAnaWQnPlxuICAgICk+IH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgR2V0TGVjdHVyZVRpbWVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXRMZWN0dXJlVGltZXNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBsZWN0dXJlVGltZXM6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnIH1cbiAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICdpZCcgfCAnZGF5JyB8ICd0aW1lJz5cbiAgICAmIHsgdGVhY2hlcjogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1RlYWNoZXInIH1cbiAgICAgICYgUGljazxUZWFjaGVyLCAnbmFtZSc+XG4gICAgKSB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBHZXROb3Rlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0Tm90ZXNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBub3RlQ29tcGxldGU6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnTm90ZScgfVxuICAgICYgUGljazxOb3RlLCAnaWQnIHwgJ3VzZXJJZCc+XG4gICAgJiB7IGxlY3R1cmU6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICAgJiBQaWNrPExlY3R1cmVUaW1lLCAndGltZScgfCAnZGF5Jz5cbiAgICAgICYgeyB0ZWFjaGVyOiAoXG4gICAgICAgIHsgX190eXBlbmFtZT86ICdUZWFjaGVyJyB9XG4gICAgICAgICYgUGljazxUZWFjaGVyLCAnbmFtZSc+XG4gICAgICApIH1cbiAgICApLCB1c2VyOiAoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZSc+XG4gICAgKSB9XG4gICk+IH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IExvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9naW4oJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgbG9naW4odXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpbk11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTG9nb3V0RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9nb3V0IHtcbiAgbG9nb3V0XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ291dE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KExvZ291dERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBSZWdpc3RlcigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISwgJG5hbWU6IFN0cmluZyEsICRjb2RlOiBTdHJpbmchKSB7XG4gIHJlZ2lzdGVyVXNlcihjb2RlOiAkY29kZSwgbmFtZTogJG5hbWUsIHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICB1c2VybmFtZVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFRlYWNoZXJGcm9tU3ViamVjdE5hbWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBUZWFjaGVyRnJvbVN1YmplY3ROYW1lKCRzdWJqZWN0TmFtZTogU3RyaW5nISkge1xuICBnZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lKHN1YmplY3ROYW1lOiAkc3ViamVjdE5hbWUpIHtcbiAgICB0ZWFjaGVyXG4gICAgbGVjdHVyZXMge1xuICAgICAgZGF5XG4gICAgICB0aW1lXG4gICAgICBsaW5rXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeT4oeyBxdWVyeTogVGVhY2hlckZyb21TdWJqZWN0TmFtZURvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTtcbmV4cG9ydCBjb25zdCBHZXRMZWN0dXJlVGltZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBnZXRMZWN0dXJlVGltZXMge1xuICBsZWN0dXJlVGltZXMge1xuICAgIGlkXG4gICAgdGVhY2hlciB7XG4gICAgICBuYW1lXG4gICAgfVxuICAgIGRheVxuICAgIHRpbWVcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRMZWN0dXJlVGltZXNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldExlY3R1cmVUaW1lc1F1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxHZXRMZWN0dXJlVGltZXNRdWVyeT4oeyBxdWVyeTogR2V0TGVjdHVyZVRpbWVzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWUge1xuICBtZSB7XG4gICAgdXNlcm5hbWVcbiAgICBpZFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxNZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxNZVF1ZXJ5Pih7IHF1ZXJ5OiBNZURvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTtcbmV4cG9ydCBjb25zdCBHZXROb3Rlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IGdldE5vdGVzIHtcbiAgbm90ZUNvbXBsZXRlIHtcbiAgICBpZFxuICAgIHVzZXJJZFxuICAgIGxlY3R1cmUge1xuICAgICAgdGltZVxuICAgICAgZGF5XG4gICAgICB0ZWFjaGVyIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldE5vdGVzUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxHZXROb3Rlc1F1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxHZXROb3Rlc1F1ZXJ5Pih7IHF1ZXJ5OiBHZXROb3Rlc0RvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9