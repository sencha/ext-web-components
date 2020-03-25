import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_axis_Axis3D from './Ext/chart/axis/Axis3D.js';
import ElementParser from './runtime/ElementParser.js';

var EWCAxis3d = /*#__PURE__*/function (_Ext_chart_axis_Axis) {
  _inheritsLoose(EWCAxis3d, _Ext_chart_axis_Axis);

  var _super = _createSuper(EWCAxis3d);

  function EWCAxis3d() {
    var _this;

    _this = _Ext_chart_axis_Axis.call(this, [], []) || this;
    _this.xtype = 'axis3d';
    return _this;
  }

  return EWCAxis3d;
}(Ext_chart_axis_Axis3D);

export { EWCAxis3d as default };

try {
  window.customElements.define('ext-axis3d', ElementParser.withParsedCallback(EWCAxis3d));
} catch (e) {
  window.customElements.define('ext-axis3d', EWCAxis3d);
}