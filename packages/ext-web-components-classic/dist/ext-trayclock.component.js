import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_desktop_TrayClock from './Ext/ux/desktop/TrayClock.js';
import ElementParser from './common/ElementParser.js';

var EWCTrayclock = /*#__PURE__*/function (_Ext_ux_desktop_TrayC) {
  _inheritsLoose(EWCTrayclock, _Ext_ux_desktop_TrayC);

  function EWCTrayclock() {
    var _this;

    _this = _Ext_ux_desktop_TrayC.call(this, [], []) || this;
    _this.xtype = 'trayclock';
    return _this;
  }

  return EWCTrayclock;
}(Ext_ux_desktop_TrayClock);

export { EWCTrayclock as default };

try {
  if (window.customElements.get('ext-trayclock') == undefined) {
    window.customElements.define('ext-trayclock', ElementParser.withParsedCallback(EWCTrayclock));
  }
} catch (e) {
  if (window.customElements.get('ext-trayclock') == undefined) {
    window.customElements.define('ext-trayclock', EWCTrayclock);
  }
}