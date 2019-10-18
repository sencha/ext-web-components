import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtWidgetcellComponent extends Ext_grid_cell_Widget {
    constructor() {
        super (
            [],
            []
        )
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
