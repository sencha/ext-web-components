import Ext_pivot_Row from './Ext/pivot/Row'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotgridrowComponent extends Ext_pivot_Row {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotgridrow'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridrow', ExtPivotgridrowComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(ExtPivotgridrowComponent))
