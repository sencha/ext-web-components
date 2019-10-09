import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_TreeItem from './Ext/list/TreeItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTreelistitemComponent =
/*#__PURE__*/
function (_Ext_list_TreeItem) {
  _inheritsLoose(ExtTreelistitemComponent, _Ext_list_TreeItem);

  function ExtTreelistitemComponent() {
    var _this;

    _this = _Ext_list_TreeItem.call(this, [], []) || this;
    _this.xtype = 'treelistitem';
    return _this;
  }

  return ExtTreelistitemComponent;
}(Ext_list_TreeItem); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelistitem', ExtTreelistitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-treelistitem', HTMLParsedElement.withParsedCallback(ExtTreelistitemComponent));