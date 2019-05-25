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

/***/ "./actions/Process.actions.js":
/*!************************************!*\
  !*** ./actions/Process.actions.js ***!
  \************************************/
/*! exports provided: assignWorker, removeWorker, runProcess, suspendProcess, setProcessPriority, tick, autoAssign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignWorker\", function() { return assignWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeWorker\", function() { return removeWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runProcess\", function() { return runProcess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"suspendProcess\", function() { return suspendProcess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProcessPriority\", function() { return setProcessPriority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tick\", function() { return tick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoAssign\", function() { return autoAssign; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\nvar assignWorker = function assignWorker(_ref) {\n  var id = _ref.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_WORKER\"],\n    payload: {\n      id: id\n    }\n  };\n};\nvar removeWorker = function removeWorker(_ref2) {\n  var id = _ref2.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_WORKER\"],\n    payload: {\n      id: id\n    }\n  };\n};\n\nvar setProcessStatus = function setProcessStatus(_ref3) {\n  var id = _ref3.id,\n      assigned = _ref3.assigned,\n      status = _ref3.status;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_STATUS\"],\n    payload: {\n      id: id,\n      assigned: assigned,\n      status: status\n    }\n  };\n};\n\nvar runProcess = function runProcess(_ref4) {\n  var id = _ref4.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"START_WORKING\"],\n    payload: {\n      id: id\n    }\n  };\n};\nvar suspendProcess = function suspendProcess(_ref5) {\n  var id = _ref5.id;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"PAUSE_WORKING\"],\n    payload: {\n      id: id\n    }\n  };\n};\nvar setProcessPriority = function setProcessPriority(_ref6) {\n  var id = _ref6.id,\n      priority = _ref6.priority;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRIORITY\"],\n    payload: {\n      id: id,\n      priority: priority\n    }\n  };\n};\nvar tick = function tick() {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"],\n    payload: {}\n  };\n};\nvar autoAssign = function autoAssign(_ref7) {\n  var id = _ref7.id,\n      priority = _ref7.priority;\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"AUTO_ASSIGN\"],\n    payload: {\n      id: id,\n      priority: priority\n    }\n  };\n};\n\n//# sourceURL=webpack:///./actions/Process.actions.js?");

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: ADD_PROCESS, UPDATE_PROCESS, ARCHIVE_PROCESS, UNARCHIVE_PROCESS, ASSIGN_WORKER, REMOVE_WORKER, SET_PRIORITY, SET_STATUS, START_WORKING, PAUSE_WORKING, AUTO_ASSIGN, TICK, UPDATE_SEARCH_TERM, MAX_PROCESS_WORKERS, MAX_TOTAL_WORKERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PROCESS\", function() { return ADD_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_PROCESS\", function() { return UPDATE_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ARCHIVE_PROCESS\", function() { return ARCHIVE_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNARCHIVE_PROCESS\", function() { return UNARCHIVE_PROCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ASSIGN_WORKER\", function() { return ASSIGN_WORKER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_WORKER\", function() { return REMOVE_WORKER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PRIORITY\", function() { return SET_PRIORITY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_STATUS\", function() { return SET_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"START_WORKING\", function() { return START_WORKING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAUSE_WORKING\", function() { return PAUSE_WORKING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTO_ASSIGN\", function() { return AUTO_ASSIGN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TICK\", function() { return TICK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_SEARCH_TERM\", function() { return UPDATE_SEARCH_TERM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_PROCESS_WORKERS\", function() { return MAX_PROCESS_WORKERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_TOTAL_WORKERS\", function() { return MAX_TOTAL_WORKERS; });\n//Process CRUD\nvar ADD_PROCESS = 'ADD_PROCESS';\nvar UPDATE_PROCESS = 'UPDATE_PROCESS';\nvar ARCHIVE_PROCESS = 'ARCHIVE_PROCESS';\nvar UNARCHIVE_PROCESS = 'UNARCHIVE_PROCESS'; // Process Actions\n\nvar ASSIGN_WORKER = 'ASSIGN_WORKER';\nvar REMOVE_WORKER = 'REMOVE_WORKER';\nvar SET_PRIORITY = 'SET_PRIORITY';\nvar SET_STATUS = 'SET_STATUS';\nvar START_WORKING = 'START_WORKING';\nvar PAUSE_WORKING = 'PAUSE_WORKING';\nvar AUTO_ASSIGN = 'AUTO_ASSIGN'; //Machine Action - This simulates time going by\n\nvar TICK = 'TICK';\nvar UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'; // General Constants\n\nvar MAX_PROCESS_WORKERS = 25;\nvar MAX_TOTAL_WORKERS = 200;\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./controllers/processes.controller.js":
/*!*********************************************!*\
  !*** ./controllers/processes.controller.js ***!
  \*********************************************/
/*! exports provided: getProcesses, getProcess, addWorker, removeWorker, run, suspend, autoAssign, tick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProcesses\", function() { return getProcesses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProcess\", function() { return getProcess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addWorker\", function() { return addWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeWorker\", function() { return removeWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"suspend\", function() { return suspend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoAssign\", function() { return autoAssign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tick\", function() { return tick; });\n/* harmony import */ var _src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/models/processes.model */ \"./src/models/processes.model.js\");\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n/* harmony import */ var _actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/Process.actions */ \"./actions/Process.actions.js\");\n/* harmony import */ var _src_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/socket */ \"./src/socket.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar getProcesses = function getProcesses() {\n  return Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getProcesses\"])();\n};\nvar getProcess = function getProcess(id) {\n  return Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(id);\n};\nvar addWorker = function addWorker(id) {\n  Object(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])(Object(_actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__[\"assignWorker\"])({\n    id: id\n  }));\n  Object(_src_socket__WEBPACK_IMPORTED_MODULE_3__[\"notify\"])('refresh-process-' + id, Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(id));\n};\nvar removeWorker = function removeWorker(id) {\n  Object(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])(Object(_actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__[\"removeWorker\"])({\n    id: id\n  }));\n  Object(_src_socket__WEBPACK_IMPORTED_MODULE_3__[\"notify\"])('refresh-process-' + id, Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(id));\n};\nvar run = function run(id) {\n  Object(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])(Object(_actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__[\"runProcess\"])({\n    id: id\n  }));\n  Object(_src_socket__WEBPACK_IMPORTED_MODULE_3__[\"notify\"])('refresh-process-' + id, Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(id));\n};\nvar suspend = function suspend(id) {\n  Object(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])(Object(_actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__[\"suspendProcess\"])({\n    id: id\n  }));\n  Object(_src_socket__WEBPACK_IMPORTED_MODULE_3__[\"notify\"])('refresh-process-' + id, Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(id));\n};\nvar autoAssign = function autoAssign(id, priority) {\n  Object(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])(Object(_actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__[\"setProcessPriority\"])({\n    id: id,\n    priority: priority\n  }));\n  Object(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])(Object(_actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__[\"autoAssign\"])({\n    id: id,\n    priority: priority\n  }));\n  Object(_src_socket__WEBPACK_IMPORTED_MODULE_3__[\"notify\"])('refresh-process-' + id, Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(id));\n};\nvar tick = function tick() {\n  Object(_src_store__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])(Object(_actions_Process_actions__WEBPACK_IMPORTED_MODULE_2__[\"tick\"])());\n  Object(_src_models_processes_model__WEBPACK_IMPORTED_MODULE_0__[\"getChangedProcesses\"])().forEach(function (process) {\n    Object(_src_socket__WEBPACK_IMPORTED_MODULE_3__[\"notify\"])('refresh-process-' + process.id, process);\n  }); // notify('refresh-all');\n};\n\n//# sourceURL=webpack:///./controllers/processes.controller.js?");

/***/ }),

