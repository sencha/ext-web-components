import Ext_grid_Grid from './Ext/grid/Grid.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGrid extends Ext_grid_Grid {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'grid'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-grid', ExtGrid);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-grid', HTMLParsedElement.withParsedCallback(ExtGrid))
//export default reactify(ExtGrid);