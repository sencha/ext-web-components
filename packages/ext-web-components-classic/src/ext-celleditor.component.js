import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import ElementParser from './ElementParser.js';

export default class EWCCelleditor extends Ext_grid_CellEditor {
  constructor() {
    super ([], []);
    this.xtype = 'celleditor';
  }
}
try {
  window.customElements.define('ext-celleditor', ElementParser.withParsedCallback(EWCCelleditor));
}
catch(e) {
  window.customElements.define('ext-celleditor', EWCCelleditor);
}
