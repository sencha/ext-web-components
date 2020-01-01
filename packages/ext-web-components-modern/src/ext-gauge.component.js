import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import ElementParser from './ElementParser.js';

export default class EWCGauge extends Ext_ux_Gauge {
  constructor() {
    super ([], []);
    this.xtype = 'gauge';
  }
}
window.customElements.define('ext-gauge', ElementParser.withParsedCallback(EWCGauge));
