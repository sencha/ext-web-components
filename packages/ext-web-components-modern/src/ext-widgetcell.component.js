//import Ext_grid_cell_Widget from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Widget.js';
import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCWidgetcell extends Ext_grid_cell_Widget {
    constructor() {
        super ([], []);
        this.xtype = 'widgetcell';
    }

}
window.customElements.define('ext-widgetcell', HTMLParsedElement.withParsedCallback(EWCWidgetcell));

