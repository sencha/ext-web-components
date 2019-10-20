import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtDatefield =
/*#__PURE__*/
function (_Ext_field_DatePicker) {
  _inheritsLoose(ExtDatefield, _Ext_field_DatePicker);

  function ExtDatefield() {
    var _this;

    _this = _Ext_field_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datefield';
    return _this;
  }

  return ExtDatefield;
}(Ext_field_DatePicker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datefield', ExtDatefield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtDatefield as default };
window.customElements.define('ext-datefield', HTMLParsedElement.withParsedCallback(ExtDatefield)); //export default reactify(ExtDatefield);