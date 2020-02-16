import Ext_grid_column_Widget from './Ext/grid/column/Widget.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCWidgetcolumn extends Ext_grid_column_Widget {
  constructor() {
    super ([], []);
    this.xtype = 'widgetcolumn';
  }
}
try {
  window.customElements.define('ext-widgetcolumn', ElementParser.withParsedCallback(EWCWidgetcolumn));
}
catch(e) {
  window.customElements.define('ext-widgetcolumn', EWCWidgetcolumn);
}
