import Ext_form_Select from './Ext/form/Select.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSelectfield extends Ext_form_Select {
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
//        window.customElements.define('ext-selectfield', ExtSelectfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(ExtSelectfield))
//export default reactify(ExtSelectfield);