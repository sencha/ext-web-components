import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_panel_Date from '@sencha/ext-runtime-base/dist/./Ext/panel/Date.js';
import Ext_panel_Date from './Ext/panel/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCDatepanel =
/*#__PURE__*/
function (_Ext_panel_Date) {
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
window.customElements.define('ext-datepanel', HTMLParsedElement.withParsedCallback(EWCDatepanel));