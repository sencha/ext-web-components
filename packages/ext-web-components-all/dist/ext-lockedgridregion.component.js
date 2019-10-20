import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtLockedgridregion =
/*#__PURE__*/
function (_Ext_grid_LockedGridR) {
  _inheritsLoose(ExtLockedgridregion, _Ext_grid_LockedGridR);

  function ExtLockedgridregion() {
    var _this;

    _this = _Ext_grid_LockedGridR.call(this, [], []) || this;
    _this.xtype = 'lockedgridregion';
    return _this;
  }

  return ExtLockedgridregion;
}(Ext_grid_LockedGridRegion); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgridregion', ExtLockedgridregion);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtLockedgridregion as default };
window.customElements.define('ext-lockedgridregion', HTMLParsedElement.withParsedCallback(ExtLockedgridregion)); //export default reactify(ExtLockedgridregion);