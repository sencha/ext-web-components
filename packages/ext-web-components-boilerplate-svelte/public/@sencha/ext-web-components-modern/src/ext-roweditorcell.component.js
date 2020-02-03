import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditorcell extends Ext_grid_rowedit_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorcell';
  }
}
try {
  window.customElements.define('ext-roweditorcell', ElementParser.withParsedCallback(EWCRoweditorcell));
}
catch(e) {
  window.customElements.define('ext-roweditorcell', EWCRoweditorcell);
}
