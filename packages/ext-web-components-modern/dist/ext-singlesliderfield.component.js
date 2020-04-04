import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import ElementParser from './common/ElementParser.js';

var EWCSinglesliderfield = /*#__PURE__*/function (_Ext_field_SingleSlid) {
  _inheritsLoose(EWCSinglesliderfield, _Ext_field_SingleSlid);

  var _super = _createSuper(EWCSinglesliderfield);

  function EWCSinglesliderfield() {
    var _this;

    _this = _Ext_field_SingleSlid.call(this, [], []) || this;
    _this.xtype = 'singlesliderfield';
    return _this;
  }

  return EWCSinglesliderfield;
}(Ext_field_SingleSlider);

export { EWCSinglesliderfield as default };

try {
  if (window.customElements.get('ext-singlesliderfield') == undefined) {
    window.customElements.define('ext-singlesliderfield', ElementParser.withParsedCallback(EWCSinglesliderfield));
  }
} catch (e) {
  if (window.customElements.get('ext-singlesliderfield') == undefined) {
    window.customElements.define('ext-singlesliderfield', EWCSinglesliderfield);
  }
}