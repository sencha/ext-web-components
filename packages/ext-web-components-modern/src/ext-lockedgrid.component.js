import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import ElementParser from './ElementParser.js';

export default class EWCLockedgrid extends Ext_grid_LockedGrid {
  constructor() {
    super ([], []);
    this.xtype = 'lockedgrid';
  }
}
window.customElements.define('ext-lockedgrid', ElementParser.withParsedCallback(EWCLockedgrid));
