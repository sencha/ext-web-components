import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TreePanel from './Ext/TreePanel.js';
import ElementParser from './common/ElementParser.js';

var EWCTreepanel = /*#__PURE__*/function (_Ext_TreePanel) {
  _inheritsLoose(EWCTreepanel, _Ext_TreePanel);

  function EWCTreepanel() {
    var _this;

    _this = _Ext_TreePanel.call(this, [], []) || this;
    _this.xtype = 'treepanel';
    return _this;
  }

  return EWCTreepanel;
}(Ext_TreePanel);

export { EWCTreepanel as default };

try {
  if (window.customElements.get('ext-treepanel') == undefined) {
    window.customElements.define('ext-treepanel', ElementParser.withParsedCallback(EWCTreepanel));
  }
} catch (e) {
  if (window.customElements.get('ext-treepanel') == undefined) {
    window.customElements.define('ext-treepanel', EWCTreepanel);
  }
}