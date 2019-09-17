import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_TreeItem_Component from './Ext/list/TreeItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTreelistitemComponent =
/*#__PURE__*/
function (_Ext_list_TreeItem_Co) {
  _inheritsLoose(ExtTreelistitemComponent, _Ext_list_TreeItem_Co);

  function ExtTreelistitemComponent() {
    var _this;

    _this = _Ext_list_TreeItem_Co.call(this, {}, [], []) || this;
    _this.xtype = 'treelistitem';
    return _this;
  }

  return ExtTreelistitemComponent;
}(Ext_list_TreeItem_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelistitem', ExtTreelistitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-treelistitem', HTMLParsedElement.withParsedCallback(ExtTreelistitemComponent));