import Ext_chart_Chart from './Ext/chart/Chart.js';
import ElementParser from './ElementParser.js';

export default class EWCCartesian extends Ext_chart_Chart {
  constructor() {
    super ([], []);
    this.xtype = 'cartesian';
  }
}
try {
  window.customElements.define('ext-cartesian', ElementParser.withParsedCallback(EWCCartesian));
}
catch(e) {
  window.customElements.define('ext-cartesian', EWCCartesian);
}
