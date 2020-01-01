import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import ElementParser from './ElementParser.js';

export default class EWCSparkline extends Ext_sparkline_Base {
  constructor() {
    super ([], []);
    this.xtype = 'sparkline';
  }
}
window.customElements.define('ext-sparkline', ElementParser.withParsedCallback(EWCSparkline));
