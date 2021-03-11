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
              setAddingNewLecture(false);

            case 6:
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
        lineNumber: 39,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "week day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "about"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "notes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [lectures === null || lectures === void 0 ? void 0 : lectures.map(function (lecture) {
            var _lecture$notes;

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.month
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.day
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.weekDay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: lecture === null || lecture === void 0 ? void 0 : lecture.time
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "*about"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
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
                      lineNumber: 65,
                      columnNumber: 28
                    }, _this);
                  }
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
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
                  lineNumber: 75,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "1",
                  children: "Fevereiro"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "2",
                  children: "Mar\xE7o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
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
                lineNumber: 81,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
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
                  lineNumber: 86,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Tuesday",
                  children: "Ter\xE7a-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Wednesday",
                  children: "Quarta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Thursday",
                  children: "Quinta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Friday",
                  children: "Sexta-Feira"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
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
                  lineNumber: 95,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "8:15",
                  children: "8:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "9:15",
                  children: "9:15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "10:00",
                  children: "10:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:00",
                  children: "11:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "11:45",
                  children: "11:45"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                value: aboutInput,
                onChange: function onChange(e) {
                  return handleInputChange(setAboutInput, e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return setAddingNewLecture(true);
            },
            children: "Adicionar Nova Aula"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, _this), addingNewLecture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: /*#__PURE__*/Object(C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
            return C_Dev_Projects_unimestreTwo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return handleNewLectureConfirm();

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })),
          children: "Confirmar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 29
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRtaW4tU2luZ2xlVGVhY2hlck9uU3ViamVjdC50c3giXSwibmFtZXMiOlsiU2luZ2xlVGVhY2hlck9uU3ViamVjdCIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRpbmdOZXdMZWN0dXJlIiwic2V0QWRkaW5nTmV3TGVjdHVyZSIsIm1vbnRoSW5wdXQiLCJzZXRNb250aElucHV0IiwiZGF5SW5wdXQiLCJzZXREYXlJbnB1dCIsIndlZWtEYXlJbnB1dCIsInNldFdlZWtEYXlJbnB1dCIsInRpbWVJbnB1dCIsInNldFRpbWVJbnB1dCIsImFib3V0SW5wdXQiLCJzZXRBYm91dElucHV0IiwidXNlQWRkTGVjdHVyZU11dGF0aW9uIiwiXyIsImFkZExlY3R1cmUiLCJ0ZWFjaGVyIiwidGVhY2hlck5hbWUiLCJsZWN0dXJlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwic2V0RnVuY3Rpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZXNCYWNrVG9OdWxsIiwic2V0RnVuY3Rpb25zIiwiZm9yRWFjaCIsImhhbmRsZU5ld0xlY3R1cmVDb25maXJtIiwibW9udGgiLCJkYXkiLCJ3ZWVrRGF5IiwidGltZSIsImFib3V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwibGVjdHVyZSIsIm5vdGVzIiwibm90ZSIsImlzSW1hZ2UiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDeENDLGdCQUR3QztBQUFBLE1BQ3RCQyxtQkFEc0I7O0FBQUEsbUJBRVhGLHNEQUFRLENBQUMsSUFBRCxDQUZHO0FBQUEsTUFFeENHLFVBRndDO0FBQUEsTUFFNUJDLGFBRjRC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QUEscUJBQU1uQixtQkFBbUIsQ0FBQyxJQUFELENBQXpCO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixFQXFFR0QsZ0JBQWdCLGdCQUFHO0FBQVEsaUJBQU8sNFRBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQWtCMEIsdUJBQXVCLEVBQXpDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILEdBQXNGLElBckV6RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQSxrQkFERjtBQWdGRCxDQS9HTTs7R0FBTTdCLHNCO1VBUWFlLHdFOzs7S0FSYmYsc0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vW3N1YmplY3ROYW1lXS42MThlNDk0Zjc0NTUxZWJmMGNhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXNwYXRjaCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlQWRkTGVjdHVyZU11dGF0aW9ufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjsgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNpbmdsZVRlYWNoZXJPblN1YmplY3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbYWRkaW5nTmV3TGVjdHVyZSwgc2V0QWRkaW5nTmV3TGVjdHVyZV0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gIGNvbnN0IFttb250aElucHV0LCBzZXRNb250aElucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuICBjb25zdCBbZGF5SW5wdXQsIHNldERheUlucHV0XSA9IHVzZVN0YXRlKG51bGwpOyBcclxuICBjb25zdCBbd2Vla0RheUlucHV0LCBzZXRXZWVrRGF5SW5wdXRdID0gdXNlU3RhdGUobnVsbCk7IFxyXG4gIGNvbnN0IFt0aW1lSW5wdXQsIHNldFRpbWVJbnB1dF0gPSB1c2VTdGF0ZShudWxsKTsgXHJcbiAgY29uc3QgW2Fib3V0SW5wdXQsIHNldEFib3V0SW5wdXRdID0gdXNlU3RhdGUobnVsbCk7IFxyXG5cclxuICBjb25zdCBbXywgYWRkTGVjdHVyZV0gPSB1c2VBZGRMZWN0dXJlTXV0YXRpb24oKTsgXHJcblxyXG4gIGxldCB0ZWFjaGVyID0gcHJvcHMudGVhY2hlcjsgXHJcbiAgY29uc3QgdGVhY2hlck5hbWUgPSB0ZWFjaGVyPy50ZWFjaGVyOyBcclxuICBsZXQgbGVjdHVyZXMgPSB0ZWFjaGVyPy5sZWN0dXJlcztcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoc2V0RnVuY3Rpb24sIGUpID0+IHtcclxuICAgIHNldEZ1bmN0aW9uKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRTdGF0ZXNCYWNrVG9OdWxsID0gKHNldEZ1bmN0aW9uczogQXJyYXk8YW55PikgPT4ge1xyXG4gICAgc2V0RnVuY3Rpb25zLmZvckVhY2goc2V0RnVuY3Rpb24gPT4ge1xyXG4gICAgICBzZXRGdW5jdGlvbihudWxsKTsgXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVOZXdMZWN0dXJlQ29uZmlybSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWRkTGVjdHVyZSh7bW9udGg6IG1vbnRoSW5wdXQsIGRheTogZGF5SW5wdXQsIHdlZWtEYXk6IHdlZWtEYXlJbnB1dCwgdGltZTogdGltZUlucHV0LCBhYm91dDogYWJvdXRJbnB1dCwgdGVhY2hlck5hbWU6IHRlYWNoZXJOYW1lfSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG5cclxuICAgIHNldFN0YXRlc0JhY2tUb051bGwoW3NldE1vbnRoSW5wdXQsIHNldERheUlucHV0LCBzZXRXZWVrRGF5SW5wdXQsIHNldFRpbWVJbnB1dCwgc2V0QWJvdXRJbnB1dF0pOyBcclxuICAgIHNldEFkZGluZ05ld0xlY3R1cmUoZmFsc2UpOyBcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+e3RlYWNoZXJOYW1lfTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5tb250aDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5kYXk8L3RoPlxyXG4gICAgICAgICAgICA8dGg+d2VlayBkYXk8L3RoPlxyXG4gICAgICAgICAgICA8dGg+dGltZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5hYm91dDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5ub3RlczwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2xlY3R1cmVzPy5tYXAobGVjdHVyZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8ubW9udGh9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8uZGF5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/LndlZWtEYXl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZT8udGltZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiphYm91dDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmU/Lm5vdGVzPy5tYXAobm90ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChub3RlPy5pc0ltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e25vdGU/Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPk5vdGE8L2E+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICB7YWRkaW5nTmV3TGVjdHVyZSA/IChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e21vbnRoSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0TW9udGhJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjBcIn0+SmFuZWlybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjFcIn0+RmV2ZXJlaXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMlwifT5NYXLDp288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtkYXlJbnB1dH0gcGxhY2Vob2xkZXI9XCJ2YWxvcmVzIGVudHJlIDEgZSAzMS8zMFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0RGF5SW5wdXQsIGUpfT5cclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt3ZWVrRGF5SW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0V2Vla0RheUlucHV0LCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiTW9uZGF5XCJ9PlNlZ3VuZGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJUdWVzZGF5XCJ9PlRlcsOnYS1GZWlyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIldlZG5lc2RheVwifT5RdWFydGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJUaHVyc2RheVwifT5RdWludGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJGcmlkYXlcIn0+U2V4dGEtRmVpcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGltZUlucHV0fSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKHNldFRpbWVJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjc6MzBcIn0+NzozMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjg6MTVcIn0+ODoxNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjk6MTVcIn0+OToxNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjEwOjAwXCJ9PjEwOjAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMTE6MDBcIn0+MTE6MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCIxMTo0NVwifT4xMTo0NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2Fib3V0SW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2Uoc2V0QWJvdXRJbnB1dCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSBcclxuICAgICAgICAgIDogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBZGRpbmdOZXdMZWN0dXJlKHRydWUpfT5BZGljaW9uYXIgTm92YSBBdWxhPC9idXR0b24+fVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAge2FkZGluZ05ld0xlY3R1cmUgPyA8YnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IGF3YWl0IGhhbmRsZU5ld0xlY3R1cmVDb25maXJtKCl9PkNvbmZpcm1hcjwvYnV0dG9uPiA6IG51bGx9XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9