import Ext_grid_cell_Base_Component from './Ext/grid/cell/Base'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridcellbaseComponent extends Ext_grid_cell_Base_Component {
    constructor() {
        super ()
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
