import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotgrid extends Ext_pivot_Grid {
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
//        window.customElements.define('ext-pivotgrid', ExtPivotgrid);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgrid', HTMLParsedElement.withParsedCallback(ExtPivotgrid))
//export default reactify(ExtPivotgrid);