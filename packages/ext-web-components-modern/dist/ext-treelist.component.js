import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_list_Tree from '@sencha/ext-runtime-base/dist/./Ext/list/Tree.js';
import Ext_list_Tree from './Ext/list/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTreelist =
/*#__PURE__*/
function (_Ext_list_Tree) {
  _inheritsLoose(EWCTreelist, _Ext_list_Tree);

  function EWCTreelist() {
    var _this;

    _this = _Ext_list_Tree.call(this, [], []) || this;
    _this.xtype = 'treelist';
    return _this;
  }

  return EWCTreelist;
}(Ext_list_Tree);

export { EWCTreelist as default };
window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(EWCTreelist));