import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import ElementParser from './common/ElementParser.js';

export default class EWCAccordion extends Ext_panel_Accordion {
  constructor() {
    super ([], []);
    this.xtype = 'accordion';
  }
}
try {
  if (window.customElements.get('ext-accordion') == undefined) {
    window.customElements.define('ext-accordion', ElementParser.withParsedCallback(EWCAccordion));
  }
}
catch(e) {
  if (window.customElements.get('ext-accordion') == undefined) {
    window.customElements.define('ext-accordion', EWCAccordion);
  }
}
