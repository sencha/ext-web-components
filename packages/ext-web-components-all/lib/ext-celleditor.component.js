import Ext_grid_CellEditor_Component from './Ext/grid/CellEditor'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCelleditorComponent extends Ext_grid_CellEditor_Component {
    constructor() {
        super ()
        this.xtype = 'celleditor'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-celleditor', ExtCelleditorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-celleditor', HTMLParsedElement.withParsedCallback(ExtCelleditorComponent))
