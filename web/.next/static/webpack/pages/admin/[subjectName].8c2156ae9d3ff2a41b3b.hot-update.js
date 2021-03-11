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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("0"),
      monthInput = _useState2[0],
      setMonthInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dayInput = _useState3[0],
      setDayInput = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Monday"),
      weekDayInput = _useState4[0],
      setWeekDayInput = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("7:30"),
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
              setStatesBackToNull([setMonthInput, setDayInput, setWeekDayInput, setTimeInput, setAboutInput]);

            case 5:
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
        lineNumber: 38,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "week day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "about"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "notes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [lectures === null || lectures === void 0 ? void 0 : lectures.map(function (lecture) {
            var _lecture$notes;

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.month
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.day
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.weekDay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.time
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.about
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
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
                      lineNumber: 64,
                      columnNumber: 28
                    }, _this);
                  }
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
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
                  lineNumber: 74,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "1",
                  children: "Fevereiro"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "2",
                  children: "Mar\xE7o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
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
                lineNumber: 80,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
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
                  lineNumber: 85,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Tuesday",
                  children: "Ter\xE7a-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Wednesday",
                  children: "Quarta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Thursday",
                  children: "Quinta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Friday",
                  children: "Sexta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
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
                  lineNumber: 94,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "8:15",
                  children: "8:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "9:15",
                  children: "9:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "10:00",
                  children: "10:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:00",
                  children: "11:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:45",
                  children: "11:45"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                value: aboutInput,
                onChange: function onChange(e) {
                  return handleInputChange(setAboutInput, e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return setAddingNewLecture(true);
            },
            children: "Adicionar Nova Aula"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, _this), addingNewLecture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            handleNewLectureConfirm();
          },
          children: "Confirmar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 29
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(SingleTeacherOnSubject, "3QK86f2r7e5AyT2gcaL2xlMQ9Xw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRtaW4tU2luZ2xlVGVhY2hlck9uU3ViamVjdC50c3giXSwibmFtZXMiOlsiU2luZ2xlVGVhY2hlck9uU3ViamVjdCIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRpbmdOZXdMZWN0dXJlIiwic2V0QWRkaW5nTmV3TGVjdHVyZSIsIm1vbnRoSW5wdXQiLCJzZXRNb250aElucHV0IiwiZGF5SW5wdXQiLCJzZXREYXlJbnB1dCIsIndlZWtEYXlJbnB1dCIsInNldFdlZWtEYXlJbnB1dCIsInRpbWVJbnB1dCIsInNldFRpbWVJbnB1dCIsImFib3V0SW5wdXQiLCJzZXRBYm91dElucHV0IiwidXNlQWRkTGVjdHVyZU11dGF0aW9uIiwiXyIsImFkZExlY3R1cmUiLCJ0ZWFjaGVyIiwidGVhY2hlck5hbWUiLCJsZWN0dXJlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwic2V0RnVuY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGVzQmFja1RvTnVsbCIsInNldEZ1bmN0aW9ucyIsImZvckVhY2giLCJoYW5kbGVOZXdMZWN0dXJlQ29uZmlybSIsIm1vbnRoIiwiZGF5Iiwid2Vla0RheSIsInRpbWUiLCJhYm91dCIsInJlc3BvbnNlIiwibWFwIiwibGVjdHVyZSIsIm5vdGVzIiwibm90ZSIsImlzSW1hZ2UiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDeENDLGdCQUR3QztBQUFBLE1BQ3RCQyxtQkFEc0I7O0FBQUEsbUJBRVhGLHNEQUFRLENBQUMsR0FBRCxDQUZHO0FBQUEsTUFFeENHLFVBRndDO0FBQUEsTUFFNUJDLGFBRjRC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QTtBQUFBLHFCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGUsZ0JBc0NmO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNbkIsbUJBQW1CLENBQUMsSUFBRCxDQUF6QjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFxRUdELGdCQUFnQixnQkFBRztBQUFRLGlCQUFPLEVBQUUsbUJBQU07QUFDekM0QixtQ0FBdUI7QUFDdEIsV0FGaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsR0FFUyxJQXZFNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBO0FBQUEsa0JBREY7QUFrRkQsQ0FoSE07O0dBQU0vQixzQjtVQVFhZSx3RTs7O0tBUmJmLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1tzdWJqZWN0TmFtZV0uOGMyMTU2YWU5ZDNmZjJhNDFiM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHt1c2VBZGRMZWN0dXJlTXV0YXRpb259IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiOyBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2luZ2xlVGVhY2hlck9uU3ViamVjdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthZGRpbmdOZXdMZWN0dXJlLCBzZXRBZGRpbmdOZXdMZWN0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgY29uc3QgW21vbnRoSW5wdXQsIHNldE1vbnRoSW5wdXRdID0gdXNlU3RhdGUoXCIwXCIpOyBcclxuICBjb25zdCBbZGF5SW5wdXQsIHNldERheUlucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuICBjb25zdCBbd2Vla0RheUlucHV0LCBzZXRXZWVrRGF5SW5wdXRdID0gdXNlU3RhdGUoXCJNb25kYXlcIik7IFxyXG4gIGNvbnN0IFt0aW1lSW5wdXQsIHNldFRpbWVJbnB1dF0gPSB1c2VTdGF0ZShcIjc6MzBcIik7IFxyXG4gIGNvbnN0IFthYm91dElucHV0LCBzZXRBYm91dElucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuXHJcbiAgY29uc3QgW18sIGFkZExlY3R1cmVdID0gdXNlQWRkTGVjdHVyZU11dGF0aW9uKCk7IFxyXG5cclxuICBsZXQgdGVhY2hlciA9IHByb3BzLnRlYWNoZXI7IFxyXG4gIGNvbnN0IHRlYWNoZXJOYW1lID0gdGVhY2hlcj8udGVhY2hlcjsgXHJcbiAgbGV0IGxlY3R1cmVzID0gdGVhY2hlcj8ubGVjdHVyZXM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHNldEZ1bmN0aW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PiwgZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRGdW5jdGlvbihlLnRhcmdldC52YWx1ZSk7IFxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0U3RhdGVzQmFja1RvTnVsbCA9IChzZXRGdW5jdGlvbnM6IEFycmF5PGFueT4pID0+IHtcclxuICAgIHNldEZ1bmN0aW9ucy5mb3JFYWNoKHNldEZ1bmN0aW9uID0+IHtcclxuICAgICAgc2V0RnVuY3Rpb24obnVsbCk7IFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTmV3TGVjdHVyZUNvbmZpcm0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZExlY3R1cmUoe21vbnRoOiBtb250aElucHV0LCBkYXk6IGRheUlucHV0LCB3ZWVrRGF5OiB3ZWVrRGF5SW5wdXQsIHRpbWU6IHRpbWVJbnB1dCwgYWJvdXQ6IGFib3V0SW5wdXQsIHRlYWNoZXJOYW1lOiB0ZWFjaGVyTmFtZX0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7IFxyXG4gICAgc2V0U3RhdGVzQmFja1RvTnVsbChbc2V0TW9udGhJbnB1dCwgc2V0RGF5SW5wdXQsIHNldFdlZWtEYXlJbnB1dCwgc2V0VGltZUlucHV0LCBzZXRBYm91dElucHV0XSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPnt0ZWFjaGVyTmFtZX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+bW9udGg8L3RoPlxyXG4gICAgICAgICAgICA8dGg+ZGF5PC90aD5cclxuICAgICAgICAgICAgPHRoPndlZWsgZGF5PC90aD5cclxuICAgICAgICAgICAgPHRoPnRpbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+YWJvdXQ8L3RoPlxyXG4gICAgICAgICAgICA8dGg+bm90ZXM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtsZWN0dXJlcz8ubWFwKGxlY3R1cmUgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/Lm1vbnRofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/LmRheX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntsZWN0dXJlPy53ZWVrRGF5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/LnRpbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8uYWJvdXR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8ubm90ZXM/Lm1hcChub3RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKG5vdGU/LmlzSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17bm90ZT8ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+Tm90YTwvYT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIHthZGRpbmdOZXdMZWN0dXJlID8gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bW9udGhJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRNb250aElucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMFwifT5KYW5laXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMVwifT5GZXZlcmVpcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIyXCJ9Pk1hcsOnbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2RheUlucHV0fSBwbGFjZWhvbGRlcj1cInZhbG9yZXMgZW50cmUgMSBlIDMxLzMwXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXREYXlJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3dlZWtEYXlJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRXZWVrRGF5SW5wdXQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJNb25kYXlcIn0+U2VndW5kYS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIlR1ZXNkYXlcIn0+VGVyw6dhLUZlaXJhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiV2VkbmVzZGF5XCJ9PlF1YXJ0YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIlRodXJzZGF5XCJ9PlF1aW50YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIkZyaWRheVwifT5TZXh0YS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aW1lSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0VGltZUlucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiNzozMFwifT43OjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiODoxNVwifT44OjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiOToxNVwifT45OjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMTA6MDBcIn0+MTA6MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIxMTowMFwifT4xMTowMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjExOjQ1XCJ9PjExOjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17YWJvdXRJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShzZXRBYm91dElucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApIFxyXG4gICAgICAgICAgOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFkZGluZ05ld0xlY3R1cmUodHJ1ZSl9PkFkaWNpb25hciBOb3ZhIEF1bGE8L2J1dHRvbj59XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICB7YWRkaW5nTmV3TGVjdHVyZSA/IDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlTmV3TGVjdHVyZUNvbmZpcm0oKTsgXHJcbiAgICAgICAgICB9fT5Db25maXJtYXI8L2J1dHRvbj4gOiBudWxsfVxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==