import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotgrid extends Mz_pivot_Table {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgrid';
  }
}
try {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', EWCPivotgrid);
  }
}
