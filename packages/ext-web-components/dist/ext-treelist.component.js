import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_Tree_Component from './Ext/list/Tree';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTreelistComponent =
/*#__PURE__*/
function (_Ext_list_Tree_Compon) {
  _inheritsLoose(ExtTreelistComponent, _Ext_list_Tree_Compon);

  function ExtTreelistComponent() {
    var _this;

    _this = _Ext_list_Tree_Compon.call(this, {}, [], []) || this;
    _this.xtype = 'treelist';
    return _this;
  }

  return ExtTreelistComponent;
}(Ext_list_Tree_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelist', ExtTreelistComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(ExtTreelistComponent));