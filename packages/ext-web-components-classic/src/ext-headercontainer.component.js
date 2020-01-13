import Ext_grid_header_Container from './Ext/grid/header/Container.js';
import ElementParser from './ElementParser.js';

export default class EWCHeadercontainer extends Ext_grid_header_Container {
  constructor() {
    super ([], []);
    this.xtype = 'headercontainer';
  }
}
window.customElements.define('ext-headercontainer', ElementParser.withParsedCallback(EWCHeadercontainer));
