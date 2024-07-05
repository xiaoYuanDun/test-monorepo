"use strict";
(self["webpackChunkdynamic_remotes_app1"] = self["webpackChunkdynamic_remotes_app1"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?83b2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/runtime */ "../../node_modules/.pnpm/@module-federation+runtime@0.2.1/node_modules/@module-federation/runtime/dist/index.cjs.js");


const getRunPlugins = () => {
  return {
    name: 'app1RuntimePlugin',
    beforePreloadRemote: (...args) => {
      console.log('...', args);
    }
  };
};
(0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.init)({
  name: 'app1',
  plugins: [getRunPlugins()]
});
function useDynamicImport({
  module,
  scope
}) {
  console.log(module, scope);
  const [component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!module && !scope) return;
    const loadComponent = async () => {
      const {
        default: component
      } = await (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.loadRemote)(`${scope}/${module}`);
      setComponent(() => component);
    };
    loadComponent();
  }, [module, scope]);
  const fallback = () => null;
  return component || fallback;
}
const App = () => {
  const [{
    module,
    scope
  }, setSystem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const setApp2 = () => setSystem({
    scope: 'app2',
    module: 'Widget'
  });
  const Component = useDynamicImport({
    module,
    scope
  });
  const handlePreloadRemote = () => {
    (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.preloadRemote)([{
      nameOrAlias: 'app2',
      resourceCategory: 'all'
    }]);
  };
  const loadOrigin = () => {
    __webpack_require__.e(/*! import() */ "webpack_container_remote_app2_Widget").then(__webpack_require__.t.bind(__webpack_require__, /*! app2/Widget */ "webpack/container/remote/app2/Widget", 23)).then(m => {
      console.log('m', m);
      // const manifestRemoteEndTime = Date.now();
      // console.log('loadManifestProvider');
      // setManifestTime(manifestRemoteEndTime - manifestRemoteStartTime);
      // // @ts-ignore
      // setManifestRemote({ default: m.default });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Dynamic System Host"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "App 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The Dynamic System will take advantage Module Federation ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "remotes"), " and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "exposes"), ". It will no load components that have been loaded already."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handlePreloadRemote
  }, "Preload."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: setApp2
  }, "Load App 2 Widget"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: loadOrigin
  }, "Load App 2 Widget Origin import"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '2em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
    fallback: "Loading System"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?83b2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('root'));

/***/ })

}]);