import Ext_panel_Accordion from './Ext/panel/Accordion'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtAccordionComponent extends Ext_panel_Accordion {
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
//        window.customElements.define('ext-accordion', ExtAccordionComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-accordion', HTMLParsedElement.withParsedCallback(ExtAccordionComponent))
