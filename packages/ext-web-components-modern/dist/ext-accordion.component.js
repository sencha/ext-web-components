import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_panel_Accordion from '@sencha/ext-runtime-base/dist/./Ext/panel/Accordion.js';
import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCAccordion =
/*#__PURE__*/
function (_Ext_panel_Accordion) {
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
window.customElements.define('ext-accordion', HTMLParsedElement.withParsedCallback(EWCAccordion));