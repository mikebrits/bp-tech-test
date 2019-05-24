/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "../src/actions/Process.actions.js":
/*!*****************************************!*\
  !*** ../src/actions/Process.actions.js ***!
  \*****************************************/
/*! exports provided: assignWorker, removeWorker, runProcess, suspendProcess, setProcessPriority, tick, autoAssign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignWorker\", function() { return assignWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeWorker\", function() { return removeWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runProcess\", function() { return runProcess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"suspendProcess\", function() { return suspendProcess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProcessPriority\", function() { return setProcessPriority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tick\", function() { return tick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoAssign\", function() { return autoAssign; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"../src/constants.js\");\n\nvar assignWorker = function assignWorker(_ref) {\n  var id = _ref.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_WORKER\"],\n    payload: {\n      id: id\n    }\n  };\n};\nvar removeWorker = function removeWorker(_ref2) {\n  var id = _ref2.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_WORKER\"],\n    payload: {\n      id: id\n    }\n  };\n};\n\nvar setProcessStatus = function setProcessStatus(_ref3) {\n  var id = _ref3.id,\n      assigned = _ref3.assigned,\n      status = _ref3.status;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_STATUS\"],\n    payload: {\n      id: id,\n      assigned: assigned,\n      status: status\n    }\n  };\n};\n\nvar runProcess = function runProcess(_ref4) {\n  var id = _ref4.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"START_WORKING\"],\n    payload: {\n      id: id\n    }\n  };\n};\nvar suspendProcess = function suspendProcess(_ref5) {\n  var id = _ref5.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"PAUSE_WORKING\"],\n    payload: {\n      id: id\n    }\n  };\n};\nvar setProcessPriority = function setProcessPriority(_ref6) {\n  var id = _ref6.id,\n      priority = _ref6.priority;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRIORITY\"],\n    payload: {\n      id: id,\n      priority: priority\n    }\n  };\n};\nvar tick = function tick() {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"],\n    payload: {}\n  };\n};\nvar autoAssign = function autoAssign(_ref7) {\n  var id = _ref7.id,\n      priority = _ref7.priority;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"AUTO_ASSIGN\"],\n    payload: {\n      id: id,\n      priority: priority\n    }\n  };\n};\n\n//# sourceURL=webpack:///../src/actions/Process.actions.js?");

/***/ }),

/***/ "../src/constants.js":
/*!***************************!*\
  !*** ../src/constants.js ***!
  \***************************/
/*! exports provided: ADD_PROCESS, UPDATE_PROCESS, ARCHIVE_PROCESS, UNARCHIVE_PROCESS, ASSIGN_WORKER, REMOVE_WORKER, SET_PRIORITY, SET_STATUS, START_WORKING, PAUSE_WORKING, AUTO_ASSIGN, TICK, UPDATE_SEARCH_TERM, MAX_PROCESS_WORKERS, MAX_TOTAL_WORKERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PROCESS\", function() { return ADD_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_PROCESS\", function() { return UPDATE_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ARCHIVE_PROCESS\", function() { return ARCHIVE_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNARCHIVE_PROCESS\", function() { return UNARCHIVE_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ASSIGN_WORKER\", function() { return ASSIGN_WORKER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_WORKER\", function() { return REMOVE_WORKER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PRIORITY\", function() { return SET_PRIORITY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_STATUS\", function() { return SET_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"START_WORKING\", function() { return START_WORKING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAUSE_WORKING\", function() { return PAUSE_WORKING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTO_ASSIGN\", function() { return AUTO_ASSIGN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TICK\", function() { return TICK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_SEARCH_TERM\", function() { return UPDATE_SEARCH_TERM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_PROCESS_WORKERS\", function() { return MAX_PROCESS_WORKERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_TOTAL_WORKERS\", function() { return MAX_TOTAL_WORKERS; });\n//Process CRUD\nvar ADD_PROCESS = 'ADD_PROCESS';\nvar UPDATE_PROCESS = 'UPDATE_PROCESS';\nvar ARCHIVE_PROCESS = 'ARCHIVE_PROCESS';\nvar UNARCHIVE_PROCESS = 'UNARCHIVE_PROCESS'; // Process Actions\n\nvar ASSIGN_WORKER = 'ASSIGN_WORKER';\nvar REMOVE_WORKER = 'REMOVE_WORKER';\nvar SET_PRIORITY = 'SET_PRIORITY';\nvar SET_STATUS = 'SET_STATUS';\nvar START_WORKING = 'START_WORKING';\nvar PAUSE_WORKING = 'PAUSE_WORKING';\nvar AUTO_ASSIGN = 'AUTO_ASSIGN'; //Machine Action - This simulates time going by\n\nvar TICK = 'TICK';\nvar UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'; // General Constants\n\nvar MAX_PROCESS_WORKERS = 25;\nvar MAX_TOTAL_WORKERS = 200;\n\n//# sourceURL=webpack:///../src/constants.js?");

/***/ }),

