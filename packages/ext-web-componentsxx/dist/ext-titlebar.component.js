import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TitleBar from './Ext/TitleBar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTitlebarComponent =
/*#__PURE__*/
function (_Ext_TitleBar) {
  _inheritsLoose(ExtTitlebarComponent, _Ext_TitleBar);

  function ExtTitlebarComponent() {
    var _this;

    _this = _Ext_TitleBar.call(this, [], []) || this;
    _this.xtype = 'titlebar';
    return _this;
  }

  return ExtTitlebarComponent;
}(Ext_TitleBar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-titlebar', ExtTitlebarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-titlebar', HTMLParsedElement.withParsedCallback(ExtTitlebarComponent));