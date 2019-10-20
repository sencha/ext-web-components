import Ext_Spacer from './Ext/Spacer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSpacer extends Ext_Spacer {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spacer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacer', ExtSpacer);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(ExtSpacer))
//export default reactify(ExtSpacer);