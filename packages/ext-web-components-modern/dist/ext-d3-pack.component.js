import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_hierarchy_Pack from './Ext/d3/hierarchy/Pack.js';
import ElementParser from './runtime/ElementParser.js';

var EWCD3_pack = /*#__PURE__*/function (_Ext_d3_hierarchy_Pac) {
  _inheritsLoose(EWCD3_pack, _Ext_d3_hierarchy_Pac);

  var _super = _createSuper(EWCD3_pack);

  function EWCD3_pack() {
    var _this;

    _this = _Ext_d3_hierarchy_Pac.call(this, [], []) || this;
    _this.xtype = 'd3-pack';
    return _this;
  }

  return EWCD3_pack;
}(Ext_d3_hierarchy_Pack);

export { EWCD3_pack as default };

try {
  window.customElements.define('ext-d3-pack', ElementParser.withParsedCallback(EWCD3_pack));
} catch (e) {
  window.customElements.define('ext-d3-pack', EWCD3_pack);
}