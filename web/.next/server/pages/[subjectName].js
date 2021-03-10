module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/[subjectName]/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, TeacherFromSubjectNameDocument, useTeacherFromSubjectNameQuery, GetLectureTimesDocument, useGetLectureTimesQuery, MeDocument, useMeQuery, GetNotesDocument, useGetNotesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    errors {
      field
      message
    }
    user {
      username
      id
    }
  }
}
    `;
function useLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument);
}
;
const LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Logout {
  logout
}
    `;
function useLogoutMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LogoutDocument);
}
;
const RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Register($username: String!, $password: String!, $name: String!, $code: String!) {
  registerUser(code: $code, name: $name, username: $username, password: $password) {
    errors {
      field
      message
    }
    user {
      username
      id
    }
  }
}
    `;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](RegisterDocument);
}
;
const TeacherFromSubjectNameDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query TeacherFromSubjectName($subjectName: String!) {
  getTeacherFromSubjectName(subjectName: $subjectName) {
    teacher
    lectures {
      day
      time
      link
      id
    }
  }
}
    `;
function useTeacherFromSubjectNameQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: TeacherFromSubjectNameDocument
  }, options));
}
;
const GetLectureTimesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getLectureTimes {
  lectureTimes {
    id
    teacher {
      name
    }
    day
    time
  }
}
    `;
function useGetLectureTimesQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetLectureTimesDocument
  }, options));
}
;
const MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Me {
  me {
    username
    id
  }
}
    `;
function useMeQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}
;
const GetNotesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getNotes {
  noteComplete {
    id
    userId
    lecture {
      time
      day
      teacher {
        name
      }
    }
    user {
      username
    }
  }
}
    `;
function useGetNotesQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetNotesDocument
  }, options));
}
;

/***/ }),

/***/ "./src/pages/[subjectName]/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/[subjectName]/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");

var _jsxFileName = "C:\\Dev\\Projects\\unimestreTwo\\web\\src\\pages\\[subjectName]\\index.tsx";



const SubjectPage = () => {
  var _teachers$, _teachers$$data;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    subjectName
  } = router.query;
  console.log(subjectName);
  let teachers = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useTeacherFromSubjectNameQuery"])({
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
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SubjectPage);

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("urql");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3N1YmplY3ROYW1lXS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJMb2dpbkRvY3VtZW50IiwiZ3FsIiwidXNlTG9naW5NdXRhdGlvbiIsIlVycWwiLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQiLCJ1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJHZXRMZWN0dXJlVGltZXNEb2N1bWVudCIsInVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5IiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJHZXROb3Rlc0RvY3VtZW50IiwidXNlR2V0Tm90ZXNRdWVyeSIsIlN1YmplY3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3ViamVjdE5hbWUiLCJjb25zb2xlIiwibG9nIiwidGVhY2hlcnMiLCJ2YXJpYWJsZXMiLCJkYXRhIiwiZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FB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QU07QUFBQTs7QUFDeEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQ0M7QUFBRCxNQUFxQkYsTUFBTSxDQUFDUixLQUFsQztBQUVBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUVBLE1BQUlHLFFBQWEsR0FBR2YseUZBQThCLENBQUM7QUFBQ2dCLGFBQVMsRUFBRTtBQUFDSixpQkFBVyxFQUFFQTtBQUFkO0FBQVosR0FBRCxDQUFsRDtBQUNBRyxVQUFRLGlCQUFHQSxRQUFRLENBQUMsQ0FBRCxDQUFYLGtFQUFHLFdBQWFFLElBQWhCLG9EQUFHLGdCQUFtQkMseUJBQTlCO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBRUEsc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUdELENBYkQ7O0FBZWVOLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkJBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL1tzdWJqZWN0TmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9bc3ViamVjdE5hbWVdL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG4gIC8qKiBUaGUgamF2YXNjcmlwdCBgRGF0ZWAgYXMgc3RyaW5nLiBUeXBlIHJlcHJlc2VudHMgZGF0ZSBhbmQgdGltZSBhcyB0aGUgSVNPIERhdGUgc3RyaW5nLiAqL1xuICBEYXRlVGltZTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICB1c2VyczogQXJyYXk8VXNlcj47XG4gIG1lPzogTWF5YmU8VXNlcj47XG4gIHRlYWNoZXJzPzogTWF5YmU8QXJyYXk8VGVhY2hlcj4+O1xuICBzdWJqZWN0czogQXJyYXk8U3ViamVjdD47XG4gIGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWU6IEFycmF5PFJlc3BvbnNlPjtcbiAgbGVjdHVyZVRpbWVzOiBBcnJheTxMZWN0dXJlVGltZT47XG4gIGNvZGVzOiBBcnJheTxDb2RlPjtcbiAgbm90ZXM6IEFycmF5PE5vdGU+O1xuICBub3RlQ29tcGxldGU6IEFycmF5PE5vdGU+O1xuICBnZXROb3Rlc0Zyb21MZWN0dXJlOiBBcnJheTxOb3RlPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlHZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lQXJncyA9IHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldE5vdGVzRnJvbUxlY3R1cmVBcmdzID0ge1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgVGVhY2hlciA9IHtcbiAgX190eXBlbmFtZT86ICdUZWFjaGVyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsZWN0dXJlVGltZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbiAgc3ViamVjdDogU3ViamVjdDtcbiAgc3ViamVjdElkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuZXhwb3J0IHR5cGUgTGVjdHVyZVRpbWUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnTGVjdHVyZVRpbWUnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIGRheTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsaW5rPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB0ZWFjaGVySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRlYWNoZXI6IFRlYWNoZXI7XG59O1xuXG5leHBvcnQgdHlwZSBTdWJqZWN0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1N1YmplY3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZWFjaGVyczogQXJyYXk8VGVhY2hlcj47XG59O1xuXG5leHBvcnQgdHlwZSBSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdyZXNwb25zZSc7XG4gIHRlYWNoZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsZWN0dXJlczogQXJyYXk8TGVjdHVyZVRpbWU+O1xufTtcblxuZXhwb3J0IHR5cGUgQ29kZSA9IHtcbiAgX190eXBlbmFtZT86ICdDb2RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB2YWx1ZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBOb3RlID0ge1xuICBfX3R5cGVuYW1lPzogJ05vdGUnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIGRlc2NyaXB0aW9uPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW5rOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcjogVXNlcjtcbiAgdXNlcklkOiBTY2FsYXJzWydGbG9hdCddO1xuICBsZWN0dXJlOiBMZWN0dXJlVGltZTtcbiAgbGVjdHVyZUlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICByZWdpc3RlclVzZXI6IFVzZXJSZXNwb25zZTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGFkZFRlYWNoZXI6IFRlYWNoZXI7XG4gIHJlbW92ZVRlYWNoZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhZGRTdWJqZWN0OiBTdWJqZWN0O1xuICBhZGRMZWN0dXJlVGltZTogTGVjdHVyZVRpbWU7XG4gIGFkZENvZGVzOiBBcnJheTxDb2RlPjtcbiAgYWRkTm90ZTogTm90ZTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlclVzZXJBcmdzID0ge1xuICBjb2RlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkVGVhY2hlckFyZ3MgPSB7XG4gIHN1YmplY3ROYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVtb3ZlVGVhY2hlckFyZ3MgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZFN1YmplY3RBcmdzID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRMZWN0dXJlVGltZUFyZ3MgPSB7XG4gIHRlYWNoZXJOYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRheTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkQ29kZXNBcmdzID0ge1xuICBjb2RlczogQXJyYXk8U2NhbGFyc1snU3RyaW5nJ10+O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZE5vdGVBcmdzID0ge1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVzZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsaW5rOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY29kZTogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyVXNlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWU6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAncmVzcG9uc2UnIH1cbiAgICAmIFBpY2s8UmVzcG9uc2UsICd0ZWFjaGVyJz5cbiAgICAmIHsgbGVjdHVyZXM6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICAgJiBQaWNrPExlY3R1cmVUaW1lLCAnZGF5JyB8ICd0aW1lJyB8ICdsaW5rJyB8ICdpZCc+XG4gICAgKT4gfVxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBHZXRMZWN0dXJlVGltZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldExlY3R1cmVUaW1lc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGxlY3R1cmVUaW1lczogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICYgUGljazxMZWN0dXJlVGltZSwgJ2lkJyB8ICdkYXknIHwgJ3RpbWUnPlxuICAgICYgeyB0ZWFjaGVyOiAoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVGVhY2hlcicgfVxuICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEdldE5vdGVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXROb3Rlc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG5vdGVDb21wbGV0ZTogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgJiBQaWNrPE5vdGUsICdpZCcgfCAndXNlcklkJz5cbiAgICAmIHsgbGVjdHVyZTogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0xlY3R1cmVUaW1lJyB9XG4gICAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICd0aW1lJyB8ICdkYXknPlxuICAgICAgJiB7IHRlYWNoZXI6IChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ1RlYWNoZXInIH1cbiAgICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICAgICkgfVxuICAgICksIHVzZXI6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuXG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbih1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KExvZ2luRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4oTG9nb3V0RG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchLCAkbmFtZTogU3RyaW5nISwgJGNvZGU6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXJVc2VyKGNvZGU6ICRjb2RlLCBuYW1lOiAkbmFtZSwgdXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgVGVhY2hlckZyb21TdWJqZWN0TmFtZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFRlYWNoZXJGcm9tU3ViamVjdE5hbWUoJHN1YmplY3ROYW1lOiBTdHJpbmchKSB7XG4gIGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWUoc3ViamVjdE5hbWU6ICRzdWJqZWN0TmFtZSkge1xuICAgIHRlYWNoZXJcbiAgICBsZWN0dXJlcyB7XG4gICAgICBkYXlcbiAgICAgIHRpbWVcbiAgICAgIGxpbmtcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8VGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5Pih7IHF1ZXJ5OiBUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldExlY3R1cmVUaW1lc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IGdldExlY3R1cmVUaW1lcyB7XG4gIGxlY3R1cmVUaW1lcyB7XG4gICAgaWRcbiAgICB0ZWFjaGVyIHtcbiAgICAgIG5hbWVcbiAgICB9XG4gICAgZGF5XG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8R2V0TGVjdHVyZVRpbWVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldExlY3R1cmVUaW1lc1F1ZXJ5Pih7IHF1ZXJ5OiBHZXRMZWN0dXJlVGltZXNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICB1c2VybmFtZVxuICAgIGlkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPE1lUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PE1lUXVlcnk+KHsgcXVlcnk6IE1lRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldE5vdGVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0Tm90ZXMge1xuICBub3RlQ29tcGxldGUge1xuICAgIGlkXG4gICAgdXNlcklkXG4gICAgbGVjdHVyZSB7XG4gICAgICB0aW1lXG4gICAgICBkYXlcbiAgICAgIHRlYWNoZXIge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0Tm90ZXNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldE5vdGVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldE5vdGVzUXVlcnk+KHsgcXVlcnk6IEdldE5vdGVzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59OyIsImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5cclxuY29uc3QgU3ViamVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gIGNvbnN0IHtzdWJqZWN0TmFtZX06IGFueSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zb2xlLmxvZyhzdWJqZWN0TmFtZSlcclxuXHJcbiAgbGV0IHRlYWNoZXJzOiBhbnkgPSB1c2VUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnkoe3ZhcmlhYmxlczoge3N1YmplY3ROYW1lOiBzdWJqZWN0TmFtZX19KTsgXHJcbiAgdGVhY2hlcnMgPSB0ZWFjaGVyc1swXT8uZGF0YT8uZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZTsgXHJcbiAgY29uc29sZS5sb2codGVhY2hlcnMpOyBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPmhlbGxvPC9oMT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YmplY3RQYWdlOyAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9