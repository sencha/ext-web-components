import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Chip_Component from './Ext/Chip';
export var ExtChipComponent =
/*#__PURE__*/
function (_Ext_Chip_Component) {
  _inheritsLoose(ExtChipComponent, _Ext_Chip_Component);

  function ExtChipComponent() {
    return _Ext_Chip_Component.call(this, '', '', {}, '') || this;
  }

  return ExtChipComponent;
}(Ext_Chip_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-chip', ExtChipComponent);
  });
})();