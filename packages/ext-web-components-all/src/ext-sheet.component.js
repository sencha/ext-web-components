import Ext_Sheet from './Ext/Sheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSheet extends Ext_Sheet {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sheet'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sheet', ExtSheet);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(ExtSheet))
//export default reactify(ExtSheet);