/***/ "./node_modules/body-parser/index.js":
/*!*******************************************!*\
  !*** ./node_modules/body-parser/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * body-parser\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar deprecate = __webpack_require__(/*! depd */ \"depd\")('body-parser')\n\n/**\n * Cache of loaded parsers.\n * @private\n */\n\nvar parsers = Object.create(null)\n\n/**\n * @typedef Parsers\n * @type {function}\n * @property {function} json\n * @property {function} raw\n * @property {function} text\n * @property {function} urlencoded\n */\n\n/**\n * Module exports.\n * @type {Parsers}\n */\n\nexports = module.exports = deprecate.function(bodyParser,\n  'bodyParser: use individual json/urlencoded middlewares')\n\n/**\n * JSON parser.\n * @public\n */\n\nObject.defineProperty(exports, 'json', {\n  configurable: true,\n  enumerable: true,\n  get: createParserGetter('json')\n})\n\n/**\n * Raw parser.\n * @public\n */\n\nObject.defineProperty(exports, 'raw', {\n  configurable: true,\n  enumerable: true,\n  get: createParserGetter('raw')\n})\n\n/**\n * Text parser.\n * @public\n */\n\nObject.defineProperty(exports, 'text', {\n  configurable: true,\n  enumerable: true,\n  get: createParserGetter('text')\n})\n\n/**\n * URL-encoded parser.\n * @public\n */\n\nObject.defineProperty(exports, 'urlencoded', {\n  configurable: true,\n  enumerable: true,\n  get: createParserGetter('urlencoded')\n})\n\n/**\n * Create a middleware to parse json and urlencoded bodies.\n *\n * @param {object} [options]\n * @return {function}\n * @deprecated\n * @public\n */\n\nfunction bodyParser (options) {\n  var opts = {}\n\n  // exclude type option\n  if (options) {\n    for (var prop in options) {\n      if (prop !== 'type') {\n        opts[prop] = options[prop]\n      }\n    }\n  }\n\n  var _urlencoded = exports.urlencoded(opts)\n  var _json = exports.json(opts)\n\n  return function bodyParser (req, res, next) {\n    _json(req, res, function (err) {\n      if (err) return next(err)\n      _urlencoded(req, res, next)\n    })\n  }\n}\n\n/**\n * Create a getter for loading a parser.\n * @private\n */\n\nfunction createParserGetter (name) {\n  return function get () {\n    return loadParser(name)\n  }\n}\n\n/**\n * Load a parser module.\n * @private\n */\n\nfunction loadParser (parserName) {\n  var parser = parsers[parserName]\n\n  if (parser !== undefined) {\n    return parser\n  }\n\n  // this uses a switch for static require analysis\n  switch (parserName) {\n    case 'json':\n      parser = __webpack_require__(/*! ./lib/types/json */ \"./node_modules/body-parser/lib/types/json.js\")\n      break\n    case 'raw':\n      parser = __webpack_require__(/*! ./lib/types/raw */ \"./node_modules/body-parser/lib/types/raw.js\")\n      break\n    case 'text':\n      parser = __webpack_require__(/*! ./lib/types/text */ \"./node_modules/body-parser/lib/types/text.js\")\n      break\n    case 'urlencoded':\n      parser = __webpack_require__(/*! ./lib/types/urlencoded */ \"./node_modules/body-parser/lib/types/urlencoded.js\")\n      break\n  }\n\n  // store to prevent invoking require()\n  return (parsers[parserName] = parser)\n}\n\n\n//# sourceURL=webpack:///./node_modules/body-parser/index.js?");

/***/ }),

/***/ "./node_modules/body-parser/lib/read.js":
/*!**********************************************!*\
  !*** ./node_modules/body-parser/lib/read.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * body-parser\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nvar getBody = __webpack_require__(/*! raw-body */ \"./node_modules/raw-body/index.js\")\nvar iconv = __webpack_require__(/*! iconv-lite */ \"iconv-lite\")\nvar onFinished = __webpack_require__(/*! on-finished */ \"on-finished\")\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\")\n\n/**\n * Module exports.\n */\n\nmodule.exports = read\n\n/**\n * Read a request into a buffer and parse.\n *\n * @param {object} req\n * @param {object} res\n * @param {function} next\n * @param {function} parse\n * @param {function} debug\n * @param {object} options\n * @private\n */\n\nfunction read (req, res, next, parse, debug, options) {\n  var length\n  var opts = options\n  var stream\n\n  // flag as parsed\n  req._body = true\n\n  // read options\n  var encoding = opts.encoding !== null\n    ? opts.encoding\n    : null\n  var verify = opts.verify\n\n  try {\n    // get the content stream\n    stream = contentstream(req, debug, opts.inflate)\n    length = stream.length\n    stream.length = undefined\n  } catch (err) {\n    return next(err)\n  }\n\n  // set raw-body options\n  opts.length = length\n  opts.encoding = verify\n    ? null\n    : encoding\n\n  // assert charset is supported\n  if (opts.encoding === null && encoding !== null && !iconv.encodingExists(encoding)) {\n    return next(createError(415, 'unsupported charset \"' + encoding.toUpperCase() + '\"', {\n      charset: encoding.toLowerCase(),\n      type: 'charset.unsupported'\n    }))\n  }\n\n  // read body\n  debug('read body')\n  getBody(stream, opts, function (error, body) {\n    if (error) {\n      var _error\n\n      if (error.type === 'encoding.unsupported') {\n        // echo back charset\n        _error = createError(415, 'unsupported charset \"' + encoding.toUpperCase() + '\"', {\n          charset: encoding.toLowerCase(),\n          type: 'charset.unsupported'\n        })\n      } else {\n        // set status code on error\n        _error = createError(400, error)\n      }\n\n      // read off entire request\n      stream.resume()\n      onFinished(req, function onfinished () {\n        next(createError(400, _error))\n      })\n      return\n    }\n\n    // verify\n    if (verify) {\n      try {\n        debug('verify body')\n        verify(req, res, body, encoding)\n      } catch (err) {\n        next(createError(403, err, {\n          body: body,\n          type: err.type || 'entity.verify.failed'\n        }))\n        return\n      }\n    }\n\n    // parse\n    var str = body\n    try {\n      debug('parse body')\n      str = typeof body !== 'string' && encoding !== null\n        ? iconv.decode(body, encoding)\n        : body\n      req.body = parse(str)\n    } catch (err) {\n      next(createError(400, err, {\n        body: str,\n        type: err.type || 'entity.parse.failed'\n      }))\n      return\n    }\n\n    next()\n  })\n}\n\n/**\n * Get the content stream of the request.\n *\n * @param {object} req\n * @param {function} debug\n * @param {boolean} [inflate=true]\n * @return {object}\n * @api private\n */\n\nfunction contentstream (req, debug, inflate) {\n  var encoding = (req.headers['content-encoding'] || 'identity').toLowerCase()\n  var length = req.headers['content-length']\n  var stream\n\n  debug('content-encoding \"%s\"', encoding)\n\n  if (inflate === false && encoding !== 'identity') {\n    throw createError(415, 'content encoding unsupported', {\n      encoding: encoding,\n      type: 'encoding.unsupported'\n    })\n  }\n\n  switch (encoding) {\n    case 'deflate':\n      stream = zlib.createInflate()\n      debug('inflate body')\n      req.pipe(stream)\n      break\n    case 'gzip':\n      stream = zlib.createGunzip()\n      debug('gunzip body')\n      req.pipe(stream)\n      break\n    case 'identity':\n      stream = req\n      stream.length = length\n      break\n    default:\n      throw createError(415, 'unsupported content encoding \"' + encoding + '\"', {\n        encoding: encoding,\n        type: 'encoding.unsupported'\n      })\n  }\n\n  return stream\n}\n\n\n//# sourceURL=webpack:///./node_modules/body-parser/lib/read.js?");

