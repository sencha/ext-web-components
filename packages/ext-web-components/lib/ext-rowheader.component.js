import Ext_grid_RowHeader_Component from './Ext/grid/RowHeader'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRowheaderComponent extends Ext_grid_RowHeader_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'rowheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rowheader', ExtRowheaderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rowheader', HTMLParsedElement.withParsedCallback(ExtRowheaderComponent))
