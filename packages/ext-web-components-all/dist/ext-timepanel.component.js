import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Time from './Ext/panel/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTimepanel =
/*#__PURE__*/
function (_Ext_panel_Time) {
  _inheritsLoose(ExtTimepanel, _Ext_panel_Time);

  function ExtTimepanel() {
    var _this;

    _this = _Ext_panel_Time.call(this, [], []) || this;
    _this.xtype = 'timepanel';
    return _this;
  }

  return ExtTimepanel;
}(Ext_panel_Time);

export { ExtTimepanel as default };
window.customElements.define('ext-timepanel', HTMLParsedElement.withParsedCallback(ExtTimepanel));