import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ListItemPlaceholder_Component from './Ext/dataview/ListItemPlaceholder';
export var ExtListitemplaceholderComponent =
/*#__PURE__*/
function (_Ext_dataview_ListIte) {
  _inheritsLoose(ExtListitemplaceholderComponent, _Ext_dataview_ListIte);

  function ExtListitemplaceholderComponent() {
    return _Ext_dataview_ListIte.call(this, '', '', {}, '') || this;
  }

  return ExtListitemplaceholderComponent;
}(Ext_dataview_ListItemPlaceholder_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-listitemplaceholder', ExtListitemplaceholderComponent);
  });
})();