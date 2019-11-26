import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_panel_Time from '@sencha/ext-runtime-base/dist/./Ext/panel/Time.js';
import Ext_panel_Time from './Ext/panel/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-timepanel', HTMLParsedElement.withParsedCallback(EWCTimepanel));