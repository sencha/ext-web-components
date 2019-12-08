import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ux_desktop_TrayClock from '@sencha/ext-runtime-base/dist/./Ext/ux/desktop/TrayClock.js';
import Ext_ux_desktop_TrayClock from './Ext/ux/desktop/TrayClock.js';
import ElementParser from './ElementParser.js';

var EWCTrayclock =
/*#__PURE__*/
function (_Ext_ux_desktop_TrayC) {
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
window.customElements.define('ext-trayclock', ElementParser.withParsedCallback(EWCTrayclock));