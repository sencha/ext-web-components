import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_hierarchy_partition_Partition from './Ext/d3/hierarchy/partition/Partition.js';
import ElementParser from './runtime/ElementParser.js';

var EWCD3_partition = /*#__PURE__*/function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(EWCD3_partition, _Ext_d3_hierarchy_par);

  var _super = _createSuper(EWCD3_partition);

  function EWCD3_partition() {
    var _this;

    _this = _Ext_d3_hierarchy_par.call(this, [], []) || this;
    _this.xtype = 'd3-partition';
    return _this;
  }

  return EWCD3_partition;
}(Ext_d3_hierarchy_partition_Partition);

export { EWCD3_partition as default };

try {
  window.customElements.define('ext-d3-partition', ElementParser.withParsedCallback(EWCD3_partition));
} catch (e) {
  window.customElements.define('ext-d3-partition', EWCD3_partition);
}