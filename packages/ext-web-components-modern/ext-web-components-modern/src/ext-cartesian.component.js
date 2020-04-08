import Ext_chart_Chart from './Ext/chart/Chart.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCartesian extends Ext_chart_Chart {
  constructor() {
    super ([], []);
    this.xtype = 'cartesian';
  }
}
try {
  if (window.customElements.get('ext-cartesian') == undefined) {
    window.customElements.define('ext-cartesian', ElementParser.withParsedCallback(EWCCartesian));
  }
}
catch(e) {
  if (window.customElements.get('ext-cartesian') == undefined) {
    window.customElements.define('ext-cartesian', EWCCartesian);
  }
}
