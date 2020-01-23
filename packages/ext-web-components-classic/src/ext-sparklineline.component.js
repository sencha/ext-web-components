import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import ElementParser from './ElementParser.js';

export default class EWCSparklineline extends Ext_sparkline_Line {
  constructor() {
    super ([], []);
    this.xtype = 'sparklineline';
  }
}
try {
  window.customElements.define('ext-sparklineline', ElementParser.withParsedCallback(EWCSparklineline));
}
catch(e) {
  window.customElements.define('ext-sparklineline', EWCSparklineline);
}
