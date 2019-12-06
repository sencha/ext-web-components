import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_Time from '@sencha/ext-runtime-base/dist/./Ext/field/Time.js';
import Ext_field_Time from './Ext/field/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTimefield =
/*#__PURE__*/
function (_Ext_field_Time) {
  _inheritsLoose(EWCTimefield, _Ext_field_Time);

  function EWCTimefield() {
    var _this;

    _this = _Ext_field_Time.call(this, [], []) || this;
    _this.xtype = 'timefield';
    return _this;
  }

  return EWCTimefield;
}(Ext_field_Time);

export { EWCTimefield as default };
window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(EWCTimefield));