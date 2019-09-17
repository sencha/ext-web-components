import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Hidden_Component from './Ext/form/Hidden';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtHiddenfieldComponent =
/*#__PURE__*/
function (_Ext_form_Hidden_Comp) {
  _inheritsLoose(ExtHiddenfieldComponent, _Ext_form_Hidden_Comp);

  function ExtHiddenfieldComponent() {
    var _this;

    _this = _Ext_form_Hidden_Comp.call(this) || this;
    _this.xtype = 'hiddenfield';
    return _this;
  }

  return ExtHiddenfieldComponent;
}(Ext_form_Hidden_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-hiddenfield', ExtHiddenfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-hiddenfield', HTMLParsedElement.withParsedCallback(ExtHiddenfieldComponent));