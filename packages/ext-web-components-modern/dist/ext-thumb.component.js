import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import ElementParser from './common/ElementParser.js';

var EWCThumb = /*#__PURE__*/function (_Ext_slider_Thumb) {
  _inheritsLoose(EWCThumb, _Ext_slider_Thumb);

  var _super = _createSuper(EWCThumb);

  function EWCThumb() {
    var _this;

    _this = _Ext_slider_Thumb.call(this, [], []) || this;
    _this.xtype = 'thumb';
    return _this;
  }

  return EWCThumb;
}(Ext_slider_Thumb);

export { EWCThumb as default };

try {
  if (window.customElements.get('ext-thumb') == undefined) {
    window.customElements.define('ext-thumb', ElementParser.withParsedCallback(EWCThumb));
  }
} catch (e) {
  if (window.customElements.get('ext-thumb') == undefined) {
    window.customElements.define('ext-thumb', EWCThumb);
  }
}