import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtAccordionComponent =
/*#__PURE__*/
function (_Ext_panel_Accordion) {
  _inheritsLoose(ExtAccordionComponent, _Ext_panel_Accordion);

  function ExtAccordionComponent() {
    var _this;

    _this = _Ext_panel_Accordion.call(this, [], []) || this;
    _this.xtype = 'accordion';
    return _this;
  }

  return ExtAccordionComponent;
}(Ext_panel_Accordion); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-accordion', ExtAccordionComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-accordion', HTMLParsedElement.withParsedCallback(ExtAccordionComponent));