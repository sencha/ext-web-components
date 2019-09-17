import Ext_grid_Grid_Component from './Ext/grid/Grid'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridComponent extends Ext_grid_Grid_Component {
    constructor() {
        super (
            {},
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