/***/ }),

/***/ "./node_modules/body-parser/lib/types/json.js":
/*!****************************************************!*\
  !*** ./node_modules/body-parser/lib/types/json.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * body-parser\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar bytes = __webpack_require__(/*! bytes */ \"./node_modules/bytes/index.js\")\nvar contentType = __webpack_require__(/*! content-type */ \"content-type\")\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nvar debug = __webpack_require__(/*! debug */ \"debug\")('body-parser:json')\nvar read = __webpack_require__(/*! ../read */ \"./node_modules/body-parser/lib/read.js\")\nvar typeis = __webpack_require__(/*! type-is */ \"type-is\")\n\n/**\n * Module exports.\n */\n\nmodule.exports = json\n\n/**\n * RegExp to match the first non-space in a string.\n *\n * Allowed whitespace is defined in RFC 7159:\n *\n *    ws = *(\n *            %x20 /              ; Space\n *            %x09 /              ; Horizontal tab\n *            %x0A /              ; Line feed or New line\n *            %x0D )              ; Carriage return\n */\n\nvar FIRST_CHAR_REGEXP = /^[\\x20\\x09\\x0a\\x0d]*(.)/ // eslint-disable-line no-control-regex\n\n/**\n * Create a middleware to parse JSON bodies.\n *\n * @param {object} [options]\n * @return {function}\n * @public\n */\n\nfunction json (options) {\n  var opts = options || {}\n\n  var limit = typeof opts.limit !== 'number'\n    ? bytes.parse(opts.limit || '100kb')\n    : opts.limit\n  var inflate = opts.inflate !== false\n  var reviver = opts.reviver\n  var strict = opts.strict !== false\n  var type = opts.type || 'application/json'\n  var verify = opts.verify || false\n\n  if (verify !== false && typeof verify !== 'function') {\n    throw new TypeError('option verify must be function')\n  }\n\n  // create the appropriate type checking function\n  var shouldParse = typeof type !== 'function'\n    ? typeChecker(type)\n    : type\n\n  function parse (body) {\n    if (body.length === 0) {\n      // special-case empty json body, as it's a common client-side mistake\n      // TODO: maybe make this configurable or part of \"strict\" option\n      return {}\n    }\n\n    if (strict) {\n      var first = firstchar(body)\n\n      if (first !== '{' && first !== '[') {\n        debug('strict violation')\n        throw createStrictSyntaxError(body, first)\n      }\n    }\n\n    try {\n      debug('parse json')\n      return JSON.parse(body, reviver)\n    } catch (e) {\n      throw normalizeJsonSyntaxError(e, {\n        message: e.message,\n        stack: e.stack\n      })\n    }\n  }\n\n  return function jsonParser (req, res, next) {\n    if (req._body) {\n      debug('body already parsed')\n      next()\n      return\n    }\n\n    req.body = req.body || {}\n\n    // skip requests without bodies\n    if (!typeis.hasBody(req)) {\n      debug('skip empty body')\n      next()\n      return\n    }\n\n    debug('content-type %j', req.headers['content-type'])\n\n    // determine if request should be parsed\n    if (!shouldParse(req)) {\n      debug('skip parsing')\n      next()\n      return\n    }\n\n    // assert charset per RFC 7159 sec 8.1\n    var charset = getCharset(req) || 'utf-8'\n    if (charset.substr(0, 4) !== 'utf-') {\n      debug('invalid charset')\n      next(createError(415, 'unsupported charset \"' + charset.toUpperCase() + '\"', {\n        charset: charset,\n        type: 'charset.unsupported'\n      }))\n      return\n    }\n\n    // read\n    read(req, res, next, parse, debug, {\n      encoding: charset,\n      inflate: inflate,\n      limit: limit,\n      verify: verify\n    })\n  }\n}\n\n/**\n * Create strict violation syntax error matching native error.\n *\n * @param {string} str\n * @param {string} char\n * @return {Error}\n * @private\n */\n\nfunction createStrictSyntaxError (str, char) {\n  var index = str.indexOf(char)\n  var partial = str.substring(0, index) + '#'\n\n  try {\n    JSON.parse(partial); /* istanbul ignore next */ throw new SyntaxError('strict violation')\n  } catch (e) {\n    return normalizeJsonSyntaxError(e, {\n      message: e.message.replace('#', char),\n      stack: e.stack\n    })\n  }\n}\n\n/**\n * Get the first non-whitespace character in a string.\n *\n * @param {string} str\n * @return {function}\n * @private\n */\n\nfunction firstchar (str) {\n  return FIRST_CHAR_REGEXP.exec(str)[1]\n}\n\n/**\n * Get the charset of a request.\n *\n * @param {object} req\n * @api private\n */\n\nfunction getCharset (req) {\n  try {\n    return (contentType.parse(req).parameters.charset || '').toLowerCase()\n  } catch (e) {\n    return undefined\n  }\n}\n\n/**\n * Normalize a SyntaxError for JSON.parse.\n *\n * @param {SyntaxError} error\n * @param {object} obj\n * @return {SyntaxError}\n */\n\nfunction normalizeJsonSyntaxError (error, obj) {\n  var keys = Object.getOwnPropertyNames(error)\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i]\n    if (key !== 'stack' && key !== 'message') {\n      delete error[key]\n    }\n  }\n\n  // replace stack before message for Node.js 0.10 and below\n  error.stack = obj.stack.replace(error.message, obj.message)\n  error.message = obj.message\n\n  return error\n}\n\n/**\n * Get the simple type checker.\n *\n * @param {string} type\n * @return {function}\n */\n\nfunction typeChecker (type) {\n  return function checkType (req) {\n    return Boolean(typeis(req, type))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/body-parser/lib/types/json.js?");

/***/ }),

/***/ "./node_modules/body-parser/lib/types/raw.js":
/*!***************************************************!*\
  !*** ./node_modules/body-parser/lib/types/raw.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * body-parser\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n */\n\nvar bytes = __webpack_require__(/*! bytes */ \"./node_modules/bytes/index.js\")\nvar debug = __webpack_require__(/*! debug */ \"debug\")('body-parser:raw')\nvar read = __webpack_require__(/*! ../read */ \"./node_modules/body-parser/lib/read.js\")\nvar typeis = __webpack_require__(/*! type-is */ \"type-is\")\n\n/**\n * Module exports.\n */\n\nmodule.exports = raw\n\n/**\n * Create a middleware to parse raw bodies.\n *\n * @param {object} [options]\n * @return {function}\n * @api public\n */\n\nfunction raw (options) {\n  var opts = options || {}\n\n  var inflate = opts.inflate !== false\n  var limit = typeof opts.limit !== 'number'\n    ? bytes.parse(opts.limit || '100kb')\n    : opts.limit\n  var type = opts.type || 'application/octet-stream'\n  var verify = opts.verify || false\n\n  if (verify !== false && typeof verify !== 'function') {\n    throw new TypeError('option verify must be function')\n  }\n\n  // create the appropriate type checking function\n  var shouldParse = typeof type !== 'function'\n    ? typeChecker(type)\n    : type\n\n  function parse (buf) {\n    return buf\n  }\n\n  return function rawParser (req, res, next) {\n    if (req._body) {\n      debug('body already parsed')\n      next()\n      return\n    }\n\n    req.body = req.body || {}\n\n    // skip requests without bodies\n    if (!typeis.hasBody(req)) {\n      debug('skip empty body')\n      next()\n      return\n    }\n\n    debug('content-type %j', req.headers['content-type'])\n\n    // determine if request should be parsed\n    if (!shouldParse(req)) {\n      debug('skip parsing')\n      next()\n      return\n    }\n\n    // read\n    read(req, res, next, parse, debug, {\n      encoding: null,\n      inflate: inflate,\n      limit: limit,\n      verify: verify\n    })\n  }\n}\n\n/**\n * Get the simple type checker.\n *\n * @param {string} type\n * @return {function}\n */\n\nfunction typeChecker (type) {\n  return function checkType (req) {\n    return Boolean(typeis(req, type))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/body-parser/lib/types/raw.js?");

