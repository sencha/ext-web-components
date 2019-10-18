import Ext_pivot_Grid from './Ext/pivot/Grid.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPivotgridComponent extends Ext_pivot_Grid {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotgrid'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgrid', ExtPivotgridComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgrid', HTMLParsedElement.withParsedCallback(ExtPivotgridComponent))
