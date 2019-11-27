import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Spacer from '@sencha/ext-runtime-base/dist/./Ext/Spacer.js';
import Ext_Spacer from './Ext/Spacer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSpacer =
/*#__PURE__*/
function (_Ext_Spacer) {
  _inheritsLoose(EWCSpacer, _Ext_Spacer);

  function EWCSpacer() {
    var _this;

    _this = _Ext_Spacer.call(this, [], []) || this;
    _this.xtype = 'spacer';
    return _this;
  }

  return EWCSpacer;
}(Ext_Spacer);

export { EWCSpacer as default };
window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(EWCSpacer));