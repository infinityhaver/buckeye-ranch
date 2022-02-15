exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/any-base/index.js":
/*!****************************************!*\
  !*** ./node_modules/any-base/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Converter = __webpack_require__(/*! ./src/converter */ "./node_modules/any-base/src/converter.js");

/**
 * Function get source and destination alphabet and return convert function
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 *
 * @returns {function(number|Array)}
 */
function anyBase(srcAlphabet, dstAlphabet) {
    var converter = new Converter(srcAlphabet, dstAlphabet);
    /**
     * Convert function
     *
     * @param {string|Array} number
     *
     * @return {string|Array} number
     */
    return function (number) {
        return converter.convert(number);
    }
};

anyBase.BIN = '01';
anyBase.OCT = '01234567';
anyBase.DEC = '0123456789';
anyBase.HEX = '0123456789abcdef';

module.exports = anyBase;

/***/ }),

/***/ "./node_modules/any-base/src/converter.js":
/*!************************************************!*\
  !*** ./node_modules/any-base/src/converter.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


/**
 * Converter
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 * @constructor
 */
function Converter(srcAlphabet, dstAlphabet) {
    if (!srcAlphabet || !dstAlphabet || !srcAlphabet.length || !dstAlphabet.length) {
        throw new Error('Bad alphabet');
    }
    this.srcAlphabet = srcAlphabet;
    this.dstAlphabet = dstAlphabet;
}

/**
 * Convert number from source alphabet to destination alphabet
 *
 * @param {string|Array} number - number represented as a string or array of points
 *
 * @returns {string|Array}
 */
Converter.prototype.convert = function(number) {
    var i, divide, newlen,
    numberMap = {},
    fromBase = this.srcAlphabet.length,
    toBase = this.dstAlphabet.length,
    length = number.length,
    result = typeof number === 'string' ? '' : [];

    if (!this.isValid(number)) {
        throw new Error('Number "' + number + '" contains of non-alphabetic digits (' + this.srcAlphabet + ')');
    }

    if (this.srcAlphabet === this.dstAlphabet) {
        return number;
    }

    for (i = 0; i < length; i++) {
        numberMap[i] = this.srcAlphabet.indexOf(number[i]);
    }
    do {
        divide = 0;
        newlen = 0;
        for (i = 0; i < length; i++) {
            divide = divide * fromBase + numberMap[i];
            if (divide >= toBase) {
                numberMap[newlen++] = parseInt(divide / toBase, 10);
                divide = divide % toBase;
            } else if (newlen > 0) {
                numberMap[newlen++] = 0;
            }
        }
        length = newlen;
        result = this.dstAlphabet.slice(divide, divide + 1).concat(result);
    } while (newlen !== 0);

    return result;
};

/**
 * Valid number with source alphabet
 *
 * @param {number} number
 *
 * @returns {boolean}
 */
Converter.prototype.isValid = function(number) {
    var i = 0;
    for (; i < number.length; ++i) {
        if (this.srcAlphabet.indexOf(number[i]) === -1) {
            return false;
        }
    }
    return true;
};

module.exports = Converter;

/***/ }),

/***/ "./node_modules/filter-invalid-dom-props/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/filter-invalid-dom-props/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = filterInvalidDOMProps;

var _htmlAttributes = __webpack_require__(/*! html-attributes */ "./node_modules/html-attributes/lib/html-attributes.js");

var _htmlAttributes2 = _interopRequireDefault(_htmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventProps = {
	onCopy: true,
	onCut: true,
	onPaste: true,
	onLoad: true,
	onError: true,
	onWheel: true,
	onScroll: true,
	onCompositionEnd: true,
	onCompositionStart: true,
	onCompositionUpdate: true,
	onKeyDown: true,
	onKeyPress: true,
	onKeyUp: true,
	onFocus: true,
	onBlur: true,
	onChange: true,
	onInput: true,
	onSubmit: true,
	onClick: true,
	onContextMenu: true,
	onDoubleClick: true,
	onDrag: true,
	onDragEnd: true,
	onDragEnter: true,
	onDragExit: true,
	onDragLeave: true,
	onDragOver: true,
	onDragStart: true,
	onDrop: true,
	onMouseDown: true,
	onMouseEnter: true,
	onMouseLeave: true,
	onMouseMove: true,
	onMouseOut: true,
	onMouseOver: true,
	onMouseUp: true,
	onSelect: true,
	onTouchCancel: true,
	onTouchEnd: true,
	onTouchMove: true,
	onTouchStart: true,
	onAnimationStart: true,
	onAnimationEnd: true,
	onAnimationIteration: true,
	onTransitionEnd: true
};

function isValidDOMProp(prop) {
	return eventProps[prop] || _htmlAttributes2.default[prop] || /^(data|aria)-/.test(prop);
}

function filterInvalidDOMProps(props) {
	var domProps = {};
	for (var prop in props) {
		if (props.hasOwnProperty(prop) && isValidDOMProp(prop)) {
			domProps[prop] = props[prop];
		}
	}
	return domProps;
}

/***/ }),

/***/ "./node_modules/gatsby-background-image/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-background-image/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _BackgroundUtils = _interopRequireDefault(__webpack_require__(/*! ./lib/BackgroundUtils */ "./node_modules/gatsby-background-image/lib/BackgroundUtils.js"));

var _HelperUtils = __webpack_require__(/*! ./lib/HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _ImageUtils = __webpack_require__(/*! ./lib/ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _ImageCache = __webpack_require__(/*! ./lib/ImageCache */ "./node_modules/gatsby-background-image/lib/ImageCache.js");

var _ImageRef = __webpack_require__(/*! ./lib/ImageRef */ "./node_modules/gatsby-background-image/lib/ImageRef.js");

var _ImageHandling = __webpack_require__(/*! ./lib/ImageHandling */ "./node_modules/gatsby-background-image/lib/ImageHandling.js");

var _StyleUtils = __webpack_require__(/*! ./lib/StyleUtils */ "./node_modules/gatsby-background-image/lib/StyleUtils.js");

var _StyleCreation = __webpack_require__(/*! ./lib/StyleCreation */ "./node_modules/gatsby-background-image/lib/StyleCreation.js");

