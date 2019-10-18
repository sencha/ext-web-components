import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet from './Ext/Sheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSheetComponent =
/*#__PURE__*/
function (_Ext_Sheet) {
  _inheritsLoose(ExtSheetComponent, _Ext_Sheet);

  function ExtSheetComponent() {
    var _this;

    _this = _Ext_Sheet.call(this, [], []) || this;
    _this.xtype = 'sheet';
    return _this;
  }

  return ExtSheetComponent;
}(Ext_Sheet); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sheet', ExtSheetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(ExtSheetComponent));