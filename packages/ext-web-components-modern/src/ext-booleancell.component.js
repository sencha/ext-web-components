import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import ElementParser from './common/ElementParser.js';

export default class EWCBooleancell extends Ext_grid_cell_Boolean {
  constructor() {
    super ([], []);
    this.xtype = 'booleancell';
  }
}
try {
  if (window.customElements.get('ext-booleancell') == undefined) {
    window.customElements.define('ext-booleancell', ElementParser.withParsedCallback(EWCBooleancell));
  }
}
catch(e) {
  if (window.customElements.get('ext-booleancell') == undefined) {
    window.customElements.define('ext-booleancell', EWCBooleancell);
  }
}
