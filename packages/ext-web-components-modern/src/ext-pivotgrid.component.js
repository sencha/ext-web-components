import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPivotgrid extends Ext_pivot_Grid {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgrid';
  }
}
try {
  window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
}
catch(e) {
  window.customElements.define('ext-pivotgrid', EWCPivotgrid);
}
