/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 158);
/******/ })
/************************************************************************/
/******/ ({

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	var pages_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/setup/pages\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var config_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/setup/config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var common_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/shared/common\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	common_1.default({ pages: pages_1.default, applicationConfig: config_1.default, itemDictionary: {
	        'arbor-products-module': 'Produkty',
	        'arbor-bilans-module': 'Bilans',
	        'arbor-dictionary-module': 'Ustawienia'
	    } });


/***/ }

/******/ });