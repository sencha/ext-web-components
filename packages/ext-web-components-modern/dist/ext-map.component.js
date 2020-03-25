import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Map from './Ext/Map.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMap = /*#__PURE__*/function (_Ext_Map) {
  _inheritsLoose(EWCMap, _Ext_Map);

  var _super = _createSuper(EWCMap);

  function EWCMap() {
    var _this;

    _this = _Ext_Map.call(this, [], []) || this;
    _this.xtype = 'map';
    return _this;
  }

  return EWCMap;
}(Ext_Map);

export { EWCMap as default };

try {
  window.customElements.define('ext-map', ElementParser.withParsedCallback(EWCMap));
} catch (e) {
  window.customElements.define('ext-map', EWCMap);
}