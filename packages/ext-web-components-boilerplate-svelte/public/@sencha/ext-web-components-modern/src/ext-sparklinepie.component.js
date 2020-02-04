import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import ElementParser from './ElementParser.js';

export default class EWCSparklinepie extends Ext_sparkline_Pie {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinepie';
  }
}
try {
  window.customElements.define('ext-sparklinepie', ElementParser.withParsedCallback(EWCSparklinepie));
}
catch(e) {
  window.customElements.define('ext-sparklinepie', EWCSparklinepie);
}
