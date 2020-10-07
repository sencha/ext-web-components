import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTextcell extends Ext_grid_cell_Text {
  constructor() {
    super ([], []);
    this.xtype = 'textcell';
  }
}
try {
  if (window.customElements.get('ext-textcell') == undefined) {
    window.customElements.define('ext-textcell', ElementParser.withParsedCallback(EWCTextcell));
  }
}
catch(e) {
  if (window.customElements.get('ext-textcell') == undefined) {
    window.customElements.define('ext-textcell', EWCTextcell);
  }
}
