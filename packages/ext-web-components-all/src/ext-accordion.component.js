import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtAccordion extends Ext_panel_Accordion {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'accordion'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-accordion', ExtAccordion);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-accordion', HTMLParsedElement.withParsedCallback(ExtAccordion))
//export default reactify(ExtAccordion);