var _IntersectionObserverUtils = __webpack_require__(/*! ./lib/IntersectionObserverUtils */ "./node_modules/gatsby-background-image/lib/IntersectionObserverUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./lib/SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var _excluded = ["className", "style", "fluid", "fixed", "backgroundColor", "durationFadeIn", "Tag", "children", "keepStatic"];

var BackgroundImage = function (_React$Component) {
  (0, _inheritsLoose2.default)(BackgroundImage, _React$Component);

  function BackgroundImage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.intersectionListener = function () {
      var imageInCache = (0, _ImageCache.inImageCache)(_this.props);

      if (!_this.state.isVisible && typeof _this.props.onStartLoad === "function") {
        _this.props.onStartLoad({
          wasCached: imageInCache
        });
      }

      _this.imageRef = (0, _ImageRef.activatePictureRef)(_this.imageRef, _this.props, _this.selfRef);

      _this.setState(function (state) {
        return {
          isVisible: true,
          imageState: state.imageState + 1
        };
      }, function () {
        _this.setState(function (state) {
          return {
            imgLoaded: imageInCache,
            imgCached: (0, _ImageRef.hasActivatedPictureRefs)(_this.imageRef),
            imageState: state.imageState + 1
          };
        });
      });
    };

    var convertedProps = (0, _HelperUtils.convertProps)(props);
    var isVisible = true;
    var imgLoaded = false;
    var IOSupported = false;
    var fadeIn = convertedProps.fadeIn;
    var seenBefore = (0, _ImageCache.inImageCache)(convertedProps);

    if (!seenBefore && (0, _SimpleUtils.isBrowser)() && window.IntersectionObserver) {
      isVisible = false;
      IOSupported = true;
    }

    if (!(0, _SimpleUtils.isBrowser)()) {
      isVisible = false;
    }

    if (convertedProps.critical) {
      isVisible = true;
      IOSupported = false;
    }

    var hasNoScript = !(convertedProps.critical && !fadeIn) && !(0, _SimpleUtils.isBrowser)();
    var imageState = 0;

    var _fixClassName = (0, _StyleUtils.fixClassName)(convertedProps),
        currentClassNames = _fixClassName[0];

    _this.backgroundStyles = (0, _StyleUtils.presetBackgroundStyles)((0, _BackgroundUtils.default)(convertedProps.className));
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.imageRef = (0, _ImageRef.createPictureRef)((0, _extends2.default)({}, convertedProps, {
      isVisible: isVisible
    }), _this.handleImageLoaded);
    _this.selfRef = null;
    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      IOSupported: IOSupported,
      fadeIn: fadeIn,
      hasNoScript: hasNoScript,
      seenBefore: seenBefore,
      imageState: imageState,
      currentClassNames: currentClassNames
    };
    return _this;
  }

  var _proto = BackgroundImage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.backgroundStyles = (0, _StyleUtils.presetBackgroundStyles)((0, _BackgroundUtils.default)(this.props.className));

    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: (0, _ImageCache.inImageCache)(this.props)
      });
    }

    if (this.props.critical || this.state.seenBefore) {
      if ((0, _ImageRef.imageReferenceCompleted)(this.imageRef, this.props)) {
        this.handleImageLoaded();
      }
    }

    var _fixClassName2 = (0, _StyleUtils.fixClassName)(this.props),
        currentClassNames = _fixClassName2[0];

    this.setState({
      currentClassNames: currentClassNames
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    if ((0, _ImageUtils.imagePropsChanged)(this.props, prevProps)) {
      var convertedProps = (0, _HelperUtils.convertProps)(this.props);
      var imageInCache = (0, _ImageCache.inImageCache)(convertedProps);

      var _fixClassName3 = (0, _StyleUtils.fixClassName)(convertedProps),
          currentClassNames = _fixClassName3[0];

      this.setState({
        isVisible: imageInCache || convertedProps.critical,
        imgLoaded: imageInCache,
        seenBefore: imageInCache,
        currentClassNames: currentClassNames
      }, function () {
        _this2.bgImage = (0, _ImageUtils.getCurrentFromData)({
          data: _this2.imageRef,
          propName: "currentSrc",
          returnArray: true
        }) || (0, _ImageUtils.getCurrentFromData)({
          data: _this2.imageRef,
          propName: "src",
          returnArray: true
        });
        _this2.imageRef = (0, _ImageRef.createPictureRef)((0, _extends2.default)({}, convertedProps, {
          isVisible: _this2.state.isVisible
        }), _this2.handleImageLoaded);
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.imageRef) {
      if (Array.isArray(this.imageRef)) {
        this.imageRef.forEach(function (currentImageRef) {
          if (!!currentImageRef && !(0, _SimpleUtils.isString)(currentImageRef)) {
            currentImageRef.onload = null;
          }
        });
      } else {
        this.imageRef.onload = null;
      }
    }

    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  };

  _proto.handleRef = function handleRef(ref) {
    this.selfRef = ref;

    if (this.state.IOSupported && ref) {
      this.cleanUpListeners = (0, _IntersectionObserverUtils.listenToIntersections)(ref, this.intersectionListener, this.props.rootMargin);
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    (0, _ImageCache.activateCacheForImage)(this.props);
    this.setState(function (state) {
      return {
        imgLoaded: true,
        imageState: state.imageState + 1
      };
    });

    if (this.state.seenBefore) {
      this.setState({
        fadeIn: false
      });
    }

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  _proto.render = function render() {
    var _fixOpacity = (0, _StyleUtils.fixOpacity)((0, _HelperUtils.convertProps)(this.props), this.props.preserveStackingContext),
        className = _fixOpacity.className,
        _fixOpacity$style = _fixOpacity.style,
        style = _fixOpacity$style === void 0 ? {} : _fixOpacity$style,
        fluid = _fixOpacity.fluid,
        fixed = _fixOpacity.fixed,
        backgroundColor = _fixOpacity.backgroundColor,
        durationFadeIn = _fixOpacity.durationFadeIn,
        Tag = _fixOpacity.Tag,
        children = _fixOpacity.children,
        keepStatic = _fixOpacity.keepStatic,
        props = (0, _objectWithoutPropertiesLoose2.default)(_fixOpacity, _excluded);

    var remainingProps = (0, _HelperUtils.stripRemainingProps)(props);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : typeof backgroundColor !== "undefined" ? backgroundColor : "";
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached || this.props.fadeIn === "soft";
    var transitionDelay = shouldFadeIn ? durationFadeIn / 2 + "ms" : "none";
    var divStyle = (0, _extends2.default)({
      position: "relative"
    }, style);
    if (!this.props.preserveStackingContext) divStyle.opacity = 0.99;
    var image = (0, _ImageUtils.getCurrentSrcData)({
      fluid: fluid,
      fixed: fixed,
      returnArray: true
    });
    var noScriptImageData = (0, _ImageUtils.getCurrentSrcData)({
      fluid: fluid,
      fixed: fixed
    }) || {};

    if (fluid || fixed) {
      if (fixed) {
        divStyle.width = style.width || image.width;
        divStyle.height = style.height || image.height;
        divStyle.display = "inline-block";

        if (style.display === "inherit") {
          delete divStyle.display;
        }
      }
    } else if (keepStatic) {
      noScriptImageData.srcSet = '';
    } else {
      return null;
    }

    var newImageSettings = (0, _ImageHandling.switchImageSettings)({
      image: image,
      bgImage: this.bgImage,
      imageRef: this.imageRef,
      state: this.state
    });
    this.bgImage = newImageSettings.nextImageArray || newImageSettings.nextImage || this.bgImage;
    var pseudoStyles = (0, _StyleCreation.createPseudoStyles)((0, _extends2.default)({
      className: this.state.currentClassNames,
      transitionDelay: transitionDelay,
      bgColor: bgColor,
      backgroundStyles: this.backgroundStyles,
      style: style,
      fadeIn: shouldFadeIn
    }, newImageSettings, {
      originalData: fluid || fixed
    }));
    var noScriptPseudoStyles = (0, _StyleCreation.createNoScriptStyles)({
      image: image,
      bgColor: bgColor,
      className: this.state.currentClassNames,
      backgroundStyles: this.backgroundStyles,
      style: style
    });
    var componentKey = "" + (fluid ? "fluid" : "") + (fixed ? "fixed" : "") + "-" + JSON.stringify(noScriptImageData.srcSet);
    var currentStyles = (0, _extends2.default)({}, this.backgroundStyles, divStyle);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      className: this.state.currentClassNames,
      style: currentStyles,
      ref: this.handleRef,
      key: componentKey
    }, remainingProps), _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: pseudoStyles
      }
    }), this.state.hasNoScript && _react.default.createElement("noscript", null, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: noScriptPseudoStyles
      }
    })), children);
  };

  return BackgroundImage;
}(_react.default.Component);

BackgroundImage.defaultProps = {
  critical: false,
  fadeIn: true,
  durationFadeIn: 500,
  Tag: "div",
  preserveStackingContext: false,
  rootMargin: "200px",
  keepStatic: false
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  srcAvif: _propTypes.default.string,
  srcSetAvif: _propTypes.default.string,
  media: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  srcAvif: _propTypes.default.string,
  srcSetAvif: _propTypes.default.string,
  media: _propTypes.default.string
});

BackgroundImage.propTypes = {
  fixed: _propTypes.default.oneOfType([fixedObject, _propTypes.default.arrayOf(fixedObject), _propTypes.default.arrayOf(_propTypes.default.oneOfType([fixedObject, _propTypes.default.string]))]),
  fluid: _propTypes.default.oneOfType([fluidObject, _propTypes.default.arrayOf(fluidObject), _propTypes.default.arrayOf(_propTypes.default.oneOfType([fluidObject, _propTypes.default.string]))]),
  fadeIn: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  durationFadeIn: _propTypes.default.number,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  preserveStackingContext: _propTypes.default.bool,
  rootMargin: _propTypes.default.string,
  keepStatic: _propTypes.default.bool
};
var _default = BackgroundImage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/BackgroundUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/BackgroundUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.getStyleRulesForClassName = exports.getStyleRules = exports.getBackgroundStylesForSingleClass = exports["default"] = void 0;

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var getStyleRulesForClassName = function getStyleRulesForClassName(className) {
  var styleSheets = (0, _SimpleUtils.isBrowser)() ? window.document.styleSheets : [];

  for (var i = 0; i < styleSheets.length; i++) {
    var classes = void 0;

    try {
      classes = typeof styleSheets[i].rules !== 'undefined' ? styleSheets[i].rules : typeof styleSheets[i].cssRules !== 'undefined' ? styleSheets[i].cssRules : '';
    } catch (e) {}

    if (classes) {
      var foundClass = Array.prototype.slice.call(classes).reduce(function (foundAcc, styleRule) {
        if (styleRule.selectorText === className) {
          foundAcc.push(styleRule);
        }

        return foundAcc;
      }, []);

      if (foundClass.length) {
        return foundClass;
      }
    }
  }

  return [];
};

exports.getStyleRulesForClassName = getStyleRulesForClassName;

var getStyleRules = function getStyleRules(cssStyleRules) {
  var styles = {};

  if (cssStyleRules.length > 0 && typeof cssStyleRules[0].style !== 'undefined') {
    var constructorName = cssStyleRules[0].style.constructor.name || cssStyleRules[0].style.constructor.toString();

    switch (constructorName) {
      case 'CSS2Properties':
      case '[object MSStyleCSSProperties]':
        Object.values(cssStyleRules[0].style).forEach(function (prop) {
          styles[(0, _SimpleUtils.toCamelCase)(prop)] = cssStyleRules[0].style[prop];
        });
        break;

      case 'CSSStyleDeclaration':
        styles = cssStyleRules[0].style;
        break;

      default:
        console.error('Unknown style object prototype');
        break;
    }
  }

  return styles;
};

exports.getStyleRules = getStyleRules;

var getBackgroundStylesForSingleClass = function getBackgroundStylesForSingleClass(className) {
  if (className && (0, _SimpleUtils.isString)(className)) {
    var cssStyleRules = getStyleRulesForClassName("." + className);

    if ((cssStyleRules === null || cssStyleRules === void 0 ? void 0 : cssStyleRules.length) > 0 && typeof cssStyleRules[0].style !== 'undefined') {
      return Object.keys(getStyleRules(cssStyleRules)).filter(function (key) {
        return key.indexOf('background') === 0 && cssStyleRules[0].style[key] !== '';
      }).reduce(function (newData, key) {
        newData[(0, _SimpleUtils.toCamelCase)(key)] = cssStyleRules[0].style[key];
        return newData;
      }, {});
    }
  }

  return {};
};

exports.getBackgroundStylesForSingleClass = getBackgroundStylesForSingleClass;

