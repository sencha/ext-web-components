import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCelleditor extends Ext_grid_CellEditor {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'celleditor'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-celleditor', ExtCelleditor);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-celleditor', HTMLParsedElement.withParsedCallback(ExtCelleditor))
//export default reactify(ExtCelleditor);