/***/ }),

/***/ "./node_modules/body-parser/lib/types/text.js":
/*!****************************************************!*\
  !*** ./node_modules/body-parser/lib/types/text.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * body-parser\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n */\n\nvar bytes = __webpack_require__(/*! bytes */ \"./node_modules/bytes/index.js\")\nvar contentType = __webpack_require__(/*! content-type */ \"content-type\")\nvar debug = __webpack_require__(/*! debug */ \"debug\")('body-parser:text')\nvar read = __webpack_require__(/*! ../read */ \"./node_modules/body-parser/lib/read.js\")\nvar typeis = __webpack_require__(/*! type-is */ \"type-is\")\n\n/**\n * Module exports.\n */\n\nmodule.exports = text\n\n/**\n * Create a middleware to parse text bodies.\n *\n * @param {object} [options]\n * @return {function}\n * @api public\n */\n\nfunction text (options) {\n  var opts = options || {}\n\n  var defaultCharset = opts.defaultCharset || 'utf-8'\n  var inflate = opts.inflate !== false\n  var limit = typeof opts.limit !== 'number'\n    ? bytes.parse(opts.limit || '100kb')\n    : opts.limit\n  var type = opts.type || 'text/plain'\n  var verify = opts.verify || false\n\n  if (verify !== false && typeof verify !== 'function') {\n    throw new TypeError('option verify must be function')\n  }\n\n  // create the appropriate type checking function\n  var shouldParse = typeof type !== 'function'\n    ? typeChecker(type)\n    : type\n\n  function parse (buf) {\n    return buf\n  }\n\n  return function textParser (req, res, next) {\n    if (req._body) {\n      debug('body already parsed')\n      next()\n      return\n    }\n\n    req.body = req.body || {}\n\n    // skip requests without bodies\n    if (!typeis.hasBody(req)) {\n      debug('skip empty body')\n      next()\n      return\n    }\n\n    debug('content-type %j', req.headers['content-type'])\n\n    // determine if request should be parsed\n    if (!shouldParse(req)) {\n      debug('skip parsing')\n      next()\n      return\n    }\n\n    // get charset\n    var charset = getCharset(req) || defaultCharset\n\n    // read\n    read(req, res, next, parse, debug, {\n      encoding: charset,\n      inflate: inflate,\n      limit: limit,\n      verify: verify\n    })\n  }\n}\n\n/**\n * Get the charset of a request.\n *\n * @param {object} req\n * @api private\n */\n\nfunction getCharset (req) {\n  try {\n    return (contentType.parse(req).parameters.charset || '').toLowerCase()\n  } catch (e) {\n    return undefined\n  }\n}\n\n/**\n * Get the simple type checker.\n *\n * @param {string} type\n * @return {function}\n */\n\nfunction typeChecker (type) {\n  return function checkType (req) {\n    return Boolean(typeis(req, type))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/body-parser/lib/types/text.js?");

/***/ }),

/***/ "./node_modules/body-parser/lib/types/urlencoded.js":
/*!**********************************************************!*\
  !*** ./node_modules/body-parser/lib/types/urlencoded.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * body-parser\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar bytes = __webpack_require__(/*! bytes */ \"./node_modules/bytes/index.js\")\nvar contentType = __webpack_require__(/*! content-type */ \"content-type\")\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nvar debug = __webpack_require__(/*! debug */ \"debug\")('body-parser:urlencoded')\nvar deprecate = __webpack_require__(/*! depd */ \"depd\")('body-parser')\nvar read = __webpack_require__(/*! ../read */ \"./node_modules/body-parser/lib/read.js\")\nvar typeis = __webpack_require__(/*! type-is */ \"type-is\")\n\n/**\n * Module exports.\n */\n\nmodule.exports = urlencoded\n\n/**\n * Cache of parser modules.\n */\n\nvar parsers = Object.create(null)\n\n/**\n * Create a middleware to parse urlencoded bodies.\n *\n * @param {object} [options]\n * @return {function}\n * @public\n */\n\nfunction urlencoded (options) {\n  var opts = options || {}\n\n  // notice because option default will flip in next major\n  if (opts.extended === undefined) {\n    deprecate('undefined extended: provide extended option')\n  }\n\n  var extended = opts.extended !== false\n  var inflate = opts.inflate !== false\n  var limit = typeof opts.limit !== 'number'\n    ? bytes.parse(opts.limit || '100kb')\n    : opts.limit\n  var type = opts.type || 'application/x-www-form-urlencoded'\n  var verify = opts.verify || false\n\n  if (verify !== false && typeof verify !== 'function') {\n    throw new TypeError('option verify must be function')\n  }\n\n  // create the appropriate query parser\n  var queryparse = extended\n    ? extendedparser(opts)\n    : simpleparser(opts)\n\n  // create the appropriate type checking function\n  var shouldParse = typeof type !== 'function'\n    ? typeChecker(type)\n    : type\n\n  function parse (body) {\n    return body.length\n      ? queryparse(body)\n      : {}\n  }\n\n  return function urlencodedParser (req, res, next) {\n    if (req._body) {\n      debug('body already parsed')\n      next()\n      return\n    }\n\n    req.body = req.body || {}\n\n    // skip requests without bodies\n    if (!typeis.hasBody(req)) {\n      debug('skip empty body')\n      next()\n      return\n    }\n\n    debug('content-type %j', req.headers['content-type'])\n\n    // determine if request should be parsed\n    if (!shouldParse(req)) {\n      debug('skip parsing')\n      next()\n      return\n    }\n\n    // assert charset\n    var charset = getCharset(req) || 'utf-8'\n    if (charset !== 'utf-8') {\n      debug('invalid charset')\n      next(createError(415, 'unsupported charset \"' + charset.toUpperCase() + '\"', {\n        charset: charset,\n        type: 'charset.unsupported'\n      }))\n      return\n    }\n\n    // read\n    read(req, res, next, parse, debug, {\n      debug: debug,\n      encoding: charset,\n      inflate: inflate,\n      limit: limit,\n      verify: verify\n    })\n  }\n}\n\n/**\n * Get the extended query parser.\n *\n * @param {object} options\n */\n\nfunction extendedparser (options) {\n  var parameterLimit = options.parameterLimit !== undefined\n    ? options.parameterLimit\n    : 1000\n  var parse = parser('qs')\n\n  if (isNaN(parameterLimit) || parameterLimit < 1) {\n    throw new TypeError('option parameterLimit must be a positive number')\n  }\n\n  if (isFinite(parameterLimit)) {\n    parameterLimit = parameterLimit | 0\n  }\n\n  return function queryparse (body) {\n    var paramCount = parameterCount(body, parameterLimit)\n\n    if (paramCount === undefined) {\n      debug('too many parameters')\n      throw createError(413, 'too many parameters', {\n        type: 'parameters.too.many'\n      })\n    }\n\n    var arrayLimit = Math.max(100, paramCount)\n\n    debug('parse extended urlencoding')\n    return parse(body, {\n      allowPrototypes: true,\n      arrayLimit: arrayLimit,\n      depth: Infinity,\n      parameterLimit: parameterLimit\n    })\n  }\n}\n\n/**\n * Get the charset of a request.\n *\n * @param {object} req\n * @api private\n */\n\nfunction getCharset (req) {\n  try {\n    return (contentType.parse(req).parameters.charset || '').toLowerCase()\n  } catch (e) {\n    return undefined\n  }\n}\n\n/**\n * Count the number of parameters, stopping once limit reached\n *\n * @param {string} body\n * @param {number} limit\n * @api private\n */\n\nfunction parameterCount (body, limit) {\n  var count = 0\n  var index = 0\n\n  while ((index = body.indexOf('&', index)) !== -1) {\n    count++\n    index++\n\n    if (count === limit) {\n      return undefined\n    }\n  }\n\n  return count\n}\n\n/**\n * Get parser for module name dynamically.\n *\n * @param {string} name\n * @return {function}\n * @api private\n */\n\nfunction parser (name) {\n  var mod = parsers[name]\n\n  if (mod !== undefined) {\n    return mod.parse\n  }\n\n  // this uses a switch for static require analysis\n  switch (name) {\n    case 'qs':\n      mod = __webpack_require__(/*! qs */ \"qs\")\n      break\n    case 'querystring':\n      mod = __webpack_require__(/*! querystring */ \"querystring\")\n      break\n  }\n\n  // store to prevent invoking require()\n  parsers[name] = mod\n\n  return mod.parse\n}\n\n/**\n * Get the simple query parser.\n *\n * @param {object} options\n */\n\nfunction simpleparser (options) {\n  var parameterLimit = options.parameterLimit !== undefined\n    ? options.parameterLimit\n    : 1000\n  var parse = parser('querystring')\n\n  if (isNaN(parameterLimit) || parameterLimit < 1) {\n    throw new TypeError('option parameterLimit must be a positive number')\n  }\n\n  if (isFinite(parameterLimit)) {\n    parameterLimit = parameterLimit | 0\n  }\n\n  return function queryparse (body) {\n    var paramCount = parameterCount(body, parameterLimit)\n\n    if (paramCount === undefined) {\n      debug('too many parameters')\n      throw createError(413, 'too many parameters', {\n        type: 'parameters.too.many'\n      })\n    }\n\n    debug('parse urlencoding')\n    return parse(body, undefined, undefined, { maxKeys: parameterLimit })\n  }\n}\n\n/**\n * Get the simple type checker.\n *\n * @param {string} type\n * @return {function}\n */\n\nfunction typeChecker (type) {\n  return function checkType (req) {\n    return Boolean(typeis(req, type))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/body-parser/lib/types/urlencoded.js?");

