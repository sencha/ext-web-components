import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ActionSheet_Component from './Ext/ActionSheet';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtActionsheetComponent =
/*#__PURE__*/
function (_Ext_ActionSheet_Comp) {
  _inheritsLoose(ExtActionsheetComponent, _Ext_ActionSheet_Comp);

  function ExtActionsheetComponent() {
    var _this;

    _this = _Ext_ActionSheet_Comp.call(this) || this;
    _this.xtype = 'actionsheet';
    return _this;
  }

  return ExtActionsheetComponent;
}(Ext_ActionSheet_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-actionsheet', ExtActionsheetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(ExtActionsheetComponent));