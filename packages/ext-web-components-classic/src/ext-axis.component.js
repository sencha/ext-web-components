import Ext_chart_axis_Axis from './Ext/chart/axis/Axis.js';
import ElementParser from './common/ElementParser.js';

export default class EWCAxis extends Ext_chart_axis_Axis {
  constructor() {
    super ([], []);
    this.xtype = 'axis';
  }
}
try {
  if (window.customElements.get('ext-axis') == undefined) {
    window.customElements.define('ext-axis', ElementParser.withParsedCallback(EWCAxis));
  }
}
catch(e) {
  if (window.customElements.get('ext-axis') == undefined) {
    window.customElements.define('ext-axis', EWCAxis);
  }
}