/***/ "../src/reducers/Process.reducer.js":
/*!******************************************!*\
  !*** ../src/reducers/Process.reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"../src/constants.js\");\n/* harmony import */ var _Workers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workers.reducer */ \"../src/reducers/Workers.reducer.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar initialState = {\n  id: null,\n  maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n  currentWorkers: 0,\n  name: '',\n  description: '',\n  priority: 2,\n  assigned: false,\n  status: 'Unassigned',\n  startTime: null,\n  tasks: [],\n  running: false,\n  totalTime: 0,\n  computationRemaining: 0,\n  percentageComplete: 0,\n  timeRemaining: 0,\n  icon: 'cog'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"START_WORKING\"]:\n      return state.assigned ? _objectSpread({}, state, {\n        running: true,\n        status: 'Running',\n        computationRemaining: state.computationRemaining || state.totalTime,\n        timeRemaining: Math.floor((state.computationRemaining || state.totalTime) / state.currentWorkers)\n      }) : state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"PAUSE_WORKING\"]:\n      return _objectSpread({}, state, {\n        running: false,\n        status: 'Paused'\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_WORKER\"]:\n      return _objectSpread({}, state, {\n        assigned: true,\n        status: state.status === 'Unassigned' ? 'Assigned' : state.status,\n        currentWorkers: state.currentWorkers < state.maxWorkers ? state.currentWorkers + 1 : state.currentWorkers\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"AUTO_ASSIGN\"]:\n      return _objectSpread({}, state, {\n        status: state.status === 'Unassigned' ? 'Assigned' : state.status,\n        assigned: true,\n        currentWorkers: action.payload.priority * 5,\n        priority: action.payload.priority\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_WORKER\"]:\n      return _objectSpread({}, state, {\n        status: state.currentWorkers === 1 ? 'Unassigned' : state.status,\n        running: state.currentWorkers === 1 ? false : state.running,\n        assigned: state.currentWorkers > 1,\n        currentWorkers: state.currentWorkers > 0 ? state.currentWorkers - 1 : state.currentWorkers\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRIORITY\"]:\n      return _objectSpread({}, state, {\n        priority: action.payload.priority\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_STATUS\"]:\n      return _objectSpread({}, state, {\n        assigned: action.payload.assigned,\n        status: action.payload.status\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"]:\n      if (!state.running) {\n        return state;\n      }\n\n      var computationRemaining = state.computationRemaining >= state.currentWorkers ? state.computationRemaining - state.currentWorkers : 0;\n      var done = computationRemaining === 0;\n      return _objectSpread({}, state, {\n        computationRemaining: computationRemaining,\n        percentageComplete: 100 - computationRemaining / state.totalTime * 100,\n        status: done ? 'Completed' : state.status,\n        running: !done,\n        currentWorkers: done ? 0 : state.currentWorkers,\n        assigned: !done,\n        priority: done ? 0 : state.priority,\n        timeRemaining: Math.floor(computationRemaining / state.currentWorkers)\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///../src/reducers/Process.reducer.js?");

/***/ }),

