import Ext_grid_RowEditor from './Ext/grid/RowEditor.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRoweditor extends Ext_grid_RowEditor {
  constructor() {
    super ([], []);
    this.xtype = 'roweditor';
  }
}
try {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', ElementParser.withParsedCallback(EWCRoweditor));
  }
}
catch(e) {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', EWCRoweditor);
  }
}
