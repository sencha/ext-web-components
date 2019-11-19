import Ext_grid_Grid from './Ext/grid/Grid'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridComponent extends Ext_grid_Grid {
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
//        window.customElements.define('ext-grid', ExtGridComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-grid', HTMLParsedElement.withParsedCallback(ExtGridComponent))
