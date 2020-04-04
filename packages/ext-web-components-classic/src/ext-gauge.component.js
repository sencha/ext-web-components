import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGauge extends Ext_ux_Gauge {
  constructor() {
    super ([], []);
    this.xtype = 'gauge';
  }
}
try {
  if (window.customElements.get('ext-gauge') == undefined) {
    window.customElements.define('ext-gauge', ElementParser.withParsedCallback(EWCGauge));
  }
}
catch(e) {
  if (window.customElements.get('ext-gauge') == undefined) {
    window.customElements.define('ext-gauge', EWCGauge);
  }
}