var getBackgroundStyles = function getBackgroundStyles(className) {
  if ((0, _SimpleUtils.isBrowser)()) {
    var classes = (0, _SimpleUtils.stringToArray)(className);

    if (classes instanceof Array) {
      var classObjects = [];
      classes.forEach(function (item) {
        return classObjects.push(getBackgroundStylesForSingleClass(item));
      });
      return Object.assign.apply(Object, classObjects);
    }

    return getBackgroundStylesForSingleClass(className);
  }

  return {};
};

var _default = getBackgroundStyles;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ClassCache.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ClassCache.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.resetComponentClassCache = exports.inComponentClassCache = exports.activateCacheForComponentClass = void 0;
var componentClassCache = Object.create({});

var inComponentClassCache = function inComponentClassCache(className) {
  return componentClassCache[className] || false;
};

exports.inComponentClassCache = inComponentClassCache;

var activateCacheForComponentClass = function activateCacheForComponentClass(className) {
  if (className) {
    componentClassCache[className] = true;
  }
};

exports.activateCacheForComponentClass = activateCacheForComponentClass;

var resetComponentClassCache = function resetComponentClassCache() {
  for (var className in componentClassCache) {
    delete componentClassCache[className];
  }
};

exports.resetComponentClassCache = resetComponentClassCache;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/HelperUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/HelperUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.stripRemainingProps = exports.convertProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _filterInvalidDomProps = _interopRequireDefault(__webpack_require__(/*! filter-invalid-dom-props */ "./node_modules/filter-invalid-dom-props/dist/index.js"));

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var stripRemainingProps = function stripRemainingProps(props) {
  return (0, _filterInvalidDomProps.default)(props);
};

exports.stripRemainingProps = stripRemainingProps;

var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);
  var fixed = convertedProps.fixed,
      fluid = convertedProps.fluid;

  if (fluid && (0, _MediaUtils.hasArtDirectionSupport)(props, 'fluid')) {
    convertedProps.fluid = (0, _MediaUtils.groupByMedia)(convertedProps.fluid);
  }

  if (fixed && (0, _MediaUtils.hasArtDirectionSupport)(props, 'fixed')) {
    convertedProps.fixed = (0, _MediaUtils.groupByMedia)(convertedProps.fixed);
  }

  return convertedProps;
};

exports.convertProps = convertProps;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageCache.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageCache.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.resetImageCache = exports.inImageCache = exports.allInImageCache = exports.activateCacheForMultipleImages = exports.activateCacheForImage = void 0;

var _HelperUtils = __webpack_require__(/*! ./HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var imageCache = Object.create({});

var inImageCache = function inImageCache(props, index, isLoop) {
  if (index === void 0) {
    index = 0;
  }

  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

  if (isImageStack && !isLoop) {
    return allInImageCache(props);
  }

  var src = isImageStack ? (0, _ImageUtils.getSelectedImage)(convertedProps, index) : (0, _ImageUtils.getImageSrcKey)(convertedProps);

  if ((0, _SimpleUtils.isObject)(src)) {
    var objectSrc = (0, _ImageUtils.getImageSrcKey)({
      fluid: src,
      fixed: src
    });
    return imageCache[objectSrc] || false;
  }

  return imageCache[src] || false;
};

exports.inImageCache = inImageCache;

var allInImageCache = function allInImageCache(props) {
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var imageStack = convertedProps.fluid || convertedProps.fixed;
  return imageStack.every(function (imageData, index) {
    return inImageCache(convertedProps, index, true);
  });
};

exports.allInImageCache = allInImageCache;

var activateCacheForImage = function activateCacheForImage(props, index, isLoop) {
  if (index === void 0) {
    index = 0;
  }

  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

  if (isImageStack && !isLoop) {
    return activateCacheForMultipleImages(props);
  }

  var src = isImageStack ? (0, _ImageUtils.getSelectedImage)(convertedProps, index) : (0, _ImageUtils.getImageSrcKey)(convertedProps);

  if (src) {
    if ((0, _SimpleUtils.isObject)(src)) {
      var objectSrc = (0, _ImageUtils.getImageSrcKey)({
        fluid: src,
        fixed: src
      });
      imageCache[objectSrc] = true;
    } else {
      imageCache[src] = true;
    }
  }
};

exports.activateCacheForImage = activateCacheForImage;

var activateCacheForMultipleImages = function activateCacheForMultipleImages(props) {
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var imageStack = convertedProps.fluid || convertedProps.fixed;
  imageStack.forEach(function (imageData, index) {
    return activateCacheForImage(convertedProps, index, true);
  });
};

exports.activateCacheForMultipleImages = activateCacheForMultipleImages;

var resetImageCache = function resetImageCache() {
  for (var prop in imageCache) {
    delete imageCache[prop];
  }
};

exports.resetImageCache = resetImageCache;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageHandling.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageHandling.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.switchImageSettings = void 0;

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var switchImageSettings = function switchImageSettings(_ref) {
  var image = _ref.image,
      bgImage = _ref.bgImage,
      imageRef = _ref.imageRef,
      state = _ref.state;
  var currentSources = (0, _ImageUtils.getCurrentFromData)({
    data: imageRef,
    propName: "currentSrc"
  });
  var returnArray = Array.isArray(image) && !(0, _MediaUtils.hasArtDirectionArray)({
    fluid: image
  });
  var lastImage = Array.isArray(bgImage) ? (0, _SimpleUtils.filteredJoin)(bgImage) : bgImage;
  var nextImage;
  var nextImageArray;
  var finalImage = returnArray && state.seenBefore && !!currentSources;

  if (returnArray) {
    if (!currentSources) {
      nextImage = (0, _ImageUtils.getCurrentFromData)({
        data: image,
        propName: "tracedSVG",
        returnArray: returnArray
      });
      nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
        data: image,
        propName: "base64",
        returnArray: returnArray
      }), nextImage);
    }

    nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "CSS_STRING",
      addUrl: false,
      returnArray: returnArray
    }), nextImage);

    if ((state.imgLoaded || !!currentSources) && state.isVisible) {
      if (currentSources) {
        nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
          data: imageRef,
          propName: "currentSrc",
          returnArray: returnArray
        }), nextImage);
        finalImage = true;
      } else {
        nextImage = (0, _SimpleUtils.combineArray)((0, _ImageUtils.getCurrentFromData)({
          data: imageRef,
          propName: "src",
          returnArray: returnArray
        }), nextImage);
        finalImage = true;
      }
    }

    nextImage = (0, _SimpleUtils.combineArray)(nextImage, bgImage);
    var dummyArray = (0, _ImageUtils.createDummyImageArray)(image.length);
    nextImage = (0, _SimpleUtils.combineArray)(nextImage, dummyArray);
    nextImageArray = nextImage;
    nextImage = (0, _SimpleUtils.filteredJoin)(nextImage);
  } else {
    nextImage = "";
    nextImage = (0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "tracedSVG"
    }) || (0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "base64"
    });

    if (state.imgLoaded && state.isVisible) {
      nextImage = currentSources;
      finalImage = true;
    }
  }

  var afterOpacity = state.imageState % 2;

  if (!returnArray && nextImage === "" && state.imgLoaded && state.isVisible && imageRef && !imageRef.currentSrc) {
    nextImage = (0, _ImageUtils.getCurrentFromData)({
      data: imageRef,
      propName: "src",
      checkLoaded: false
    });
    finalImage = true;
  }

  if (!nextImage) nextImage = lastImage;
  var newImageSettings = {
    lastImage: lastImage,
    nextImage: nextImage,
    afterOpacity: afterOpacity,
    finalImage: finalImage
  };
  if (nextImageArray) newImageSettings.nextImageArray = nextImageArray;
  return newImageSettings;
};

exports.switchImageSettings = switchImageSettings;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageRef.js":
/*!**************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageRef.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.imageReferenceCompleted = exports.hasPictureRef = exports.hasActivatedPictureRefs = exports.createPictureRef = exports.createMultiplePictureRefs = exports.activatePictureRef = exports.activateMultiplePictureRefs = void 0;

var _HelperUtils = __webpack_require__(/*! ./HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var _ImageCache = __webpack_require__(/*! ./ImageCache */ "./node_modules/gatsby-background-image/lib/ImageCache.js");

var createPictureRef = function createPictureRef(props, onLoad, index, isLoop) {
  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);

  if ((0, _SimpleUtils.isBrowser)() && (typeof convertedProps.fluid !== "undefined" || typeof convertedProps.fixed !== "undefined")) {
    var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

    if (isImageStack && !isLoop) {
      return createMultiplePictureRefs(props, onLoad);
    }

    var img = new Image();

    img.onload = function () {
      return onLoad();
    };

    if (!img.complete && typeof convertedProps.onLoad === "function") {
      img.addEventListener('load', convertedProps.onLoad);
    }

    if (typeof convertedProps.onError === "function") {
      img.addEventListener('error', convertedProps.onError);
    }

    if (convertedProps.crossOrigin) {
      img.crossOrigin = convertedProps.crossOrigin;
    }

    if ((convertedProps.critical || convertedProps.isVisible) && !isLoop) {
      return activatePictureRef(img, convertedProps, index, isLoop);
    }

    return img;
  }

  return null;
};

exports.createPictureRef = createPictureRef;

var createMultiplePictureRefs = function createMultiplePictureRefs(props, onLoad) {
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var imageStack = convertedProps.fluid || convertedProps.fixed;
  var imageRefs = imageStack.map(function (imageData, index) {
    return createPictureRef(convertedProps, onLoad, index, true);
  });

  if (convertedProps.critical || convertedProps.isVisible) {
    return activatePictureRef(imageRefs, convertedProps);
  }

  return imageRefs;
};

