import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import ElementParser from './ElementParser.js';

export default class EWCAccordion extends Ext_panel_Accordion {
  constructor() {
    super ([], []);
    this.xtype = 'accordion';
  }
}
window.customElements.define('ext-accordion', ElementParser.withParsedCallback(EWCAccordion));