/***/ "../src/reducers/Processes.reducer.js":
/*!********************************************!*\
  !*** ../src/reducers/Processes.reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"../src/constants.js\");\n/* harmony import */ var _Process_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Process.reducer */ \"../src/reducers/Process.reducer.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar initialState = {\n  version: 0,\n  processes: [{\n    id: 1,\n    maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n    currentWorkers: 0,\n    name: 'Order Coffee Beans',\n    description: 'Contact the roaster, place an order, email receipt',\n    priority: 0,\n    assigned: false,\n    status: 'Unassigned',\n    startTime: null,\n    totalTime: 100,\n    tasks: [],\n    running: false,\n    icon: 'coffee'\n  }, {\n    id: 2,\n    maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n    currentWorkers: 0,\n    name: 'Book Movie Tickets',\n    description: 'Contact the ticket office, select seats, place an order, email receipt',\n    priority: 0,\n    assigned: false,\n    status: 'Unassigned',\n    startTime: null,\n    totalTime: 50,\n    tasks: [],\n    running: false,\n    icon: 'ticket-alt'\n  }, {\n    id: 3,\n    maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n    currentWorkers: 0,\n    name: 'Book Restaurant Table',\n    description: 'Contact the reception, select time, place an order, email receipt',\n    priority: 0,\n    assigned: false,\n    status: 'Unassigned',\n    startTime: null,\n    totalTime: 200,\n    tasks: [],\n    running: false,\n    icon: 'pizza-slice'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_WORKER\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_WORKER\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRIORITY\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_STATUS\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"START_WORKING\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"PAUSE_WORKING\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"AUTO_ASSIGN\"]:\n      var id = action.payload.id;\n      return _objectSpread({}, state, {\n        processes: state.processes.map(function (process) {\n          return process.id === id ? Object(_Process_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process, action) : process;\n        })\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"]:\n      return _objectSpread({}, state, {\n        processes: state.processes.map(function (process) {\n          return Object(_Process_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process, action);\n        })\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///../src/reducers/Processes.reducer.js?");

/***/ }),

/***/ "../src/reducers/Workers.reducer.js":
/*!******************************************!*\
  !*** ../src/reducers/Workers.reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"../src/constants.js\");\n\nvar initialState = {\n  total: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_TOTAL_WORKERS\"],\n  available: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_TOTAL_WORKERS\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///../src/reducers/Workers.reducer.js?");

/***/ }),

/***/ "../src/reducers/general.reducer.js":
/*!******************************************!*\
  !*** ../src/reducers/general.reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"../src/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  searchTerm: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_SEARCH_TERM\"]:\n      return _objectSpread({}, state, {\n        searchTerm: action.payload.term\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///../src/reducers/general.reducer.js?");

/***/ }),

/***/ "../src/reducers/index.js":
/*!********************************!*\
  !*** ../src/reducers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Processes_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Processes.reducer */ \"../src/reducers/Processes.reducer.js\");\n/* harmony import */ var _general_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.reducer */ \"../src/reducers/general.reducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  processes: _Processes_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  general: _general_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///../src/reducers/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/reducers */ \"../src/reducers/index.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/constants */ \"../src/constants.js\");\n/* harmony import */ var _src_actions_Process_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/actions/Process.actions */ \"../src/actions/Process.actions.js\");\n\n\n\n\n\n\nvar app = __webpack_require__(/*! express */ \"express\")();\n\nvar http = __webpack_require__(/*! http */ \"http\").createServer(app);\n\nvar io = socket_io__WEBPACK_IMPORTED_MODULE_1___default()(http);\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_src_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar dispatch = store.dispatch;\n\nvar state = function state() {\n  return store.getState();\n};\n\nvar getProcess = function getProcess(id) {\n  return state().processes.processes.find(function (item) {\n    return item.id === id;\n  });\n};\n\napp.get('/', function (req, res) {\n  res.send('<h1>Hello world</h1>');\n});\nio.on('connection', function (socket) {\n  console.log('a user connected');\n  socket.on('disconnect', function () {\n    console.log('user disconnected');\n  });\n  socket.on('message', function (message) {\n    io.emit('message', {\n      number: message\n    });\n  });\n  socket.on(_src_constants__WEBPACK_IMPORTED_MODULE_3__[\"ASSIGN_WORKER\"], function (_ref) {\n    var id = _ref.id;\n    dispatch(Object(_src_actions_Process_actions__WEBPACK_IMPORTED_MODULE_4__[\"assignWorker\"])({\n      id: id\n    }));\n    io.emit('refresh', getProcess(id));\n  });\n  socket.on(_src_constants__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_WORKER\"], function (_ref2) {\n    var id = _ref2.id;\n    dispatch(Object(_src_actions_Process_actions__WEBPACK_IMPORTED_MODULE_4__[\"removeWorker\"])({\n      id: id\n    }));\n  });\n});\nsetInterval(function () {\n  io.emit('tick');\n}, 1000);\nhttp.listen(3003, function () {\n  console.log('listening on *:3003');\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi @babel/polyfill ./src/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/app.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });