import Ext_ActionSheet from './Ext/ActionSheet.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtActionsheetComponent extends Ext_ActionSheet {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'actionsheet'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-actionsheet', ExtActionsheetComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(ExtActionsheetComponent))
