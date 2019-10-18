import Ext_form_Hidden from './Ext/form/Hidden.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtHiddenfieldComponent extends Ext_form_Hidden {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'hiddenfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-hiddenfield', ExtHiddenfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-hiddenfield', HTMLParsedElement.withParsedCallback(ExtHiddenfieldComponent))
