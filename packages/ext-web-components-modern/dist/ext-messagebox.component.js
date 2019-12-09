import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_MessageBox from '@sencha/ext-runtime-base/dist/./Ext/MessageBox.js';
import Ext_MessageBox from './Ext/MessageBox.js';
import ElementParser from './ElementParser.js';

var EWCMessagebox =
/*#__PURE__*/
function (_Ext_MessageBox) {
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
window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));