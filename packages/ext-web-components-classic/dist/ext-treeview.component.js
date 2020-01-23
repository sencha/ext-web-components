import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tree_View from './Ext/tree/View.js';
import ElementParser from './ElementParser.js';

var EWCTreeview =
/*#__PURE__*/
function (_Ext_tree_View) {
  _inheritsLoose(EWCTreeview, _Ext_tree_View);

  function EWCTreeview() {
    var _this;

    _this = _Ext_tree_View.call(this, [], []) || this;
    _this.xtype = 'treeview';
    return _this;
  }

  return EWCTreeview;
}(Ext_tree_View);

export { EWCTreeview as default };

try {
  window.customElements.define('ext-treeview', ElementParser.withParsedCallback(EWCTreeview));
} catch (e) {
  window.customElements.define('ext-treeview', EWCTreeview);
}