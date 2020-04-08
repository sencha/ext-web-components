import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_desktop_TaskBar from './Ext/ux/desktop/TaskBar.js';
import ElementParser from './common/ElementParser.js';

var EWCTaskbar = /*#__PURE__*/function (_Ext_ux_desktop_TaskB) {
  _inheritsLoose(EWCTaskbar, _Ext_ux_desktop_TaskB);

  function EWCTaskbar() {
    var _this;

    _this = _Ext_ux_desktop_TaskB.call(this, [], []) || this;
    _this.xtype = 'taskbar';
    return _this;
  }

  return EWCTaskbar;
}(Ext_ux_desktop_TaskBar);

export { EWCTaskbar as default };

try {
  if (window.customElements.get('ext-taskbar') == undefined) {
    window.customElements.define('ext-taskbar', ElementParser.withParsedCallback(EWCTaskbar));
  }
} catch (e) {
  if (window.customElements.get('ext-taskbar') == undefined) {
    window.customElements.define('ext-taskbar', EWCTaskbar);
  }
}