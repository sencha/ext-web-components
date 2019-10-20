import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRowheader extends Ext_grid_RowHeader {
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
//        window.customElements.define('ext-rowheader', ExtRowheader);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rowheader', HTMLParsedElement.withParsedCallback(ExtRowheader))
//export default reactify(ExtRowheader);