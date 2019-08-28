import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_ListItem_Component from './Ext/dataview/component/ListItem';
export var ExtListitemComponent =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtListitemComponent, _Ext_dataview_compone);

  function ExtListitemComponent() {
    return _Ext_dataview_compone.call(this, '', '', {}, '') || this;
  }

  return ExtListitemComponent;
}(Ext_dataview_component_ListItem_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-listitem', ExtListitemComponent);
  });
})();