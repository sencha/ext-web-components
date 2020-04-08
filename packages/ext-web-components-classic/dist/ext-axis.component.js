import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_Axis from './Ext/chart/axis/Axis.js';
import ElementParser from './common/ElementParser.js';

var EWCAxis = /*#__PURE__*/function (_Ext_chart_axis_Axis) {
  _inheritsLoose(EWCAxis, _Ext_chart_axis_Axis);

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