/***/ }),

/***/ "./node_modules/bytes/index.js":
/*!*************************************!*\
  !*** ./node_modules/bytes/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * bytes\n * Copyright(c) 2012-2014 TJ Holowaychuk\n * Copyright(c) 2015 Jed Watson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = bytes;\nmodule.exports.format = format;\nmodule.exports.parse = parse;\n\n/**\n * Module variables.\n * @private\n */\n\nvar formatThousandsRegExp = /\\B(?=(\\d{3})+(?!\\d))/g;\n\nvar formatDecimalsRegExp = /(?:\\.0*|(\\.[^0]+)0+)$/;\n\nvar map = {\n  b:  1,\n  kb: 1 << 10,\n  mb: 1 << 20,\n  gb: 1 << 30,\n  tb: Math.pow(1024, 4),\n  pb: Math.pow(1024, 5),\n};\n\nvar parseRegExp = /^((-|\\+)?(\\d+(?:\\.\\d+)?)) *(kb|mb|gb|tb|pb)$/i;\n\n/**\n * Convert the given value in bytes into a string or parse to string to an integer in bytes.\n *\n * @param {string|number} value\n * @param {{\n *  case: [string],\n *  decimalPlaces: [number]\n *  fixedDecimals: [boolean]\n *  thousandsSeparator: [string]\n *  unitSeparator: [string]\n *  }} [options] bytes options.\n *\n * @returns {string|number|null}\n */\n\nfunction bytes(value, options) {\n  if (typeof value === 'string') {\n    return parse(value);\n  }\n\n  if (typeof value === 'number') {\n    return format(value, options);\n  }\n\n  return null;\n}\n\n/**\n * Format the given value in bytes into a string.\n *\n * If the value is negative, it is kept as such. If it is a float,\n * it is rounded.\n *\n * @param {number} value\n * @param {object} [options]\n * @param {number} [options.decimalPlaces=2]\n * @param {number} [options.fixedDecimals=false]\n * @param {string} [options.thousandsSeparator=]\n * @param {string} [options.unit=]\n * @param {string} [options.unitSeparator=]\n *\n * @returns {string|null}\n * @public\n */\n\nfunction format(value, options) {\n  if (!Number.isFinite(value)) {\n    return null;\n  }\n\n  var mag = Math.abs(value);\n  var thousandsSeparator = (options && options.thousandsSeparator) || '';\n  var unitSeparator = (options && options.unitSeparator) || '';\n  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;\n  var fixedDecimals = Boolean(options && options.fixedDecimals);\n  var unit = (options && options.unit) || '';\n\n  if (!unit || !map[unit.toLowerCase()]) {\n    if (mag >= map.pb) {\n      unit = 'PB';\n    } else if (mag >= map.tb) {\n      unit = 'TB';\n    } else if (mag >= map.gb) {\n      unit = 'GB';\n    } else if (mag >= map.mb) {\n      unit = 'MB';\n    } else if (mag >= map.kb) {\n      unit = 'KB';\n    } else {\n      unit = 'B';\n    }\n  }\n\n  var val = value / map[unit.toLowerCase()];\n  var str = val.toFixed(decimalPlaces);\n\n  if (!fixedDecimals) {\n    str = str.replace(formatDecimalsRegExp, '$1');\n  }\n\n  if (thousandsSeparator) {\n    str = str.replace(formatThousandsRegExp, thousandsSeparator);\n  }\n\n  return str + unitSeparator + unit;\n}\n\n/**\n * Parse the string value into an integer in bytes.\n *\n * If no unit is given, it is assumed the value is in bytes.\n *\n * @param {number|string} val\n *\n * @returns {number|null}\n * @public\n */\n\nfunction parse(val) {\n  if (typeof val === 'number' && !isNaN(val)) {\n    return val;\n  }\n\n  if (typeof val !== 'string') {\n    return null;\n  }\n\n  // Test if the string passed is valid\n  var results = parseRegExp.exec(val);\n  var floatValue;\n  var unit = 'b';\n\n  if (!results) {\n    // Nothing could be extracted from the given string\n    floatValue = parseInt(val, 10);\n    unit = 'b'\n  } else {\n    // Retrieve the value and the unit\n    floatValue = parseFloat(results[1]);\n    unit = results[4].toLowerCase();\n  }\n\n  return Math.floor(map[unit] * floatValue);\n}\n\n\n//# sourceURL=webpack:///./node_modules/bytes/index.js?");

/***/ }),

