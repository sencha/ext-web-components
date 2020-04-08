import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import ElementParser from './common/ElementParser.js';

var EWCGridshowingroupsmenuitem = /*#__PURE__*/function (_Ext_grid_menu_ShowIn) {
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

try {
  if (window.customElements.get('ext-gridshowingroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridshowingroupsmenuitem', ElementParser.withParsedCallback(EWCGridshowingroupsmenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridshowingroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridshowingroupsmenuitem', EWCGridshowingroupsmenuitem);
  }
}