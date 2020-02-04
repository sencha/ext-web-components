import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabPanel from './Ext/TabPanel.js';
import ElementParser from './ElementParser.js';

var EWCTabpanel =
/*#__PURE__*/
function (_Ext_TabPanel) {
  _inheritsLoose(EWCTabpanel, _Ext_TabPanel);

  function EWCTabpanel() {
    var _this;

    _this = _Ext_TabPanel.call(this, [], []) || this;
    _this.xtype = 'tabpanel';
    return _this;
  }

  return EWCTabpanel;
}(Ext_TabPanel);

export { EWCTabpanel as default };

try {
  window.customElements.define('ext-tabpanel', ElementParser.withParsedCallback(EWCTabpanel));
} catch (e) {
  window.customElements.define('ext-tabpanel', EWCTabpanel);
}