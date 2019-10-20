import Ext_form_Radio from './Ext/form/Radio.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRadio extends Ext_form_Radio {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'radio'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-radio', ExtRadio);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(ExtRadio))
//export default reactify(ExtRadio);