import Ext_grid_column_Widget from './Ext/grid/column/Widget.js';
import ElementParser from './common/ElementParser.js';

export default class EWCWidgetcolumn extends Ext_grid_column_Widget {
  constructor() {
    super ([], []);
    this.xtype = 'widgetcolumn';
  }
}
try {
  if (window.customElements.get('ext-widgetcolumn') == undefined) {
    window.customElements.define('ext-widgetcolumn', ElementParser.withParsedCallback(EWCWidgetcolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-widgetcolumn') == undefined) {
    window.customElements.define('ext-widgetcolumn', EWCWidgetcolumn);
  }
}
