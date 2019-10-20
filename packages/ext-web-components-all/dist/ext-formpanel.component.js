import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtFormpanel =
/*#__PURE__*/
function (_Ext_form_FormPanel) {
  _inheritsLoose(ExtFormpanel, _Ext_form_FormPanel);

  function ExtFormpanel() {
    var _this;

    _this = _Ext_form_FormPanel.call(this, [], []) || this;
    _this.xtype = 'formpanel';
    return _this;
  }

  return ExtFormpanel;
}(Ext_form_FormPanel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-formpanel', ExtFormpanel);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtFormpanel as default };
window.customElements.define('ext-formpanel', HTMLParsedElement.withParsedCallback(ExtFormpanel)); //export default reactify(ExtFormpanel);