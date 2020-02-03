import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import ElementParser from './ElementParser.js';

export default class EWCSparklinebox extends Ext_sparkline_Box {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebox';
  }
}
try {
  window.customElements.define('ext-sparklinebox', ElementParser.withParsedCallback(EWCSparklinebox));
}
catch(e) {
  window.customElements.define('ext-sparklinebox', EWCSparklinebox);
}
