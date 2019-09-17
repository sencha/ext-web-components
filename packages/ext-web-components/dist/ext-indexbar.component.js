import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_IndexBar_Component from './Ext/IndexBar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtIndexbarComponent =
/*#__PURE__*/
function (_Ext_IndexBar_Compone) {
  _inheritsLoose(ExtIndexbarComponent, _Ext_IndexBar_Compone);

  function ExtIndexbarComponent() {
    var _this;

    _this = _Ext_IndexBar_Compone.call(this, {}, [], []) || this;
    _this.xtype = 'indexbar';
    return _this;
  }

  return ExtIndexbarComponent;
}(Ext_IndexBar_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indexbar', ExtIndexbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(ExtIndexbarComponent));