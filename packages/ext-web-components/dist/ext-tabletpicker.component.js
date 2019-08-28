import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Tablet_Component from './Ext/picker/Tablet';
export var ExtTabletpickerComponent =
/*#__PURE__*/
function (_Ext_picker_Tablet_Co) {
  _inheritsLoose(ExtTabletpickerComponent, _Ext_picker_Tablet_Co);

  function ExtTabletpickerComponent() {
    return _Ext_picker_Tablet_Co.call(this, '', '', {}, '') || this;
  }

  return ExtTabletpickerComponent;
}(Ext_picker_Tablet_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-tabletpicker', ExtTabletpickerComponent);
  });
})();