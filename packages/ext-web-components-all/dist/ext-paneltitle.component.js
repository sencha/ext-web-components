import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Title from './Ext/panel/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPaneltitleComponent =
/*#__PURE__*/
function (_Ext_panel_Title) {
  _inheritsLoose(ExtPaneltitleComponent, _Ext_panel_Title);

  function ExtPaneltitleComponent() {
    var _this;

    _this = _Ext_panel_Title.call(this, [], []) || this;
    _this.xtype = 'paneltitle';
    return _this;
  }

  return ExtPaneltitleComponent;
}(Ext_panel_Title); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-paneltitle', ExtPaneltitleComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-paneltitle', HTMLParsedElement.withParsedCallback(ExtPaneltitleComponent));