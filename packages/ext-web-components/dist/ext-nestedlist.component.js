import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NestedList_Component from './Ext/NestedList';
export var ExtNestedlistComponent =
/*#__PURE__*/
function (_Ext_NestedList_Compo) {
  _inheritsLoose(ExtNestedlistComponent, _Ext_NestedList_Compo);

  function ExtNestedlistComponent() {
    return _Ext_NestedList_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtNestedlistComponent;
}(Ext_NestedList_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-nestedlist', ExtNestedlistComponent);
  });
})();