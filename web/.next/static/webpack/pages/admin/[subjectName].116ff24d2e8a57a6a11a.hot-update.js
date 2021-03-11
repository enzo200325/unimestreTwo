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
    console.log(e.target.value);
    setFunction(e.target.value);
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
                  selected: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRtaW4tU2luZ2xlVGVhY2hlck9uU3ViamVjdC50c3giXSwibmFtZXMiOlsiU2luZ2xlVGVhY2hlck9uU3ViamVjdCIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRpbmdOZXdMZWN0dXJlIiwic2V0QWRkaW5nTmV3TGVjdHVyZSIsIm1vbnRoSW5wdXQiLCJzZXRNb250aElucHV0IiwiZGF5SW5wdXQiLCJzZXREYXlJbnB1dCIsIndlZWtEYXlJbnB1dCIsInNldFdlZWtEYXlJbnB1dCIsInRpbWVJbnB1dCIsInNldFRpbWVJbnB1dCIsImFib3V0SW5wdXQiLCJzZXRBYm91dElucHV0IiwidXNlQWRkTGVjdHVyZU11dGF0aW9uIiwiXyIsImFkZExlY3R1cmUiLCJ0ZWFjaGVyIiwidGVhY2hlck5hbWUiLCJsZWN0dXJlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwic2V0RnVuY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGVzQmFja1RvTnVsbCIsInNldEZ1bmN0aW9ucyIsImZvckVhY2giLCJoYW5kbGVOZXdMZWN0dXJlQ29uZmlybSIsIm1vbnRoIiwiZGF5Iiwid2Vla0RheSIsInRpbWUiLCJhYm91dCIsInJlc3BvbnNlIiwibWFwIiwibGVjdHVyZSIsIm5vdGVzIiwibm90ZSIsImlzSW1hZ2UiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDeENDLGdCQUR3QztBQUFBLE1BQ3RCQyxtQkFEc0I7O0FBQUEsbUJBRVhGLHNEQUFRLENBQUMsSUFBRCxDQUZHO0FBQUEsTUFFeENHLFVBRndDO0FBQUEsTUFFNUJDLGFBRjRC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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFxRUdELGdCQUFnQixnQkFBRztBQUFRLGlCQUFPLEVBQUUsbUJBQU07QUFDekM0QixtQ0FBdUIsR0FEa0IsQ0FFekM7QUFDQyxXQUhpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxHQUdTLElBeEU1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQSxrQkFERjtBQW1GRCxDQWhITTs7R0FBTS9CLHNCO1VBUWFlLHdFOzs7S0FSYmYsc0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vW3N1YmplY3ROYW1lXS4xMTZmZjI0ZDJlOGE1N2E2YTExYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge3VzZUFkZExlY3R1cmVNdXRhdGlvbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaW5nbGVUZWFjaGVyT25TdWJqZWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FkZGluZ05ld0xlY3R1cmUsIHNldEFkZGluZ05ld0xlY3R1cmVdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICBjb25zdCBbbW9udGhJbnB1dCwgc2V0TW9udGhJbnB1dF0gPSB1c2VTdGF0ZShudWxsKTsgXHJcbiAgY29uc3QgW2RheUlucHV0LCBzZXREYXlJbnB1dF0gPSB1c2VTdGF0ZShudWxsKTsgXHJcbiAgY29uc3QgW3dlZWtEYXlJbnB1dCwgc2V0V2Vla0RheUlucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuICBjb25zdCBbdGltZUlucHV0LCBzZXRUaW1lSW5wdXRdID0gdXNlU3RhdGUobnVsbCk7IFxyXG4gIGNvbnN0IFthYm91dElucHV0LCBzZXRBYm91dElucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuXHJcbiAgY29uc3QgW18sIGFkZExlY3R1cmVdID0gdXNlQWRkTGVjdHVyZU11dGF0aW9uKCk7IFxyXG5cclxuICBsZXQgdGVhY2hlciA9IHByb3BzLnRlYWNoZXI7IFxyXG4gIGNvbnN0IHRlYWNoZXJOYW1lID0gdGVhY2hlcj8udGVhY2hlcjsgXHJcbiAgbGV0IGxlY3R1cmVzID0gdGVhY2hlcj8ubGVjdHVyZXM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHNldEZ1bmN0aW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sIGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0RnVuY3Rpb24oZS50YXJnZXQudmFsdWUpOyBcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldFN0YXRlc0JhY2tUb051bGwgPSAoc2V0RnVuY3Rpb25zOiBBcnJheTxhbnk+KSA9PiB7XHJcbiAgICBzZXRGdW5jdGlvbnMuZm9yRWFjaChzZXRGdW5jdGlvbiA9PiB7XHJcbiAgICAgIHNldEZ1bmN0aW9uKG51bGwpOyBcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU5ld0xlY3R1cmVDb25maXJtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhZGRMZWN0dXJlKHttb250aDogbW9udGhJbnB1dCwgZGF5OiBkYXlJbnB1dCwgd2Vla0RheTogd2Vla0RheUlucHV0LCB0aW1lOiB0aW1lSW5wdXQsIGFib3V0OiBhYm91dElucHV0LCB0ZWFjaGVyTmFtZTogdGVhY2hlck5hbWV9KVxyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyBcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+e3RlYWNoZXJOYW1lfTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5tb250aDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5kYXk8L3RoPlxyXG4gICAgICAgICAgICA8dGg+d2VlayBkYXk8L3RoPlxyXG4gICAgICAgICAgICA8dGg+dGltZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5hYm91dDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5ub3RlczwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2xlY3R1cmVzPy5tYXAobGVjdHVyZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8ubW9udGh9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8uZGF5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/LndlZWtEYXl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8udGltZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiphYm91dDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/Lm5vdGVzPy5tYXAobm90ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChub3RlPy5pc0ltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e25vdGU/Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPk5vdGE8L2E+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICB7YWRkaW5nTmV3TGVjdHVyZSA/IChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e21vbnRoSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0TW9udGhJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjBcIn0gc2VsZWN0ZWQ+SmFuZWlybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjFcIn0+RmV2ZXJlaXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMlwifT5NYXLDp288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtkYXlJbnB1dH0gcGxhY2Vob2xkZXI9XCJ2YWxvcmVzIGVudHJlIDEgZSAzMS8zMFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0RGF5SW5wdXQsIGUpfT5cclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt3ZWVrRGF5SW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0V2Vla0RheUlucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiTW9uZGF5XCJ9PlNlZ3VuZGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJUdWVzZGF5XCJ9PlRlcsOnYS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIldlZG5lc2RheVwifT5RdWFydGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJUaHVyc2RheVwifT5RdWludGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJGcmlkYXlcIn0+U2V4dGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGltZUlucHV0fSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKHNldFRpbWVJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjc6MzBcIn0+NzozMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjg6MTVcIn0+ODoxNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjk6MTVcIn0+OToxNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjEwOjAwXCJ9PjEwOjAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMTE6MDBcIn0+MTE6MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIxMTo0NVwifT4xMTo0NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2Fib3V0SW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0QWJvdXRJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSBcclxuICAgICAgICAgIDogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBZGRpbmdOZXdMZWN0dXJlKHRydWUpfT5BZGljaW9uYXIgTm92YSBBdWxhPC9idXR0b24+fVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAge2FkZGluZ05ld0xlY3R1cmUgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGhhbmRsZU5ld0xlY3R1cmVDb25maXJtKCk7IFxyXG4gICAgICAgICAgLy9zZXRTdGF0ZXNCYWNrVG9OdWxsKFtzZXRNb250aElucHV0LCBzZXREYXlJbnB1dCwgc2V0V2Vla0RheUlucHV0LCBzZXRUaW1lSW5wdXQsIHNldEFib3V0SW5wdXRdKTtcclxuICAgICAgICAgIH19PkNvbmZpcm1hcjwvYnV0dG9uPiA6IG51bGx9XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9