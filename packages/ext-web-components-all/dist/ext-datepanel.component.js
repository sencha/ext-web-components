import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Date from './Ext/panel/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtDatepanelComponent =
/*#__PURE__*/
function (_Ext_panel_Date) {
  _inheritsLoose(ExtDatepanelComponent, _Ext_panel_Date);

  function ExtDatepanelComponent() {
    var _this;

    _this = _Ext_panel_Date.call(this, [], []) || this;
    _this.xtype = 'datepanel';
    return _this;
  }

  return ExtDatepanelComponent;
}(Ext_panel_Date); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepanel', ExtDatepanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datepanel', HTMLParsedElement.withParsedCallback(ExtDatepanelComponent));