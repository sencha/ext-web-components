import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Spacer_Component from './Ext/Spacer';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSpacerComponent =
/*#__PURE__*/
function (_Ext_Spacer_Component) {
  _inheritsLoose(ExtSpacerComponent, _Ext_Spacer_Component);

  function ExtSpacerComponent() {
    var _this;

    _this = _Ext_Spacer_Component.call(this, {}, [], []) || this;
    _this.xtype = 'spacer';
    return _this;
  }

  return ExtSpacerComponent;
}(Ext_Spacer_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacer', ExtSpacerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(ExtSpacerComponent));