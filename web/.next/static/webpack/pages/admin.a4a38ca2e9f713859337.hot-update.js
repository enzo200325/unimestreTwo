webpackHotUpdate_N_E("pages/admin",{

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: AddLectureDocument, useAddLectureMutation, CreateNoteDocument, useCreateNoteMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, TeacherFromSubjectNameDocument, useTeacherFromSubjectNameQuery, GetLectureTimesDocument, useGetLectureTimesQuery, MeDocument, useMeQuery, GetNotesDocument, useGetNotesQuery, GetAllSubjectsDocument, useGetAllSubjectsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLectureDocument", function() { return AddLectureDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddLectureMutation", function() { return useAddLectureMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNoteDocument", function() { return CreateNoteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateNoteMutation", function() { return useCreateNoteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllSubjectsDocument", function() { return GetAllSubjectsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetAllSubjectsQuery", function() { return useGetAllSubjectsQuery; });
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
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$(),
    _s9 = $RefreshSig$(),
    _s10 = $RefreshSig$();

function _templateObject10() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query GetAllSubjects {\n  subjects {\n    name\n    id\n  }\n}\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query getNotes {\n  noteComplete {\n    id\n    userId\n    lecture {\n      time\n      day\n      teacher {\n        name\n      }\n    }\n    user {\n      username\n    }\n  }\n}\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Me {\n  me {\n    username\n    id\n  }\n}\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query getLectureTimes {\n  lectureTimes {\n    id\n    teacher {\n      name\n    }\n    day\n    weekDay\n    time\n  }\n}\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject6() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query TeacherFromSubjectName($subjectName: String!) {\n  getTeacherFromSubjectName(subjectName: $subjectName) {\n    teacher\n    lectures {\n      month\n      day\n      weekDay\n      time\n      about\n      id\n      notes {\n        isImage\n        link\n      }\n    }\n  }\n}\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Register($username: String!, $password: String!, $name: String!, $code: String!) {\n  registerUser(code: $code, name: $name, username: $username, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      username\n      id\n    }\n  }\n}\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Logout {\n  logout\n}\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      username\n      id\n    }\n  }\n}\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation CreateNote($lectureId: Float!, $user: String!, $isImage: Boolean!, $link: String!) {\n  addNote(lectureId: $lectureId, user: $user, isImage: $isImage, link: $link) {\n    link\n    isImage\n  }\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation AddLecture($teacherName: String!, $month: String!, $day: String!, $weekDay: String!, $time: String!, $about: String!) {\n  addLectureTime(\n    teacherName: $teacherName\n    month: $month\n    day: $day\n    weekDay: $weekDay\n    time: $time\n    about: $about\n  ) {\n    month\n    day\n    weekDay\n    time\n    about\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var AddLectureDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
function useAddLectureMutation() {
  _s();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](AddLectureDocument);
}

_s(useAddLectureMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var CreateNoteDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
function useCreateNoteMutation() {
  _s2();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](CreateNoteDocument);
}

_s2(useCreateNoteMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
function useLoginMutation() {
  _s3();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LoginDocument);
}

_s3(useLoginMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4());
function useLogoutMutation() {
  _s4();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LogoutDocument);
}

_s4(useLogoutMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject5());
function useRegisterMutation() {
  _s5();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](RegisterDocument);
}

_s5(useRegisterMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var TeacherFromSubjectNameDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject6());
function useTeacherFromSubjectNameQuery() {
  _s6();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: TeacherFromSubjectNameDocument
  }, options));
}

_s6(useTeacherFromSubjectNameQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var GetLectureTimesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject7());
function useGetLectureTimesQuery() {
  _s7();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: GetLectureTimesDocument
  }, options));
}

_s7(useGetLectureTimesQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject8());
function useMeQuery() {
  _s8();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}

_s8(useMeQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var GetNotesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject9());
function useGetNotesQuery() {
  _s9();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: GetNotesDocument
  }, options));
}

_s9(useGetNotesQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var GetAllSubjectsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject10());
function useGetAllSubjectsQuery() {
  _s10();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: GetAllSubjectsDocument
  }, options));
}

