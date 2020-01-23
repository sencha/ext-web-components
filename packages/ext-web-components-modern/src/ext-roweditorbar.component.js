import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditorbar extends Ext_grid_rowedit_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorbar';
  }
}
try {
  window.customElements.define('ext-roweditorbar', ElementParser.withParsedCallback(EWCRoweditorbar));
}
catch(e) {
  window.customElements.define('ext-roweditorbar', EWCRoweditorbar);
}
