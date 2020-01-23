import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import ElementParser from './ElementParser.js';

var EWCGridgroupbythismenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_GroupB) {
  _inheritsLoose(EWCGridgroupbythismenuitem, _Ext_grid_menu_GroupB);

  function EWCGridgroupbythismenuitem() {
    var _this;

    _this = _Ext_grid_menu_GroupB.call(this, [], []) || this;
    _this.xtype = 'gridgroupbythismenuitem';
    return _this;
  }

  return EWCGridgroupbythismenuitem;
}(Ext_grid_menu_GroupByThis);

export { EWCGridgroupbythismenuitem as default };

try {
  window.customElements.define('ext-gridgroupbythismenuitem', ElementParser.withParsedCallback(EWCGridgroupbythismenuitem));
} catch (e) {
  window.customElements.define('ext-gridgroupbythismenuitem', EWCGridgroupbythismenuitem);
}