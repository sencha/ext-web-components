import Ext_grid_SummaryRow_Component from './Ext/grid/SummaryRow'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridsummaryrowComponent extends Ext_grid_SummaryRow_Component {
    constructor() {
        super (
            {},
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
