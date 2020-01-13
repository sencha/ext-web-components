import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_event_RecorderManager from './Ext/ux/event/RecorderManager.js';
import ElementParser from './ElementParser.js';

var EWCEventrecordermanager =
/*#__PURE__*/
function (_Ext_ux_event_Recorde) {
  _inheritsLoose(EWCEventrecordermanager, _Ext_ux_event_Recorde);

  function EWCEventrecordermanager() {
    var _this;

    _this = _Ext_ux_event_Recorde.call(this, [], []) || this;
    _this.xtype = 'eventrecordermanager';
    return _this;
  }

  return EWCEventrecordermanager;
}(Ext_ux_event_RecorderManager);

export { EWCEventrecordermanager as default };
window.customElements.define('ext-eventrecordermanager', ElementParser.withParsedCallback(EWCEventrecordermanager));