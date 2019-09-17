import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_SplitButton_Component from './Ext/SplitButton';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSplitbuttonComponent =
/*#__PURE__*/
function (_Ext_SplitButton_Comp) {
  _inheritsLoose(ExtSplitbuttonComponent, _Ext_SplitButton_Comp);

  function ExtSplitbuttonComponent() {
    var _this;

    _this = _Ext_SplitButton_Comp.call(this) || this;
    _this.xtype = 'splitbutton';
    return _this;
  }

  return ExtSplitbuttonComponent;
}(Ext_SplitButton_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-splitbutton', ExtSplitbuttonComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-splitbutton', HTMLParsedElement.withParsedCallback(ExtSplitbuttonComponent));