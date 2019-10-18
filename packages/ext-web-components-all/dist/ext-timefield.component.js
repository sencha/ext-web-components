import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Time from './Ext/field/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTimefieldComponent =
/*#__PURE__*/
function (_Ext_field_Time) {
  _inheritsLoose(ExtTimefieldComponent, _Ext_field_Time);

  function ExtTimefieldComponent() {
    var _this;

    _this = _Ext_field_Time.call(this, [], []) || this;
    _this.xtype = 'timefield';
    return _this;
  }

  return ExtTimefieldComponent;
}(Ext_field_Time); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-timefield', ExtTimefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(ExtTimefieldComponent));