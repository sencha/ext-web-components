import Ext_form_Display from './Ext/form/Display.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDisplayfield extends Ext_form_Display {
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
//        window.customElements.define('ext-displayfield', ExtDisplayfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-displayfield', HTMLParsedElement.withParsedCallback(ExtDisplayfield))
//export default reactify(ExtDisplayfield);