import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ItemHeader_Component from './Ext/dataview/ItemHeader';
export var ExtItemheaderComponent =
/*#__PURE__*/
function (_Ext_dataview_ItemHea) {
  _inheritsLoose(ExtItemheaderComponent, _Ext_dataview_ItemHea);

  function ExtItemheaderComponent() {
    return _Ext_dataview_ItemHea.call(this, '', '', {}, '') || this;
  }

  return ExtItemheaderComponent;
}(Ext_dataview_ItemHeader_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-itemheader', ExtItemheaderComponent);
  });
})();