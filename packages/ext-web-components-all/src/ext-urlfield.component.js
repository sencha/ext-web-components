import Ext_form_Url from './Ext/form/Url.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtUrlfieldComponent extends Ext_form_Url {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'urlfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-urlfield', ExtUrlfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-urlfield', HTMLParsedElement.withParsedCallback(ExtUrlfieldComponent))
