import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Radio_Component from './Ext/form/Radio';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRadiofieldComponent =
/*#__PURE__*/
function (_Ext_form_Radio_Compo) {
  _inheritsLoose(ExtRadiofieldComponent, _Ext_form_Radio_Compo);

  function ExtRadiofieldComponent() {
    var _this;

    _this = _Ext_form_Radio_Compo.call(this) || this;
    _this.xtype = 'radiofield';
    return _this;
  }

  return ExtRadiofieldComponent;
}(Ext_form_Radio_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-radiofield', ExtRadiofieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-radiofield', HTMLParsedElement.withParsedCallback(ExtRadiofieldComponent));