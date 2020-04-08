import Ext_grid_RowEditorButtons from './Ext/grid/RowEditorButtons.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRoweditorbuttons extends Ext_grid_RowEditorButtons {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorbuttons';
  }
}
try {
  if (window.customElements.get('ext-roweditorbuttons') == undefined) {
    window.customElements.define('ext-roweditorbuttons', ElementParser.withParsedCallback(EWCRoweditorbuttons));
  }
}
catch(e) {
  if (window.customElements.get('ext-roweditorbuttons') == undefined) {
    window.customElements.define('ext-roweditorbuttons', EWCRoweditorbuttons);
  }
}
