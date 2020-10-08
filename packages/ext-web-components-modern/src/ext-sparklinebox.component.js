import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparklinebox extends Ext_sparkline_Box {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebox';
  }
}
try {
  if (window.customElements.get('ext-sparklinebox') == undefined) {
    window.customElements.define('ext-sparklinebox', ElementParser.withParsedCallback(EWCSparklinebox));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparklinebox') == undefined) {
    window.customElements.define('ext-sparklinebox', EWCSparklinebox);
  }
}
