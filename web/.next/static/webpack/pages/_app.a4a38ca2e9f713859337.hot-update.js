webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJBZGRMZWN0dXJlRG9jdW1lbnQiLCJncWwiLCJ1c2VBZGRMZWN0dXJlTXV0YXRpb24iLCJVcnFsIiwiQ3JlYXRlTm90ZURvY3VtZW50IiwidXNlQ3JlYXRlTm90ZU11dGF0aW9uIiwiTG9naW5Eb2N1bWVudCIsInVzZUxvZ2luTXV0YXRpb24iLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQiLCJ1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJHZXRMZWN0dXJlVGltZXNEb2N1bWVudCIsInVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5IiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJHZXROb3Rlc0RvY3VtZW50IiwidXNlR2V0Tm90ZXNRdWVyeSIsIkdldEFsbFN1YmplY3RzRG9jdW1lbnQiLCJ1c2VHZXRBbGxTdWJqZWN0c1F1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXVXTyxJQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUgsbUJBQXhCO0FBbUJBLFNBQVNDLHFCQUFULEdBQWlDO0FBQUE7O0FBQ3RDLFNBQU9DLGdEQUFBLENBQWtFSCxrQkFBbEUsQ0FBUDtBQUNEOztHQUZlRSxxQjtVQUNQQyxnRDs7O0FBQ1I7QUFDTSxJQUFNQyxrQkFBa0IsR0FBR0gsa0RBQUgsb0JBQXhCO0FBU0EsU0FBU0kscUJBQVQsR0FBaUM7QUFBQTs7QUFDdEMsU0FBT0YsZ0RBQUEsQ0FBa0VDLGtCQUFsRSxDQUFQO0FBQ0Q7O0lBRmVDLHFCO1VBQ1BGLGdEOzs7QUFDUjtBQUNNLElBQU1HLGFBQWEsR0FBR0wsa0RBQUgsb0JBQW5CO0FBZUEsU0FBU00sZ0JBQVQsR0FBNEI7QUFBQTs7QUFDakMsU0FBT0osZ0RBQUEsQ0FBd0RHLGFBQXhELENBQVA7QUFDRDs7SUFGZUMsZ0I7VUFDUEosZ0Q7OztBQUNSO0FBQ00sSUFBTUssY0FBYyxHQUFHUCxrREFBSCxvQkFBcEI7QUFNQSxTQUFTUSxpQkFBVCxHQUE2QjtBQUFBOztBQUNsQyxTQUFPTixnREFBQSxDQUEwREssY0FBMUQsQ0FBUDtBQUNEOztJQUZlQyxpQjtVQUNQTixnRDs7O0FBQ1I7QUFDTSxJQUFNTyxnQkFBZ0IsR0FBR1Qsa0RBQUgsb0JBQXRCO0FBZUEsU0FBU1UsbUJBQVQsR0FBK0I7QUFBQTs7QUFDcEMsU0FBT1IsZ0RBQUEsQ0FBOERPLGdCQUE5RCxDQUFQO0FBQ0Q7O0lBRmVDLG1CO1VBQ1BSLGdEOzs7QUFDUjtBQUNNLElBQU1TLDhCQUE4QixHQUFHWCxrREFBSCxvQkFBcEM7QUFvQkEsU0FBU1ksOEJBQVQsR0FBOEg7QUFBQTs7QUFBQSxNQUF0RkMsT0FBc0YsdUVBQUosRUFBSTtBQUNuSSxTQUFPWCw2Q0FBQTtBQUE2Q1ksU0FBSyxFQUFFSDtBQUFwRCxLQUF1RkUsT0FBdkYsRUFBUDtBQUNEOztJQUZlRCw4QjtVQUNQViw2Qzs7O0FBQ1I7QUFDTSxJQUFNYSx1QkFBdUIsR0FBR2Ysa0RBQUgsb0JBQTdCO0FBY0EsU0FBU2dCLHVCQUFULEdBQWdIO0FBQUE7O0FBQUEsTUFBL0VILE9BQStFLHVFQUFKLEVBQUk7QUFDckgsU0FBT1gsNkNBQUE7QUFBc0NZLFNBQUssRUFBRUM7QUFBN0MsS0FBeUVGLE9BQXpFLEVBQVA7QUFDRDs7SUFGZUcsdUI7VUFDUGQsNkM7OztBQUNSO0FBQ00sSUFBTWUsVUFBVSxHQUFHakIsa0RBQUgsb0JBQWhCO0FBU0EsU0FBU2tCLFVBQVQsR0FBc0Y7QUFBQTs7QUFBQSxNQUFsRUwsT0FBa0UsdUVBQUosRUFBSTtBQUMzRixTQUFPWCw2Q0FBQTtBQUF5QlksU0FBSyxFQUFFRztBQUFoQyxLQUErQ0osT0FBL0MsRUFBUDtBQUNEOztJQUZlSyxVO1VBQ1BoQiw2Qzs7O0FBQ1I7QUFDTSxJQUFNaUIsZ0JBQWdCLEdBQUduQixrREFBSCxvQkFBdEI7QUFtQkEsU0FBU29CLGdCQUFULEdBQWtHO0FBQUE7O0FBQUEsTUFBeEVQLE9BQXdFLHVFQUFKLEVBQUk7QUFDdkcsU0FBT1gsNkNBQUE7QUFBK0JZLFNBQUssRUFBRUs7QUFBdEMsS0FBMkROLE9BQTNELEVBQVA7QUFDRDs7SUFGZU8sZ0I7VUFDUGxCLDZDOzs7QUFDUjtBQUNNLElBQU1tQixzQkFBc0IsR0FBR3JCLGtEQUFILHFCQUE1QjtBQVNBLFNBQVNzQixzQkFBVCxHQUE4RztBQUFBOztBQUFBLE1BQTlFVCxPQUE4RSx1RUFBSixFQUFJO0FBQ25ILFNBQU9YLDZDQUFBO0FBQXFDWSxTQUFLLEVBQUVPO0FBQTVDLEtBQXVFUixPQUF2RSxFQUFQO0FBQ0Q7O0tBRmVTLHNCO1VBQ1BwQiw2Qzs7O0FBQ1IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNGEzOGNhMmU5ZjcxMzg1OTMzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbiAgLyoqIFRoZSBqYXZhc2NyaXB0IGBEYXRlYCBhcyBzdHJpbmcuIFR5cGUgcmVwcmVzZW50cyBkYXRlIGFuZCB0aW1lIGFzIHRoZSBJU08gRGF0ZSBzdHJpbmcuICovXG4gIERhdGVUaW1lOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgdGVhY2hlcnM/OiBNYXliZTxBcnJheTxUZWFjaGVyPj47XG4gIHN1YmplY3RzOiBBcnJheTxTdWJqZWN0PjtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZTogQXJyYXk8UmVzcG9uc2U+O1xuICBsZWN0dXJlVGltZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbiAgY29kZXM6IEFycmF5PENvZGU+O1xuICBub3RlczogQXJyYXk8Tm90ZT47XG4gIG5vdGVDb21wbGV0ZTogQXJyYXk8Tm90ZT47XG4gIGdldE5vdGVzRnJvbUxlY3R1cmU6IEFycmF5PE5vdGU+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWVBcmdzID0ge1xuICBzdWJqZWN0TmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5R2V0Tm90ZXNGcm9tTGVjdHVyZUFyZ3MgPSB7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBUZWFjaGVyID0ge1xuICBfX3R5cGVuYW1lPzogJ1RlYWNoZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxlY3R1cmVUaW1lczogQXJyYXk8TGVjdHVyZVRpbWU+O1xuICBzdWJqZWN0OiBTdWJqZWN0O1xuICBzdWJqZWN0SWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBMZWN0dXJlVGltZSA9IHtcbiAgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgbW9udGg/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGRheT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgd2Vla0RheT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFib3V0PzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW5rPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB0ZWFjaGVySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRlYWNoZXI6IFRlYWNoZXI7XG4gIG5vdGVzPzogTWF5YmU8QXJyYXk8Tm90ZT4+O1xufTtcblxuZXhwb3J0IHR5cGUgTm90ZSA9IHtcbiAgX190eXBlbmFtZT86ICdOb3RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBkZXNjcmlwdGlvbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgaXNJbWFnZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBsaW5rPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB1c2VyOiBVc2VyO1xuICB1c2VySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGxlY3R1cmU6IExlY3R1cmVUaW1lO1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBTdWJqZWN0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1N1YmplY3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZWFjaGVyczogQXJyYXk8VGVhY2hlcj47XG59O1xuXG5leHBvcnQgdHlwZSBSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdyZXNwb25zZSc7XG4gIHRlYWNoZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsZWN0dXJlczogQXJyYXk8TGVjdHVyZVRpbWU+O1xufTtcblxuZXhwb3J0IHR5cGUgQ29kZSA9IHtcbiAgX190eXBlbmFtZT86ICdDb2RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB2YWx1ZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHJlZ2lzdGVyVXNlcjogVXNlclJlc3BvbnNlO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xuICBsb2dvdXQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgYWRkVGVhY2hlcjogVGVhY2hlcjtcbiAgcmVtb3ZlVGVhY2hlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFkZFN1YmplY3Q6IFN1YmplY3Q7XG4gIGFkZExlY3R1cmVUaW1lOiBMZWN0dXJlVGltZTtcbiAgYWRkQ29kZXM6IEFycmF5PENvZGU+O1xuICBhZGROb3RlOiBOb3RlO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyVXNlckFyZ3MgPSB7XG4gIGNvZGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRUZWFjaGVyQXJncyA9IHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZW1vdmVUZWFjaGVyQXJncyA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkU3ViamVjdEFyZ3MgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZExlY3R1cmVUaW1lQXJncyA9IHtcbiAgdGVhY2hlck5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhYm91dDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB3ZWVrRGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbW9udGg6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZENvZGVzQXJncyA9IHtcbiAgY29kZXM6IEFycmF5PFNjYWxhcnNbJ1N0cmluZyddPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGROb3RlQXJncyA9IHtcbiAgbGVjdHVyZUlkOiBTY2FsYXJzWydGbG9hdCddO1xuICB1c2VyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlzSW1hZ2U6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBBZGRMZWN0dXJlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRlYWNoZXJOYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbW9udGg6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkYXk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB3ZWVrRGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFib3V0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEFkZExlY3R1cmVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBhZGRMZWN0dXJlVGltZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICYgUGljazxMZWN0dXJlVGltZSwgJ21vbnRoJyB8ICdkYXknIHwgJ3dlZWtEYXknIHwgJ3RpbWUnIHwgJ2Fib3V0Jz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVOb3RlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlzSW1hZ2U6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVOb3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgYWRkTm90ZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgJiBQaWNrPE5vdGUsICdsaW5rJyB8ICdpc0ltYWdlJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY29kZTogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyVXNlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWU6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAncmVzcG9uc2UnIH1cbiAgICAmIFBpY2s8UmVzcG9uc2UsICd0ZWFjaGVyJz5cbiAgICAmIHsgbGVjdHVyZXM6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICAgJiBQaWNrPExlY3R1cmVUaW1lLCAnbW9udGgnIHwgJ2RheScgfCAnd2Vla0RheScgfCAndGltZScgfCAnYWJvdXQnIHwgJ2lkJz5cbiAgICAgICYgeyBub3Rlcz86IE1heWJlPEFycmF5PChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ05vdGUnIH1cbiAgICAgICAgJiBQaWNrPE5vdGUsICdpc0ltYWdlJyB8ICdsaW5rJz5cbiAgICAgICk+PiB9XG4gICAgKT4gfVxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBHZXRMZWN0dXJlVGltZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldExlY3R1cmVUaW1lc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGxlY3R1cmVUaW1lczogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICYgUGljazxMZWN0dXJlVGltZSwgJ2lkJyB8ICdkYXknIHwgJ3dlZWtEYXknIHwgJ3RpbWUnPlxuICAgICYgeyB0ZWFjaGVyOiAoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVGVhY2hlcicgfVxuICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEdldE5vdGVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXROb3Rlc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG5vdGVDb21wbGV0ZTogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgJiBQaWNrPE5vdGUsICdpZCcgfCAndXNlcklkJz5cbiAgICAmIHsgbGVjdHVyZTogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0xlY3R1cmVUaW1lJyB9XG4gICAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICd0aW1lJyB8ICdkYXknPlxuICAgICAgJiB7IHRlYWNoZXI6IChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ1RlYWNoZXInIH1cbiAgICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICAgICkgfVxuICAgICksIHVzZXI6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgR2V0QWxsU3ViamVjdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEFsbFN1YmplY3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgc3ViamVjdHM6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViamVjdCcgfVxuICAgICYgUGljazxTdWJqZWN0LCAnbmFtZScgfCAnaWQnPlxuICApPiB9XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBBZGRMZWN0dXJlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWRkTGVjdHVyZSgkdGVhY2hlck5hbWU6IFN0cmluZyEsICRtb250aDogU3RyaW5nISwgJGRheTogU3RyaW5nISwgJHdlZWtEYXk6IFN0cmluZyEsICR0aW1lOiBTdHJpbmchLCAkYWJvdXQ6IFN0cmluZyEpIHtcbiAgYWRkTGVjdHVyZVRpbWUoXG4gICAgdGVhY2hlck5hbWU6ICR0ZWFjaGVyTmFtZVxuICAgIG1vbnRoOiAkbW9udGhcbiAgICBkYXk6ICRkYXlcbiAgICB3ZWVrRGF5OiAkd2Vla0RheVxuICAgIHRpbWU6ICR0aW1lXG4gICAgYWJvdXQ6ICRhYm91dFxuICApIHtcbiAgICBtb250aFxuICAgIGRheVxuICAgIHdlZWtEYXlcbiAgICB0aW1lXG4gICAgYWJvdXRcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZGRMZWN0dXJlTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEFkZExlY3R1cmVNdXRhdGlvbiwgQWRkTGVjdHVyZU11dGF0aW9uVmFyaWFibGVzPihBZGRMZWN0dXJlRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBDcmVhdGVOb3RlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlTm90ZSgkbGVjdHVyZUlkOiBGbG9hdCEsICR1c2VyOiBTdHJpbmchLCAkaXNJbWFnZTogQm9vbGVhbiEsICRsaW5rOiBTdHJpbmchKSB7XG4gIGFkZE5vdGUobGVjdHVyZUlkOiAkbGVjdHVyZUlkLCB1c2VyOiAkdXNlciwgaXNJbWFnZTogJGlzSW1hZ2UsIGxpbms6ICRsaW5rKSB7XG4gICAgbGlua1xuICAgIGlzSW1hZ2VcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVOb3RlTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPENyZWF0ZU5vdGVNdXRhdGlvbiwgQ3JlYXRlTm90ZU11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVOb3RlRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICB1c2VybmFtZVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEsICRuYW1lOiBTdHJpbmchLCAkY29kZTogU3RyaW5nISkge1xuICByZWdpc3RlclVzZXIoY29kZTogJGNvZGUsIG5hbWU6ICRuYW1lLCB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgVGVhY2hlckZyb21TdWJqZWN0TmFtZSgkc3ViamVjdE5hbWU6IFN0cmluZyEpIHtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZShzdWJqZWN0TmFtZTogJHN1YmplY3ROYW1lKSB7XG4gICAgdGVhY2hlclxuICAgIGxlY3R1cmVzIHtcbiAgICAgIG1vbnRoXG4gICAgICBkYXlcbiAgICAgIHdlZWtEYXlcbiAgICAgIHRpbWVcbiAgICAgIGFib3V0XG4gICAgICBpZFxuICAgICAgbm90ZXMge1xuICAgICAgICBpc0ltYWdlXG4gICAgICAgIGxpbmtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8VGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnk+KHsgcXVlcnk6IFRlYWNoZXJGcm9tU3ViamVjdE5hbWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgR2V0TGVjdHVyZVRpbWVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0TGVjdHVyZVRpbWVzIHtcbiAgbGVjdHVyZVRpbWVzIHtcbiAgICBpZFxuICAgIHRlYWNoZXIge1xuICAgICAgbmFtZVxuICAgIH1cbiAgICBkYXlcbiAgICB3ZWVrRGF5XG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8R2V0TGVjdHVyZVRpbWVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldExlY3R1cmVUaW1lc1F1ZXJ5Pih7IHF1ZXJ5OiBHZXRMZWN0dXJlVGltZXNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICB1c2VybmFtZVxuICAgIGlkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPE1lUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PE1lUXVlcnk+KHsgcXVlcnk6IE1lRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldE5vdGVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0Tm90ZXMge1xuICBub3RlQ29tcGxldGUge1xuICAgIGlkXG4gICAgdXNlcklkXG4gICAgbGVjdHVyZSB7XG4gICAgICB0aW1lXG4gICAgICBkYXlcbiAgICAgIHRlYWNoZXIge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0Tm90ZXNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldE5vdGVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldE5vdGVzUXVlcnk+KHsgcXVlcnk6IEdldE5vdGVzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldEFsbFN1YmplY3RzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgR2V0QWxsU3ViamVjdHMge1xuICBzdWJqZWN0cyB7XG4gICAgbmFtZVxuICAgIGlkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0QWxsU3ViamVjdHNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldEFsbFN1YmplY3RzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldEFsbFN1YmplY3RzUXVlcnk+KHsgcXVlcnk6IEdldEFsbFN1YmplY3RzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=