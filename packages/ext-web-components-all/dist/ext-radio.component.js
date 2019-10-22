import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Radio from './Ext/form/Radio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRadio =
/*#__PURE__*/
function (_Ext_form_Radio) {
  _inheritsLoose(ExtRadio, _Ext_form_Radio);

  function ExtRadio() {
    var _this;

    _this = _Ext_form_Radio.call(this, [], []) || this;
    _this.xtype = 'radio';
    return _this;
  }

  return ExtRadio;
}(Ext_form_Radio);

export { ExtRadio as default };
window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(ExtRadio));