/***/ "./node_modules/cors/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/cors/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\n\n  'use strict';\n\n  var assign = __webpack_require__(/*! object-assign */ \"object-assign\");\n  var vary = __webpack_require__(/*! vary */ \"vary\");\n\n  var defaults = {\n    origin: '*',\n    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\n    preflightContinue: false,\n    optionsSuccessStatus: 204\n  };\n\n  function isString(s) {\n    return typeof s === 'string' || s instanceof String;\n  }\n\n  function isOriginAllowed(origin, allowedOrigin) {\n    if (Array.isArray(allowedOrigin)) {\n      for (var i = 0; i < allowedOrigin.length; ++i) {\n        if (isOriginAllowed(origin, allowedOrigin[i])) {\n          return true;\n        }\n      }\n      return false;\n    } else if (isString(allowedOrigin)) {\n      return origin === allowedOrigin;\n    } else if (allowedOrigin instanceof RegExp) {\n      return allowedOrigin.test(origin);\n    } else {\n      return !!allowedOrigin;\n    }\n  }\n\n  function configureOrigin(options, req) {\n    var requestOrigin = req.headers.origin,\n      headers = [],\n      isAllowed;\n\n    if (!options.origin || options.origin === '*') {\n      // allow any origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: '*'\n      }]);\n    } else if (isString(options.origin)) {\n      // fixed origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: options.origin\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    } else {\n      isAllowed = isOriginAllowed(requestOrigin, options.origin);\n      // reflect origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: isAllowed ? requestOrigin : false\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureMethods(options) {\n    var methods = options.methods;\n    if (methods.join) {\n      methods = options.methods.join(','); // .methods is an array, so turn it into a string\n    }\n    return {\n      key: 'Access-Control-Allow-Methods',\n      value: methods\n    };\n  }\n\n  function configureCredentials(options) {\n    if (options.credentials === true) {\n      return {\n        key: 'Access-Control-Allow-Credentials',\n        value: 'true'\n      };\n    }\n    return null;\n  }\n\n  function configureAllowedHeaders(options, req) {\n    var allowedHeaders = options.allowedHeaders || options.headers;\n    var headers = [];\n\n    if (!allowedHeaders) {\n      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers\n      headers.push([{\n        key: 'Vary',\n        value: 'Access-Control-Request-Headers'\n      }]);\n    } else if (allowedHeaders.join) {\n      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string\n    }\n    if (allowedHeaders && allowedHeaders.length) {\n      headers.push([{\n        key: 'Access-Control-Allow-Headers',\n        value: allowedHeaders\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureExposedHeaders(options) {\n    var headers = options.exposedHeaders;\n    if (!headers) {\n      return null;\n    } else if (headers.join) {\n      headers = headers.join(','); // .headers is an array, so turn it into a string\n    }\n    if (headers && headers.length) {\n      return {\n        key: 'Access-Control-Expose-Headers',\n        value: headers\n      };\n    }\n    return null;\n  }\n\n  function configureMaxAge(options) {\n    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString()\n    if (maxAge && maxAge.length) {\n      return {\n        key: 'Access-Control-Max-Age',\n        value: maxAge\n      };\n    }\n    return null;\n  }\n\n  function applyHeaders(headers, res) {\n    for (var i = 0, n = headers.length; i < n; i++) {\n      var header = headers[i];\n      if (header) {\n        if (Array.isArray(header)) {\n          applyHeaders(header, res);\n        } else if (header.key === 'Vary' && header.value) {\n          vary(res, header.value);\n        } else if (header.value) {\n          res.setHeader(header.key, header.value);\n        }\n      }\n    }\n  }\n\n  function cors(options, req, res, next) {\n    var headers = [],\n      method = req.method && req.method.toUpperCase && req.method.toUpperCase();\n\n    if (method === 'OPTIONS') {\n      // preflight\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureMethods(options, req));\n      headers.push(configureAllowedHeaders(options, req));\n      headers.push(configureMaxAge(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n\n      if (options.preflightContinue) {\n        next();\n      } else {\n        // Safari (and potentially other browsers) need content-length 0,\n        //   for 204 or they just hang waiting for a body\n        res.statusCode = options.optionsSuccessStatus;\n        res.setHeader('Content-Length', '0');\n        res.end();\n      }\n    } else {\n      // actual response\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n      next();\n    }\n  }\n\n  function middlewareWrapper(o) {\n    // if options are static (either via defaults or custom options passed in), wrap in a function\n    var optionsCallback = null;\n    if (typeof o === 'function') {\n      optionsCallback = o;\n    } else {\n      optionsCallback = function (req, cb) {\n        cb(null, o);\n      };\n    }\n\n    return function corsMiddleware(req, res, next) {\n      optionsCallback(req, function (err, options) {\n        if (err) {\n          next(err);\n        } else {\n          var corsOptions = assign({}, defaults, options);\n          var originCallback = null;\n          if (corsOptions.origin && typeof corsOptions.origin === 'function') {\n            originCallback = corsOptions.origin;\n          } else if (corsOptions.origin) {\n            originCallback = function (origin, cb) {\n              cb(null, corsOptions.origin);\n            };\n          }\n\n          if (originCallback) {\n            originCallback(req.headers.origin, function (err2, origin) {\n              if (err2 || !origin) {\n                next(err2);\n              } else {\n                corsOptions.origin = origin;\n                cors(corsOptions, req, res, next);\n              }\n            });\n          } else {\n            next();\n          }\n        }\n      });\n    };\n  }\n\n  // can pass either an options hash, an options delegate, or nothing\n  module.exports = middlewareWrapper;\n\n}());\n\n\n//# sourceURL=webpack:///./node_modules/cors/lib/index.js?");

/***/ }),

