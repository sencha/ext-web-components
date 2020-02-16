import Ext_chart_axis_Axis from './Ext/chart/axis/Axis.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCAxis extends Ext_chart_axis_Axis {
  constructor() {
    super ([], []);
    this.xtype = 'axis';
  }
}
try {
  window.customElements.define('ext-axis', ElementParser.withParsedCallback(EWCAxis));
}
catch(e) {
  window.customElements.define('ext-axis', EWCAxis);
}
