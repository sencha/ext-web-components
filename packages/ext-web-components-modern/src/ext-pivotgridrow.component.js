import Ext_pivot_Row from './Ext/pivot/Row.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotgridrow extends Ext_pivot_Row {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgridrow';
  }
}
try {
  window.customElements.define('ext-pivotgridrow', ElementParser.withParsedCallback(EWCPivotgridrow));
}
catch(e) {
  window.customElements.define('ext-pivotgridrow', EWCPivotgridrow);
}
