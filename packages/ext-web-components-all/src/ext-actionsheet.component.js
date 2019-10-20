import Ext_ActionSheet from './Ext/ActionSheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtActionsheet extends Ext_ActionSheet {
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
//        window.customElements.define('ext-actionsheet', ExtActionsheet);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(ExtActionsheet))
//export default reactify(ExtActionsheet);