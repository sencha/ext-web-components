import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TitleBar_Component from './Ext/TitleBar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTitlebarComponent =
/*#__PURE__*/
function (_Ext_TitleBar_Compone) {
  _inheritsLoose(ExtTitlebarComponent, _Ext_TitleBar_Compone);

  function ExtTitlebarComponent() {
    var _this;

    _this = _Ext_TitleBar_Compone.call(this, {}, [], []) || this;
    _this.xtype = 'titlebar';
    return _this;
  }

  return ExtTitlebarComponent;
}(Ext_TitleBar_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-titlebar', ExtTitlebarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-titlebar', HTMLParsedElement.withParsedCallback(ExtTitlebarComponent));