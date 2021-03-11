webpackHotUpdate_N_E("pages/admin/[subjectName]",{

/***/ "./src/components/Admin-SingleTeacherOnSubject.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Admin-SingleTeacherOnSubject.tsx ***!
  \*********************************************************/
/*! exports provided: SingleTeacherOnSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTeacherOnSubject", function() { return SingleTeacherOnSubject; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");






var _jsxFileName = "C:\\Dev\\Projects\\unimestreTwo\\web\\src\\components\\Admin-SingleTeacherOnSubject.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var SingleTeacherOnSubject = function SingleTeacherOnSubject(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      addingNewLecture = _useState[0],
      setAddingNewLecture = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      monthInput = _useState2[0],
      setMonthInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dayInput = _useState3[0],
      setDayInput = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      weekDayInput = _useState4[0],
      setWeekDayInput = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      timeInput = _useState5[0],
      setTimeInput = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      aboutInput = _useState6[0],
      setAboutInput = _useState6[1];

  var _useAddLectureMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useAddLectureMutation"])(),
      _useAddLectureMutatio2 = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useAddLectureMutatio, 2),
      _ = _useAddLectureMutatio2[0],
      addLecture = _useAddLectureMutatio2[1];

  var teacher = props.teacher;
  var teacherName = teacher === null || teacher === void 0 ? void 0 : teacher.teacher;
  var lectures = teacher === null || teacher === void 0 ? void 0 : teacher.lectures;

  var handleInputChange = function handleInputChange(setFunction, e) {
    console.log(e.value);
    setFunction(e.value);
  };

  var setStatesBackToNull = function setStatesBackToNull(setFunctions) {
    setFunctions.forEach(function (setFunction) {
      setFunction(null);
    });
  };

  var handleNewLectureConfirm = /*#__PURE__*/function () {
    var _ref = Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return addLecture({
                month: monthInput,
                day: dayInput,
                weekDay: weekDayInput,
                time: timeInput,
                about: aboutInput,
                teacherName: teacherName
              });

            case 2:
              response = _context.sent;
              console.log(response);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleNewLectureConfirm() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: teacherName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "week day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "about"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "notes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [lectures === null || lectures === void 0 ? void 0 : lectures.map(function (lecture) {
            var _lecture$notes;

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.month
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.day
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.weekDay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.time
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "*about"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : (_lecture$notes = lecture.notes) === null || _lecture$notes === void 0 ? void 0 : _lecture$notes.map(function (note) {
                  if (note !== null && note !== void 0 && note.isImage) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: note === null || note === void 0 ? void 0 : note.link,
                      target: "_blank",
                      children: "Nota"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 28
                    }, _this);
                  }
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this);
          }), addingNewLecture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                value: monthInput,
                onChange: function onChange(e) {
                  return handleInputChange(setMonthInput, e);
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "0",
                  children: "Janeiro"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "1",
                  children: "Fevereiro"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "2",
                  children: "Mar\xE7o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                value: dayInput,
                placeholder: "valores entre 1 e 31/30",
                onChange: function onChange(e) {
                  return handleInputChange(setDayInput, e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                value: weekDayInput,
                onChange: function onChange(e) {
                  return handleInputChange(setWeekDayInput, e);
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Monday",
                  children: "Segunda-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Tuesday",
                  children: "Ter\xE7a-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Wednesday",
                  children: "Quarta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Thursday",
                  children: "Quinta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Friday",
                  children: "Sexta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                value: timeInput,
                onChange: function onChange(e) {
                  return handleInputChange(setTimeInput, e);
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "7:30",
                  children: "7:30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "8:15",
                  children: "8:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "9:15",
                  children: "9:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "10:00",
                  children: "10:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:00",
                  children: "11:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:45",
                  children: "11:45"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                value: aboutInput,
                onChange: function onChange(e) {
                  return handleInputChange(setAboutInput, e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return setAddingNewLecture(true);
            },
            children: "Adicionar Nova Aula"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, _this), addingNewLecture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            handleNewLectureConfirm(); //setStatesBackToNull([setMonthInput, setDayInput, setWeekDayInput, setTimeInput, setAboutInput]);
          },
          children: "Confirmar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 29
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(SingleTeacherOnSubject, "0zwbvyy2aKSAsoD9tpmklKWO7i4=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useAddLectureMutation"]];
});

_c = SingleTeacherOnSubject;

var _c;

$RefreshReg$(_c, "SingleTeacherOnSubject");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRtaW4tU2luZ2xlVGVhY2hlck9uU3ViamVjdC50c3giXSwibmFtZXMiOlsiU2luZ2xlVGVhY2hlck9uU3ViamVjdCIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRpbmdOZXdMZWN0dXJlIiwic2V0QWRkaW5nTmV3TGVjdHVyZSIsIm1vbnRoSW5wdXQiLCJzZXRNb250aElucHV0IiwiZGF5SW5wdXQiLCJzZXREYXlJbnB1dCIsIndlZWtEYXlJbnB1dCIsInNldFdlZWtEYXlJbnB1dCIsInRpbWVJbnB1dCIsInNldFRpbWVJbnB1dCIsImFib3V0SW5wdXQiLCJzZXRBYm91dElucHV0IiwidXNlQWRkTGVjdHVyZU11dGF0aW9uIiwiXyIsImFkZExlY3R1cmUiLCJ0ZWFjaGVyIiwidGVhY2hlck5hbWUiLCJsZWN0dXJlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwic2V0RnVuY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwic2V0U3RhdGVzQmFja1RvTnVsbCIsInNldEZ1bmN0aW9ucyIsImZvckVhY2giLCJoYW5kbGVOZXdMZWN0dXJlQ29uZmlybSIsIm1vbnRoIiwiZGF5Iiwid2Vla0RheSIsInRpbWUiLCJhYm91dCIsInJlc3BvbnNlIiwibWFwIiwibGVjdHVyZSIsIm5vdGVzIiwibm90ZSIsImlzSW1hZ2UiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDeENDLGdCQUR3QztBQUFBLE1BQ3RCQyxtQkFEc0I7O0FBQUEsbUJBRVhGLHNEQUFRLENBQUMsSUFBRCxDQUZHO0FBQUEsTUFFeENHLFVBRndDO0FBQUEsTUFFNUJDLGFBRjRCOztBQUFBLG1C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QUFBQTtBQUFBLGlCQVhGLEVBcUVHRCxnQkFBZ0IsZ0JBQUc7QUFBUSxpQkFBTyxFQUFFLG1CQUFNO0FBQ3pDMkIsbUNBQXVCLEdBRGtCLENBRXpDO0FBQ0MsV0FIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsR0FHUyxJQXhFNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBO0FBQUEsa0JBREY7QUFtRkQsQ0FoSE07O0dBQU05QixzQjtVQVFhZSx3RTs7O0tBUmJmLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1tzdWJqZWN0TmFtZV0uN2U5NTY4ZjMzMzIzYzc2OTcwNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHt1c2VBZGRMZWN0dXJlTXV0YXRpb259IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiOyBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2luZ2xlVGVhY2hlck9uU3ViamVjdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthZGRpbmdOZXdMZWN0dXJlLCBzZXRBZGRpbmdOZXdMZWN0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgY29uc3QgW21vbnRoSW5wdXQsIHNldE1vbnRoSW5wdXRdID0gdXNlU3RhdGUobnVsbCk7IFxyXG4gIGNvbnN0IFtkYXlJbnB1dCwgc2V0RGF5SW5wdXRdID0gdXNlU3RhdGUobnVsbCk7IFxyXG4gIGNvbnN0IFt3ZWVrRGF5SW5wdXQsIHNldFdlZWtEYXlJbnB1dF0gPSB1c2VTdGF0ZShudWxsKTsgXHJcbiAgY29uc3QgW3RpbWVJbnB1dCwgc2V0VGltZUlucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuICBjb25zdCBbYWJvdXRJbnB1dCwgc2V0QWJvdXRJbnB1dF0gPSB1c2VTdGF0ZShudWxsKTsgXHJcblxyXG4gIGNvbnN0IFtfLCBhZGRMZWN0dXJlXSA9IHVzZUFkZExlY3R1cmVNdXRhdGlvbigpOyBcclxuXHJcbiAgbGV0IHRlYWNoZXIgPSBwcm9wcy50ZWFjaGVyOyBcclxuICBjb25zdCB0ZWFjaGVyTmFtZSA9IHRlYWNoZXI/LnRlYWNoZXI7IFxyXG4gIGxldCBsZWN0dXJlcyA9IHRlYWNoZXI/LmxlY3R1cmVzO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChzZXRGdW5jdGlvbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LCBlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnZhbHVlKVxyXG4gICAgc2V0RnVuY3Rpb24oZS52YWx1ZSk7IFxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0U3RhdGVzQmFja1RvTnVsbCA9IChzZXRGdW5jdGlvbnM6IEFycmF5PGFueT4pID0+IHtcclxuICAgIHNldEZ1bmN0aW9ucy5mb3JFYWNoKHNldEZ1bmN0aW9uID0+IHtcclxuICAgICAgc2V0RnVuY3Rpb24obnVsbCk7IFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTmV3TGVjdHVyZUNvbmZpcm0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZExlY3R1cmUoe21vbnRoOiBtb250aElucHV0LCBkYXk6IGRheUlucHV0LCB3ZWVrRGF5OiB3ZWVrRGF5SW5wdXQsIHRpbWU6IHRpbWVJbnB1dCwgYWJvdXQ6IGFib3V0SW5wdXQsIHRlYWNoZXJOYW1lOiB0ZWFjaGVyTmFtZX0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7IFxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57dGVhY2hlck5hbWV9PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPm1vbnRoPC90aD5cclxuICAgICAgICAgICAgPHRoPmRheTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD53ZWVrIGRheTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD50aW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPmFib3V0PC90aD5cclxuICAgICAgICAgICAgPHRoPm5vdGVzPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7bGVjdHVyZXM/Lm1hcChsZWN0dXJlID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntsZWN0dXJlPy5tb250aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntsZWN0dXJlPy5kYXl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8ud2Vla0RheX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntsZWN0dXJlPy50aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+KmFib3V0PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8ubm90ZXM/Lm1hcChub3RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKG5vdGU/LmlzSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17bm90ZT8ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+Tm90YTwvYT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIHthZGRpbmdOZXdMZWN0dXJlID8gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bW9udGhJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRNb250aElucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMFwifT5KYW5laXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMVwifT5GZXZlcmVpcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIyXCJ9Pk1hcsOnbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2RheUlucHV0fSBwbGFjZWhvbGRlcj1cInZhbG9yZXMgZW50cmUgMSBlIDMxLzMwXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXREYXlJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3dlZWtEYXlJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRXZWVrRGF5SW5wdXQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJNb25kYXlcIn0+U2VndW5kYS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIlR1ZXNkYXlcIn0+VGVyw6dhLUZlaXJhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiV2VkbmVzZGF5XCJ9PlF1YXJ0YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIlRodXJzZGF5XCJ9PlF1aW50YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIkZyaWRheVwifT5TZXh0YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aW1lSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0VGltZUlucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiNzozMFwifT43OjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiODoxNVwifT44OjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiOToxNVwifT45OjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMTA6MDBcIn0+MTA6MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIxMTowMFwifT4xMTowMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjExOjQ1XCJ9PjExOjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17YWJvdXRJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRBYm91dElucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApIFxyXG4gICAgICAgICAgOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFkZGluZ05ld0xlY3R1cmUodHJ1ZSl9PkFkaWNpb25hciBOb3ZhIEF1bGE8L2J1dHRvbj59XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICB7YWRkaW5nTmV3TGVjdHVyZSA/IDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlTmV3TGVjdHVyZUNvbmZpcm0oKTsgXHJcbiAgICAgICAgICAvL3NldFN0YXRlc0JhY2tUb051bGwoW3NldE1vbnRoSW5wdXQsIHNldERheUlucHV0LCBzZXRXZWVrRGF5SW5wdXQsIHNldFRpbWVJbnB1dCwgc2V0QWJvdXRJbnB1dF0pO1xyXG4gICAgICAgICAgfX0+Q29uZmlybWFyPC9idXR0b24+IDogbnVsbH1cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=