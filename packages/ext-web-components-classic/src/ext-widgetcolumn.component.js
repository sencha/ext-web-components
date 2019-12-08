//import Ext_grid_column_Widget from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Widget.js';
import Ext_grid_column_Widget from './Ext/grid/column/Widget.js';
import ElementParser from './ElementParser.js';

export default class EWCWidgetcolumn extends Ext_grid_column_Widget {
    constructor() {
        super ([], []);
        this.xtype = 'widgetcolumn';
    }

}
window.customElements.define('ext-widgetcolumn', ElementParser.withParsedCallback(EWCWidgetcolumn));

