import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Title_Component from './Ext/panel/Title';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPaneltitleComponent =
/*#__PURE__*/
function (_Ext_panel_Title_Comp) {
  _inheritsLoose(ExtPaneltitleComponent, _Ext_panel_Title_Comp);

  function ExtPaneltitleComponent() {
    var _this;

    _this = _Ext_panel_Title_Comp.call(this, {}, [], []) || this;
    _this.xtype = 'paneltitle';
    return _this;
  }

  return ExtPaneltitleComponent;
}(Ext_panel_Title_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-paneltitle', ExtPaneltitleComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-paneltitle', HTMLParsedElement.withParsedCallback(ExtPaneltitleComponent));