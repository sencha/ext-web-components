import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparklinepie extends Ext_sparkline_Pie {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinepie';
  }
}
try {
  if (window.customElements.get('ext-sparklinepie') == undefined) {
    window.customElements.define('ext-sparklinepie', ElementParser.withParsedCallback(EWCSparklinepie));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparklinepie') == undefined) {
    window.customElements.define('ext-sparklinepie', EWCSparklinepie);
  }
}
