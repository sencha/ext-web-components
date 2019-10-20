import Ext_form_Toggle from './Ext/form/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTogglefield extends Ext_form_Toggle {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'togglefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-togglefield', ExtTogglefield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-togglefield', HTMLParsedElement.withParsedCallback(ExtTogglefield))
//export default reactify(ExtTogglefield);