exports.createMultiplePictureRefs = createMultiplePictureRefs;

var activatePictureRef = function activatePictureRef(imageRef, props, selfRef, index, isLoop) {
  if (selfRef === void 0) {
    selfRef = null;
  }

  if (index === void 0) {
    index = 0;
  }

  if (isLoop === void 0) {
    isLoop = false;
  }

  var convertedProps = (0, _HelperUtils.convertProps)(props);

  if ((0, _SimpleUtils.isBrowser)() && (typeof convertedProps.fluid !== "undefined" || typeof convertedProps.fixed !== "undefined")) {
    var isImageStack = (0, _ImageUtils.hasImageArray)(convertedProps) && !(0, _MediaUtils.hasArtDirectionArray)(convertedProps);

    if (isImageStack && !isLoop) {
      return activateMultiplePictureRefs(imageRef, props, selfRef);
    }

    var bodyClone = document.createElement('body');
    var imageData = isImageStack ? (0, _ImageUtils.getSelectedImage)(convertedProps, index) : (0, _ImageUtils.getCurrentSrcData)(convertedProps);

    if (!imageData) {
      return null;
    }

    if ((0, _SimpleUtils.isString)(imageData)) {
      return imageData;
    }

    if (selfRef) {
      imageRef.width = selfRef.offsetWidth;
      imageRef.height = selfRef.offsetHeight;
    }

    if ((0, _ImageUtils.hasPictureElement)()) {
      var pic = document.createElement('picture');

      if (selfRef) {
        pic.width = imageRef.width;
        pic.height = imageRef.height;
      }

      if ((0, _MediaUtils.hasArtDirectionArray)(convertedProps)) {
        var sources = (0, _MediaUtils.createArtDirectionSources)(convertedProps).reverse();
        sources.forEach(function (currentSource) {
          return pic.appendChild(currentSource);
        });
      }

      var sourcesAvif = (0, _MediaUtils.createSourceElementForSrcSet)(imageData, 'avif');
      sourcesAvif && pic.appendChild(sourcesAvif);
      var sourcesWebp = (0, _MediaUtils.createSourceElementForSrcSet)(imageData, 'webp');
      sourcesWebp && pic.appendChild(sourcesWebp);
      pic.appendChild(imageRef);
      bodyClone.appendChild(pic);
    }

    imageRef.sizes = imageData.sizes || "";
    imageRef.srcset = imageData.srcSet || "";
    imageRef.src = imageData.src || "";
    return imageRef;
  }

  return null;
};

exports.activatePictureRef = activatePictureRef;

var activateMultiplePictureRefs = function activateMultiplePictureRefs(imageRefs, props, selfRef) {
  return imageRefs.map(function (imageRef, index) {
    return activatePictureRef(imageRef, props, selfRef, index, true);
  });
};

exports.activateMultiplePictureRefs = activateMultiplePictureRefs;

var hasActivatedPictureRefs = function hasActivatedPictureRefs(imageRefs) {
  return Array.isArray(imageRefs) ? imageRefs.every(function (imageRef) {
    return hasPictureRef(imageRef);
  }) : hasPictureRef(imageRefs);
};

exports.hasActivatedPictureRefs = hasActivatedPictureRefs;

var hasPictureRef = function hasPictureRef(imageRef) {
  return (0, _SimpleUtils.isString)(imageRef) || !!imageRef && !!imageRef.currentSrc;
};

exports.hasPictureRef = hasPictureRef;

var imageReferenceCompleted = function imageReferenceCompleted(imageRef, props) {
  return imageRef ? Array.isArray(imageRef) ? imageRef.every(function (singleImageRef) {
    return (0, _ImageUtils.imageLoaded)(singleImageRef);
  }) || (0, _ImageCache.inImageCache)(props) : (0, _ImageUtils.imageLoaded)(imageRef) || (0, _ImageCache.inImageCache)(props) : (0, _SimpleUtils.isString)(imageRef);
};

exports.imageReferenceCompleted = imageReferenceCompleted;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/ImageUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/ImageUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.isBase64 = exports.imagePropsChanged = exports.imageLoaded = exports.imageArrayPropsChanged = exports.hasPictureElement = exports.hasImageUrl = exports.hasImageArray = exports.getUrlString = exports.getSelectedImage = exports.getImageSrcKey = exports.getCurrentSrcData = exports.getCurrentFromData = exports.createDummyImageArray = void 0;

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var hasPictureElement = function hasPictureElement() {
  return typeof HTMLPictureElement !== "undefined" || (0, _SimpleUtils.isBrowser)();
};

exports.hasPictureElement = hasPictureElement;

var hasImageArray = function hasImageArray(props) {
  return Boolean(props.fluid && Array.isArray(props.fluid) || props.fixed && Array.isArray(props.fixed));
};

exports.hasImageArray = hasImageArray;

var getCurrentFromData = function getCurrentFromData(_ref) {
  var data = _ref.data,
      propName = _ref.propName,
      _ref$addUrl = _ref.addUrl,
      addUrl = _ref$addUrl === void 0 ? true : _ref$addUrl,
      _ref$returnArray = _ref.returnArray,
      returnArray = _ref$returnArray === void 0 ? false : _ref$returnArray,
      _ref$checkLoaded = _ref.checkLoaded,
      checkLoaded = _ref$checkLoaded === void 0 ? true : _ref$checkLoaded;
  if (!data || !propName) return "";
  var tracedSVG = propName === "tracedSVG";

  if (Array.isArray(data) && !(0, _MediaUtils.hasArtDirectionArray)({
    fluid: data
  })) {
    var imageString = data.map(function (dataElement) {
      if (propName === "currentSrc" || propName === 'src') {
        return checkLoaded ? imageLoaded(dataElement) && dataElement[propName] || "" : dataElement[propName];
      }

      if (propName === "CSS_STRING" && (0, _SimpleUtils.isString)(dataElement)) {
        return dataElement;
      }

      return (0, _SimpleUtils.isString)(dataElement) ? dataElement : dataElement && propName in dataElement ? dataElement[propName] : "";
    });
    return getUrlString({
      imageString: imageString,
      tracedSVG: tracedSVG,
      addUrl: addUrl,
      returnArray: returnArray
    });
  }

  if ((0, _MediaUtils.hasArtDirectionArray)({
    fluid: data
  }) && (propName === "currentSrc" || propName === "src" || propName === "base64" || tracedSVG)) {
    var currentData = getCurrentSrcData({
      fluid: data
    });
    return propName in currentData ? getUrlString({
      imageString: currentData[propName],
      tracedSVG: tracedSVG,
      addUrl: addUrl
    }) : "";
  }

  if (typeof data !== 'object') {
    return '';
  }

  if ((propName === "currentSrc" || propName === 'src') && propName in data) {
    return getUrlString({
      imageString: checkLoaded ? imageLoaded(data) && data[propName] || "" : data[propName],
      addUrl: addUrl
    });
  }

  return propName in data ? getUrlString({
    imageString: data[propName],
    tracedSVG: tracedSVG,
    addUrl: addUrl
  }) : "";
};

exports.getCurrentFromData = getCurrentFromData;

var getImageSrcKey = function getImageSrcKey(_ref2) {
  var fluid = _ref2.fluid,
      fixed = _ref2.fixed;
  var data = getCurrentSrcData({
    fluid: fluid,
    fixed: fixed
  });
  return data ? data.src || null : null;
};

exports.getImageSrcKey = getImageSrcKey;

var getCurrentSrcData = function getCurrentSrcData(_ref3, index) {
  var fluid = _ref3.fluid,
      fixed = _ref3.fixed,
      returnArray = _ref3.returnArray;

  if (index === void 0) {
    index = 0;
  }

  var currentData = fluid || fixed;

  if (hasImageArray({
    fluid: fluid,
    fixed: fixed
  })) {
    if (returnArray) {
      return currentData;
    }

    if ((0, _SimpleUtils.isBrowser)() && (0, _MediaUtils.hasArtDirectionArray)({
      fluid: fluid,
      fixed: fixed
    })) {
      var mediaData = currentData.slice().reverse();
      var foundMedia = mediaData.findIndex(_MediaUtils.matchesMedia);

      if (foundMedia !== -1) {
        return mediaData[foundMedia];
      }
    }

    return currentData[index];
  }

  return currentData;
};

exports.getCurrentSrcData = getCurrentSrcData;

var getSelectedImage = function getSelectedImage(_ref4, index) {
  var fluid = _ref4.fluid,
      fixed = _ref4.fixed;

  if (index === void 0) {
    index = 0;
  }

  var currentData = fluid || fixed;

  if (hasImageArray({
    fluid: fluid,
    fixed: fixed
  })) {
    return currentData[index] || currentData[0];
  }

  return currentData;
};

exports.getSelectedImage = getSelectedImage;

