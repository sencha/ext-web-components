import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_MessageBox from './Ext/window/MessageBox.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMessagebox =
/*#__PURE__*/
function (_Ext_window_MessageBo) {
  _inheritsLoose(EWCMessagebox, _Ext_window_MessageBo);

  function EWCMessagebox() {
    var _this;

    _this = _Ext_window_MessageBo.call(this, [], []) || this;
    _this.xtype = 'messagebox';
    return _this;
  }

  return EWCMessagebox;
}(Ext_window_MessageBox);

export { EWCMessagebox as default };

try {
  window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));
} catch (e) {
  window.customElements.define('ext-messagebox', EWCMessagebox);
}