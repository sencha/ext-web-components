import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Time from './Ext/panel/Time.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTimepanel =
/*#__PURE__*/
function (_Ext_panel_Time) {
  _inheritsLoose(EWCTimepanel, _Ext_panel_Time);

  function EWCTimepanel() {
    var _this;

    _this = _Ext_panel_Time.call(this, [], []) || this;
    _this.xtype = 'timepanel';
    return _this;
  }

  return EWCTimepanel;
}(Ext_panel_Time);

export { EWCTimepanel as default };

try {
  window.customElements.define('ext-timepanel', ElementParser.withParsedCallback(EWCTimepanel));
} catch (e) {
  window.customElements.define('ext-timepanel', EWCTimepanel);
}