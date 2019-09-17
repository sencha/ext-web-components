import Ext_pivot_Grid_Component from './Ext/pivot/Grid'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotgridComponent extends Ext_pivot_Grid_Component {
    constructor() {
        super (
            {},
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
