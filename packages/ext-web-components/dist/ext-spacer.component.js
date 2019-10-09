import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Spacer from './Ext/Spacer';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSpacerComponent =
/*#__PURE__*/
function (_Ext_Spacer) {
  _inheritsLoose(ExtSpacerComponent, _Ext_Spacer);

  function ExtSpacerComponent() {
    var _this;

    _this = _Ext_Spacer.call(this, [], []) || this;
    _this.xtype = 'spacer';
    return _this;
  }

  return ExtSpacerComponent;
}(Ext_Spacer); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacer', ExtSpacerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(ExtSpacerComponent));