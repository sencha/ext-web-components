import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_Tree_Component from './Ext/list/Tree';
export var ExtTreelistComponent =
/*#__PURE__*/
function (_Ext_list_Tree_Compon) {
  _inheritsLoose(ExtTreelistComponent, _Ext_list_Tree_Compon);

  function ExtTreelistComponent() {
    return _Ext_list_Tree_Compon.call(this, '', '', {}, '') || this;
  }

  return ExtTreelistComponent;
}(Ext_list_Tree_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-treelist', ExtTreelistComponent);
  });
})();