import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_Radio from '@sencha/ext-runtime-base/dist/./Ext/form/Radio.js';
import Ext_form_Radio from './Ext/form/Radio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCRadio =
/*#__PURE__*/
function (_Ext_form_Radio) {
  _inheritsLoose(EWCRadio, _Ext_form_Radio);

  function EWCRadio() {
    var _this;

    _this = _Ext_form_Radio.call(this, [], []) || this;
    _this.xtype = 'radio';
    return _this;
  }

  return EWCRadio;
}(Ext_form_Radio);

export { EWCRadio as default };
window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(EWCRadio));