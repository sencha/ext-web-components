import Ext_form_Search from './Ext/form/Search.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSearchfield extends Ext_form_Search {
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
//        window.customElements.define('ext-searchfield', ExtSearchfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(ExtSearchfield))
//export default reactify(ExtSearchfield);