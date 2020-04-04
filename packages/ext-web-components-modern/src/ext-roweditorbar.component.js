import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRoweditorbar extends Ext_grid_rowedit_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorbar';
  }
}
try {
  if (window.customElements.get('ext-roweditorbar') == undefined) {
    window.customElements.define('ext-roweditorbar', ElementParser.withParsedCallback(EWCRoweditorbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-roweditorbar') == undefined) {
    window.customElements.define('ext-roweditorbar', EWCRoweditorbar);
  }
}
