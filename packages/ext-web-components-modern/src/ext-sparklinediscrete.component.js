import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import ElementParser from './ElementParser.js';

export default class EWCSparklinediscrete extends Ext_sparkline_Discrete {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinediscrete';
  }
}
window.customElements.define('ext-sparklinediscrete', ElementParser.withParsedCallback(EWCSparklinediscrete));
