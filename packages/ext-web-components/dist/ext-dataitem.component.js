import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_DataItem_Component from './Ext/dataview/component/DataItem';
export var ExtDataitemComponent =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtDataitemComponent, _Ext_dataview_compone);

  function ExtDataitemComponent() {
    return _Ext_dataview_compone.call(this, '', '', {}, '') || this;
  }

  return ExtDataitemComponent;
}(Ext_dataview_component_DataItem_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-dataitem', ExtDataitemComponent);
  });
})();