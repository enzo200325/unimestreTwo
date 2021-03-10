webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJMb2dpbkRvY3VtZW50IiwiZ3FsIiwidXNlTG9naW5NdXRhdGlvbiIsIlVycWwiLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQiLCJ1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJHZXRMZWN0dXJlVGltZXNEb2N1bWVudCIsInVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5IiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJHZXROb3Rlc0RvY3VtZW50IiwidXNlR2V0Tm90ZXNRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUE2U08sSUFBTUEsYUFBYSxHQUFHQyxrREFBSCxtQkFBbkI7QUFlQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUNqQyxTQUFPQyxnREFBQSxDQUF3REgsYUFBeEQsQ0FBUDtBQUNEOztHQUZlRSxnQjtVQUNQQyxnRDs7O0FBQ1I7QUFDTSxJQUFNQyxjQUFjLEdBQUdILGtEQUFILG9CQUFwQjtBQU1BLFNBQVNJLGlCQUFULEdBQTZCO0FBQUE7O0FBQ2xDLFNBQU9GLGdEQUFBLENBQTBEQyxjQUExRCxDQUFQO0FBQ0Q7O0lBRmVDLGlCO1VBQ1BGLGdEOzs7QUFDUjtBQUNNLElBQU1HLGdCQUFnQixHQUFHTCxrREFBSCxvQkFBdEI7QUFlQSxTQUFTTSxtQkFBVCxHQUErQjtBQUFBOztBQUNwQyxTQUFPSixnREFBQSxDQUE4REcsZ0JBQTlELENBQVA7QUFDRDs7SUFGZUMsbUI7VUFDUEosZ0Q7OztBQUNSO0FBQ00sSUFBTUssOEJBQThCLEdBQUdQLGtEQUFILG9CQUFwQztBQWNBLFNBQVNRLDhCQUFULEdBQThIO0FBQUE7O0FBQUEsTUFBdEZDLE9BQXNGLHVFQUFKLEVBQUk7QUFDbkksU0FBT1AsNkNBQUE7QUFBNkNRLFNBQUssRUFBRUg7QUFBcEQsS0FBdUZFLE9BQXZGLEVBQVA7QUFDRDs7SUFGZUQsOEI7VUFDUE4sNkM7OztBQUNSO0FBQ00sSUFBTVMsdUJBQXVCLEdBQUdYLGtEQUFILG9CQUE3QjtBQWFBLFNBQVNZLHVCQUFULEdBQWdIO0FBQUE7O0FBQUEsTUFBL0VILE9BQStFLHVFQUFKLEVBQUk7QUFDckgsU0FBT1AsNkNBQUE7QUFBc0NRLFNBQUssRUFBRUM7QUFBN0MsS0FBeUVGLE9BQXpFLEVBQVA7QUFDRDs7SUFGZUcsdUI7VUFDUFYsNkM7OztBQUNSO0FBQ00sSUFBTVcsVUFBVSxHQUFHYixrREFBSCxvQkFBaEI7QUFTQSxTQUFTYyxVQUFULEdBQXNGO0FBQUE7O0FBQUEsTUFBbEVMLE9BQWtFLHVFQUFKLEVBQUk7QUFDM0YsU0FBT1AsNkNBQUE7QUFBeUJRLFNBQUssRUFBRUc7QUFBaEMsS0FBK0NKLE9BQS9DLEVBQVA7QUFDRDs7SUFGZUssVTtVQUNQWiw2Qzs7O0FBQ1I7QUFDTSxJQUFNYSxnQkFBZ0IsR0FBR2Ysa0RBQUgsb0JBQXRCO0FBbUJBLFNBQVNnQixnQkFBVCxHQUFrRztBQUFBOztBQUFBLE1BQXhFUCxPQUF3RSx1RUFBSixFQUFJO0FBQ3ZHLFNBQU9QLDZDQUFBO0FBQStCUSxTQUFLLEVBQUVLO0FBQXRDLEtBQTJETixPQUEzRCxFQUFQO0FBQ0Q7O0lBRmVPLGdCO1VBQ1BkLDZDOzs7QUFDUiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZjhlMzY4NzQwZDlkZTFiOTA0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbiAgLyoqIFRoZSBqYXZhc2NyaXB0IGBEYXRlYCBhcyBzdHJpbmcuIFR5cGUgcmVwcmVzZW50cyBkYXRlIGFuZCB0aW1lIGFzIHRoZSBJU08gRGF0ZSBzdHJpbmcuICovXG4gIERhdGVUaW1lOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgdGVhY2hlcnM/OiBNYXliZTxBcnJheTxUZWFjaGVyPj47XG4gIHN1YmplY3RzOiBBcnJheTxTdWJqZWN0PjtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZTogQXJyYXk8UmVzcG9uc2U+O1xuICBsZWN0dXJlVGltZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbiAgY29kZXM6IEFycmF5PENvZGU+O1xuICBub3RlczogQXJyYXk8Tm90ZT47XG4gIG5vdGVDb21wbGV0ZTogQXJyYXk8Tm90ZT47XG4gIGdldE5vdGVzRnJvbUxlY3R1cmU6IEFycmF5PE5vdGU+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWVBcmdzID0ge1xuICBzdWJqZWN0TmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5R2V0Tm90ZXNGcm9tTGVjdHVyZUFyZ3MgPSB7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBUZWFjaGVyID0ge1xuICBfX3R5cGVuYW1lPzogJ1RlYWNoZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxlY3R1cmVUaW1lczogQXJyYXk8TGVjdHVyZVRpbWU+O1xuICBzdWJqZWN0OiBTdWJqZWN0O1xuICBzdWJqZWN0SWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBMZWN0dXJlVGltZSA9IHtcbiAgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgZGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGxpbms/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHRlYWNoZXJJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdGVhY2hlcjogVGVhY2hlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFN1YmplY3QgPSB7XG4gIF9fdHlwZW5hbWU/OiAnU3ViamVjdCc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRlYWNoZXJzOiBBcnJheTxUZWFjaGVyPjtcbn07XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ3Jlc3BvbnNlJztcbiAgdGVhY2hlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGxlY3R1cmVzOiBBcnJheTxMZWN0dXJlVGltZT47XG59O1xuXG5leHBvcnQgdHlwZSBDb2RlID0ge1xuICBfX3R5cGVuYW1lPzogJ0NvZGUnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHZhbHVlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE5vdGUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnTm90ZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgZGVzY3JpcHRpb24/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxpbms6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VyOiBVc2VyO1xuICB1c2VySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGxlY3R1cmU6IExlY3R1cmVUaW1lO1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHJlZ2lzdGVyVXNlcjogVXNlclJlc3BvbnNlO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xuICBsb2dvdXQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgYWRkVGVhY2hlcjogVGVhY2hlcjtcbiAgcmVtb3ZlVGVhY2hlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFkZFN1YmplY3Q6IFN1YmplY3Q7XG4gIGFkZExlY3R1cmVUaW1lOiBMZWN0dXJlVGltZTtcbiAgYWRkQ29kZXM6IEFycmF5PENvZGU+O1xuICBhZGROb3RlOiBOb3RlO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyVXNlckFyZ3MgPSB7XG4gIGNvZGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRUZWFjaGVyQXJncyA9IHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZW1vdmVUZWFjaGVyQXJncyA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkU3ViamVjdEFyZ3MgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZExlY3R1cmVUaW1lQXJncyA9IHtcbiAgdGVhY2hlck5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRDb2Rlc0FyZ3MgPSB7XG4gIGNvZGVzOiBBcnJheTxTY2FsYXJzWydTdHJpbmcnXT47XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkTm90ZUFyZ3MgPSB7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGxpbms6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBsb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdsb2dvdXQnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjb2RlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXJVc2VyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAndXNlcm5hbWUnIHwgJ2lkJz5cbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBzdWJqZWN0TmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZTogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdyZXNwb25zZScgfVxuICAgICYgUGljazxSZXNwb25zZSwgJ3RlYWNoZXInPlxuICAgICYgeyBsZWN0dXJlczogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0xlY3R1cmVUaW1lJyB9XG4gICAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICdkYXknIHwgJ3RpbWUnIHwgJ2xpbmsnIHwgJ2lkJz5cbiAgICApPiB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEdldExlY3R1cmVUaW1lc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0TGVjdHVyZVRpbWVzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbGVjdHVyZVRpbWVzOiBBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0xlY3R1cmVUaW1lJyB9XG4gICAgJiBQaWNrPExlY3R1cmVUaW1lLCAnaWQnIHwgJ2RheScgfCAndGltZSc+XG4gICAgJiB7IHRlYWNoZXI6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdUZWFjaGVyJyB9XG4gICAgICAmIFBpY2s8VGVhY2hlciwgJ25hbWUnPlxuICAgICkgfVxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTWVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBtZT86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUGljazxVc2VyLCAndXNlcm5hbWUnIHwgJ2lkJz5cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgR2V0Tm90ZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldE5vdGVzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbm90ZUNvbXBsZXRlOiBBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ05vdGUnIH1cbiAgICAmIFBpY2s8Tm90ZSwgJ2lkJyB8ICd1c2VySWQnPlxuICAgICYgeyBsZWN0dXJlOiAoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnIH1cbiAgICAgICYgUGljazxMZWN0dXJlVGltZSwgJ3RpbWUnIHwgJ2RheSc+XG4gICAgICAmIHsgdGVhY2hlcjogKFxuICAgICAgICB7IF9fdHlwZW5hbWU/OiAnVGVhY2hlcicgfVxuICAgICAgICAmIFBpY2s8VGVhY2hlciwgJ25hbWUnPlxuICAgICAgKSB9XG4gICAgKSwgdXNlcjogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAndXNlcm5hbWUnPlxuICAgICkgfVxuICApPiB9XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICB1c2VybmFtZVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEsICRuYW1lOiBTdHJpbmchLCAkY29kZTogU3RyaW5nISkge1xuICByZWdpc3RlclVzZXIoY29kZTogJGNvZGUsIG5hbWU6ICRuYW1lLCB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgVGVhY2hlckZyb21TdWJqZWN0TmFtZSgkc3ViamVjdE5hbWU6IFN0cmluZyEpIHtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZShzdWJqZWN0TmFtZTogJHN1YmplY3ROYW1lKSB7XG4gICAgdGVhY2hlclxuICAgIGxlY3R1cmVzIHtcbiAgICAgIGRheVxuICAgICAgdGltZVxuICAgICAgbGlua1xuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8VGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnk+KHsgcXVlcnk6IFRlYWNoZXJGcm9tU3ViamVjdE5hbWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgR2V0TGVjdHVyZVRpbWVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0TGVjdHVyZVRpbWVzIHtcbiAgbGVjdHVyZVRpbWVzIHtcbiAgICBpZFxuICAgIHRlYWNoZXIge1xuICAgICAgbmFtZVxuICAgIH1cbiAgICBkYXlcbiAgICB0aW1lXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0TGVjdHVyZVRpbWVzUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxHZXRMZWN0dXJlVGltZXNRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8R2V0TGVjdHVyZVRpbWVzUXVlcnk+KHsgcXVlcnk6IEdldExlY3R1cmVUaW1lc0RvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTtcbmV4cG9ydCBjb25zdCBNZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IE1lIHtcbiAgbWUge1xuICAgIHVzZXJuYW1lXG4gICAgaWRcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgR2V0Tm90ZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBnZXROb3RlcyB7XG4gIG5vdGVDb21wbGV0ZSB7XG4gICAgaWRcbiAgICB1c2VySWRcbiAgICBsZWN0dXJlIHtcbiAgICAgIHRpbWVcbiAgICAgIGRheVxuICAgICAgdGVhY2hlciB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gICAgdXNlciB7XG4gICAgICB1c2VybmFtZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXROb3Rlc1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8R2V0Tm90ZXNRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8R2V0Tm90ZXNRdWVyeT4oeyBxdWVyeTogR2V0Tm90ZXNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==