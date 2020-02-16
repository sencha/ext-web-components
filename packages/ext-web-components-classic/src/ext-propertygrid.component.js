import Ext_grid_PropertyGrid from './Ext/grid/PropertyGrid.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPropertygrid extends Ext_grid_PropertyGrid {
  constructor() {
    super ([], []);
    this.xtype = 'propertygrid';
  }
}
try {
  window.customElements.define('ext-propertygrid', ElementParser.withParsedCallback(EWCPropertygrid));
}
catch(e) {
  window.customElements.define('ext-propertygrid', EWCPropertygrid);
}
