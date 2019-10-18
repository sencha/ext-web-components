import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool from './Ext/panel/Tool.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtToolComponent =
/*#__PURE__*/
function (_Ext_panel_Tool) {
  _inheritsLoose(ExtToolComponent, _Ext_panel_Tool);

  function ExtToolComponent() {
    var _this;

    _this = _Ext_panel_Tool.call(this, [], []) || this;
    _this.xtype = 'tool';
    return _this;
  }

  return ExtToolComponent;
}(Ext_panel_Tool); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tool', ExtToolComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tool', HTMLParsedElement.withParsedCallback(ExtToolComponent));