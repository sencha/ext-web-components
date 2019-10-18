import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_MessageBox from './Ext/MessageBox.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtMessageboxComponent =
/*#__PURE__*/
function (_Ext_MessageBox) {
  _inheritsLoose(ExtMessageboxComponent, _Ext_MessageBox);

  function ExtMessageboxComponent() {
    var _this;

    _this = _Ext_MessageBox.call(this, [], []) || this;
    _this.xtype = 'messagebox';
    return _this;
  }

  return ExtMessageboxComponent;
}(Ext_MessageBox); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-messagebox', ExtMessageboxComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-messagebox', HTMLParsedElement.withParsedCallback(ExtMessageboxComponent));