import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtLockedgridregionComponent =
/*#__PURE__*/
function (_Ext_grid_LockedGridR) {
  _inheritsLoose(ExtLockedgridregionComponent, _Ext_grid_LockedGridR);

  function ExtLockedgridregionComponent() {
    var _this;

    _this = _Ext_grid_LockedGridR.call(this, [], []) || this;
    _this.xtype = 'lockedgridregion';
    return _this;
  }

  return ExtLockedgridregionComponent;
}(Ext_grid_LockedGridRegion); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgridregion', ExtLockedgridregionComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-lockedgridregion', HTMLParsedElement.withParsedCallback(ExtLockedgridregionComponent));