var getUrlString = function getUrlString(_ref5) {
  var imageString = _ref5.imageString,
      _ref5$tracedSVG = _ref5.tracedSVG,
      tracedSVG = _ref5$tracedSVG === void 0 ? false : _ref5$tracedSVG,
      _ref5$addUrl = _ref5.addUrl,
      addUrl = _ref5$addUrl === void 0 ? true : _ref5$addUrl,
      _ref5$returnArray = _ref5.returnArray,
      returnArray = _ref5$returnArray === void 0 ? false : _ref5$returnArray,
      _ref5$hasImageUrls = _ref5.hasImageUrls,
      hasImageUrls = _ref5$hasImageUrls === void 0 ? false : _ref5$hasImageUrls;

  if (Array.isArray(imageString)) {
    var stringArray = imageString.map(function (currentString) {
      if (currentString) {
        var _base = isBase64(currentString);

        var _imageUrl = hasImageUrls || hasImageUrl(currentString);

        var currentReturnString = currentString && tracedSVG ? "\"" + currentString + "\"" : currentString && !_base && !tracedSVG && _imageUrl ? "'" + currentString + "'" : currentString;
        return addUrl && currentString ? "url(" + currentReturnString + ")" : currentReturnString;
      }

      return currentString;
    });
    return returnArray ? stringArray : (0, _SimpleUtils.filteredJoin)(stringArray);
  }

  var base64 = isBase64(imageString);
  var imageUrl = hasImageUrls || hasImageUrl(imageString);
  var returnString = imageString && tracedSVG ? "\"" + imageString + "\"" : imageString && !base64 && !tracedSVG && imageUrl ? "'" + imageString + "'" : imageString;
  return imageString ? addUrl ? "url(" + returnString + ")" : returnString : "";
};

exports.getUrlString = getUrlString;

var isBase64 = function isBase64(base64String) {
  return (0, _SimpleUtils.isString)(base64String) && base64String.indexOf("base64") !== -1;
};

exports.isBase64 = isBase64;

var hasImageUrl = function hasImageUrl(imageString) {
  return (0, _SimpleUtils.isString)(imageString) && imageString.substr(0, 4) === "http";
};

exports.hasImageUrl = hasImageUrl;

var imagePropsChanged = function imagePropsChanged(props, prevProps) {
  return props.fluid && !prevProps.fluid || props.fixed && !prevProps.fixed || imageArrayPropsChanged(props, prevProps) || props.fluid && prevProps.fluid && props.fluid.src !== prevProps.fluid.src || props.fixed && prevProps.fixed && props.fixed.src !== prevProps.fixed.src;
};

exports.imagePropsChanged = imagePropsChanged;

var imageArrayPropsChanged = function imageArrayPropsChanged(props, prevProps) {
  var isPropsFluidArray = Array.isArray(props.fluid);
  var isPrevPropsFluidArray = Array.isArray(prevProps.fluid);
  var isPropsFixedArray = Array.isArray(props.fixed);
  var isPrevPropsFixedArray = Array.isArray(prevProps.fixed);

  if (isPropsFluidArray && !isPrevPropsFluidArray || isPropsFixedArray && !isPrevPropsFixedArray || !isPropsFluidArray && isPrevPropsFluidArray || !isPropsFixedArray && isPrevPropsFixedArray) {
    return true;
  }

  if (isPropsFluidArray && isPrevPropsFluidArray) {
    if (props.fluid.length === prevProps.fluid.length) {
      return props.fluid.some(function (image, index) {
        return image.src !== prevProps.fluid[index].src;
      });
    }

    return true;
  }

  if (isPropsFixedArray && isPrevPropsFixedArray) {
    if (props.fixed.length === prevProps.fixed.length) {
      return props.fixed.some(function (image, index) {
        return image.src !== prevProps.fixed[index].src;
      });
    }

    return true;
  }
};

exports.imageArrayPropsChanged = imageArrayPropsChanged;

var createDummyImageArray = function createDummyImageArray(length) {
  var DUMMY_IMG = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  var dummyImageURI = getUrlString({
    imageString: DUMMY_IMG
  });
  return Array(length).fill(dummyImageURI);
};

exports.createDummyImageArray = createDummyImageArray;

var imageLoaded = function imageLoaded(imageRef) {
  return imageRef ? (0, _SimpleUtils.isString)(imageRef) || imageRef.complete && imageRef.naturalWidth !== 0 && imageRef.naturalHeight !== 0 : false;
};

exports.imageLoaded = imageLoaded;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/IntersectionObserverUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/IntersectionObserverUtils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.listenToIntersections = exports.getIO = exports.callbackIO = void 0;

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var io;
var listeners = new WeakMap();

var callbackIO = function callbackIO(entries) {
  entries.forEach(function (entry) {
    if (listeners.has(entry.target)) {
      var callback = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        io.unobserve(entry.target);
        listeners.delete(entry.target);
        callback();
      }
    }
  });
};

exports.callbackIO = callbackIO;

var getIO = function getIO(rootMargin) {
  if (typeof io === "undefined" && (0, _SimpleUtils.isBrowser)() && window.IntersectionObserver) {
    io = new window.IntersectionObserver(callbackIO, {
      rootMargin: rootMargin
    });
  }

  return io;
};

exports.getIO = getIO;

var listenToIntersections = function listenToIntersections(element, callback, rootMargin) {
  if (rootMargin === void 0) {
    rootMargin = "200px";
  }

  var observer = getIO(rootMargin);

  if (observer) {
    observer.observe(element);
    listeners.set(element, callback);
    return function () {
      observer.unobserve(element);
      listeners.delete(element);
    };
  }

  return function () {};
};

exports.listenToIntersections = listenToIntersections;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/MediaUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/MediaUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.matchesMedia = exports.hasArtDirectionSupport = exports.hasArtDirectionArray = exports.groupByMedia = exports.createSourceElementForSrcSet = exports.createArtDirectionSources = void 0;

var _sortMediaQueries = _interopRequireDefault(__webpack_require__(/*! sort-media-queries */ "./node_modules/sort-media-queries/lib/index.js"));

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var groupByMedia = function groupByMedia(imageVariants) {
  var without = [];
  var sortedVariants = (0, _sortMediaQueries.default)(imageVariants, 'media');
  sortedVariants.forEach(function (variant) {
    return !variant.media && without.push(variant);
  });

  if (without.length > 1 && "development" !== "production") {
    console.warn("We've found " + without.length + " sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");
  }

  return sortedVariants;
};

exports.groupByMedia = groupByMedia;

var createSourceElementForSrcSet = function createSourceElementForSrcSet(image, type) {
  var source = document.createElement('source');
  var srcSetName = "srcSet" + (0, _SimpleUtils.capitalize)(type);

  if (srcSetName in image) {
    source.type = "image/" + type;
    source.srcset = image[srcSetName];
  }

  if (image.sizes) {
    source.sizes = image.sizes;
  }

  if (image.media) {
    source.media = image.media;
  }

  return source.srcset ? source : null;
};

exports.createSourceElementForSrcSet = createSourceElementForSrcSet;

var createArtDirectionSources = function createArtDirectionSources(_ref) {
  var fluid = _ref.fluid,
      fixed = _ref.fixed;
  var currentSource = fluid || fixed;
  return currentSource.reduce(function (sources, image) {
    if (!image.media) {
      return sources;
    }

    var sourceWebp = createSourceElementForSrcSet(image, 'webp');
    var sourceAvif = createSourceElementForSrcSet(image, 'avif');
    sourceWebp && sources.push(sourceWebp);
    sourceAvif && sources.push(sourceAvif);
    return sources;
  }, []);
};

exports.createArtDirectionSources = createArtDirectionSources;

var hasArtDirectionSupport = function hasArtDirectionSupport(props, prop) {
  return props[prop] && Array.isArray(props[prop]) && props[prop].some(function (image) {
    return !!image && typeof image.media !== 'undefined';
  });
};

exports.hasArtDirectionSupport = hasArtDirectionSupport;

var hasArtDirectionArray = function hasArtDirectionArray(props) {
  return hasArtDirectionSupport(props, 'fluid') || hasArtDirectionSupport(props, 'fixed');
};

exports.hasArtDirectionArray = hasArtDirectionArray;

var matchesMedia = function matchesMedia(_ref2) {
  var media = _ref2.media;
  return media ? (0, _SimpleUtils.isBrowser)() && typeof window.matchMedia !== "undefined" && !!window.matchMedia(media).matches : false;
};

exports.matchesMedia = matchesMedia;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/SimpleUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/SimpleUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.toKebabCase = exports.toCamelCase = exports.stringToArray = exports.isString = exports.isObject = exports.isBrowser = exports.hashString = exports.filteredJoin = exports.combineArray = exports.capitalize = void 0;

var isBrowser = function isBrowser() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
};

exports.isBrowser = isBrowser;

var isString = function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

exports.isString = isString;

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.isObject = isObject;

var toCamelCase = function toCamelCase(str) {
  return isString(str) && str.indexOf('-') !== -1 && str.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s|\W+/g, '') || str;
};

exports.toCamelCase = toCamelCase;

var toKebabCase = function toKebabCase(str) {
  return isString(str) && str.replace(/\s|\W+/g, '').replace(/[A-Z]/g, function (match) {
    return "-" + match.toLowerCase();
  });
};

exports.toKebabCase = toKebabCase;

var capitalize = function capitalize(str) {
  return (str === null || str === void 0 ? void 0 : str.charAt(0).toUpperCase()) + str.slice(1);
};

exports.capitalize = capitalize;

var stringToArray = function stringToArray(str, delimiter) {
  if (delimiter === void 0) {
    delimiter = " ";
  }

  if (str instanceof Array) {
    return str;
  }

  if (isString(str)) {
    if (str.includes(delimiter)) {
      return str.split(delimiter);
    }

    return [str];
  }

  return false;
};

exports.stringToArray = stringToArray;

var hashString = function hashString(str) {
  return isString(str) && [].reduce.call(str, function (hash, item) {
    hash = (hash << 5) - hash + item.charCodeAt(0);
    return hash | 0;
  }, 0);
};

