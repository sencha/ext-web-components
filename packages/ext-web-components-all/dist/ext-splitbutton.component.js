import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_SplitButton from './Ext/SplitButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSplitbuttonComponent =
/*#__PURE__*/
function (_Ext_SplitButton) {
  _inheritsLoose(ExtSplitbuttonComponent, _Ext_SplitButton);

  function ExtSplitbuttonComponent() {
    var _this;

    _this = _Ext_SplitButton.call(this, [], []) || this;
    _this.xtype = 'splitbutton';
    return _this;
  }

  return ExtSplitbuttonComponent;
}(Ext_SplitButton); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-splitbutton', ExtSplitbuttonComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-splitbutton', HTMLParsedElement.withParsedCallback(ExtSplitbuttonComponent));