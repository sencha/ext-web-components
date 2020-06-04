import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button from './Ext/Button.js';
import ElementParser from './common/ElementParser.js';

var EWCButton = /*#__PURE__*/function (_Ext_Button) {
  _inheritsLoose(EWCButton, _Ext_Button);

  function EWCButton() {
    var _this;

    _this = _Ext_Button.call(this, [], []) || this;
    _this.xtype = 'button';
    return _this;
  }

  return EWCButton;
}(Ext_Button);

export { EWCButton as default };

try {
  if (window.customElements.get('ext-button') == undefined) {
    window.customElements.define('ext-button', ElementParser.withParsedCallback(EWCButton));
  }
} catch (e) {
  if (window.customElements.get('ext-button') == undefined) {
    window.customElements.define('ext-button', EWCButton);
  }
}