exports.hashString = hashString;

var filteredJoin = function filteredJoin(arrayToJoin) {
  return arrayToJoin.filter(function (item) {
    return item !== "";
  }).join();
};

exports.filteredJoin = filteredJoin;

var combineArray = function combineArray(fromArray, toArray) {
  if (!Array.isArray(fromArray)) {
    return [fromArray];
  }

  return fromArray.map(function (item, index) {
    return item || toArray && toArray[index];
  });
};

exports.combineArray = combineArray;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/StyleCreation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/StyleCreation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.createStyleImage = exports.createPseudoStyles = exports.createPseudoElementWithContent = exports.createPseudoElementMediaQuery = exports.createPseudoElement = exports.createNoScriptStyles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _StyleUtils = __webpack_require__(/*! ./StyleUtils */ "./node_modules/gatsby-background-image/lib/StyleUtils.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _MediaUtils = __webpack_require__(/*! ./MediaUtils */ "./node_modules/gatsby-background-image/lib/MediaUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var createPseudoElement = function createPseudoElement(className, appendix) {
  if (appendix === void 0) {
    appendix = ":before";
  }

  var escapedClassName = (0, _StyleUtils.escapeClassNames)(className);
  var classes = (0, _SimpleUtils.stringToArray)(escapedClassName);
  var pseudoClasses = "";

  if (Array.isArray(classes)) {
    classes = classes.filter(function (c) {
      return c !== '';
    });

    if (classes.length > 0) {
      pseudoClasses = "." + classes.join('.') + appendix;
    }
  }

  return pseudoClasses;
};

exports.createPseudoElement = createPseudoElement;

var createPseudoElementWithContent = function createPseudoElementWithContent(pseudoElementString, imageSource) {
  return "\n    " + pseudoElementString + " {\n      opacity: 1;\n      background-image: " + imageSource + ";\n    }";
};

exports.createPseudoElementWithContent = createPseudoElementWithContent;

var createPseudoElementMediaQuery = function createPseudoElementMediaQuery(pseudoElementString, media, imageSource, imageSourceWebP) {
  return "\n      @media " + media + " {\n        " + createPseudoElementWithContent(pseudoElementString, imageSource) + "\n      }\n      " + (imageSourceWebP && "@media " + media + " {\n          " + createPseudoElementWithContent(pseudoElementString, imageSourceWebP) + "\n        }") + "\n    ";
};

exports.createPseudoElementMediaQuery = createPseudoElementMediaQuery;

var createPseudoStyles = function createPseudoStyles(_ref) {
  var className = _ref.className,
      transitionDelay = _ref.transitionDelay,
      lastImage = _ref.lastImage,
      nextImage = _ref.nextImage,
      afterOpacity = _ref.afterOpacity,
      bgColor = _ref.bgColor,
      fadeIn = _ref.fadeIn,
      backgroundStyles = _ref.backgroundStyles,
      style = _ref.style,
      finalImage = _ref.finalImage,
      originalData = _ref.originalData;
  var pseudoBefore = createPseudoElement(className);
  var pseudoAfter = createPseudoElement(className, ":after");
  var currentBackgroundStyles = (0, _extends2.default)({}, backgroundStyles, style);
  return "\n          " + pseudoBefore + ",\n          " + pseudoAfter + " {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            " + (bgColor && "background-color: " + bgColor + ";") + "\n            " + (0, _StyleUtils.setTransitionStyles)(transitionDelay, fadeIn) + "\n            " + (0, _StyleUtils.kebabifyBackgroundStyles)(currentBackgroundStyles) + "\n          }\n          " + pseudoBefore + " {\n            z-index: -100;\n            " + ((!afterOpacity || finalImage) && createStyleImage(nextImage, originalData) || "") + "\n            " + (afterOpacity && lastImage && createStyleImage(lastImage, originalData) || "") + "\n            opacity: " + Number(!afterOpacity) + "; \n          }\n          " + pseudoAfter + " {\n            z-index: -101;\n            " + ((afterOpacity || finalImage) && createStyleImage(nextImage, originalData) || "") + "\n            " + (!afterOpacity && lastImage && createStyleImage(lastImage, originalData) || "") + "\n            " + (finalImage ? "opacity: " + Number(afterOpacity) + ";" : "") + "\n          }\n        ";
};

exports.createPseudoStyles = createPseudoStyles;

var createStyleImage = function createStyleImage(image, originalData) {
  var hasStackedImages = (0, _ImageUtils.hasImageArray)({
    fluid: originalData
  }) && !(0, _MediaUtils.hasArtDirectionArray)({
    fluid: originalData
  });

  if ((0, _SimpleUtils.isBrowser)() || hasStackedImages) {
    return image ? "background-image: " + image + ";" : "";
  }

  return "";
};

exports.createStyleImage = createStyleImage;

var createNoScriptStyles = function createNoScriptStyles(_ref2) {
  var className = _ref2.className,
      image = _ref2.image;

  if (image) {
    var returnArray = Array.isArray(image) && !(0, _MediaUtils.hasArtDirectionArray)({
      fluid: image
    });
    var addUrl = false;
    var allSources = (0, _ImageUtils.getCurrentFromData)({
      data: image,
      propName: "src",
      checkLoaded: false,
      addUrl: addUrl,
      returnArray: returnArray
    });
    var sourcesAsUrl = (0, _ImageUtils.getUrlString)({
      imageString: allSources,
      hasImageUrls: true,
      returnArray: returnArray
    });
    var sourcesAsUrlWithCSS = "";

    if (returnArray) {
      var cssStrings = (0, _ImageUtils.getCurrentFromData)({
        data: image,
        propName: "CSS_STRING",
        addUrl: false,
        returnArray: returnArray
      });
      sourcesAsUrlWithCSS = (0, _SimpleUtils.filteredJoin)((0, _SimpleUtils.combineArray)(sourcesAsUrl, cssStrings));
    }

    var pseudoBefore = createPseudoElement(className);

    if ((0, _MediaUtils.hasArtDirectionArray)({
      fluid: image
    })) {
      return image.map(function (currentMedia) {
        var sourceString = (0, _ImageUtils.getUrlString)({
          imageString: currentMedia.src
        });
        var webPString = (0, _ImageUtils.getUrlString)({
          imageString: currentMedia.srcWebp || ""
        });

        if (currentMedia.media) {
          return createPseudoElementMediaQuery(pseudoBefore, currentMedia.media, sourceString, webPString);
        }

        return createPseudoElementMediaQuery(pseudoBefore, 'screen', sourceString, webPString);
      }).join('');
    }

    return createPseudoElementWithContent(pseudoBefore, sourcesAsUrlWithCSS || sourcesAsUrl);
  }

  return "";
};

exports.createNoScriptStyles = createNoScriptStyles;

/***/ }),

/***/ "./node_modules/gatsby-background-image/lib/StyleUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-background-image/lib/StyleUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.setTransitionStyles = exports.presetBackgroundStyles = exports.kebabifyBackgroundStyles = exports.fixOpacity = exports.fixClassName = exports.escapeClassNames = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _shortUuid = _interopRequireDefault(__webpack_require__(/*! short-uuid */ "./node_modules/short-uuid/index.js"));

var _HelperUtils = __webpack_require__(/*! ./HelperUtils */ "./node_modules/gatsby-background-image/lib/HelperUtils.js");

var _ClassCache = __webpack_require__(/*! ./ClassCache */ "./node_modules/gatsby-background-image/lib/ClassCache.js");

var _ImageUtils = __webpack_require__(/*! ./ImageUtils */ "./node_modules/gatsby-background-image/lib/ImageUtils.js");

var _SimpleUtils = __webpack_require__(/*! ./SimpleUtils */ "./node_modules/gatsby-background-image/lib/SimpleUtils.js");

var _excluded = ["className"];

var fixClassName = function fixClassName(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var convertedProps = (0, _HelperUtils.convertProps)(props);
  var elementExists = (0, _ClassCache.inComponentClassCache)(className);
  var imageData = (0, _ImageUtils.getCurrentSrcData)(convertedProps);

  var additionalClassname = _shortUuid.default.generate();

  var randomClass = " gbi-" + (0, _SimpleUtils.hashString)(imageData && imageData.srcSet || className || "noclass") + "-" + additionalClassname;
  var additionalClass = elementExists || !className ? randomClass : "";
  var componentClassNames = ("" + (className || "") + (additionalClass || "")).trim();
  if (!elementExists) (0, _ClassCache.activateCacheForComponentClass)(className);
  return [componentClassNames];
};

exports.fixClassName = fixClassName;

var escapeClassNames = function escapeClassNames(classNames) {
  if (classNames) {
    var specialChars = (0, _SimpleUtils.isBrowser)() && window._gbiSpecialChars ? window._gbiSpecialChars : typeof __GBI_SPECIAL_CHARS__ !== "undefined" ? __GBI_SPECIAL_CHARS__ : ':/';
    var specialCharRegEx = new RegExp("[" + specialChars + "]", 'g');
    return classNames.replace(specialCharRegEx, '\\$&');
  }

  return classNames;
};

exports.escapeClassNames = escapeClassNames;

var kebabifyBackgroundStyles = function kebabifyBackgroundStyles(styles) {
  if ((0, _SimpleUtils.isString)(styles)) {
    return styles;
  }

  if (styles instanceof Object) {
    return Object.keys(styles).filter(function (key) {
      return key.indexOf('background') === 0 && styles[key] !== '';
    }).reduce(function (resultingStyles, key) {
      return "" + resultingStyles + (0, _SimpleUtils.toKebabCase)(key) + ": " + styles[key] + ";\n";
    }, "");
  }

  return "";
};

