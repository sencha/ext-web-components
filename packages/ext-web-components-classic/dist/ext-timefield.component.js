import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Time from '@sencha/ext-runtime-base/dist/./Ext/form/Time.js';
import Ext_form_Time from './Ext/form/Time.js';
import ElementParser from './ElementParser.js';

var EWCTimefield =
/*#__PURE__*/
function (_Ext_form_Time) {
  _inheritsLoose(EWCTimefield, _Ext_form_Time);

  function EWCTimefield() {
    var _this;

    _this = _Ext_form_Time.call(this, [], []) || this;
    _this.xtype = 'timefield';
    return _this;
  }

  return EWCTimefield;
}(Ext_form_Time);

export { EWCTimefield as default };
window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));