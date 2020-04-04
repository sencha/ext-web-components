import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Carousel from './Ext/Carousel.js';
import ElementParser from './common/ElementParser.js';

var EWCCarousel = /*#__PURE__*/function (_Ext_Carousel) {
  _inheritsLoose(EWCCarousel, _Ext_Carousel);

  var _super = _createSuper(EWCCarousel);

  function EWCCarousel() {
    var _this;

    _this = _Ext_Carousel.call(this, [], []) || this;
    _this.xtype = 'carousel';
    return _this;
  }

  return EWCCarousel;
}(Ext_Carousel);

export { EWCCarousel as default };

try {
  if (window.customElements.get('ext-carousel') == undefined) {
    window.customElements.define('ext-carousel', ElementParser.withParsedCallback(EWCCarousel));
  }
} catch (e) {
  if (window.customElements.get('ext-carousel') == undefined) {
    window.customElements.define('ext-carousel', EWCCarousel);
  }
}