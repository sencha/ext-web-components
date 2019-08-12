import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Accordion_Component from './Ext/panel/Accordion';
export var ExtAccordionComponent =
/*#__PURE__*/
function (_Ext_panel_Accordion_) {
  _inheritsLoose(ExtAccordionComponent, _Ext_panel_Accordion_);

  function ExtAccordionComponent() {
    return _Ext_panel_Accordion_.call(this, '', '', {}, '') || this;
  }

  return ExtAccordionComponent;
}(Ext_panel_Accordion_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-accordion', ExtAccordionComponent);
  });
})();