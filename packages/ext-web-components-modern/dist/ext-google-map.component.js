import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Map from './Ext/Map.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGoogle_map = /*#__PURE__*/function (_Ext_Map) {
  _inheritsLoose(EWCGoogle_map, _Ext_Map);

  var _super = _createSuper(EWCGoogle_map);

  function EWCGoogle_map() {
    var _this;

    _this = _Ext_Map.call(this, [], []) || this;
    _this.xtype = 'google-map';
    return _this;
  }

  return EWCGoogle_map;
}(Ext_Map);

export { EWCGoogle_map as default };

try {
  window.customElements.define('ext-google-map', ElementParser.withParsedCallback(EWCGoogle_map));
} catch (e) {
  window.customElements.define('ext-google-map', EWCGoogle_map);
}