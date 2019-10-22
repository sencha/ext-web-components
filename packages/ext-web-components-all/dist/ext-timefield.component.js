import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Time from './Ext/field/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTimefield =
/*#__PURE__*/
function (_Ext_field_Time) {
  _inheritsLoose(ExtTimefield, _Ext_field_Time);

  function ExtTimefield() {
    var _this;

    _this = _Ext_field_Time.call(this, [], []) || this;
    _this.xtype = 'timefield';
    return _this;
  }

  return ExtTimefield;
}(Ext_field_Time);

export { ExtTimefield as default };
window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(ExtTimefield));