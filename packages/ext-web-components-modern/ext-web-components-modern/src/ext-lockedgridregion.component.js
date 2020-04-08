import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import ElementParser from './common/ElementParser.js';

export default class EWCLockedgridregion extends Ext_grid_LockedGridRegion {
  constructor() {
    super ([], []);
    this.xtype = 'lockedgridregion';
  }
}
try {
  if (window.customElements.get('ext-lockedgridregion') == undefined) {
    window.customElements.define('ext-lockedgridregion', ElementParser.withParsedCallback(EWCLockedgridregion));
  }
}
catch(e) {
  if (window.customElements.get('ext-lockedgridregion') == undefined) {
    window.customElements.define('ext-lockedgridregion', EWCLockedgridregion);
  }
}
