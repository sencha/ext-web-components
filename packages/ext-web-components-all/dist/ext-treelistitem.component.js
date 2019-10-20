import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_TreeItem from './Ext/list/TreeItem.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTreelistitem =
/*#__PURE__*/
function (_Ext_list_TreeItem) {
  _inheritsLoose(ExtTreelistitem, _Ext_list_TreeItem);

  function ExtTreelistitem() {
    var _this;

    _this = _Ext_list_TreeItem.call(this, [], []) || this;
    _this.xtype = 'treelistitem';
    return _this;
  }

  return ExtTreelistitem;
}(Ext_list_TreeItem); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelistitem', ExtTreelistitem);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTreelistitem as default };
window.customElements.define('ext-treelistitem', HTMLParsedElement.withParsedCallback(ExtTreelistitem)); //export default reactify(ExtTreelistitem);