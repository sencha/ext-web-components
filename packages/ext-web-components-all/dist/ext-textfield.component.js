import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Text from './Ext/form/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTextfield =
/*#__PURE__*/
function (_Ext_form_Text) {
  _inheritsLoose(ExtTextfield, _Ext_form_Text);

  function ExtTextfield() {
    var _this;

    _this = _Ext_form_Text.call(this, [], []) || this;
    _this.xtype = 'textfield';
    return _this;
  }

  return ExtTextfield;
}(Ext_form_Text); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textfield', ExtTextfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTextfield as default };
window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(ExtTextfield)); //export default reactify(ExtTextfield);