exports.kebabifyBackgroundStyles = kebabifyBackgroundStyles;

var setTransitionStyles = function setTransitionStyles(transitionDelay, fadeIn) {
  if (transitionDelay === void 0) {
    transitionDelay = "0.25s";
  }

  if (fadeIn === void 0) {
    fadeIn = true;
  }

  return fadeIn ? "transition: opacity 0.5s ease " + transitionDelay + ";" : "transition: none;";
};

exports.setTransitionStyles = setTransitionStyles;

var fixOpacity = function fixOpacity(props) {
  var styledProps = (0, _extends2.default)({}, props);

  if (!styledProps.preserveStackingContext) {
    try {
      if (styledProps.style && styledProps.style.opacity) {
        if (isNaN(styledProps.style.opacity) || styledProps.style.opacity > 0.99) {
          styledProps.style.opacity = 0.99;
        }
      }
    } catch (e) {}
  }

  return styledProps;
};

exports.fixOpacity = fixOpacity;

var presetBackgroundStyles = function presetBackgroundStyles(backgroundStyles) {
  var defaultBackgroundStyles = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return (0, _extends2.default)({}, defaultBackgroundStyles, backgroundStyles);
};

exports.presetBackgroundStyles = presetBackgroundStyles;

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, s.apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }

  return string;
};

const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = Object.assign({
    pascalCase: false
  }, options);

  const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
  }

  const hasUpperCase = input !== input.toLowerCase();

  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }

  input = input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, m => m.toUpperCase());
  return postProcess(input);
};

module.exports = camelCase; // TODO: Remove this for the next major release

module.exports["default"] = camelCase;

/***/ }),

/***/ "./src/components/CountDown/CountDown.js":
/*!***********************************************!*\
  !*** ./src/components/CountDown/CountDown.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CountDown_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountDown.scss */ "./src/components/CountDown/CountDown.scss");
/* harmony import */ var _CountDown_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CountDown_scss__WEBPACK_IMPORTED_MODULE_1__);



function CountDown() {
  const calculateTimeLeft = () => {
    // Set the countdown target date right here
    let countDownDate = '2023-02-15';
    const difference = +new Date(`${countDownDate}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
      };
    }

    return timeLeft;
  };

  const {
    0: timeLeft,
    1: setTimeLeft
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(calculateTimeLeft());
  const {
    0: year
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().getFullYear());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    const classes = `${interval} countdown-unit`;
    timerComponents.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "number"
    }, timeLeft[interval]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "interval"
    }, interval, " ")));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "countdown-wrap"
  }, timerComponents.length ? timerComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Time's up!"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountDown);

/***/ }),

/***/ "./src/components/CountDown/index.js":
/*!*******************************************!*\
  !*** ./src/components/CountDown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CountDown__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _CountDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountDown */ "./src/components/CountDown/CountDown.js");


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2135283694_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2135283694.json */ "./public/page-data/sq/d/2135283694.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var gatsby_background_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-background-image */ "./node_modules/gatsby-background-image/index.js");
/* harmony import */ var _components_CountDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountDown */ "./src/components/CountDown/index.js");
/* harmony import */ var _scss_entry_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/entry.scss */ "./src/scss/entry.scss");
/* harmony import */ var _scss_entry_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_entry_scss__WEBPACK_IMPORTED_MODULE_4__);






const data = _public_page_data_sq_d_2135283694_json__WEBPACK_IMPORTED_MODULE_0__.data;
const imageData = data.desktop.childImageSharp.fluid;

const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_background_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    Tag: "section",
    fluid: imageData,
    backgroundColor: `#040e18`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "gatsby-background-image")), (0,_components_CountDown__WEBPACK_IMPORTED_MODULE_3__["default"])(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    src: "../images/icon.png",
    alt: "Derp",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3233496048.json */ "./.cache/caches/gatsby-plugin-image/3233496048.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://www.google.com",
    target: "_blank",
    className: "btn ghost"
  }, "This is a button"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./node_modules/html-attributes/lib/html-attributes.js":
/*!*************************************************************!*\
  !*** ./node_modules/html-attributes/lib/html-attributes.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/*!
 * html-attributes
 * https://github.com/alexmingoia/html-attributes
 */



/**
 * @module html-attributes
 */

module.exports = {
  "abbr": "abbr",
  "accept": "accept",
  "acceptCharset": "accept-charset",
  "accessKey": "accesskey",
  "action": "action",
  "allowFullScreen": "allowfullscreen",
  "allowTransparency": "allowtransparency",
  "alt": "alt",
  "async": "async",
  "autoComplete": "autocomplete",
  "autoFocus": "autofocus",
  "autoPlay": "autoplay",
  "cellPadding": "cellpadding",
  "cellSpacing": "cellspacing",
  "challenge": "challenge",
  "charset": "charset",
  "checked": "checked",
  "cite": "cite",
  "class": "class",
  "className": "class",
  "cols": "cols",
  "colSpan": "colspan",
  "command": "command",
  "content": "content",
  "contentEditable": "contenteditable",
  "contextMenu": "contextmenu",
  "controls": "controls",
  "coords": "coords",
  "crossOrigin": "crossorigin",
  "data": "data",
  "dateTime": "datetime",
  "default": "default",
  "defer": "defer",
  "dir": "dir",
  "disabled": "disabled",
  "download": "download",
  "draggable": "draggable",
  "dropzone": "dropzone",
  "encType": "enctype",
  "for": "for",
  "form": "form",
  "formAction": "formaction",
  "formEncType": "formenctype",
  "formMethod": "formmethod",
  "formNoValidate": "formnovalidate",
  "formTarget": "formtarget",
  "frameBorder": "frameBorder",
  "headers": "headers",
  "height": "height",
  "hidden": "hidden",
  "high": "high",
  "href": "href",
  "hrefLang": "hreflang",
  "htmlFor": "for",
  "httpEquiv": "http-equiv",
  "icon": "icon",
  "id": "id",
  "inputMode": "inputmode",
  "isMap": "ismap",
  "itemId": "itemid",
  "itemProp": "itemprop",
  "itemRef": "itemref",
  "itemScope": "itemscope",
  "itemType": "itemtype",
  "kind": "kind",
  "label": "label",
  "lang": "lang",
  "list": "list",
  "loop": "loop",
  "manifest": "manifest",
  "max": "max",
  "maxLength": "maxlength",
  "media": "media",
  "mediaGroup": "mediagroup",
  "method": "method",
  "min": "min",
  "minLength": "minlength",
  "multiple": "multiple",
  "muted": "muted",
  "name": "name",
  "noValidate": "novalidate",
  "open": "open",
  "optimum": "optimum",
  "pattern": "pattern",
  "ping": "ping",
  "placeholder": "placeholder",
  "poster": "poster",
  "preload": "preload",
  "radioGroup": "radiogroup",
  "readOnly": "readonly",
  "rel": "rel",
  "required": "required",
  "role": "role",
  "rows": "rows",
  "rowSpan": "rowspan",
  "sandbox": "sandbox",
  "scope": "scope",
  "scoped": "scoped",
  "scrolling": "scrolling",
  "seamless": "seamless",
  "selected": "selected",
  "shape": "shape",
  "size": "size",
  "sizes": "sizes",
  "sortable": "sortable",
  "span": "span",
  "spellCheck": "spellcheck",
  "src": "src",
  "srcDoc": "srcdoc",
  "srcSet": "srcset",
  "start": "start",
  "step": "step",
  "style": "style",
  "tabIndex": "tabindex",
  "target": "target",
  "title": "title",
  "translate": "translate",
  "type": "type",
  "typeMustMatch": "typemustmatch",
  "useMap": "usemap",
  "value": "value",
  "width": "width",
  "wmode": "wmode",
  "wrap": "wrap"
};


/***/ }),

/***/ "./src/components/CountDown/CountDown.scss":
/*!*************************************************!*\
  !*** ./src/components/CountDown/CountDown.scss ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/scss/entry.scss":
/*!*****************************!*\
  !*** ./src/scss/entry.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/short-uuid/index.js":
/*!******************************************!*\
  !*** ./node_modules/short-uuid/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Created by Samuel on 6/4/2016.
 * Simple wrapper functions to produce shorter UUIDs for cookies, maybe everything?
 */

const { v4: uuidv4 } = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/index.js");
const anyBase = __webpack_require__(/*! any-base */ "./node_modules/any-base/index.js");

const flickrBase58 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const cookieBase90 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~";

const baseOptions = {
  consistentLength: true,
};

// A default generator, instantiated only if used.
let toFlickr;

/**
 * Takes a UUID, strips the dashes, and translates.
 * @param {string} longId
 * @param {function(string)} translator
 * @param {Object} [paddingParams]
 * @returns {string}
 */
const shortenUUID = (longId, translator, paddingParams) => {
  const translated = translator(longId.toLowerCase().replace(/-/g, ''));

  if (!paddingParams || !paddingParams.consistentLength) return translated;

  return translated.padStart(
    paddingParams.shortIdLength,
    paddingParams.paddingChar,
  );
};

/**
 * Translate back to hex and turn back into UUID format, with dashes
 * @param {string} shortId
 * @param {function(string)} translator
 * @returns {string}
 */
