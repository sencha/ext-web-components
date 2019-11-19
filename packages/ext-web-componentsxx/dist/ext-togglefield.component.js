import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Toggle from './Ext/form/Toggle';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTogglefieldComponent =
/*#__PURE__*/
function (_Ext_form_Toggle) {
  _inheritsLoose(ExtTogglefieldComponent, _Ext_form_Toggle);

  function ExtTogglefieldComponent() {
    var _this;

    _this = _Ext_form_Toggle.call(this, [], []) || this;
    _this.xtype = 'togglefield';
    return _this;
  }

  return ExtTogglefieldComponent;
}(Ext_form_Toggle); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-togglefield', ExtTogglefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-togglefield', HTMLParsedElement.withParsedCallback(ExtTogglefieldComponent));