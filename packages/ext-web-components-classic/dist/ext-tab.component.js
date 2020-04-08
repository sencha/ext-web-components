import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tab_Tab from './Ext/tab/Tab.js';
import ElementParser from './common/ElementParser.js';

var EWCTab = /*#__PURE__*/function (_Ext_tab_Tab) {
  _inheritsLoose(EWCTab, _Ext_tab_Tab);

  function EWCTab() {
    var _this;

    _this = _Ext_tab_Tab.call(this, [], []) || this;
    _this.xtype = 'tab';
    return _this;
  }

  return EWCTab;
}(Ext_tab_Tab);

export { EWCTab as default };

try {
  if (window.customElements.get('ext-tab') == undefined) {
    window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));
  }
} catch (e) {
  if (window.customElements.get('ext-tab') == undefined) {
    window.customElements.define('ext-tab', EWCTab);
  }
}