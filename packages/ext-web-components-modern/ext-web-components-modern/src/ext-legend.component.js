import Ext_chart_Legend from './Ext/chart/Legend.js';
import ElementParser from './common/ElementParser.js';

export default class EWCLegend extends Ext_chart_Legend {
  constructor() {
    super ([], []);
    this.xtype = 'legend';
  }
}
try {
  if (window.customElements.get('ext-legend') == undefined) {
    window.customElements.define('ext-legend', ElementParser.withParsedCallback(EWCLegend));
  }
}
catch(e) {
  if (window.customElements.get('ext-legend') == undefined) {
    window.customElements.define('ext-legend', EWCLegend);
  }
}
