import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import ElementParser from './common/ElementParser.js';

var EWCAccordion = /*#__PURE__*/function (_Ext_panel_Accordion) {
  _inheritsLoose(EWCAccordion, _Ext_panel_Accordion);

  function EWCAccordion() {
    var _this;

    _this = _Ext_panel_Accordion.call(this, [], []) || this;
    _this.xtype = 'accordion';
    return _this;
  }

  return EWCAccordion;
}(Ext_panel_Accordion);

export { EWCAccordion as default };

try {
  if (window.customElements.get('ext-accordion') == undefined) {
    window.customElements.define('ext-accordion', ElementParser.withParsedCallback(EWCAccordion));
  }
} catch (e) {
  if (window.customElements.get('ext-accordion') == undefined) {
    window.customElements.define('ext-accordion', EWCAccordion);
  }
}