import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import ElementParser from './ElementParser.js';

export default class EWCWidgetcell extends Ext_grid_cell_Widget {
  constructor() {
    super ([], []);
    this.xtype = 'widgetcell';
  }
}
window.customElements.define('ext-widgetcell', ElementParser.withParsedCallback(EWCWidgetcell));