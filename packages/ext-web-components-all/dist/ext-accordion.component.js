import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtAccordion =
/*#__PURE__*/
function (_Ext_panel_Accordion) {
  _inheritsLoose(ExtAccordion, _Ext_panel_Accordion);

  function ExtAccordion() {
    var _this;

    _this = _Ext_panel_Accordion.call(this, [], []) || this;
    _this.xtype = 'accordion';
    return _this;
  }

  return ExtAccordion;
}(Ext_panel_Accordion); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-accordion', ExtAccordion);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtAccordion as default };
window.customElements.define('ext-accordion', HTMLParsedElement.withParsedCallback(ExtAccordion)); //export default reactify(ExtAccordion);