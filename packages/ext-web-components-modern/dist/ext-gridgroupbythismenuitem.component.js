import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_menu_GroupByThis from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/GroupByThis.js';
import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-gridgroupbythismenuitem', HTMLParsedElement.withParsedCallback(EWCGridgroupbythismenuitem));