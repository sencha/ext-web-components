import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Tab from './Ext/Tab.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTab = /*#__PURE__*/function (_Ext_Tab) {
  _inheritsLoose(EWCTab, _Ext_Tab);

  function EWCTab() {
    var _this;

    _this = _Ext_Tab.call(this, [], []) || this;
    _this.xtype = 'tab';
    return _this;
  }

  return EWCTab;
}(Ext_Tab);

export { EWCTab as default };

try {
  window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));
} catch (e) {
  window.customElements.define('ext-tab', EWCTab);
}