import Ext_grid_cell_Base from './Ext/grid/cell/Base.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtGridcellbaseComponent extends Ext_grid_cell_Base {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridcellbase'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcellbase', ExtGridcellbaseComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcellbase', HTMLParsedElement.withParsedCallback(ExtGridcellbaseComponent))
