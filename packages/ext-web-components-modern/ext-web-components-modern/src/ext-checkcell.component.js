import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCheckcell extends Ext_grid_cell_Check {
  constructor() {
    super ([], []);
    this.xtype = 'checkcell';
  }
}
try {
  if (window.customElements.get('ext-checkcell') == undefined) {
    window.customElements.define('ext-checkcell', ElementParser.withParsedCallback(EWCCheckcell));
  }
}
catch(e) {
  if (window.customElements.get('ext-checkcell') == undefined) {
    window.customElements.define('ext-checkcell', EWCCheckcell);
  }
}
