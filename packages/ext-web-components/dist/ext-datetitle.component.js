import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_DateTitle from './Ext/panel/DateTitle';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDatetitleComponent =
/*#__PURE__*/
function (_Ext_panel_DateTitle) {
  _inheritsLoose(ExtDatetitleComponent, _Ext_panel_DateTitle);

  function ExtDatetitleComponent() {
    var _this;

    _this = _Ext_panel_DateTitle.call(this, [], []) || this;
    _this.xtype = 'datetitle';
    return _this;
  }

  return ExtDatetitleComponent;
}(Ext_panel_DateTitle); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datetitle', ExtDatetitleComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datetitle', HTMLParsedElement.withParsedCallback(ExtDatetitleComponent));