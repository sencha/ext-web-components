import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCelleditor extends Ext_grid_CellEditor {
  constructor() {
    super ([], []);
    this.xtype = 'celleditor';
  }
}
try {
  if (window.customElements.get('ext-celleditor') == undefined) {
    window.customElements.define('ext-celleditor', ElementParser.withParsedCallback(EWCCelleditor));
  }
}
catch(e) {
  if (window.customElements.get('ext-celleditor') == undefined) {
    window.customElements.define('ext-celleditor', EWCCelleditor);
  }
}
