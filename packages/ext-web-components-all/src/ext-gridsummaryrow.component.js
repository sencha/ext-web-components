import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridsummaryrow extends Ext_grid_SummaryRow {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridsummaryrow'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsummaryrow', ExtGridsummaryrow);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridsummaryrow', HTMLParsedElement.withParsedCallback(ExtGridsummaryrow))
//export default reactify(ExtGridsummaryrow);