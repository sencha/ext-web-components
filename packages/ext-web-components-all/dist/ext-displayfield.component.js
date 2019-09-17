import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Display_Component from './Ext/form/Display';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDisplayfieldComponent =
/*#__PURE__*/
function (_Ext_form_Display_Com) {
  _inheritsLoose(ExtDisplayfieldComponent, _Ext_form_Display_Com);

  function ExtDisplayfieldComponent() {
    var _this;

    _this = _Ext_form_Display_Com.call(this) || this;
    _this.xtype = 'displayfield';
    return _this;
  }

  return ExtDisplayfieldComponent;
}(Ext_form_Display_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-displayfield', ExtDisplayfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-displayfield', HTMLParsedElement.withParsedCallback(ExtDisplayfieldComponent));