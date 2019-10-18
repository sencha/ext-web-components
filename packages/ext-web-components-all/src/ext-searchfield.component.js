import Ext_form_Search from './Ext/form/Search.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSearchfieldComponent extends Ext_form_Search {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'searchfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-searchfield', ExtSearchfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(ExtSearchfieldComponent))