/***/ "./node_modules/raw-body/index.js":
/*!****************************************!*\
  !*** ./node_modules/raw-body/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * raw-body\n * Copyright(c) 2013-2014 Jonathan Ong\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar bytes = __webpack_require__(/*! bytes */ \"./node_modules/bytes/index.js\")\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nvar iconv = __webpack_require__(/*! iconv-lite */ \"iconv-lite\")\nvar unpipe = __webpack_require__(/*! unpipe */ \"unpipe\")\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = getRawBody\n\n/**\n * Module variables.\n * @private\n */\n\nvar ICONV_ENCODING_MESSAGE_REGEXP = /^Encoding not recognized: /\n\n/**\n * Get the decoder for a given encoding.\n *\n * @param {string} encoding\n * @private\n */\n\nfunction getDecoder (encoding) {\n  if (!encoding) return null\n\n  try {\n    return iconv.getDecoder(encoding)\n  } catch (e) {\n    // error getting decoder\n    if (!ICONV_ENCODING_MESSAGE_REGEXP.test(e.message)) throw e\n\n    // the encoding was not found\n    throw createError(415, 'specified encoding unsupported', {\n      encoding: encoding,\n      type: 'encoding.unsupported'\n    })\n  }\n}\n\n/**\n * Get the raw body of a stream (typically HTTP).\n *\n * @param {object} stream\n * @param {object|string|function} [options]\n * @param {function} [callback]\n * @public\n */\n\nfunction getRawBody (stream, options, callback) {\n  var done = callback\n  var opts = options || {}\n\n  if (options === true || typeof options === 'string') {\n    // short cut for encoding\n    opts = {\n      encoding: options\n    }\n  }\n\n  if (typeof options === 'function') {\n    done = options\n    opts = {}\n  }\n\n  // validate callback is a function, if provided\n  if (done !== undefined && typeof done !== 'function') {\n    throw new TypeError('argument callback must be a function')\n  }\n\n  // require the callback without promises\n  if (!done && !global.Promise) {\n    throw new TypeError('argument callback is required')\n  }\n\n  // get encoding\n  var encoding = opts.encoding !== true\n    ? opts.encoding\n    : 'utf-8'\n\n  // convert the limit to an integer\n  var limit = bytes.parse(opts.limit)\n\n  // convert the expected length to an integer\n  var length = opts.length != null && !isNaN(opts.length)\n    ? parseInt(opts.length, 10)\n    : null\n\n  if (done) {\n    // classic callback style\n    return readStream(stream, encoding, length, limit, done)\n  }\n\n  return new Promise(function executor (resolve, reject) {\n    readStream(stream, encoding, length, limit, function onRead (err, buf) {\n      if (err) return reject(err)\n      resolve(buf)\n    })\n  })\n}\n\n/**\n * Halt a stream.\n *\n * @param {Object} stream\n * @private\n */\n\nfunction halt (stream) {\n  // unpipe everything from the stream\n  unpipe(stream)\n\n  // pause stream\n  if (typeof stream.pause === 'function') {\n    stream.pause()\n  }\n}\n\n/**\n * Read the data from the stream.\n *\n * @param {object} stream\n * @param {string} encoding\n * @param {number} length\n * @param {number} limit\n * @param {function} callback\n * @public\n */\n\nfunction readStream (stream, encoding, length, limit, callback) {\n  var complete = false\n  var sync = true\n\n  // check the length and limit options.\n  // note: we intentionally leave the stream paused,\n  // so users should handle the stream themselves.\n  if (limit !== null && length !== null && length > limit) {\n    return done(createError(413, 'request entity too large', {\n      expected: length,\n      length: length,\n      limit: limit,\n      type: 'entity.too.large'\n    }))\n  }\n\n  // streams1: assert request encoding is buffer.\n  // streams2+: assert the stream encoding is buffer.\n  //   stream._decoder: streams1\n  //   state.encoding: streams2\n  //   state.decoder: streams2, specifically < 0.10.6\n  var state = stream._readableState\n  if (stream._decoder || (state && (state.encoding || state.decoder))) {\n    // developer error\n    return done(createError(500, 'stream encoding should not be set', {\n      type: 'stream.encoding.set'\n    }))\n  }\n\n  var received = 0\n  var decoder\n\n  try {\n    decoder = getDecoder(encoding)\n  } catch (err) {\n    return done(err)\n  }\n\n  var buffer = decoder\n    ? ''\n    : []\n\n  // attach listeners\n  stream.on('aborted', onAborted)\n  stream.on('close', cleanup)\n  stream.on('data', onData)\n  stream.on('end', onEnd)\n  stream.on('error', onEnd)\n\n  // mark sync section complete\n  sync = false\n\n  function done () {\n    var args = new Array(arguments.length)\n\n    // copy arguments\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i]\n    }\n\n    // mark complete\n    complete = true\n\n    if (sync) {\n      process.nextTick(invokeCallback)\n    } else {\n      invokeCallback()\n    }\n\n    function invokeCallback () {\n      cleanup()\n\n      if (args[0]) {\n        // halt the stream on error\n        halt(stream)\n      }\n\n      callback.apply(null, args)\n    }\n  }\n\n  function onAborted () {\n    if (complete) return\n\n    done(createError(400, 'request aborted', {\n      code: 'ECONNABORTED',\n      expected: length,\n      length: length,\n      received: received,\n      type: 'request.aborted'\n    }))\n  }\n\n  function onData (chunk) {\n    if (complete) return\n\n    received += chunk.length\n\n    if (limit !== null && received > limit) {\n      done(createError(413, 'request entity too large', {\n        limit: limit,\n        received: received,\n        type: 'entity.too.large'\n      }))\n    } else if (decoder) {\n      buffer += decoder.write(chunk)\n    } else {\n      buffer.push(chunk)\n    }\n  }\n\n  function onEnd (err) {\n    if (complete) return\n    if (err) return done(err)\n\n    if (length !== null && received !== length) {\n      done(createError(400, 'request size did not match content length', {\n        expected: length,\n        length: length,\n        received: received,\n        type: 'request.size.invalid'\n      }))\n    } else {\n      var string = decoder\n        ? buffer + (decoder.end() || '')\n        : Buffer.concat(buffer)\n      done(null, string)\n    }\n  }\n\n  function cleanup () {\n    buffer = null\n\n    stream.removeListener('aborted', onAborted)\n    stream.removeListener('data', onData)\n    stream.removeListener('end', onEnd)\n    stream.removeListener('error', onEnd)\n    stream.removeListener('close', cleanup)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/raw-body/index.js?");

/***/ }),

/***/ "./reducers/Process.reducer.js":
/*!*************************************!*\
  !*** ./reducers/Process.reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n/* harmony import */ var _Workers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workers.reducer */ \"./reducers/Workers.reducer.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar initialState = {\n  id: null,\n  maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n  currentWorkers: 0,\n  name: '',\n  description: '',\n  priority: 2,\n  assigned: false,\n  status: 'Unassigned',\n  startTime: null,\n  tasks: [],\n  running: false,\n  totalTime: 0,\n  computationRemaining: 0,\n  percentageComplete: 0,\n  timeRemaining: 0,\n  icon: 'cog',\n  changed: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"START_WORKING\"]:\n      return state.assigned ? _objectSpread({}, state, {\n        running: true,\n        status: 'Running',\n        computationRemaining: state.computationRemaining || state.totalTime,\n        timeRemaining: Math.floor((state.computationRemaining || state.totalTime) / state.currentWorkers)\n      }) : state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"PAUSE_WORKING\"]:\n      return _objectSpread({}, state, {\n        running: false,\n        status: 'Paused'\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_WORKER\"]:\n      return _objectSpread({}, state, {\n        assigned: true,\n        status: state.status === 'Unassigned' ? 'Assigned' : state.status,\n        currentWorkers: state.currentWorkers < state.maxWorkers ? state.currentWorkers + 1 : state.currentWorkers\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"AUTO_ASSIGN\"]:\n      return _objectSpread({}, state, {\n        status: state.status === 'Unassigned' ? 'Assigned' : state.status,\n        assigned: true,\n        currentWorkers: action.payload.priority * 5,\n        priority: action.payload.priority\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_WORKER\"]:\n      return _objectSpread({}, state, {\n        status: state.currentWorkers === 1 ? 'Unassigned' : state.status,\n        running: state.currentWorkers === 1 ? false : state.running,\n        assigned: state.currentWorkers > 1,\n        currentWorkers: state.currentWorkers > 0 ? state.currentWorkers - 1 : state.currentWorkers\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRIORITY\"]:\n      return _objectSpread({}, state, {\n        priority: action.payload.priority\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_STATUS\"]:\n      return _objectSpread({}, state, {\n        assigned: action.payload.assigned,\n        status: action.payload.status\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"]:\n      if (!state.running) {\n        return _objectSpread({}, state, {\n          changed: false\n        });\n      }\n\n      var computationRemaining = state.computationRemaining >= state.currentWorkers ? state.computationRemaining - state.currentWorkers : 0;\n      var done = computationRemaining === 0;\n      return _objectSpread({}, state, {\n        computationRemaining: computationRemaining,\n        percentageComplete: done ? 100 : 100 - computationRemaining / state.totalTime * 100,\n        status: done ? 'Completed' : state.status,\n        running: !done,\n        currentWorkers: done ? 0 : state.currentWorkers,\n        assigned: !done,\n        priority: done ? 0 : state.priority,\n        timeRemaining: Math.floor(computationRemaining / state.currentWorkers),\n        changed: true\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/Process.reducer.js?");

/***/ }),

/***/ "./reducers/Processes.reducer.js":
/*!***************************************!*\
  !*** ./reducers/Processes.reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n/* harmony import */ var _Process_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Process.reducer */ \"./reducers/Process.reducer.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar initialState = {\n  version: 0,\n  processes: [{\n    id: '1',\n    maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n    currentWorkers: 0,\n    name: 'Order Coffee Beans',\n    description: 'Contact the roaster, place an order, email receipt',\n    priority: 0,\n    assigned: false,\n    status: 'Unassigned',\n    startTime: null,\n    totalTime: 100,\n    tasks: [],\n    running: false,\n    icon: 'coffee'\n  }, {\n    id: '2',\n    maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n    currentWorkers: 0,\n    name: 'Book Movie Tickets',\n    description: 'Contact the ticket office, select seats, place an order, email receipt',\n    priority: 0,\n    assigned: false,\n    status: 'Unassigned',\n    startTime: null,\n    totalTime: 50,\n    tasks: [],\n    running: false,\n    icon: 'ticket-alt'\n  }, {\n    id: '3',\n    maxWorkers: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_PROCESS_WORKERS\"],\n    currentWorkers: 0,\n    name: 'Book Restaurant Table',\n    description: 'Contact the reception, select time, place an order, email receipt',\n    priority: 0,\n    assigned: false,\n    status: 'Unassigned',\n    startTime: null,\n    totalTime: 200,\n    tasks: [],\n    running: false,\n    icon: 'pizza-slice'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_WORKER\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_WORKER\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRIORITY\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_STATUS\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"START_WORKING\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"PAUSE_WORKING\"]:\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"AUTO_ASSIGN\"]:\n      var id = action.payload.id; // console.log('pls');\n\n      return _objectSpread({}, state, {\n        processes: state.processes.map(function (process) {\n          return process.id === id ? Object(_Process_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process, action) : process;\n        })\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"]:\n      return _objectSpread({}, state, {\n        processes: state.processes.map(function (process) {\n          return Object(_Process_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process, action);\n        })\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/Processes.reducer.js?");

/***/ }),

