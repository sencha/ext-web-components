import Ext_form_Select from './Ext/form/Select.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSelectfieldComponent extends Ext_form_Select {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'selectfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectfield', ExtSelectfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(ExtSelectfieldComponent))
