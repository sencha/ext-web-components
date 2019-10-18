import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Panel from './Ext/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPanelComponent =
/*#__PURE__*/
function (_Ext_panel_Panel) {
  _inheritsLoose(ExtPanelComponent, _Ext_panel_Panel);

  function ExtPanelComponent() {
    var _this;

    _this = _Ext_panel_Panel.call(this, [], []) || this;
    _this.xtype = 'panel';
    return _this;
  }

  return ExtPanelComponent;
}(Ext_panel_Panel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-panel', ExtPanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-panel', HTMLParsedElement.withParsedCallback(ExtPanelComponent));