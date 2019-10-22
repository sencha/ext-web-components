import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_MessageBox from './Ext/MessageBox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtMessagebox =
/*#__PURE__*/
function (_Ext_MessageBox) {
  _inheritsLoose(ExtMessagebox, _Ext_MessageBox);

  function ExtMessagebox() {
    var _this;

    _this = _Ext_MessageBox.call(this, [], []) || this;
    _this.xtype = 'messagebox';
    return _this;
  }

  return ExtMessagebox;
}(Ext_MessageBox);

export { ExtMessagebox as default };
window.customElements.define('ext-messagebox', HTMLParsedElement.withParsedCallback(ExtMessagebox));