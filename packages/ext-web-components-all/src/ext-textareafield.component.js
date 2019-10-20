import Ext_form_TextArea from './Ext/form/TextArea.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTextareafield extends Ext_form_TextArea {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'textareafield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textareafield', ExtTextareafield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(ExtTextareafield))
//export default reactify(ExtTextareafield);