import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool_Component from './Ext/panel/Tool';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtToolComponent =
/*#__PURE__*/
function (_Ext_panel_Tool_Compo) {
  _inheritsLoose(ExtToolComponent, _Ext_panel_Tool_Compo);

  function ExtToolComponent() {
    var _this;

    _this = _Ext_panel_Tool_Compo.call(this, {}, [], []) || this;
    _this.xtype = 'tool';
    return _this;
  }

  return ExtToolComponent;
}(Ext_panel_Tool_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tool', ExtToolComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tool', HTMLParsedElement.withParsedCallback(ExtToolComponent));