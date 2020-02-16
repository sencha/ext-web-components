import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_Axis3D from './Ext/chart/axis/Axis3D.js';
import ElementParser from './runtime/ElementParser.js';

var EWCAxis3d =
/*#__PURE__*/
function (_Ext_chart_axis_Axis) {
  _inheritsLoose(EWCAxis3d, _Ext_chart_axis_Axis);

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