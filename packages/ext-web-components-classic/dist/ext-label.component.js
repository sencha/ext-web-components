import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Label from './Ext/form/Label.js';
import ElementParser from './common/ElementParser.js';

var EWCLabel = /*#__PURE__*/function (_Ext_form_Label) {
  _inheritsLoose(EWCLabel, _Ext_form_Label);

  function EWCLabel() {
    var _this;

    _this = _Ext_form_Label.call(this, [], []) || this;
    _this.xtype = 'label';
    return _this;
  }

  return EWCLabel;
}(Ext_form_Label);

export { EWCLabel as default };

try {
  if (window.customElements.get('ext-label') == undefined) {
    window.customElements.define('ext-label', ElementParser.withParsedCallback(EWCLabel));
  }
} catch (e) {
  if (window.customElements.get('ext-label') == undefined) {
    window.customElements.define('ext-label', EWCLabel);
  }
}