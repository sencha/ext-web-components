import Ext_form_Display from './Ext/form/Display.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDisplayfieldComponent extends Ext_form_Display {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'displayfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-displayfield', ExtDisplayfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-displayfield', HTMLParsedElement.withParsedCallback(ExtDisplayfieldComponent))
