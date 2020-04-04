import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import ElementParser from './common/ElementParser.js';

var EWCPivottreemap = /*#__PURE__*/function (_Ext_pivot_d3_TreeMap) {
  _inheritsLoose(EWCPivottreemap, _Ext_pivot_d3_TreeMap);

  var _super = _createSuper(EWCPivottreemap);

  function EWCPivottreemap() {
    var _this;

    _this = _Ext_pivot_d3_TreeMap.call(this, [], []) || this;
    _this.xtype = 'pivottreemap';
    return _this;
  }

  return EWCPivottreemap;
}(Ext_pivot_d3_TreeMap);

export { EWCPivottreemap as default };

try {
  if (window.customElements.get('ext-pivottreemap') == undefined) {
    window.customElements.define('ext-pivottreemap', ElementParser.withParsedCallback(EWCPivottreemap));
  }
} catch (e) {
  if (window.customElements.get('ext-pivottreemap') == undefined) {
    window.customElements.define('ext-pivottreemap', EWCPivottreemap);
  }
}