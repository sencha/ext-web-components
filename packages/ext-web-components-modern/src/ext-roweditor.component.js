import Ext_grid_rowedit_Editor from './Ext/grid/rowedit/Editor.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditor extends Ext_grid_rowedit_Editor {
  constructor() {
    super ([], []);
    this.xtype = 'roweditor';
  }
}
window.customElements.define('ext-roweditor', ElementParser.withParsedCallback(EWCRoweditor));
