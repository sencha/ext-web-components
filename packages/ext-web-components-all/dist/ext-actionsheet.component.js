import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ActionSheet from './Ext/ActionSheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtActionsheetComponent =
/*#__PURE__*/
function (_Ext_ActionSheet) {
  _inheritsLoose(ExtActionsheetComponent, _Ext_ActionSheet);

  function ExtActionsheetComponent() {
    var _this;

    _this = _Ext_ActionSheet.call(this, [], []) || this;
    _this.xtype = 'actionsheet';
    return _this;
  }

  return ExtActionsheetComponent;
}(Ext_ActionSheet); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-actionsheet', ExtActionsheetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(ExtActionsheetComponent));