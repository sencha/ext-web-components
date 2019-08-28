import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_TreeItem_Component from './Ext/list/TreeItem';
export var ExtTreelistitemComponent =
/*#__PURE__*/
function (_Ext_list_TreeItem_Co) {
  _inheritsLoose(ExtTreelistitemComponent, _Ext_list_TreeItem_Co);

  function ExtTreelistitemComponent() {
    return _Ext_list_TreeItem_Co.call(this, '', '', {}, '') || this;
  }

  return ExtTreelistitemComponent;
}(Ext_list_TreeItem_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-treelistitem', ExtTreelistitemComponent);
  });
})();