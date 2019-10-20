import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Password from './Ext/form/Password.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPasswordfield =
/*#__PURE__*/
function (_Ext_form_Password) {
  _inheritsLoose(ExtPasswordfield, _Ext_form_Password);

  function ExtPasswordfield() {
    var _this;

    _this = _Ext_form_Password.call(this, [], []) || this;
    _this.xtype = 'passwordfield';
    return _this;
  }

  return ExtPasswordfield;
}(Ext_form_Password); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-passwordfield', ExtPasswordfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPasswordfield as default };
window.customElements.define('ext-passwordfield', HTMLParsedElement.withParsedCallback(ExtPasswordfield)); //export default reactify(ExtPasswordfield);