/***/ "./reducers/Workers.reducer.js":
/*!*************************************!*\
  !*** ./reducers/Workers.reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\nvar initialState = {\n  total: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_TOTAL_WORKERS\"],\n  available: _constants__WEBPACK_IMPORTED_MODULE_0__[\"MAX_TOTAL_WORKERS\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/Workers.reducer.js?");

/***/ }),

/***/ "./reducers/general.reducer.js":
/*!*************************************!*\
  !*** ./reducers/general.reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  searchTerm: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_SEARCH_TERM\"]:\n      return _objectSpread({}, state, {\n        searchTerm: action.payload.term\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/general.reducer.js?");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Processes_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Processes.reducer */ \"./reducers/Processes.reducer.js\");\n/* harmony import */ var _general_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.reducer */ \"./reducers/general.reducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  processes: _Processes_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  general: _general_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./reducers/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket */ \"./src/socket.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _controllers_processes_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/processes.controller */ \"./controllers/processes.controller.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-parser */ \"./node_modules/body-parser/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar http = Object(http__WEBPACK_IMPORTED_MODULE_4__[\"createServer\"])(app);\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_6___default.a.json());\napp.options('*', cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use('/', _routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nObject(_socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(http); // Ticker\n\nsetInterval(function () {\n  Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_5__[\"tick\"])();\n}, 1000);\nhttp.listen(3003, function () {\n  console.log('listening on *:3003');\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/models/processes.model.js":
/*!***************************************!*\
  !*** ./src/models/processes.model.js ***!
  \***************************************/
/*! exports provided: getProcesses, getRunningProcesses, getChangedProcesses, getProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProcesses\", function() { return getProcesses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRunningProcesses\", function() { return getRunningProcesses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChangedProcesses\", function() { return getChangedProcesses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProcess\", function() { return getProcess; });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n\nvar getProcesses = function getProcesses() {\n  return Object(_store__WEBPACK_IMPORTED_MODULE_0__[\"state\"])().processes.processes;\n};\nvar getRunningProcesses = function getRunningProcesses() {\n  return Object(_store__WEBPACK_IMPORTED_MODULE_0__[\"state\"])().processes.processes.filter(function (p) {\n    return p.running;\n  });\n};\nvar getChangedProcesses = function getChangedProcesses() {\n  return Object(_store__WEBPACK_IMPORTED_MODULE_0__[\"state\"])().processes.processes.filter(function (p) {\n    return p.changed;\n  });\n};\nvar getProcess = function getProcess(id) {\n  return Object(_store__WEBPACK_IMPORTED_MODULE_0__[\"state\"])().processes.processes.find(function (item) {\n    return item.id === id;\n  });\n};\n\n//# sourceURL=webpack:///./src/models/processes.model.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _processes_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processes.route */ \"./src/routes/processes.route.js\");\n\n\nvar routes = __webpack_require__(/*! express */ \"express\").Router();\n\nroutes.use('/processes', _processes_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nroutes.get('/', function (req, res) {\n  res.status(200).json({\n    message: 'Connected!'\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/processes.route.js":
/*!***************************************!*\
  !*** ./src/routes/processes.route.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/processes.controller */ \"./controllers/processes.controller.js\");\n\n\nvar processes = __webpack_require__(/*! express */ \"express\").Router();\n\nprocesses.get('/', function (req, res) {\n  var processes = Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"getProcesses\"])();\n  res.send(processes);\n});\nprocesses.get('/:id', function (req, res) {\n  var process = Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(req.params.id);\n  res.send(process);\n});\nprocesses.put('/:id/add-worker', function (req, res) {\n  Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"addWorker\"])(req.params.id);\n  res.status(200);\n  var process = Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(req.params.id);\n  res.send(process);\n});\nprocesses.put('/:id/remove-worker', function (req, res) {\n  Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"removeWorker\"])(req.params.id);\n  res.status(200);\n  var process = Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(req.params.id);\n  res.send(process);\n});\nprocesses.put('/:id/run', function (req, res) {\n  Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"run\"])(req.params.id);\n  res.status(200);\n  var process = Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(req.params.id);\n  res.send(process);\n});\nprocesses.put('/:id/suspend', function (req, res) {\n  Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"suspend\"])(req.params.id);\n  res.status(200);\n  var process = Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(req.params.id);\n  res.send(process);\n});\nprocesses.put('/:id/auto-assign', function (req, res) {\n  Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"autoAssign\"])(req.params.id, req.body.priority);\n  res.status(200);\n  var process = Object(_controllers_processes_controller__WEBPACK_IMPORTED_MODULE_0__[\"getProcess\"])(req.params.id);\n  res.send(process);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (processes);\n\n//# sourceURL=webpack:///./src/routes/processes.route.js?");

/***/ }),

/***/ "./src/socket.js":
/*!***********************!*\
  !*** ./src/socket.js ***!
  \***********************/
/*! exports provided: notify, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notify\", function() { return notify; });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n\nvar io;\n\nvar init = function init(http) {\n  io = socket_io__WEBPACK_IMPORTED_MODULE_0___default()(http);\n  io.on('connection', function (socket) {\n    console.log('a user connected');\n    socket.on('disconnect', function () {\n      console.log('user disconnected');\n    });\n    io.emit('refresh-all');\n  });\n};\n\nvar notify = function notify(msg, data) {\n  io.emit(msg, data);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/socket.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: dispatch, state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatch\", function() { return dispatch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar dispatch = function dispatch(action) {\n  store.dispatch(action);\n};\nvar state = function state() {\n  return store.getState();\n};\n\n//# sourceURL=webpack:///./src/store.js?");

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

/***/ "content-type":
/*!*******************************!*\
  !*** external "content-type" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"content-type\");\n\n//# sourceURL=webpack:///external_%22content-type%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "depd":
/*!***********************!*\
  !*** external "depd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"depd\");\n\n//# sourceURL=webpack:///external_%22depd%22?");

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

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "iconv-lite":
/*!*****************************!*\
  !*** external "iconv-lite" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"iconv-lite\");\n\n//# sourceURL=webpack:///external_%22iconv-lite%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"object-assign\");\n\n//# sourceURL=webpack:///external_%22object-assign%22?");

/***/ }),

/***/ "on-finished":
/*!******************************!*\
  !*** external "on-finished" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"on-finished\");\n\n//# sourceURL=webpack:///external_%22on-finished%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack:///external_%22qs%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

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

/***/ }),

/***/ "type-is":
/*!**************************!*\
  !*** external "type-is" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"type-is\");\n\n//# sourceURL=webpack:///external_%22type-is%22?");

/***/ }),

/***/ "unpipe":
/*!*************************!*\
  !*** external "unpipe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unpipe\");\n\n//# sourceURL=webpack:///external_%22unpipe%22?");

/***/ }),

/***/ "vary":
/*!***********************!*\
  !*** external "vary" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vary\");\n\n//# sourceURL=webpack:///external_%22vary%22?");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zlib\");\n\n//# sourceURL=webpack:///external_%22zlib%22?");

/***/ })

/******/ });