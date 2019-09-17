import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGrid_Component from './Ext/grid/LockedGrid';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtLockedgridComponent =
/*#__PURE__*/
function (_Ext_grid_LockedGrid_) {
  _inheritsLoose(ExtLockedgridComponent, _Ext_grid_LockedGrid_);

  function ExtLockedgridComponent() {
    var _this;

    _this = _Ext_grid_LockedGrid_.call(this, {}, [], []) || this;
    _this.xtype = 'lockedgrid';
    return _this;
  }

  return ExtLockedgridComponent;
}(Ext_grid_LockedGrid_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgrid', ExtLockedgridComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(ExtLockedgridComponent));