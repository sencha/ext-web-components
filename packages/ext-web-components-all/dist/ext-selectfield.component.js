import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Select_Component from './Ext/form/Select';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSelectfieldComponent =
/*#__PURE__*/
function (_Ext_form_Select_Comp) {
  _inheritsLoose(ExtSelectfieldComponent, _Ext_form_Select_Comp);

  function ExtSelectfieldComponent() {
    var _this;

    _this = _Ext_form_Select_Comp.call(this) || this;
    _this.xtype = 'selectfield';
    return _this;
  }

  return ExtSelectfieldComponent;
}(Ext_form_Select_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectfield', ExtSelectfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(ExtSelectfieldComponent));