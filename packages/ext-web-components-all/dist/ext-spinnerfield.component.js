import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Spinner from './Ext/form/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSpinnerfieldComponent =
/*#__PURE__*/
function (_Ext_form_Spinner) {
  _inheritsLoose(ExtSpinnerfieldComponent, _Ext_form_Spinner);

  function ExtSpinnerfieldComponent() {
    var _this;

    _this = _Ext_form_Spinner.call(this, [], []) || this;
    _this.xtype = 'spinnerfield';
    return _this;
  }

  return ExtSpinnerfieldComponent;
}(Ext_form_Spinner); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinnerfield', ExtSpinnerfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(ExtSpinnerfieldComponent));