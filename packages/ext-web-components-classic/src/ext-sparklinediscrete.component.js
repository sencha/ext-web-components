import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSparklinediscrete extends Ext_sparkline_Discrete {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinediscrete';
  }
}
try {
  window.customElements.define('ext-sparklinediscrete', ElementParser.withParsedCallback(EWCSparklinediscrete));
}
catch(e) {
  window.customElements.define('ext-sparklinediscrete', EWCSparklinediscrete);
}
