import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotgrid extends Ext_pivot_Grid {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgrid';
  }
}
window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
