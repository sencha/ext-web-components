import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import ElementParser from './ElementParser.js';

export default class EWCLockedgridregion extends Ext_grid_LockedGridRegion {
  constructor() {
    super ([], []);
    this.xtype = 'lockedgridregion';
  }
}
window.customElements.define('ext-lockedgridregion', ElementParser.withParsedCallback(EWCLockedgridregion));
