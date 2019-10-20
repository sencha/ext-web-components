import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtWidgetcell extends Ext_grid_cell_Widget {
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
//        window.customElements.define('ext-widgetcell', ExtWidgetcell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-widgetcell', HTMLParsedElement.withParsedCallback(ExtWidgetcell))
//export default reactify(ExtWidgetcell);