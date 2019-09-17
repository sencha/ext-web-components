import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Search_Component from './Ext/form/Search';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSearchfieldComponent =
/*#__PURE__*/
function (_Ext_form_Search_Comp) {
  _inheritsLoose(ExtSearchfieldComponent, _Ext_form_Search_Comp);

  function ExtSearchfieldComponent() {
    var _this;

    _this = _Ext_form_Search_Comp.call(this) || this;
    _this.xtype = 'searchfield';
    return _this;
  }

  return ExtSearchfieldComponent;
}(Ext_form_Search_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-searchfield', ExtSearchfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(ExtSearchfieldComponent));