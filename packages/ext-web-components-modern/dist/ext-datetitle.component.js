import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import ElementParser from './common/ElementParser.js';

var EWCDatetitle = /*#__PURE__*/function (_Ext_panel_DateTitle) {
  _inheritsLoose(EWCDatetitle, _Ext_panel_DateTitle);

  function EWCDatetitle() {
    var _this;

    _this = _Ext_panel_DateTitle.call(this, [], []) || this;
    _this.xtype = 'datetitle';
    return _this;
  }

  return EWCDatetitle;
}(Ext_panel_DateTitle);

export { EWCDatetitle as default };

try {
  if (window.customElements.get('ext-datetitle') == undefined) {
    window.customElements.define('ext-datetitle', ElementParser.withParsedCallback(EWCDatetitle));
  }
} catch (e) {
  if (window.customElements.get('ext-datetitle') == undefined) {
    window.customElements.define('ext-datetitle', EWCDatetitle);
  }
}