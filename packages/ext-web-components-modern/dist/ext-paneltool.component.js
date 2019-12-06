import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_panel_Tool from '@sencha/ext-runtime-base/dist/./Ext/panel/Tool.js';
import Ext_panel_Tool from './Ext/panel/Tool.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCPaneltool =
/*#__PURE__*/
function (_Ext_panel_Tool) {
  _inheritsLoose(EWCPaneltool, _Ext_panel_Tool);

  function EWCPaneltool() {
    var _this;

    _this = _Ext_panel_Tool.call(this, [], []) || this;
    _this.xtype = 'paneltool';
    return _this;
  }

  return EWCPaneltool;
}(Ext_panel_Tool);

export { EWCPaneltool as default };
window.customElements.define('ext-paneltool', HTMLParsedElement.withParsedCallback(EWCPaneltool));