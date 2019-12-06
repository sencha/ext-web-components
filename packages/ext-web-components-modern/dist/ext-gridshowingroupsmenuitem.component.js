import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_menu_ShowInGroups from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/ShowInGroups.js';
import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCGridshowingroupsmenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_ShowIn) {
  _inheritsLoose(EWCGridshowingroupsmenuitem, _Ext_grid_menu_ShowIn);

  function EWCGridshowingroupsmenuitem() {
    var _this;

    _this = _Ext_grid_menu_ShowIn.call(this, [], []) || this;
    _this.xtype = 'gridshowingroupsmenuitem';
    return _this;
  }

  return EWCGridshowingroupsmenuitem;
}(Ext_grid_menu_ShowInGroups);

export { EWCGridshowingroupsmenuitem as default };
window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(EWCGridshowingroupsmenuitem));