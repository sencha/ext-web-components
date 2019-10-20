import Ext_form_Hidden from './Ext/form/Hidden.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtHiddenfield extends Ext_form_Hidden {
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
//        window.customElements.define('ext-hiddenfield', ExtHiddenfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-hiddenfield', HTMLParsedElement.withParsedCallback(ExtHiddenfield))
//export default reactify(ExtHiddenfield);