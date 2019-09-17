import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool_Component from './Ext/panel/Tool';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPaneltoolComponent =
/*#__PURE__*/
function (_Ext_panel_Tool_Compo) {
  _inheritsLoose(ExtPaneltoolComponent, _Ext_panel_Tool_Compo);

  function ExtPaneltoolComponent() {
    var _this;

    _this = _Ext_panel_Tool_Compo.call(this) || this;
    _this.xtype = 'paneltool';
    return _this;
  }

  return ExtPaneltoolComponent;
}(Ext_panel_Tool_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-paneltool', ExtPaneltoolComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-paneltool', HTMLParsedElement.withParsedCallback(ExtPaneltoolComponent));