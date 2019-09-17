import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Spinner_Component from './Ext/form/Spinner';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSpinnerfieldComponent =
/*#__PURE__*/
function (_Ext_form_Spinner_Com) {
  _inheritsLoose(ExtSpinnerfieldComponent, _Ext_form_Spinner_Com);

  function ExtSpinnerfieldComponent() {
    var _this;

    _this = _Ext_form_Spinner_Com.call(this, {}, [], []) || this;
    _this.xtype = 'spinnerfield';
    return _this;
  }

  return ExtSpinnerfieldComponent;
}(Ext_form_Spinner_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinnerfield', ExtSpinnerfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(ExtSpinnerfieldComponent));