import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Date from './Ext/panel/Date.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatepanel = /*#__PURE__*/function (_Ext_panel_Date) {
  _inheritsLoose(EWCDatepanel, _Ext_panel_Date);

  function EWCDatepanel() {
    var _this;

    _this = _Ext_panel_Date.call(this, [], []) || this;
    _this.xtype = 'datepanel';
    return _this;
  }

  return EWCDatepanel;
}(Ext_panel_Date);

export { EWCDatepanel as default };

try {
  window.customElements.define('ext-datepanel', ElementParser.withParsedCallback(EWCDatepanel));
} catch (e) {
  window.customElements.define('ext-datepanel', EWCDatepanel);
}