const enlargeUUID = (shortId, translator) => {
  const uu1 = translator(shortId).padStart(32, '0');

  // Join the zero padding and the UUID and then slice it up with match
  const m = uu1.match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);

  // Accumulate the matches and join them.
  return [m[1], m[2], m[3], m[4], m[5]].join('-');
};

// Calculate length for the shortened ID
const getShortIdLength = (alphabetLength) => (
  Math.ceil(Math.log(2 ** 128) / Math.log(alphabetLength)));

module.exports = (() => {
  /**
   * @param {string} toAlphabet - Defaults to flickrBase58 if not provided
   * @param {Object} [options]
   *
   * @returns {{new: (function()),
   *  uuid: (function()),
   *  fromUUID: (function(string)),
   *  toUUID: (function(string)),
   *  alphabet: (string)}}
   */
  const makeConvertor = (toAlphabet, options) => {
    // Default to Flickr 58
    const useAlphabet = toAlphabet || flickrBase58;

    // Default to baseOptions
    const selectedOptions = { ...baseOptions, ...options };

    // Check alphabet for duplicate entries
    if ([...new Set(Array.from(useAlphabet))].length !== useAlphabet.length) {
      throw new Error('The provided Alphabet has duplicate characters resulting in unreliable results');
    }

    const shortIdLength = getShortIdLength(useAlphabet.length);

    // Padding Params
    const paddingParams = {
      shortIdLength,
      consistentLength: selectedOptions.consistentLength,
      paddingChar: useAlphabet[0],
    };

    // UUIDs are in hex, so we translate to and from.
    const fromHex = anyBase(anyBase.HEX, useAlphabet);
    const toHex = anyBase(useAlphabet, anyBase.HEX);
    const generate = () => shortenUUID(uuidv4(), fromHex, paddingParams);

    const translator = {
      new: generate,
      generate,
      uuid: uuidv4,
      fromUUID: (uuid) => shortenUUID(uuid, fromHex, paddingParams),
      toUUID: (shortUuid) => enlargeUUID(shortUuid, toHex),
      alphabet: useAlphabet,
      maxLength: shortIdLength,
    };

    Object.freeze(translator);

    return translator;
  };

  // Expose the constants for other purposes.
  makeConvertor.constants = {
    flickrBase58,
    cookieBase90,
  };

  // Expose the generic v4 UUID generator for convenience
  makeConvertor.uuid = uuidv4;

  // Provide a generic generator
  makeConvertor.generate = () => {
    if (!toFlickr) {
      // Generate on first use;
      toFlickr = makeConvertor(flickrBase58).generate;
    }
    return toFlickr();
  };

  return makeConvertor;
})();


/***/ }),

/***/ "./node_modules/sort-media-queries/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/sort-media-queries/lib/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var extend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var mqTypes = ['blank','all','minWidth','minHeight','maxWidth','maxHeight','print'];

/**
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Boolean}
 */
function itemsValid ( rules, type, prop ) {
	var flag = true;
	for ( var i = 0, rulesLength = rules.length; i < rulesLength; i++ ) {
		if ( typeof(rules[i]) !== type || ( prop && !rules[i].hasOwnProperty(prop) ) ) {
			flag = false;
			break;
		}
	}
	return flag;
}

/**
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Boolean}
 */
function allValid ( rules, type, prop ) {
	if (
		!rules || !rules.length || typeof(rules) === 'string'
	) {
		return 'none';
	}
	if (
		(type === 'object' && (!prop || typeof(prop) !== 'string')) ||
		!itemsValid(rules, type, prop)
	) {
		return 'some';
	}
	return 'all';
}

/**
 * Normalize between array with strings and array with objects
 *
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Object}
 */
function prepareRules ( rules, type, prop ) {
	var collection = [];
	var o = {};
	for ( var i = 0, rulesLength = rules.length; i < rulesLength; i++ ) {
		if ( type === 'string' ) {
			o = extend({}, {
				__media: rules[i]
			});
		} else {
			o = extend({}, rules[i]);
			o.__media = rules[i][prop];
		}
		collection.push(o);
	}
	return collection;
}

/**
 * @param  {Boolean} isMax
 *
 * @return {Function}
 */
function determineSortOrder ( isMax ) {

	/**
	 * Determine sort order based on provided arguments
	 *
	 * @param  {Object} a
	 * @param  {Object} b
	 *
	 * @return {Integer}
	 */
	return function ( a, b ) {

		var sortValA = a.sortVal;
		var sortValB = b.sortVal;
		var ruleA = a.item.__media;
		var ruleB = b.item.__media;
		isMax = typeof(isMax) !== 'undefined' ? isMax : false;

		// Consider print for sorting if sortVals are equal
		if ( sortValA === sortValB ) {
			if ( ruleA.match(/print/) ) {
				// a contains print and should be sorted after b
				return 1;
			}
			if ( ruleB.match(/print/) ) {
				// b contains print and should be sorted after a
				return -1;
			}
		}

		// Return descending sort order for max-(width|height) media queries
		if ( isMax ) {
			return sortValB - sortValA;
		}

		// Return ascending sort order
		return sortValA - sortValB;
	};
}

/**
 * @return {Object}
 */
function createCollection () {
	var mqCollection = {};
	for ( var i = 0, mqTypesLength = mqTypes.length; i < mqTypesLength; i++ ) {
		mqCollection[mqTypes[i]] = [];
	}
	return mqCollection;
}

/**
 * @param {Object} collection
 * @param {Array} rules
 *
 * @return {Object}
 */
function addRulesToCollection ( collection, rules ) {

	// Sort media queries by kind, this is needed to output them in the right order
	for ( var i = 0, rulesLength = rules.length; i < rulesLength; i++ ) {

		var item = rules[i];
		var rule = item.__media;
		var collectionType = 'blank';
		var valMatch = rule.match(/\d+/g);

		if ( rule.match(/min-width/) ) {
			collectionType = 'minWidth';
		} else if ( rule.match(/min-height/) ) {
			collectionType = 'minHeight';
		} else if ( rule.match(/max-width/) ) {
			collectionType = 'maxWidth';
		} else if ( rule.match(/max-height/) ) {
			collectionType = 'maxHeight';
		} else if ( rule.match(/print/) ) {
			collectionType = 'print';
		} else if ( rule.match(/all/) ) {
			collectionType = 'all';
		}

		collection[collectionType].push({
			item: item,
			sortVal: valMatch ? valMatch[0] : 0
		});

	}
	return collection;
}

/**
 * @param  {Object} collection
 *
 * @return {Object}
 */
function sortCollection ( collection ) {
	var sorter;
	for ( var collectionType in collection ) {
		if ( collection.hasOwnProperty(collectionType) ) {
			sorter = determineSortOrder(false);
			if ( collectionType === 'maxWidth' || collectionType === 'maxHeight' ) {
				sorter = determineSortOrder(true);
			}
			collection[collectionType].sort(sorter);
		}
	}
	return collection;
}

/**
 * @param  {Object} collection
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Array}
 */
function transformCollection ( collection, type, prop ) {
	var transformed = [];
	var collectionItem;

	function iterateCollectionItem ( collectionItem ) {
		var resultVal;
		for ( var i = 0, typeLength = collectionItem.length; i < typeLength; i++ ) {
			if ( type === 'string' ) {
				resultVal = collectionItem[i].item.__media;
			} else {
				resultVal = collectionItem[i].item;
				delete resultVal.__media;
			}
			transformed.push(resultVal);
		}
	}

	for ( var i = 0, mqTypesLength = mqTypes.length; i < mqTypesLength; i++ ) {
		iterateCollectionItem(collection[mqTypes[i]]);
	}

	return transformed;
}

/**
 * @param  {Array} rules
 * @param  {String} type
 * @param  {String} prop
 *
 * @return {Array}
 */
function sortInit ( rules, type, prop ) {

	switch ( allValid(rules, type, prop) ) {
		case 'none':
			return [];
		case 'some':
			return rules;
	}

	var collection = createCollection();
	rules = prepareRules(rules, type, prop);
	addRulesToCollection(collection, rules);
	sortCollection(collection);
	return transformCollection(collection, type, prop);
}

/**
 * @param  {Array} rules
 * @param  {String} prop
 *
 * @return {Array}
 */
module.exports = function ( rules, prop ) {
	if ( rules ) {
		if ( prop ) {
			return sortInit(rules, 'object', prop);
		}
		return sortInit(rules, 'string');
	}
	return [];
};


/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/index.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v1": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "v3": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "v4": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "v5": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NIL": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "version": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "validate": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "stringify": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "parse": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-node/v1.js");
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-node/v3.js");
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-node/v5.js");
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-node/nil.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-node/version.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-node/parse.js");










/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/md5.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/md5.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/nil.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/nil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/parse.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/parse.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/sha1.js":
/*!*************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/sha1.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v1.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v1.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v3.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v3.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-node/md5.js");


const v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v35.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v35.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DNS": () => (/* binding */ DNS),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-node/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v5.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v5.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-node/sha1.js");


const v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/version.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/version.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3233496048.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3233496048.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#683898","images":{"fallback":{"src":"/static/53aa06cf17e4239d0dba6ffd09854e02/ccc41/icon.png","srcSet":"/static/53aa06cf17e4239d0dba6ffd09854e02/bf8e1/icon.png 128w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/acb7c/icon.png 256w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/ccc41/icon.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/53aa06cf17e4239d0dba6ffd09854e02/6766a/icon.webp 128w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/22bfc/icon.webp 256w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/d689f/icon.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ "./public/page-data/sq/d/2135283694.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2135283694.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"desktop":null}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map