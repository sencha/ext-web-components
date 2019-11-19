import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Chip from './Ext/Chip';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtChipComponent =
/*#__PURE__*/
function (_Ext_Chip) {
  _inheritsLoose(ExtChipComponent, _Ext_Chip);

  function ExtChipComponent() {
    var _this;

    _this = _Ext_Chip.call(this, [], []) || this;
    _this.xtype = 'chip';
    return _this;
  }

  return ExtChipComponent;
}(Ext_Chip); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chip', ExtChipComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(ExtChipComponent));