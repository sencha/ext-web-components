import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Label from '@sencha/ext-runtime-base/dist/./Ext/Label.js';
import Ext_Label from './Ext/Label.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCLabel =
/*#__PURE__*/
function (_Ext_Label) {
  _inheritsLoose(EWCLabel, _Ext_Label);

  function EWCLabel() {
    var _this;

    _this = _Ext_Label.call(this, [], []) || this;
    _this.xtype = 'label';
    return _this;
  }

  return EWCLabel;
}(Ext_Label);

export { EWCLabel as default };
window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(EWCLabel));