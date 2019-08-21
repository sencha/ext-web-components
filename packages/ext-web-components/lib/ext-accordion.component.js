import Ext_panel_Accordion_Component from './Ext/panel/Accordion'

export class ExtAccordionComponent extends Ext_panel_Accordion_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-accordion', ExtAccordionComponent);
    });
})();
