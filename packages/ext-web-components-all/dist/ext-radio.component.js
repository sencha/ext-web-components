import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Radio_Component from './Ext/form/Radio';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRadioComponent =
/*#__PURE__*/
function (_Ext_form_Radio_Compo) {
  _inheritsLoose(ExtRadioComponent, _Ext_form_Radio_Compo);

  function ExtRadioComponent() {
    var _this;

    _this = _Ext_form_Radio_Compo.call(this) || this;
    _this.xtype = 'radio';
    return _this;
  }

  return ExtRadioComponent;
}(Ext_form_Radio_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-radio', ExtRadioComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(ExtRadioComponent));