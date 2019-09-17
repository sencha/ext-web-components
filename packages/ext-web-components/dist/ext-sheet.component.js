import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet_Component from './Ext/Sheet';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSheetComponent =
/*#__PURE__*/
function (_Ext_Sheet_Component) {
  _inheritsLoose(ExtSheetComponent, _Ext_Sheet_Component);

  function ExtSheetComponent() {
    var _this;

    _this = _Ext_Sheet_Component.call(this, {}, [], []) || this;
    _this.xtype = 'sheet';
    return _this;
  }

  return ExtSheetComponent;
}(Ext_Sheet_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sheet', ExtSheetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(ExtSheetComponent));