import Ext_pivot_Row from './Ext/pivot/Row.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotgridrow extends Ext_pivot_Row {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgridrow';
  }
}
try {
  if (window.customElements.get('ext-pivotgridrow') == undefined) {
    window.customElements.define('ext-pivotgridrow', ElementParser.withParsedCallback(EWCPivotgridrow));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotgridrow') == undefined) {
    window.customElements.define('ext-pivotgridrow', EWCPivotgridrow);
  }
}
