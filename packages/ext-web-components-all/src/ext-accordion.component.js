import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtAccordion extends Ext_panel_Accordion {
    constructor() {
        super ([],[])
        this.xtype = 'accordion';
    }
}
window.customElements.define('ext-accordion', HTMLParsedElement.withParsedCallback(ExtAccordion))
