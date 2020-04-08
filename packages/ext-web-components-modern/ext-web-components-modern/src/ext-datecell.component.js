import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatecell extends Ext_grid_cell_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datecell';
  }
}
try {
  if (window.customElements.get('ext-datecell') == undefined) {
    window.customElements.define('ext-datecell', ElementParser.withParsedCallback(EWCDatecell));
  }
}
catch(e) {
  if (window.customElements.get('ext-datecell') == undefined) {
    window.customElements.define('ext-datecell', EWCDatecell);
  }
}
