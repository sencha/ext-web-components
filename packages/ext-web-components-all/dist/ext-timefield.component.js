import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Time_Component from './Ext/field/Time';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTimefieldComponent =
/*#__PURE__*/
function (_Ext_field_Time_Compo) {
  _inheritsLoose(ExtTimefieldComponent, _Ext_field_Time_Compo);

  function ExtTimefieldComponent() {
    var _this;

    _this = _Ext_field_Time_Compo.call(this) || this;
    _this.xtype = 'timefield';
    return _this;
  }

  return ExtTimefieldComponent;
}(Ext_field_Time_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-timefield', ExtTimefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(ExtTimefieldComponent));