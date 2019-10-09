import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Number from './Ext/form/Number';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtNumberfieldComponent =
/*#__PURE__*/
function (_Ext_form_Number) {
  _inheritsLoose(ExtNumberfieldComponent, _Ext_form_Number);

  function ExtNumberfieldComponent() {
    var _this;

    _this = _Ext_form_Number.call(this, [], []) || this;
    _this.xtype = 'numberfield';
    return _this;
  }

  return ExtNumberfieldComponent;
}(Ext_form_Number); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numberfield', ExtNumberfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-numberfield', HTMLParsedElement.withParsedCallback(ExtNumberfieldComponent));