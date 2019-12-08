import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_window_MessageBox from '@sencha/ext-runtime-base/dist/./Ext/window/MessageBox.js';
import Ext_window_MessageBox from './Ext/window/MessageBox.js';
import ElementParser from './ElementParser.js';

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
window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));