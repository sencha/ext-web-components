import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_MessageBox_Component from './Ext/MessageBox';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMessageboxComponent =
/*#__PURE__*/
function (_Ext_MessageBox_Compo) {
  _inheritsLoose(ExtMessageboxComponent, _Ext_MessageBox_Compo);

  function ExtMessageboxComponent() {
    var _this;

    _this = _Ext_MessageBox_Compo.call(this) || this;
    _this.xtype = 'messagebox';
    return _this;
  }

  return ExtMessageboxComponent;
}(Ext_MessageBox_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-messagebox', ExtMessageboxComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-messagebox', HTMLParsedElement.withParsedCallback(ExtMessageboxComponent));