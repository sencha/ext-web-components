import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_axis_Axis from './Ext/chart/axis/Axis.js';
import ElementParser from './common/ElementParser.js';

var EWCAxis = /*#__PURE__*/function (_Ext_chart_axis_Axis) {
  _inheritsLoose(EWCAxis, _Ext_chart_axis_Axis);

  var _super = _createSuper(EWCAxis);

  function EWCAxis() {
    var _this;

    _this = _Ext_chart_axis_Axis.call(this, [], []) || this;
    _this.xtype = 'axis';
    return _this;
  }

  return EWCAxis;
}(Ext_chart_axis_Axis);

export { EWCAxis as default };

try {
  if (window.customElements.get('ext-axis') == undefined) {
    window.customElements.define('ext-axis', ElementParser.withParsedCallback(EWCAxis));
  }
} catch (e) {
  if (window.customElements.get('ext-axis') == undefined) {
    window.customElements.define('ext-axis', EWCAxis);
  }
}