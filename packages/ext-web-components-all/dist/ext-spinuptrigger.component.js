import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSpinuptrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(ExtSpinuptrigger, _Ext_field_trigger_Sp);

  function ExtSpinuptrigger() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spinuptrigger';
    return _this;
  }

  return ExtSpinuptrigger;
}(Ext_field_trigger_SpinUp); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinuptrigger', ExtSpinuptrigger);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSpinuptrigger as default };
window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(ExtSpinuptrigger)); //export default reactify(ExtSpinuptrigger);