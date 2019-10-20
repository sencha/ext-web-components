import Ext_form_Url from './Ext/form/Url.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtUrlfield extends Ext_form_Url {
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
//        window.customElements.define('ext-urlfield', ExtUrlfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-urlfield', HTMLParsedElement.withParsedCallback(ExtUrlfield))
//export default reactify(ExtUrlfield);