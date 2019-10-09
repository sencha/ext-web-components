import Ext_Sheet from './Ext/Sheet'
import HTMLParsedElement from './HTMLParsedElement'

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
