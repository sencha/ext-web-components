import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtLockedgrid =
/*#__PURE__*/
function (_Ext_grid_LockedGrid) {
  _inheritsLoose(ExtLockedgrid, _Ext_grid_LockedGrid);

  function ExtLockedgrid() {
    var _this;

    _this = _Ext_grid_LockedGrid.call(this, [], []) || this;
    _this.xtype = 'lockedgrid';
    return _this;
  }

  return ExtLockedgrid;
}(Ext_grid_LockedGrid); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgrid', ExtLockedgrid);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtLockedgrid as default };
window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(ExtLockedgrid)); //export default reactify(ExtLockedgrid);