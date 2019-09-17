import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Chip_Component from './Ext/Chip';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtChipComponent =
/*#__PURE__*/
function (_Ext_Chip_Component) {
  _inheritsLoose(ExtChipComponent, _Ext_Chip_Component);

  function ExtChipComponent() {
    var _this;

    _this = _Ext_Chip_Component.call(this, {}, [], []) || this;
    _this.xtype = 'chip';
    return _this;
  }

  return ExtChipComponent;
}(Ext_Chip_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chip', ExtChipComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(ExtChipComponent));