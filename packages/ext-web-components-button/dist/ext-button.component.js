import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button from './Ext/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtButtonComponent =
/*#__PURE__*/
function (_Ext_Button) {
  _inheritsLoose(ExtButtonComponent, _Ext_Button);

  function ExtButtonComponent() {
    var _this;

    _this = _Ext_Button.call(this, [], []) || this;
    _this.xtype = 'button';
    return _this;
  }

  return ExtButtonComponent;
}(Ext_Button); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-button', ExtButtonComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(ExtButtonComponent));