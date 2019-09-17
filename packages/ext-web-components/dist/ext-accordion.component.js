import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Accordion_Component from './Ext/panel/Accordion';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtAccordionComponent =
/*#__PURE__*/
function (_Ext_panel_Accordion_) {
  _inheritsLoose(ExtAccordionComponent, _Ext_panel_Accordion_);

  function ExtAccordionComponent() {
    var _this;

    _this = _Ext_panel_Accordion_.call(this, {}, [], []) || this;
    _this.xtype = 'accordion';
    return _this;
  }

  return ExtAccordionComponent;
}(Ext_panel_Accordion_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-accordion', ExtAccordionComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-accordion', HTMLParsedElement.withParsedCallback(ExtAccordionComponent));