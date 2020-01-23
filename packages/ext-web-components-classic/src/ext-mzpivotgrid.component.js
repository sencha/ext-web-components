import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './ElementParser.js';

export default class EWCMzpivotgrid extends Mz_pivot_Table {
  constructor() {
    super ([], []);
    this.xtype = 'mzpivotgrid';
  }
}
try {
  window.customElements.define('ext-mzpivotgrid', ElementParser.withParsedCallback(EWCMzpivotgrid));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-mzpivotgrid', EWCMzpivotgrid);
}
