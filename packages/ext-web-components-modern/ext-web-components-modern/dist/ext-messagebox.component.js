import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_MessageBox from './Ext/MessageBox.js';
import ElementParser from './common/ElementParser.js';

var EWCMessagebox = /*#__PURE__*/function (_Ext_MessageBox) {
  _inheritsLoose(EWCMessagebox, _Ext_MessageBox);

  function EWCMessagebox() {
    var _this;

    _this = _Ext_MessageBox.call(this, [], []) || this;
    _this.xtype = 'messagebox';
    return _this;
  }

  return EWCMessagebox;
}(Ext_MessageBox);

export { EWCMessagebox as default };

try {
  if (window.customElements.get('ext-messagebox') == undefined) {
    window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));
  }
} catch (e) {
  if (window.customElements.get('ext-messagebox') == undefined) {
    window.customElements.define('ext-messagebox', EWCMessagebox);
  }
}