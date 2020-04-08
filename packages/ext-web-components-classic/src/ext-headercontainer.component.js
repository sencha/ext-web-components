import Ext_grid_header_Container from './Ext/grid/header/Container.js';
import ElementParser from './common/ElementParser.js';

export default class EWCHeadercontainer extends Ext_grid_header_Container {
  constructor() {
    super ([], []);
    this.xtype = 'headercontainer';
  }
}
try {
  if (window.customElements.get('ext-headercontainer') == undefined) {
    window.customElements.define('ext-headercontainer', ElementParser.withParsedCallback(EWCHeadercontainer));
  }
}
catch(e) {
  if (window.customElements.get('ext-headercontainer') == undefined) {
    window.customElements.define('ext-headercontainer', EWCHeadercontainer);
  }
}
