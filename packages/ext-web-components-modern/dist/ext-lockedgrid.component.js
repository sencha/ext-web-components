import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_LockedGrid from '@sencha/ext-runtime-base/dist/./Ext/grid/LockedGrid.js';
import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCLockedgrid =
/*#__PURE__*/
function (_Ext_grid_LockedGrid) {
  _inheritsLoose(EWCLockedgrid, _Ext_grid_LockedGrid);

  function EWCLockedgrid() {
    var _this;

    _this = _Ext_grid_LockedGrid.call(this, [], []) || this;
    _this.xtype = 'lockedgrid';
    return _this;
  }

  return EWCLockedgrid;
}(Ext_grid_LockedGrid);

export { EWCLockedgrid as default };
window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(EWCLockedgrid));