import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCHeadercontainer extends Ext_grid_HeaderContainer {
  constructor() {
    super ([], []);
    this.xtype = 'headercontainer';
  }
}
try {
  window.customElements.define('ext-headercontainer', ElementParser.withParsedCallback(EWCHeadercontainer));
}
catch(e) {
  window.customElements.define('ext-headercontainer', EWCHeadercontainer);
}
