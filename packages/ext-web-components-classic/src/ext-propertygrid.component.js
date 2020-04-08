import Ext_grid_PropertyGrid from './Ext/grid/PropertyGrid.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPropertygrid extends Ext_grid_PropertyGrid {
  constructor() {
    super ([], []);
    this.xtype = 'propertygrid';
  }
}
try {
  if (window.customElements.get('ext-propertygrid') == undefined) {
    window.customElements.define('ext-propertygrid', ElementParser.withParsedCallback(EWCPropertygrid));
  }
}
catch(e) {
  if (window.customElements.get('ext-propertygrid') == undefined) {
    window.customElements.define('ext-propertygrid', EWCPropertygrid);
  }
}
