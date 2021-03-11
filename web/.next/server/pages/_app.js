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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: AddLectureDocument, useAddLectureMutation, CreateNoteDocument, useCreateNoteMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, TeacherFromSubjectNameDocument, useTeacherFromSubjectNameQuery, GetLectureTimesDocument, useGetLectureTimesQuery, MeDocument, useMeQuery, GetNotesDocument, useGetNotesQuery, GetAllSubjectsDocument, useGetAllSubjectsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLectureDocument", function() { return AddLectureDocument; });
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const AddLectureDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation AddLecture($teacherName: String!, $month: String!, $day: String!, $weekDay: String!, $time: String!, $about: String!) {
  addLectureTime(
    teacherName: $teacherName
    month: $month
    day: $day
    weekDay: $weekDay
    time: $time
    about: $about
  ) {
    month
    day
    weekDay
    time
    about
  }
}
    `;
function useAddLectureMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](AddLectureDocument);
}
;
const CreateNoteDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation CreateNote($lectureId: Float!, $user: String!, $isImage: Boolean!, $link: String!) {
  addNote(lectureId: $lectureId, user: $user, isImage: $isImage, link: $link) {
    link
    isImage
  }
}
    `;
function useCreateNoteMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](CreateNoteDocument);
}
;
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
      month
      day
      weekDay
      time
      about
      id
      notes {
        isImage
        link
      }
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
    weekDay
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
const GetAllSubjectsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query GetAllSubjects {
  subjects {
    name
    id
  }
}
    `;
function useGetAllSubjectsQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetAllSubjectsDocument
  }, options));
}
;

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @urql/exchange-graphcache */ "@urql/exchange-graphcache");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");

var _jsxFileName = "C:\\Dev\\Projects\\unimestreTwo\\web\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function betterUpdateQuery(cache, qi, result, fn) {
  return cache.updateQuery(qi, data => fn(result, data));
}

const client = Object(urql__WEBPACK_IMPORTED_MODULE_2__["createClient"])({
  url: "http://localhost:5000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  exchanges: [urql__WEBPACK_IMPORTED_MODULE_2__["dedupExchange"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__["cacheExchange"])({
    updates: {
      Mutation: {
        login: (result, args, cache, ingo) => {
          betterUpdateQuery(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__["MeDocument"]
          }, result, (result, query) => {
            if (result.login.errors) {
              return query;
            } else {
              return {
                me: result.login.user
              };
            }
          });
        },
        registerUser: (result, args, cache, ingo) => {
          betterUpdateQuery(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__["MeDocument"]
          }, result, (result, query) => {
            if (result.registerUser.errors) {
              return query;
            } else {
              return {
                me: result.registerUser.user
              };
            }
          });
        },
        logout: (result, args, cache, ingo) => {
          betterUpdateQuery(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__["MeDocument"]
          }, result, (result, query) => {
            return {
              me: null
            };
          });
        }
      }
    }
  }), urql__WEBPACK_IMPORTED_MODULE_2__["fetchExchange"]]
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(urql__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    value: client,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 4
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@urql/exchange-graphcache":
/*!********************************************!*\
  !*** external "@urql/exchange-graphcache" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@urql/exchange-graphcache");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJxbFwiIl0sIm5hbWVzIjpbIkFkZExlY3R1cmVEb2N1bWVudCIsImdxbCIsInVzZUFkZExlY3R1cmVNdXRhdGlvbiIsIlVycWwiLCJDcmVhdGVOb3RlRG9jdW1lbnQiLCJ1c2VDcmVhdGVOb3RlTXV0YXRpb24iLCJMb2dpbkRvY3VtZW50IiwidXNlTG9naW5NdXRhdGlvbiIsIkxvZ291dERvY3VtZW50IiwidXNlTG9nb3V0TXV0YXRpb24iLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlRlYWNoZXJGcm9tU3ViamVjdE5hbWVEb2N1bWVudCIsInVzZVRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeSIsIm9wdGlvbnMiLCJxdWVyeSIsIkdldExlY3R1cmVUaW1lc0RvY3VtZW50IiwidXNlR2V0TGVjdHVyZVRpbWVzUXVlcnkiLCJNZURvY3VtZW50IiwidXNlTWVRdWVyeSIsIkdldE5vdGVzRG9jdW1lbnQiLCJ1c2VHZXROb3Rlc1F1ZXJ5IiwiR2V0QWxsU3ViamVjdHNEb2N1bWVudCIsInVzZUdldEFsbFN1YmplY3RzUXVlcnkiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsImNhY2hlIiwicWkiLCJyZXN1bHQiLCJmbiIsInVwZGF0ZVF1ZXJ5IiwiZGF0YSIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJ1cGRhdGVzIiwiTXV0YXRpb24iLCJsb2dpbiIsImFyZ3MiLCJpbmdvIiwiZXJyb3JzIiwibWUiLCJ1c2VyIiwicmVnaXN0ZXJVc2VyIiwibG9nb3V0IiwiZmV0Y2hFeGNoYW5nZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBdVdPLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakJPO0FBbUJBLFNBQVNDLHFC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LENBQUNvQixZQUFQLENBQW9CSCxNQUF4QixFQUFnQztBQUM5QixxQkFBTzdCLEtBQVA7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTztBQUNMOEIsa0JBQUUsRUFBRWxCLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JEO0FBRG5CLGVBQVA7QUFHRDtBQUNELFdBWGEsQ0FBakI7QUFhRCxTQTlCTztBQStCUkUsY0FBTSxFQUFFLENBQUNyQixNQUFELEVBQVNlLElBQVQsRUFBZWpCLEtBQWYsRUFBc0JrQixJQUF0QixLQUErQjtBQUNyQ25CLDJCQUFpQixDQUEwQkMsS0FBMUIsRUFDZDtBQUFDVixpQkFBSyxFQUFFRyw2REFBVUE7QUFBbEIsV0FEYyxFQUVkUyxNQUZjLEVBR2QsQ0FBQ0EsTUFBRCxFQUFTWixLQUFULEtBQW1CO0FBQ2pCLG1CQUFPO0FBQ044QixnQkFBRSxFQUFFO0FBREUsYUFBUDtBQUdELFdBUGEsQ0FBakI7QUFTRDtBQXpDTztBQURIO0FBREssR0FBRCxDQUZKLEVBaURYSSxrREFqRFc7QUFMZSxDQUFELENBQTNCOztBQTBEQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0MscUVBQUMsNkNBQUQ7QUFBVSxTQUFLLEVBQUVyQixNQUFqQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVxQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLRDs7QUFFY0Ysb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbiAgLyoqIFRoZSBqYXZhc2NyaXB0IGBEYXRlYCBhcyBzdHJpbmcuIFR5cGUgcmVwcmVzZW50cyBkYXRlIGFuZCB0aW1lIGFzIHRoZSBJU08gRGF0ZSBzdHJpbmcuICovXG4gIERhdGVUaW1lOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgdGVhY2hlcnM/OiBNYXliZTxBcnJheTxUZWFjaGVyPj47XG4gIHN1YmplY3RzOiBBcnJheTxTdWJqZWN0PjtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZTogQXJyYXk8UmVzcG9uc2U+O1xuICBsZWN0dXJlVGltZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbiAgY29kZXM6IEFycmF5PENvZGU+O1xuICBub3RlczogQXJyYXk8Tm90ZT47XG4gIG5vdGVDb21wbGV0ZTogQXJyYXk8Tm90ZT47XG4gIGdldE5vdGVzRnJvbUxlY3R1cmU6IEFycmF5PE5vdGU+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWVBcmdzID0ge1xuICBzdWJqZWN0TmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5R2V0Tm90ZXNGcm9tTGVjdHVyZUFyZ3MgPSB7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBUZWFjaGVyID0ge1xuICBfX3R5cGVuYW1lPzogJ1RlYWNoZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxlY3R1cmVUaW1lczogQXJyYXk8TGVjdHVyZVRpbWU+O1xuICBzdWJqZWN0OiBTdWJqZWN0O1xuICBzdWJqZWN0SWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBMZWN0dXJlVGltZSA9IHtcbiAgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgbW9udGg/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGRheT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgd2Vla0RheT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFib3V0PzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW5rPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB0ZWFjaGVySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRlYWNoZXI6IFRlYWNoZXI7XG4gIG5vdGVzPzogTWF5YmU8QXJyYXk8Tm90ZT4+O1xufTtcblxuZXhwb3J0IHR5cGUgTm90ZSA9IHtcbiAgX190eXBlbmFtZT86ICdOb3RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBkZXNjcmlwdGlvbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgaXNJbWFnZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBsaW5rPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB1c2VyOiBVc2VyO1xuICB1c2VySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGxlY3R1cmU6IExlY3R1cmVUaW1lO1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBTdWJqZWN0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1N1YmplY3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZWFjaGVyczogQXJyYXk8VGVhY2hlcj47XG59O1xuXG5leHBvcnQgdHlwZSBSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdyZXNwb25zZSc7XG4gIHRlYWNoZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsZWN0dXJlczogQXJyYXk8TGVjdHVyZVRpbWU+O1xufTtcblxuZXhwb3J0IHR5cGUgQ29kZSA9IHtcbiAgX190eXBlbmFtZT86ICdDb2RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB2YWx1ZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHJlZ2lzdGVyVXNlcjogVXNlclJlc3BvbnNlO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xuICBsb2dvdXQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgYWRkVGVhY2hlcjogVGVhY2hlcjtcbiAgcmVtb3ZlVGVhY2hlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFkZFN1YmplY3Q6IFN1YmplY3Q7XG4gIGFkZExlY3R1cmVUaW1lOiBMZWN0dXJlVGltZTtcbiAgYWRkQ29kZXM6IEFycmF5PENvZGU+O1xuICBhZGROb3RlOiBOb3RlO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyVXNlckFyZ3MgPSB7XG4gIGNvZGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRUZWFjaGVyQXJncyA9IHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZW1vdmVUZWFjaGVyQXJncyA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkU3ViamVjdEFyZ3MgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZExlY3R1cmVUaW1lQXJncyA9IHtcbiAgdGVhY2hlck5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhYm91dDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB3ZWVrRGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbW9udGg6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZENvZGVzQXJncyA9IHtcbiAgY29kZXM6IEFycmF5PFNjYWxhcnNbJ1N0cmluZyddPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGROb3RlQXJncyA9IHtcbiAgbGVjdHVyZUlkOiBTY2FsYXJzWydGbG9hdCddO1xuICB1c2VyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlzSW1hZ2U6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBBZGRMZWN0dXJlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRlYWNoZXJOYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbW9udGg6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkYXk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB3ZWVrRGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFib3V0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEFkZExlY3R1cmVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBhZGRMZWN0dXJlVGltZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICYgUGljazxMZWN0dXJlVGltZSwgJ21vbnRoJyB8ICdkYXknIHwgJ3dlZWtEYXknIHwgJ3RpbWUnIHwgJ2Fib3V0Jz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVOb3RlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlzSW1hZ2U6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVOb3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgYWRkTm90ZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgJiBQaWNrPE5vdGUsICdsaW5rJyB8ICdpc0ltYWdlJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY29kZTogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyVXNlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWU6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAncmVzcG9uc2UnIH1cbiAgICAmIFBpY2s8UmVzcG9uc2UsICd0ZWFjaGVyJz5cbiAgICAmIHsgbGVjdHVyZXM6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICAgJiBQaWNrPExlY3R1cmVUaW1lLCAnbW9udGgnIHwgJ2RheScgfCAnd2Vla0RheScgfCAndGltZScgfCAnYWJvdXQnIHwgJ2lkJz5cbiAgICAgICYgeyBub3Rlcz86IE1heWJlPEFycmF5PChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ05vdGUnIH1cbiAgICAgICAgJiBQaWNrPE5vdGUsICdpc0ltYWdlJyB8ICdsaW5rJz5cbiAgICAgICk+PiB9XG4gICAgKT4gfVxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBHZXRMZWN0dXJlVGltZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldExlY3R1cmVUaW1lc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGxlY3R1cmVUaW1lczogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICYgUGljazxMZWN0dXJlVGltZSwgJ2lkJyB8ICdkYXknIHwgJ3dlZWtEYXknIHwgJ3RpbWUnPlxuICAgICYgeyB0ZWFjaGVyOiAoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVGVhY2hlcicgfVxuICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEdldE5vdGVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXROb3Rlc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG5vdGVDb21wbGV0ZTogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgJiBQaWNrPE5vdGUsICdpZCcgfCAndXNlcklkJz5cbiAgICAmIHsgbGVjdHVyZTogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0xlY3R1cmVUaW1lJyB9XG4gICAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICd0aW1lJyB8ICdkYXknPlxuICAgICAgJiB7IHRlYWNoZXI6IChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ1RlYWNoZXInIH1cbiAgICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICAgICkgfVxuICAgICksIHVzZXI6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgR2V0QWxsU3ViamVjdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEFsbFN1YmplY3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgc3ViamVjdHM6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViamVjdCcgfVxuICAgICYgUGljazxTdWJqZWN0LCAnbmFtZScgfCAnaWQnPlxuICApPiB9XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBBZGRMZWN0dXJlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWRkTGVjdHVyZSgkdGVhY2hlck5hbWU6IFN0cmluZyEsICRtb250aDogU3RyaW5nISwgJGRheTogU3RyaW5nISwgJHdlZWtEYXk6IFN0cmluZyEsICR0aW1lOiBTdHJpbmchLCAkYWJvdXQ6IFN0cmluZyEpIHtcbiAgYWRkTGVjdHVyZVRpbWUoXG4gICAgdGVhY2hlck5hbWU6ICR0ZWFjaGVyTmFtZVxuICAgIG1vbnRoOiAkbW9udGhcbiAgICBkYXk6ICRkYXlcbiAgICB3ZWVrRGF5OiAkd2Vla0RheVxuICAgIHRpbWU6ICR0aW1lXG4gICAgYWJvdXQ6ICRhYm91dFxuICApIHtcbiAgICBtb250aFxuICAgIGRheVxuICAgIHdlZWtEYXlcbiAgICB0aW1lXG4gICAgYWJvdXRcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZGRMZWN0dXJlTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEFkZExlY3R1cmVNdXRhdGlvbiwgQWRkTGVjdHVyZU11dGF0aW9uVmFyaWFibGVzPihBZGRMZWN0dXJlRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBDcmVhdGVOb3RlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlTm90ZSgkbGVjdHVyZUlkOiBGbG9hdCEsICR1c2VyOiBTdHJpbmchLCAkaXNJbWFnZTogQm9vbGVhbiEsICRsaW5rOiBTdHJpbmchKSB7XG4gIGFkZE5vdGUobGVjdHVyZUlkOiAkbGVjdHVyZUlkLCB1c2VyOiAkdXNlciwgaXNJbWFnZTogJGlzSW1hZ2UsIGxpbms6ICRsaW5rKSB7XG4gICAgbGlua1xuICAgIGlzSW1hZ2VcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVOb3RlTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPENyZWF0ZU5vdGVNdXRhdGlvbiwgQ3JlYXRlTm90ZU11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVOb3RlRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICB1c2VybmFtZVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEsICRuYW1lOiBTdHJpbmchLCAkY29kZTogU3RyaW5nISkge1xuICByZWdpc3RlclVzZXIoY29kZTogJGNvZGUsIG5hbWU6ICRuYW1lLCB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgVGVhY2hlckZyb21TdWJqZWN0TmFtZSgkc3ViamVjdE5hbWU6IFN0cmluZyEpIHtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZShzdWJqZWN0TmFtZTogJHN1YmplY3ROYW1lKSB7XG4gICAgdGVhY2hlclxuICAgIGxlY3R1cmVzIHtcbiAgICAgIG1vbnRoXG4gICAgICBkYXlcbiAgICAgIHdlZWtEYXlcbiAgICAgIHRpbWVcbiAgICAgIGFib3V0XG4gICAgICBpZFxuICAgICAgbm90ZXMge1xuICAgICAgICBpc0ltYWdlXG4gICAgICAgIGxpbmtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8VGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnk+KHsgcXVlcnk6IFRlYWNoZXJGcm9tU3ViamVjdE5hbWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgR2V0TGVjdHVyZVRpbWVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0TGVjdHVyZVRpbWVzIHtcbiAgbGVjdHVyZVRpbWVzIHtcbiAgICBpZFxuICAgIHRlYWNoZXIge1xuICAgICAgbmFtZVxuICAgIH1cbiAgICBkYXlcbiAgICB3ZWVrRGF5XG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8R2V0TGVjdHVyZVRpbWVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldExlY3R1cmVUaW1lc1F1ZXJ5Pih7IHF1ZXJ5OiBHZXRMZWN0dXJlVGltZXNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICB1c2VybmFtZVxuICAgIGlkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPE1lUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PE1lUXVlcnk+KHsgcXVlcnk6IE1lRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldE5vdGVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0Tm90ZXMge1xuICBub3RlQ29tcGxldGUge1xuICAgIGlkXG4gICAgdXNlcklkXG4gICAgbGVjdHVyZSB7XG4gICAgICB0aW1lXG4gICAgICBkYXlcbiAgICAgIHRlYWNoZXIge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0Tm90ZXNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldE5vdGVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldE5vdGVzUXVlcnk+KHsgcXVlcnk6IEdldE5vdGVzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldEFsbFN1YmplY3RzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgR2V0QWxsU3ViamVjdHMge1xuICBzdWJqZWN0cyB7XG4gICAgbmFtZVxuICAgIGlkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0QWxsU3ViamVjdHNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldEFsbFN1YmplY3RzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldEFsbFN1YmplY3RzUXVlcnk+KHsgcXVlcnk6IEdldEFsbFN1YmplY3RzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59OyIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiOyBcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgZGVkdXBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSwgUHJvdmlkZXIgfSBmcm9tIFwidXJxbFwiXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBDYWNoZSwgUXVlcnlJbnB1dCB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XG5pbXBvcnQgeyBNZURvY3VtZW50LCBMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5LCBSZWdpc3Rlck11dGF0aW9uLCBMb2dvdXRNdXRhdGlvbiwgdXNlTWVRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5mdW5jdGlvbiBiZXR0ZXJVcGRhdGVRdWVyeTxSZXN1bHQsIFF1ZXJ5PihcbiAgY2FjaGU6IENhY2hlLCBcbiAgcWk6IFF1ZXJ5SW5wdXQsIFxuICByZXN1bHQ6IGFueSwgXG4gIGZuOiAocjogUmVzdWx0LCBxOiBRdWVyeSkgPT4gUXVlcnlcbikge1xuICByZXR1cm4gY2FjaGUudXBkYXRlUXVlcnkocWksIGRhdGEgPT4gZm4ocmVzdWx0LCBkYXRhIGFzIGFueSkgYXMgYW55KTsgXG59XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbFwiLCBcbiAgZmV0Y2hPcHRpb25zOiB7XG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiXG4gIH0sXG4gIGV4Y2hhbmdlczogW1xuICAgIGRlZHVwRXhjaGFuZ2UsIFxuICAgIGNhY2hlRXhjaGFuZ2Uoe1xuICAgIHVwZGF0ZXM6IHtcbiAgICAgIE11dGF0aW9uOiB7XG4gICAgICAgIGxvZ2luOiAocmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5nbykgPT4ge1xuICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KGNhY2hlLFxuICAgICAgICAgICAgIHtxdWVyeTogTWVEb2N1bWVudH0sXG4gICAgICAgICAgICAgcmVzdWx0LCBcbiAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTsgXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH0sIFxuICAgICAgICByZWdpc3RlclVzZXI6IChyZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmdvKSA9PiB7XG4gICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oY2FjaGUsXG4gICAgICAgICAgICAge3F1ZXJ5OiBNZURvY3VtZW50fSxcbiAgICAgICAgICAgICByZXN1bHQsIFxuICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXJVc2VyLmVycm9ycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTsgXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXJVc2VyLnVzZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgKVxuICAgICAgICB9LCBcbiAgICAgICAgbG9nb3V0OiAocmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5nbykgPT4ge1xuICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ291dE11dGF0aW9uLCBNZVF1ZXJ5PihjYWNoZSxcbiAgICAgICAgICAgICB7cXVlcnk6IE1lRG9jdW1lbnR9LFxuICAgICAgICAgICAgIHJlc3VsdCwgXG4gICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWU6IG51bGxcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgKVxuICAgICAgICB9LCBcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIGZldGNoRXhjaGFuZ2UsXG4gIF0sIFxufSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICA8UHJvdmlkZXIgdmFsdWU9e2NsaWVudH0+XG4gICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgIDwvUHJvdmlkZXI+XG4gICk7IFxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9