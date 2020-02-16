import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import ElementParser from './runtime/ElementParser.js';

var EWCLockedgridregion =
/*#__PURE__*/
function (_Ext_grid_LockedGridR) {
  _inheritsLoose(EWCLockedgridregion, _Ext_grid_LockedGridR);

  function EWCLockedgridregion() {
    var _this;

    _this = _Ext_grid_LockedGridR.call(this, [], []) || this;
    _this.xtype = 'lockedgridregion';
    return _this;
  }

  return EWCLockedgridregion;
}(Ext_grid_LockedGridRegion);

export { EWCLockedgridregion as default };

try {
  window.customElements.define('ext-lockedgridregion', ElementParser.withParsedCallback(EWCLockedgridregion));
} catch (e) {
  window.customElements.define('ext-lockedgridregion', EWCLockedgridregion);
}