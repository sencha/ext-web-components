import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ChipView_Component from './Ext/dataview/ChipView';
export var ExtChipviewComponent =
/*#__PURE__*/
function (_Ext_dataview_ChipVie) {
  _inheritsLoose(ExtChipviewComponent, _Ext_dataview_ChipVie);

  function ExtChipviewComponent() {
    return _Ext_dataview_ChipVie.call(this, '', '', {}, '') || this;
  }

  return ExtChipviewComponent;
}(Ext_dataview_ChipView_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-chipview', ExtChipviewComponent);
  });
})();