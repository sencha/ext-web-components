import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Toggle from './Ext/form/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTogglefield =
/*#__PURE__*/
function (_Ext_form_Toggle) {
  _inheritsLoose(ExtTogglefield, _Ext_form_Toggle);

  function ExtTogglefield() {
    var _this;

    _this = _Ext_form_Toggle.call(this, [], []) || this;
    _this.xtype = 'togglefield';
    return _this;
  }

  return ExtTogglefield;
}(Ext_form_Toggle); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-togglefield', ExtTogglefield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTogglefield as default };
window.customElements.define('ext-togglefield', HTMLParsedElement.withParsedCallback(ExtTogglefield)); //export default reactify(ExtTogglefield);