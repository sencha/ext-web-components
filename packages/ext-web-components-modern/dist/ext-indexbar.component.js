import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_IndexBar from './Ext/IndexBar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCIndexbar = /*#__PURE__*/function (_Ext_IndexBar) {
  _inheritsLoose(EWCIndexbar, _Ext_IndexBar);

  function EWCIndexbar() {
    var _this;

    _this = _Ext_IndexBar.call(this, [], []) || this;
    _this.xtype = 'indexbar';
    return _this;
  }

  return EWCIndexbar;
}(Ext_IndexBar);

export { EWCIndexbar as default };

try {
  window.customElements.define('ext-indexbar', ElementParser.withParsedCallback(EWCIndexbar));
} catch (e) {
  window.customElements.define('ext-indexbar', EWCIndexbar);
}