import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMzpivotgrid extends Mz_pivot_Table {
  constructor() {
    super ([], []);
    this.xtype = 'mzpivotgrid';
  }
}
try {
  if (window.customElements.get('ext-mzpivotgrid') == undefined) {
    window.customElements.define('ext-mzpivotgrid', ElementParser.withParsedCallback(EWCMzpivotgrid));
  }
}
catch(e) {
  if (window.customElements.get('ext-mzpivotgrid') == undefined) {
    window.customElements.define('ext-mzpivotgrid', EWCMzpivotgrid);
  }
}
