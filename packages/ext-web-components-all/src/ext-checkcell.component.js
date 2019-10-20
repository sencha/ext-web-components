import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCheckcell extends Ext_grid_cell_Check {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'checkcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkcell', ExtCheckcell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkcell', HTMLParsedElement.withParsedCallback(ExtCheckcell))
//export default reactify(ExtCheckcell);