import Ext_grid_RowHeader from './Ext/grid/RowHeader.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRowheaderComponent extends Ext_grid_RowHeader {
    constructor() {
        super (
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
