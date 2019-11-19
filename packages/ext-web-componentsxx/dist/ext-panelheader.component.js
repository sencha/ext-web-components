import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Header from './Ext/panel/Header';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPanelheaderComponent =
/*#__PURE__*/
function (_Ext_panel_Header) {
  _inheritsLoose(ExtPanelheaderComponent, _Ext_panel_Header);

  function ExtPanelheaderComponent() {
    var _this;

    _this = _Ext_panel_Header.call(this, [], []) || this;
    _this.xtype = 'panelheader';
    return _this;
  }

  return ExtPanelheaderComponent;
}(Ext_panel_Header); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-panelheader', ExtPanelheaderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-panelheader', HTMLParsedElement.withParsedCallback(ExtPanelheaderComponent));