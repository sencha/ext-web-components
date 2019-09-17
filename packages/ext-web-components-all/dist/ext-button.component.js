import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button_Component from './Ext/Button';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtButtonComponent =
/*#__PURE__*/
function (_Ext_Button_Component) {
  _inheritsLoose(ExtButtonComponent, _Ext_Button_Component);

  function ExtButtonComponent() {
    var _this;

    _this = _Ext_Button_Component.call(this) || this;
    _this.xtype = 'button';
    return _this;
  }

  return ExtButtonComponent;
}(Ext_Button_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-button', ExtButtonComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(ExtButtonComponent));