_s10(useGetAllSubjectsQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJBZGRMZWN0dXJlRG9jdW1lbnQiLCJncWwiLCJ1c2VBZGRMZWN0dXJlTXV0YXRpb24iLCJVcnFsIiwiQ3JlYXRlTm90ZURvY3VtZW50IiwidXNlQ3JlYXRlTm90ZU11dGF0aW9uIiwiTG9naW5Eb2N1bWVudCIsInVzZUxvZ2luTXV0YXRpb24iLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQiLCJ1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJHZXRMZWN0dXJlVGltZXNEb2N1bWVudCIsInVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5IiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJHZXROb3Rlc0RvY3VtZW50IiwidXNlR2V0Tm90ZXNRdWVyeSIsIkdldEFsbFN1YmplY3RzRG9jdW1lbnQiLCJ1c2VHZXRBbGxTdWJqZWN0c1F1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXVXTyxJQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUgsbUJBQXhCO0FBbUJBLFNBQVNDLHFCQUFULEdBQWlDO0FBQUE7O0FBQ3RDLFNBQU9DLGdEQUFBLENBQWtFSCxrQkFBbEUsQ0FBUDtBQUNEOztHQUZlRSxxQjtVQUNQQyxnRDs7O0FBQ1I7QUFDTSxJQUFNQyxrQkFBa0IsR0FBR0gsa0RBQUgsb0JBQXhCO0FBU0EsU0FBU0kscUJBQVQsR0FBaUM7QUFBQTs7QUFDdEMsU0FBT0YsZ0RBQUEsQ0FBa0VDLGtCQUFsRSxDQUFQO0FBQ0Q7O0lBRmVDLHFCO1VBQ1BGLGdEOzs7QUFDUjtBQUNNLElBQU1HLGFBQWEsR0FBR0wsa0RBQUgsb0JBQW5CO0FBZUEsU0FBU00sZ0JBQVQsR0FBNEI7QUFBQTs7QUFDakMsU0FBT0osZ0RBQUEsQ0FBd0RHLGFBQXhELENBQVA7QUFDRDs7SUFGZUMsZ0I7VUFDUEosZ0Q7OztBQUNSO0FBQ00sSUFBTUssY0FBYyxHQUFHUCxrREFBSCxvQkFBcEI7QUFNQSxTQUFTUSxpQkFBVCxHQUE2QjtBQUFBOztBQUNsQyxTQUFPTixnREFBQSxDQUEwREssY0FBMUQsQ0FBUDtBQUNEOztJQUZlQyxpQjtVQUNQTixnRDs7O0FBQ1I7QUFDTSxJQUFNTyxnQkFBZ0IsR0FBR1Qsa0RBQUgsb0JBQXRCO0FBZUEsU0FBU1UsbUJBQVQsR0FBK0I7QUFBQTs7QUFDcEMsU0FBT1IsZ0RBQUEsQ0FBOERPLGdCQUE5RCxDQUFQO0FBQ0Q7O0lBRmVDLG1CO1VBQ1BSLGdEOzs7QUFDUjtBQUNNLElBQU1TLDhCQUE4QixHQUFHWCxrREFBSCxvQkFBcEM7QUFvQkEsU0FBU1ksOEJBQVQsR0FBOEg7QUFBQTs7QUFBQSxNQUF0RkMsT0FBc0YsdUVBQUosRUFBSTtBQUNuSSxTQUFPWCw2Q0FBQTtBQUE2Q1ksU0FBSyxFQUFFSDtBQUFwRCxLQUF1RkUsT0FBdkYsRUFBUDtBQUNEOztJQUZlRCw4QjtVQUNQViw2Qzs7O0FBQ1I7QUFDTSxJQUFNYSx1QkFBdUIsR0FBR2Ysa0RBQUgsb0JBQTdCO0FBY0EsU0FBU2dCLHVCQUFULEdBQWdIO0FBQUE7O0FBQUEsTUFBL0VILE9BQStFLHVFQUFKLEVBQUk7QUFDckgsU0FBT1gsNkNBQUE7QUFBc0NZLFNBQUssRUFBRUM7QUFBN0MsS0FBeUVGLE9BQXpFLEVBQVA7QUFDRDs7SUFGZUcsdUI7VUFDUGQsNkM7OztBQUNSO0FBQ00sSUFBTWUsVUFBVSxHQUFHakIsa0RBQUgsb0JBQWhCO0FBU0EsU0FBU2tCLFVBQVQsR0FBc0Y7QUFBQTs7QUFBQSxNQUFsRUwsT0FBa0UsdUVBQUosRUFBSTtBQUMzRixTQUFPWCw2Q0FBQTtBQUF5QlksU0FBSyxFQUFFRztBQUFoQyxLQUErQ0osT0FBL0MsRUFBUDtBQUNEOztJQUZlSyxVO1VBQ1BoQiw2Qzs7O0FBQ1I7QUFDTSxJQUFNaUIsZ0JBQWdCLEdBQUduQixrREFBSCxvQkFBdEI7QUFtQkEsU0FBU29CLGdCQUFULEdBQWtHO0FBQUE7O0FBQUEsTUFBeEVQLE9BQXdFLHVFQUFKLEVBQUk7QUFDdkcsU0FBT1gsNkNBQUE7QUFBK0JZLFNBQUssRUFBRUs7QUFBdEMsS0FBMkROLE9BQTNELEVBQVA7QUFDRDs7SUFGZU8sZ0I7VUFDUGxCLDZDOzs7QUFDUjtBQUNNLElBQU1tQixzQkFBc0IsR0FBR3JCLGtEQUFILHFCQUE1QjtBQVNBLFNBQVNzQixzQkFBVCxHQUE4RztBQUFBOztBQUFBLE1BQTlFVCxPQUE4RSx1RUFBSixFQUFJO0FBQ25ILFNBQU9YLDZDQUFBO0FBQXFDWSxTQUFLLEVBQUVPO0FBQTVDLEtBQXVFUixPQUF2RSxFQUFQO0FBQ0Q7O0tBRmVTLHNCO1VBQ1BwQiw2Qzs7O0FBQ1IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uYTRhMzhjYTJlOWY3MTM4NTkzMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG4gIC8qKiBUaGUgamF2YXNjcmlwdCBgRGF0ZWAgYXMgc3RyaW5nLiBUeXBlIHJlcHJlc2VudHMgZGF0ZSBhbmQgdGltZSBhcyB0aGUgSVNPIERhdGUgc3RyaW5nLiAqL1xuICBEYXRlVGltZTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICB1c2VyczogQXJyYXk8VXNlcj47XG4gIG1lPzogTWF5YmU8VXNlcj47XG4gIHRlYWNoZXJzPzogTWF5YmU8QXJyYXk8VGVhY2hlcj4+O1xuICBzdWJqZWN0czogQXJyYXk8U3ViamVjdD47XG4gIGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWU6IEFycmF5PFJlc3BvbnNlPjtcbiAgbGVjdHVyZVRpbWVzOiBBcnJheTxMZWN0dXJlVGltZT47XG4gIGNvZGVzOiBBcnJheTxDb2RlPjtcbiAgbm90ZXM6IEFycmF5PE5vdGU+O1xuICBub3RlQ29tcGxldGU6IEFycmF5PE5vdGU+O1xuICBnZXROb3Rlc0Zyb21MZWN0dXJlOiBBcnJheTxOb3RlPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlHZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lQXJncyA9IHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldE5vdGVzRnJvbUxlY3R1cmVBcmdzID0ge1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgVGVhY2hlciA9IHtcbiAgX190eXBlbmFtZT86ICdUZWFjaGVyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsZWN0dXJlVGltZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbiAgc3ViamVjdDogU3ViamVjdDtcbiAgc3ViamVjdElkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuZXhwb3J0IHR5cGUgTGVjdHVyZVRpbWUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG1vbnRoPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBkYXk/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHdlZWtEYXk/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHRpbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhYm91dD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGluaz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgdGVhY2hlcklkOiBTY2FsYXJzWydGbG9hdCddO1xuICB0ZWFjaGVyOiBUZWFjaGVyO1xuICBub3Rlcz86IE1heWJlPEFycmF5PE5vdGU+Pjtcbn07XG5cbmV4cG9ydCB0eXBlIE5vdGUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnTm90ZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgZGVzY3JpcHRpb24/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGlzSW1hZ2U6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbGluaz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgdXNlcjogVXNlcjtcbiAgdXNlcklkOiBTY2FsYXJzWydGbG9hdCddO1xuICBsZWN0dXJlOiBMZWN0dXJlVGltZTtcbiAgbGVjdHVyZUlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuZXhwb3J0IHR5cGUgU3ViamVjdCA9IHtcbiAgX190eXBlbmFtZT86ICdTdWJqZWN0JztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGVhY2hlcnM6IEFycmF5PFRlYWNoZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAncmVzcG9uc2UnO1xuICB0ZWFjaGVyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGVjdHVyZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbn07XG5cbmV4cG9ydCB0eXBlIENvZGUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnQ29kZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdmFsdWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICByZWdpc3RlclVzZXI6IFVzZXJSZXNwb25zZTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGFkZFRlYWNoZXI6IFRlYWNoZXI7XG4gIHJlbW92ZVRlYWNoZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhZGRTdWJqZWN0OiBTdWJqZWN0O1xuICBhZGRMZWN0dXJlVGltZTogTGVjdHVyZVRpbWU7XG4gIGFkZENvZGVzOiBBcnJheTxDb2RlPjtcbiAgYWRkTm90ZTogTm90ZTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlclVzZXJBcmdzID0ge1xuICBjb2RlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkVGVhY2hlckFyZ3MgPSB7XG4gIHN1YmplY3ROYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVtb3ZlVGVhY2hlckFyZ3MgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZFN1YmplY3RBcmdzID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRMZWN0dXJlVGltZUFyZ3MgPSB7XG4gIHRlYWNoZXJOYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgYWJvdXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgd2Vla0RheTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRheTogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1vbnRoOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRDb2Rlc0FyZ3MgPSB7XG4gIGNvZGVzOiBBcnJheTxTY2FsYXJzWydTdHJpbmcnXT47XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkTm90ZUFyZ3MgPSB7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGxpbms6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpc0ltYWdlOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgQWRkTGVjdHVyZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0ZWFjaGVyTmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1vbnRoOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgd2Vla0RheTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhYm91dDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBBZGRMZWN0dXJlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgYWRkTGVjdHVyZVRpbWU6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnIH1cbiAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICdtb250aCcgfCAnZGF5JyB8ICd3ZWVrRGF5JyB8ICd0aW1lJyB8ICdhYm91dCc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlTm90ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVzZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpc0ltYWdlOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGxpbms6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlTm90ZU11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGFkZE5vdGU6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnTm90ZScgfVxuICAgICYgUGljazxOb3RlLCAnbGluaycgfCAnaXNJbWFnZSc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAndXNlcm5hbWUnIHwgJ2lkJz5cbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2xvZ291dCc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNvZGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZWdpc3RlclVzZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHN1YmplY3ROYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBnZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lOiBBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ3Jlc3BvbnNlJyB9XG4gICAgJiBQaWNrPFJlc3BvbnNlLCAndGVhY2hlcic+XG4gICAgJiB7IGxlY3R1cmVzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnIH1cbiAgICAgICYgUGljazxMZWN0dXJlVGltZSwgJ21vbnRoJyB8ICdkYXknIHwgJ3dlZWtEYXknIHwgJ3RpbWUnIHwgJ2Fib3V0JyB8ICdpZCc+XG4gICAgICAmIHsgbm90ZXM/OiBNYXliZTxBcnJheTwoXG4gICAgICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgICAgICYgUGljazxOb3RlLCAnaXNJbWFnZScgfCAnbGluayc+XG4gICAgICApPj4gfVxuICAgICk+IH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgR2V0TGVjdHVyZVRpbWVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXRMZWN0dXJlVGltZXNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBsZWN0dXJlVGltZXM6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnIH1cbiAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICdpZCcgfCAnZGF5JyB8ICd3ZWVrRGF5JyB8ICd0aW1lJz5cbiAgICAmIHsgdGVhY2hlcjogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1RlYWNoZXInIH1cbiAgICAgICYgUGljazxUZWFjaGVyLCAnbmFtZSc+XG4gICAgKSB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBHZXROb3Rlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0Tm90ZXNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBub3RlQ29tcGxldGU6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnTm90ZScgfVxuICAgICYgUGljazxOb3RlLCAnaWQnIHwgJ3VzZXJJZCc+XG4gICAgJiB7IGxlY3R1cmU6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICAgJiBQaWNrPExlY3R1cmVUaW1lLCAndGltZScgfCAnZGF5Jz5cbiAgICAgICYgeyB0ZWFjaGVyOiAoXG4gICAgICAgIHsgX190eXBlbmFtZT86ICdUZWFjaGVyJyB9XG4gICAgICAgICYgUGljazxUZWFjaGVyLCAnbmFtZSc+XG4gICAgICApIH1cbiAgICApLCB1c2VyOiAoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZSc+XG4gICAgKSB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEdldEFsbFN1YmplY3RzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXRBbGxTdWJqZWN0c1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHN1YmplY3RzOiBBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YmplY3QnIH1cbiAgICAmIFBpY2s8U3ViamVjdCwgJ25hbWUnIHwgJ2lkJz5cbiAgKT4gfVxuKTtcblxuXG5leHBvcnQgY29uc3QgQWRkTGVjdHVyZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEFkZExlY3R1cmUoJHRlYWNoZXJOYW1lOiBTdHJpbmchLCAkbW9udGg6IFN0cmluZyEsICRkYXk6IFN0cmluZyEsICR3ZWVrRGF5OiBTdHJpbmchLCAkdGltZTogU3RyaW5nISwgJGFib3V0OiBTdHJpbmchKSB7XG4gIGFkZExlY3R1cmVUaW1lKFxuICAgIHRlYWNoZXJOYW1lOiAkdGVhY2hlck5hbWVcbiAgICBtb250aDogJG1vbnRoXG4gICAgZGF5OiAkZGF5XG4gICAgd2Vla0RheTogJHdlZWtEYXlcbiAgICB0aW1lOiAkdGltZVxuICAgIGFib3V0OiAkYWJvdXRcbiAgKSB7XG4gICAgbW9udGhcbiAgICBkYXlcbiAgICB3ZWVrRGF5XG4gICAgdGltZVxuICAgIGFib3V0XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkTGVjdHVyZU11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxBZGRMZWN0dXJlTXV0YXRpb24sIEFkZExlY3R1cmVNdXRhdGlvblZhcmlhYmxlcz4oQWRkTGVjdHVyZURvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgQ3JlYXRlTm90ZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZU5vdGUoJGxlY3R1cmVJZDogRmxvYXQhLCAkdXNlcjogU3RyaW5nISwgJGlzSW1hZ2U6IEJvb2xlYW4hLCAkbGluazogU3RyaW5nISkge1xuICBhZGROb3RlKGxlY3R1cmVJZDogJGxlY3R1cmVJZCwgdXNlcjogJHVzZXIsIGlzSW1hZ2U6ICRpc0ltYWdlLCBsaW5rOiAkbGluaykge1xuICAgIGxpbmtcbiAgICBpc0ltYWdlXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlTm90ZU11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxDcmVhdGVOb3RlTXV0YXRpb24sIENyZWF0ZU5vdGVNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlTm90ZURvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbih1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KExvZ2luRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4oTG9nb3V0RG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchLCAkbmFtZTogU3RyaW5nISwgJGNvZGU6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXJVc2VyKGNvZGU6ICRjb2RlLCBuYW1lOiAkbmFtZSwgdXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgVGVhY2hlckZyb21TdWJqZWN0TmFtZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFRlYWNoZXJGcm9tU3ViamVjdE5hbWUoJHN1YmplY3ROYW1lOiBTdHJpbmchKSB7XG4gIGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWUoc3ViamVjdE5hbWU6ICRzdWJqZWN0TmFtZSkge1xuICAgIHRlYWNoZXJcbiAgICBsZWN0dXJlcyB7XG4gICAgICBtb250aFxuICAgICAgZGF5XG4gICAgICB3ZWVrRGF5XG4gICAgICB0aW1lXG4gICAgICBhYm91dFxuICAgICAgaWRcbiAgICAgIG5vdGVzIHtcbiAgICAgICAgaXNJbWFnZVxuICAgICAgICBsaW5rXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8VGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5Pih7IHF1ZXJ5OiBUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldExlY3R1cmVUaW1lc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IGdldExlY3R1cmVUaW1lcyB7XG4gIGxlY3R1cmVUaW1lcyB7XG4gICAgaWRcbiAgICB0ZWFjaGVyIHtcbiAgICAgIG5hbWVcbiAgICB9XG4gICAgZGF5XG4gICAgd2Vla0RheVxuICAgIHRpbWVcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRMZWN0dXJlVGltZXNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldExlY3R1cmVUaW1lc1F1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxHZXRMZWN0dXJlVGltZXNRdWVyeT4oeyBxdWVyeTogR2V0TGVjdHVyZVRpbWVzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWUge1xuICBtZSB7XG4gICAgdXNlcm5hbWVcbiAgICBpZFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxNZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxNZVF1ZXJ5Pih7IHF1ZXJ5OiBNZURvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTtcbmV4cG9ydCBjb25zdCBHZXROb3Rlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IGdldE5vdGVzIHtcbiAgbm90ZUNvbXBsZXRlIHtcbiAgICBpZFxuICAgIHVzZXJJZFxuICAgIGxlY3R1cmUge1xuICAgICAgdGltZVxuICAgICAgZGF5XG4gICAgICB0ZWFjaGVyIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldE5vdGVzUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxHZXROb3Rlc1F1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxHZXROb3Rlc1F1ZXJ5Pih7IHF1ZXJ5OiBHZXROb3Rlc0RvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTtcbmV4cG9ydCBjb25zdCBHZXRBbGxTdWJqZWN0c0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEFsbFN1YmplY3RzIHtcbiAgc3ViamVjdHMge1xuICAgIG5hbWVcbiAgICBpZFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEFsbFN1YmplY3RzUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxHZXRBbGxTdWJqZWN0c1F1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxHZXRBbGxTdWJqZWN0c1F1ZXJ5Pih7IHF1ZXJ5OiBHZXRBbGxTdWJqZWN0c0RvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9