import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Date from './Ext/panel/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDatepanel =
/*#__PURE__*/
function (_Ext_panel_Date) {
  _inheritsLoose(ExtDatepanel, _Ext_panel_Date);

  function ExtDatepanel() {
    var _this;

    _this = _Ext_panel_Date.call(this, [], []) || this;
    _this.xtype = 'datepanel';
    return _this;
  }

  return ExtDatepanel;
}(Ext_panel_Date);

export { ExtDatepanel as default };
window.customElements.define('ext-datepanel', HTMLParsedElement.withParsedCallback(ExtDatepanel));