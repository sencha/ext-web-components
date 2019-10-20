import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridcellbase extends Ext_grid_cell_Base {
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
//        window.customElements.define('ext-gridcellbase', ExtGridcellbase);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcellbase', HTMLParsedElement.withParsedCallback(ExtGridcellbase))
//export default reactify(ExtGridcellbase);