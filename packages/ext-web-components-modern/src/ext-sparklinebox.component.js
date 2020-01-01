import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import ElementParser from './ElementParser.js';

export default class EWCSparklinebox extends Ext_sparkline_Box {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebox';
  }
}
window.customElements.define('ext-sparklinebox', ElementParser.withParsedCallback(EWCSparklinebox));
