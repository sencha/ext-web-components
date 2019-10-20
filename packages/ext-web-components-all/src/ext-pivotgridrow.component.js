import Ext_pivot_Row from './Ext/pivot/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotgridrow extends Ext_pivot_Row {
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
//        window.customElements.define('ext-pivotgridrow', ExtPivotgridrow);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(ExtPivotgridrow))
//export default reactify(ExtPivotgridrow);