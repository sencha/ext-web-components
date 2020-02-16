import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCWidgetcell extends Ext_grid_cell_Widget {
  constructor() {
    super ([], []);
    this.xtype = 'widgetcell';
  }
}
try {
  window.customElements.define('ext-widgetcell', ElementParser.withParsedCallback(EWCWidgetcell));
}
catch(e) {
  window.customElements.define('ext-widgetcell', EWCWidgetcell);
}
