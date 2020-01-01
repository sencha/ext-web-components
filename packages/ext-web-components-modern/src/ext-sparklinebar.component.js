import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import ElementParser from './ElementParser.js';

export default class EWCSparklinebar extends Ext_sparkline_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebar';
  }
}
window.customElements.define('ext-sparklinebar', ElementParser.withParsedCallback(EWCSparklinebar));
