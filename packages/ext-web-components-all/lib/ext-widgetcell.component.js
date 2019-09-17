import Ext_grid_cell_Widget_Component from './Ext/grid/cell/Widget'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtWidgetcellComponent extends Ext_grid_cell_Widget_Component {
    constructor() {
        super ()
        this.xtype = 'widgetcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-widgetcell', ExtWidgetcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-widgetcell', HTMLParsedElement.withParsedCallback(ExtWidgetcellComponent))
