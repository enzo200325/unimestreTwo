module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/admin/[subjectName].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Admin-SingleTeacherOnSubject.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Admin-SingleTeacherOnSubject.tsx ***!
  \*********************************************************/
/*! exports provided: SingleTeacherOnSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTeacherOnSubject", function() { return SingleTeacherOnSubject; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");


var _jsxFileName = "C:\\Dev\\Projects\\unimestreTwo\\web\\src\\components\\Admin-SingleTeacherOnSubject.tsx";


const SingleTeacherOnSubject = props => {
  const {
    0: addingNewLecture,
    1: setAddingNewLecture
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: monthInput,
    1: setMonthInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("0");
  const {
    0: dayInput,
    1: setDayInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: weekDayInput,
    1: setWeekDayInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Monday");
  const {
    0: timeInput,
    1: setTimeInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("7:30");
  const {
    0: aboutInput,
    1: setAboutInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [_, addLecture] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useAddLectureMutation"])();
  let teacher = props.teacher;
  const teacherName = teacher === null || teacher === void 0 ? void 0 : teacher.teacher;
  let lectures = teacher === null || teacher === void 0 ? void 0 : teacher.lectures;

  const handleInputChange = (setFunction, e) => {
    console.log(e.target.value);
    setFunction(e.target.value);
  };

  const setStatesBackToNull = setFunctions => {
    setFunctions.forEach(setFunction => {
      setFunction(null);
    });
  };

  const handleNewLectureConfirm = async () => {
    const response = await addLecture({
      month: monthInput,
      day: dayInput,
      weekDay: weekDayInput,
      time: timeInput,
      about: aboutInput,
      teacherName: teacherName
    });
    console.log(response);
    setStatesBackToNull([setMonthInput, setDayInput, setWeekDayInput, setTimeInput, setAboutInput]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: teacherName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "week day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "about"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "notes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [lectures === null || lectures === void 0 ? void 0 : lectures.map(lecture => {
            var _lecture$notes;

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.month
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.day
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.weekDay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.time
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.about
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : (_lecture$notes = lecture.notes) === null || _lecture$notes === void 0 ? void 0 : _lecture$notes.map(note => {
                  if (note !== null && note !== void 0 && note.isImage) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: note === null || note === void 0 ? void 0 : note.link,
                      target: "_blank",
                      children: "Nota"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 28
                    }, undefined);
                  }
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined);
          }), addingNewLecture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                value: monthInput,
                onChange: e => handleInputChange(setMonthInput, e),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "0",
                  children: "Janeiro"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "1",
                  children: "Fevereiro"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "2",
                  children: "Mar\xE7o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                value: dayInput,
                placeholder: "valores entre 1 e 31/30",
                onChange: e => handleInputChange(setDayInput, e)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                value: weekDayInput,
                onChange: e => handleInputChange(setWeekDayInput, e),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Monday",
                  children: "Segunda-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Tuesday",
                  children: "Ter\xE7a-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Wednesday",
                  children: "Quarta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Thursday",
                  children: "Quinta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Friday",
                  children: "Sexta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                value: timeInput,
                onChange: e => handleInputChange(setTimeInput, e),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "7:30",
                  children: "7:30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "8:15",
                  children: "8:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "9:15",
                  children: "9:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "10:00",
                  children: "10:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:00",
                  children: "11:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:45",
                  children: "11:45"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                value: aboutInput,
                onChange: e => handleInputChange(setAboutInput, e)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: () => setAddingNewLecture(true),
            children: "Adicionar Nova Aula"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, undefined), addingNewLecture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => {
            handleNewLectureConfirm();
          },
          children: "Confirmar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 29
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/***/ }),

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

/***/ "./src/pages/admin/[subjectName].tsx":
/*!*******************************************!*\
  !*** ./src/pages/admin/[subjectName].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Admin_SingleTeacherOnSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Admin-SingleTeacherOnSubject */ "./src/components/Admin-SingleTeacherOnSubject.tsx");

