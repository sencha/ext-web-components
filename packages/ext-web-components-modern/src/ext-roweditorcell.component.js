import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditorcell extends Ext_grid_rowedit_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorcell';
  }
}
window.customElements.define('ext-roweditorcell', ElementParser.withParsedCallback(EWCRoweditorcell));
