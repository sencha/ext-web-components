import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtGridsummaryrowComponent extends Ext_grid_SummaryRow {
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
//        window.customElements.define('ext-gridsummaryrow', ExtGridsummaryrowComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridsummaryrow', HTMLParsedElement.withParsedCallback(ExtGridsummaryrowComponent))
