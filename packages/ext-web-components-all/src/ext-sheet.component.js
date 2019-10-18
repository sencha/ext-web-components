import Ext_Sheet from './Ext/Sheet.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSheetComponent extends Ext_Sheet {
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
//        window.customElements.define('ext-sheet', ExtSheetComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(ExtSheetComponent))