var _jsxFileName = "C:\\Dev\\Projects\\unimestreTwo\\web\\src\\pages\\admin\\[subjectName].tsx";




const AdminSubjectPage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    subjectName
  } = router.query;
  let [{
    data
  }] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useTeacherFromSubjectNameQuery"])({
    variables: {
      subjectName: subjectName
    }
  });
  let teachers = data === null || data === void 0 ? void 0 : data.getTeacherFromSubjectName;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: teachers === null || teachers === void 0 ? void 0 : teachers.map(teacher => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Admin_SingleTeacherOnSubject__WEBPACK_IMPORTED_MODULE_3__["SingleTeacherOnSubject"], {
        teacher: teacher
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 14
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminSubjectPage);

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWRtaW4tU2luZ2xlVGVhY2hlck9uU3ViamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWRtaW4vW3N1YmplY3ROYW1lXS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJxbFwiIl0sIm5hbWVzIjpbIlNpbmdsZVRlYWNoZXJPblN1YmplY3QiLCJwcm9wcyIsImFkZGluZ05ld0xlY3R1cmUiLCJzZXRBZGRpbmdOZXdMZWN0dXJlIiwidXNlU3RhdGUiLCJtb250aElucHV0Iiwic2V0TW9udGhJbnB1dCIsImRheUlucHV0Iiwic2V0RGF5SW5wdXQiLCJ3ZWVrRGF5SW5wdXQiLCJzZXRXZWVrRGF5SW5wdXQiLCJ0aW1lSW5wdXQiLCJzZXRUaW1lSW5wdXQiLCJhYm91dElucHV0Iiwic2V0QWJvdXRJbnB1dCIsIl8iLCJhZGRMZWN0dXJlIiwidXNlQWRkTGVjdHVyZU11dGF0aW9uIiwidGVhY2hlciIsInRlYWNoZXJOYW1lIiwibGVjdHVyZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsInNldEZ1bmN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlc0JhY2tUb051bGwiLCJzZXRGdW5jdGlvbnMiLCJmb3JFYWNoIiwiaGFuZGxlTmV3TGVjdHVyZUNvbmZpcm0iLCJyZXNwb25zZSIsIm1vbnRoIiwiZGF5Iiwid2Vla0RheSIsInRpbWUiLCJhYm91dCIsIm1hcCIsImxlY3R1cmUiLCJub3RlcyIsIm5vdGUiLCJpc0ltYWdlIiwibGluayIsIkFkZExlY3R1cmVEb2N1bWVudCIsImdxbCIsIlVycWwiLCJDcmVhdGVOb3RlRG9jdW1lbnQiLCJ1c2VDcmVhdGVOb3RlTXV0YXRpb24iLCJMb2dpbkRvY3VtZW50IiwidXNlTG9naW5NdXRhdGlvbiIsIkxvZ291dERvY3VtZW50IiwidXNlTG9nb3V0TXV0YXRpb24iLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlRlYWNoZXJGcm9tU3ViamVjdE5hbWVEb2N1bWVudCIsInVzZVRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeSIsIm9wdGlvbnMiLCJxdWVyeSIsIkdldExlY3R1cmVUaW1lc0RvY3VtZW50IiwidXNlR2V0TGVjdHVyZVRpbWVzUXVlcnkiLCJNZURvY3VtZW50IiwidXNlTWVRdWVyeSIsIkdldE5vdGVzRG9jdW1lbnQiLCJ1c2VHZXROb3Rlc1F1ZXJ5IiwiR2V0QWxsU3ViamVjdHNEb2N1bWVudCIsInVzZUdldEFsbFN1YmplY3RzUXVlcnkiLCJBZG1pblN1YmplY3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3ViamVjdE5hbWUiLCJkYXRhIiwidmFyaWFibGVzIiwidGVhY2hlcnMiLCJnZXRUZWFjaGVyRnJvbVN1YmplY3ROYW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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TUFBSUcsUUFBUSxHQUFHRixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUcseUJBQXJCO0FBRUEsc0JBQ0U7QUFBQSxjQUNHRCxRQURILGFBQ0dBLFFBREgsdUJBQ0dBLFFBQVEsQ0FBRW5DLEdBQVYsQ0FBY3BCLE9BQU8sSUFBSTtBQUMxQiwwQkFBTyxxRUFBQywrRkFBRDtBQUF3QixlQUFPLEVBQUVBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDQyxLQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FiRDs7QUFlZWlELCtFQUFmLEU7Ozs7Ozs7Ozs7O0FDcEJBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2FkbWluL1tzdWJqZWN0TmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9hZG1pbi9bc3ViamVjdE5hbWVdLnRzeFwiKTtcbiIsImltcG9ydCB7RGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHt1c2VBZGRMZWN0dXJlTXV0YXRpb259IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiOyBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2luZ2xlVGVhY2hlck9uU3ViamVjdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthZGRpbmdOZXdMZWN0dXJlLCBzZXRBZGRpbmdOZXdMZWN0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgY29uc3QgW21vbnRoSW5wdXQsIHNldE1vbnRoSW5wdXRdID0gdXNlU3RhdGUoXCIwXCIpOyBcclxuICBjb25zdCBbZGF5SW5wdXQsIHNldERheUlucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuICBjb25zdCBbd2Vla0RheUlucHV0LCBzZXRXZWVrRGF5SW5wdXRdID0gdXNlU3RhdGUoXCJNb25kYXlcIik7IFxyXG4gIGNvbnN0IFt0aW1lSW5wdXQsIHNldFRpbWVJbnB1dF0gPSB1c2VTdGF0ZShcIjc6MzBcIik7IFxyXG4gIGNvbnN0IFthYm91dElucHV0LCBzZXRBYm91dElucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuXHJcbiAgY29uc3QgW18sIGFkZExlY3R1cmVdID0gdXNlQWRkTGVjdHVyZU11dGF0aW9uKCk7IFxyXG5cclxuICBsZXQgdGVhY2hlciA9IHByb3BzLnRlYWNoZXI7IFxyXG4gIGNvbnN0IHRlYWNoZXJOYW1lID0gdGVhY2hlcj8udGVhY2hlcjsgXHJcbiAgbGV0IGxlY3R1cmVzID0gdGVhY2hlcj8ubGVjdHVyZXM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHNldEZ1bmN0aW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PiwgZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRGdW5jdGlvbihlLnRhcmdldC52YWx1ZSk7IFxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0U3RhdGVzQmFja1RvTnVsbCA9IChzZXRGdW5jdGlvbnM6IEFycmF5PGFueT4pID0+IHtcclxuICAgIHNldEZ1bmN0aW9ucy5mb3JFYWNoKHNldEZ1bmN0aW9uID0+IHtcclxuICAgICAgc2V0RnVuY3Rpb24obnVsbCk7IFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTmV3TGVjdHVyZUNvbmZpcm0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZExlY3R1cmUoe21vbnRoOiBtb250aElucHV0LCBkYXk6IGRheUlucHV0LCB3ZWVrRGF5OiB3ZWVrRGF5SW5wdXQsIHRpbWU6IHRpbWVJbnB1dCwgYWJvdXQ6IGFib3V0SW5wdXQsIHRlYWNoZXJOYW1lOiB0ZWFjaGVyTmFtZX0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7IFxyXG4gICAgc2V0U3RhdGVzQmFja1RvTnVsbChbc2V0TW9udGhJbnB1dCwgc2V0RGF5SW5wdXQsIHNldFdlZWtEYXlJbnB1dCwgc2V0VGltZUlucHV0LCBzZXRBYm91dElucHV0XSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPnt0ZWFjaGVyTmFtZX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+bW9udGg8L3RoPlxyXG4gICAgICAgICAgICA8dGg+ZGF5PC90aD5cclxuICAgICAgICAgICAgPHRoPndlZWsgZGF5PC90aD5cclxuICAgICAgICAgICAgPHRoPnRpbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+YWJvdXQ8L3RoPlxyXG4gICAgICAgICAgICA8dGg+bm90ZXM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtsZWN0dXJlcz8ubWFwKGxlY3R1cmUgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/Lm1vbnRofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/LmRheX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntsZWN0dXJlPy53ZWVrRGF5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/LnRpbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8uYWJvdXR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8ubm90ZXM/Lm1hcChub3RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKG5vdGU/LmlzSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17bm90ZT8ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+Tm90YTwvYT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIHthZGRpbmdOZXdMZWN0dXJlID8gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bW9udGhJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRNb250aElucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMFwifT5KYW5laXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMVwifT5GZXZlcmVpcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIyXCJ9Pk1hcsOnbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2RheUlucHV0fSBwbGFjZWhvbGRlcj1cInZhbG9yZXMgZW50cmUgMSBlIDMxLzMwXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXREYXlJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3dlZWtEYXlJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRXZWVrRGF5SW5wdXQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJNb25kYXlcIn0+U2VndW5kYS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIlR1ZXNkYXlcIn0+VGVyw6dhLUZlaXJhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiV2VkbmVzZGF5XCJ9PlF1YXJ0YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIlRodXJzZGF5XCJ9PlF1aW50YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIkZyaWRheVwifT5TZXh0YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aW1lSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0VGltZUlucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiNzozMFwifT43OjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiODoxNVwifT44OjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiOToxNVwifT45OjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMTA6MDBcIn0+MTA6MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIxMTowMFwifT4xMTowMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjExOjQ1XCJ9PjExOjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17YWJvdXRJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRBYm91dElucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApIFxyXG4gICAgICAgICAgOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFkZGluZ05ld0xlY3R1cmUodHJ1ZSl9PkFkaWNpb25hciBOb3ZhIEF1bGE8L2J1dHRvbj59XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICB7YWRkaW5nTmV3TGVjdHVyZSA/IDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlTmV3TGVjdHVyZUNvbmZpcm0oKTsgXHJcbiAgICAgICAgICB9fT5Db25maXJtYXI8L2J1dHRvbj4gOiBudWxsfVxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbiAgLyoqIFRoZSBqYXZhc2NyaXB0IGBEYXRlYCBhcyBzdHJpbmcuIFR5cGUgcmVwcmVzZW50cyBkYXRlIGFuZCB0aW1lIGFzIHRoZSBJU08gRGF0ZSBzdHJpbmcuICovXG4gIERhdGVUaW1lOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgdGVhY2hlcnM/OiBNYXliZTxBcnJheTxUZWFjaGVyPj47XG4gIHN1YmplY3RzOiBBcnJheTxTdWJqZWN0PjtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZTogQXJyYXk8UmVzcG9uc2U+O1xuICBsZWN0dXJlVGltZXM6IEFycmF5PExlY3R1cmVUaW1lPjtcbiAgY29kZXM6IEFycmF5PENvZGU+O1xuICBub3RlczogQXJyYXk8Tm90ZT47XG4gIG5vdGVDb21wbGV0ZTogQXJyYXk8Tm90ZT47XG4gIGdldE5vdGVzRnJvbUxlY3R1cmU6IEFycmF5PE5vdGU+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWVBcmdzID0ge1xuICBzdWJqZWN0TmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5R2V0Tm90ZXNGcm9tTGVjdHVyZUFyZ3MgPSB7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBUZWFjaGVyID0ge1xuICBfX3R5cGVuYW1lPzogJ1RlYWNoZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxlY3R1cmVUaW1lczogQXJyYXk8TGVjdHVyZVRpbWU+O1xuICBzdWJqZWN0OiBTdWJqZWN0O1xuICBzdWJqZWN0SWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBMZWN0dXJlVGltZSA9IHtcbiAgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgbW9udGg/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGRheT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgd2Vla0RheT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFib3V0PzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW5rPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB0ZWFjaGVySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRlYWNoZXI6IFRlYWNoZXI7XG4gIG5vdGVzPzogTWF5YmU8QXJyYXk8Tm90ZT4+O1xufTtcblxuZXhwb3J0IHR5cGUgTm90ZSA9IHtcbiAgX190eXBlbmFtZT86ICdOb3RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICBkZXNjcmlwdGlvbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgaXNJbWFnZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBsaW5rPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB1c2VyOiBVc2VyO1xuICB1c2VySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGxlY3R1cmU6IExlY3R1cmVUaW1lO1xuICBsZWN0dXJlSWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBTdWJqZWN0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1N1YmplY3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZWFjaGVyczogQXJyYXk8VGVhY2hlcj47XG59O1xuXG5leHBvcnQgdHlwZSBSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdyZXNwb25zZSc7XG4gIHRlYWNoZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsZWN0dXJlczogQXJyYXk8TGVjdHVyZVRpbWU+O1xufTtcblxuZXhwb3J0IHR5cGUgQ29kZSA9IHtcbiAgX190eXBlbmFtZT86ICdDb2RlJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB2YWx1ZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHJlZ2lzdGVyVXNlcjogVXNlclJlc3BvbnNlO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xuICBsb2dvdXQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgYWRkVGVhY2hlcjogVGVhY2hlcjtcbiAgcmVtb3ZlVGVhY2hlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFkZFN1YmplY3Q6IFN1YmplY3Q7XG4gIGFkZExlY3R1cmVUaW1lOiBMZWN0dXJlVGltZTtcbiAgYWRkQ29kZXM6IEFycmF5PENvZGU+O1xuICBhZGROb3RlOiBOb3RlO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyVXNlckFyZ3MgPSB7XG4gIGNvZGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGRUZWFjaGVyQXJncyA9IHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZW1vdmVUZWFjaGVyQXJncyA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkU3ViamVjdEFyZ3MgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZExlY3R1cmVUaW1lQXJncyA9IHtcbiAgdGVhY2hlck5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhYm91dDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB3ZWVrRGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbW9udGg6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZENvZGVzQXJncyA9IHtcbiAgY29kZXM6IEFycmF5PFNjYWxhcnNbJ1N0cmluZyddPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BZGROb3RlQXJncyA9IHtcbiAgbGVjdHVyZUlkOiBTY2FsYXJzWydGbG9hdCddO1xuICB1c2VyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlzSW1hZ2U6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBBZGRMZWN0dXJlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRlYWNoZXJOYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbW9udGg6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkYXk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB3ZWVrRGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFib3V0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEFkZExlY3R1cmVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBhZGRMZWN0dXJlVGltZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICYgUGljazxMZWN0dXJlVGltZSwgJ21vbnRoJyB8ICdkYXknIHwgJ3dlZWtEYXknIHwgJ3RpbWUnIHwgJ2Fib3V0Jz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVOb3RlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxlY3R1cmVJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlzSW1hZ2U6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbGluazogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVOb3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgYWRkTm90ZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgJiBQaWNrPE5vdGUsICdsaW5rJyB8ICdpc0ltYWdlJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICd1c2VybmFtZScgfCAnaWQnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY29kZTogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyVXNlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgc3ViamVjdE5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGdldFRlYWNoZXJGcm9tU3ViamVjdE5hbWU6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAncmVzcG9uc2UnIH1cbiAgICAmIFBpY2s8UmVzcG9uc2UsICd0ZWFjaGVyJz5cbiAgICAmIHsgbGVjdHVyZXM6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICAgJiBQaWNrPExlY3R1cmVUaW1lLCAnbW9udGgnIHwgJ2RheScgfCAnd2Vla0RheScgfCAndGltZScgfCAnYWJvdXQnIHwgJ2lkJz5cbiAgICAgICYgeyBub3Rlcz86IE1heWJlPEFycmF5PChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ05vdGUnIH1cbiAgICAgICAgJiBQaWNrPE5vdGUsICdpc0ltYWdlJyB8ICdsaW5rJz5cbiAgICAgICk+PiB9XG4gICAgKT4gfVxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBHZXRMZWN0dXJlVGltZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldExlY3R1cmVUaW1lc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGxlY3R1cmVUaW1lczogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdMZWN0dXJlVGltZScgfVxuICAgICYgUGljazxMZWN0dXJlVGltZSwgJ2lkJyB8ICdkYXknIHwgJ3dlZWtEYXknIHwgJ3RpbWUnPlxuICAgICYgeyB0ZWFjaGVyOiAoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVGVhY2hlcicgfVxuICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdpZCc+XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEdldE5vdGVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXROb3Rlc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG5vdGVDb21wbGV0ZTogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdOb3RlJyB9XG4gICAgJiBQaWNrPE5vdGUsICdpZCcgfCAndXNlcklkJz5cbiAgICAmIHsgbGVjdHVyZTogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0xlY3R1cmVUaW1lJyB9XG4gICAgICAmIFBpY2s8TGVjdHVyZVRpbWUsICd0aW1lJyB8ICdkYXknPlxuICAgICAgJiB7IHRlYWNoZXI6IChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ1RlYWNoZXInIH1cbiAgICAgICAgJiBQaWNrPFRlYWNoZXIsICduYW1lJz5cbiAgICAgICkgfVxuICAgICksIHVzZXI6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgR2V0QWxsU3ViamVjdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEFsbFN1YmplY3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgc3ViamVjdHM6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViamVjdCcgfVxuICAgICYgUGljazxTdWJqZWN0LCAnbmFtZScgfCAnaWQnPlxuICApPiB9XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBBZGRMZWN0dXJlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWRkTGVjdHVyZSgkdGVhY2hlck5hbWU6IFN0cmluZyEsICRtb250aDogU3RyaW5nISwgJGRheTogU3RyaW5nISwgJHdlZWtEYXk6IFN0cmluZyEsICR0aW1lOiBTdHJpbmchLCAkYWJvdXQ6IFN0cmluZyEpIHtcbiAgYWRkTGVjdHVyZVRpbWUoXG4gICAgdGVhY2hlck5hbWU6ICR0ZWFjaGVyTmFtZVxuICAgIG1vbnRoOiAkbW9udGhcbiAgICBkYXk6ICRkYXlcbiAgICB3ZWVrRGF5OiAkd2Vla0RheVxuICAgIHRpbWU6ICR0aW1lXG4gICAgYWJvdXQ6ICRhYm91dFxuICApIHtcbiAgICBtb250aFxuICAgIGRheVxuICAgIHdlZWtEYXlcbiAgICB0aW1lXG4gICAgYWJvdXRcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZGRMZWN0dXJlTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEFkZExlY3R1cmVNdXRhdGlvbiwgQWRkTGVjdHVyZU11dGF0aW9uVmFyaWFibGVzPihBZGRMZWN0dXJlRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBDcmVhdGVOb3RlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlTm90ZSgkbGVjdHVyZUlkOiBGbG9hdCEsICR1c2VyOiBTdHJpbmchLCAkaXNJbWFnZTogQm9vbGVhbiEsICRsaW5rOiBTdHJpbmchKSB7XG4gIGFkZE5vdGUobGVjdHVyZUlkOiAkbGVjdHVyZUlkLCB1c2VyOiAkdXNlciwgaXNJbWFnZTogJGlzSW1hZ2UsIGxpbms6ICRsaW5rKSB7XG4gICAgbGlua1xuICAgIGlzSW1hZ2VcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVOb3RlTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPENyZWF0ZU5vdGVNdXRhdGlvbiwgQ3JlYXRlTm90ZU11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVOb3RlRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICB1c2VybmFtZVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEsICRuYW1lOiBTdHJpbmchLCAkY29kZTogU3RyaW5nISkge1xuICByZWdpc3RlclVzZXIoY29kZTogJGNvZGUsIG5hbWU6ICRuYW1lLCB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBUZWFjaGVyRnJvbVN1YmplY3ROYW1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgVGVhY2hlckZyb21TdWJqZWN0TmFtZSgkc3ViamVjdE5hbWU6IFN0cmluZyEpIHtcbiAgZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZShzdWJqZWN0TmFtZTogJHN1YmplY3ROYW1lKSB7XG4gICAgdGVhY2hlclxuICAgIGxlY3R1cmVzIHtcbiAgICAgIG1vbnRoXG4gICAgICBkYXlcbiAgICAgIHdlZWtEYXlcbiAgICAgIHRpbWVcbiAgICAgIGFib3V0XG4gICAgICBpZFxuICAgICAgbm90ZXMge1xuICAgICAgICBpc0ltYWdlXG4gICAgICAgIGxpbmtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8VGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxUZWFjaGVyRnJvbVN1YmplY3ROYW1lUXVlcnk+KHsgcXVlcnk6IFRlYWNoZXJGcm9tU3ViamVjdE5hbWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgR2V0TGVjdHVyZVRpbWVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0TGVjdHVyZVRpbWVzIHtcbiAgbGVjdHVyZVRpbWVzIHtcbiAgICBpZFxuICAgIHRlYWNoZXIge1xuICAgICAgbmFtZVxuICAgIH1cbiAgICBkYXlcbiAgICB3ZWVrRGF5XG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldExlY3R1cmVUaW1lc1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8R2V0TGVjdHVyZVRpbWVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldExlY3R1cmVUaW1lc1F1ZXJ5Pih7IHF1ZXJ5OiBHZXRMZWN0dXJlVGltZXNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICB1c2VybmFtZVxuICAgIGlkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPE1lUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PE1lUXVlcnk+KHsgcXVlcnk6IE1lRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldE5vdGVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgZ2V0Tm90ZXMge1xuICBub3RlQ29tcGxldGUge1xuICAgIGlkXG4gICAgdXNlcklkXG4gICAgbGVjdHVyZSB7XG4gICAgICB0aW1lXG4gICAgICBkYXlcbiAgICAgIHRlYWNoZXIge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0Tm90ZXNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldE5vdGVzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldE5vdGVzUXVlcnk+KHsgcXVlcnk6IEdldE5vdGVzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEdldEFsbFN1YmplY3RzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgR2V0QWxsU3ViamVjdHMge1xuICBzdWJqZWN0cyB7XG4gICAgbmFtZVxuICAgIGlkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0QWxsU3ViamVjdHNRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPEdldEFsbFN1YmplY3RzUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PEdldEFsbFN1YmplY3RzUXVlcnk+KHsgcXVlcnk6IEdldEFsbFN1YmplY3RzRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59OyIsImltcG9ydCB7IHVzZVRlYWNoZXJGcm9tU3ViamVjdE5hbWVRdWVyeSB9IGZyb20gXCIuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7IFxyXG5pbXBvcnQgeyBTaW5nbGVUZWFjaGVyT25TdWJqZWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRtaW4tU2luZ2xlVGVhY2hlck9uU3ViamVjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEFkbWluU3ViamVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gIGNvbnN0IHtzdWJqZWN0TmFtZX06IGFueSA9IHJvdXRlci5xdWVyeTsgXHJcbiAgbGV0IFt7ZGF0YX1dID0gdXNlVGVhY2hlckZyb21TdWJqZWN0TmFtZVF1ZXJ5KHt2YXJpYWJsZXM6IHtzdWJqZWN0TmFtZTogc3ViamVjdE5hbWV9fSkgXHJcbiAgbGV0IHRlYWNoZXJzID0gZGF0YT8uZ2V0VGVhY2hlckZyb21TdWJqZWN0TmFtZTsgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dGVhY2hlcnM/Lm1hcCh0ZWFjaGVyID0+IHtcclxuICAgICAgcmV0dXJuIDxTaW5nbGVUZWFjaGVyT25TdWJqZWN0IHRlYWNoZXI9e3RlYWNoZXJ9IC8+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblN1YmplY3RQYWdlOyAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9