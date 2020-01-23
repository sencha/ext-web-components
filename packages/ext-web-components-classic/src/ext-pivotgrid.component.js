import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotgrid extends Mz_pivot_Table {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgrid';
  }
}
try {
  window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-pivotgrid', EWCPivotgrid);
}
