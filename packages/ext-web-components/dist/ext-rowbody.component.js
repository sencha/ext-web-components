import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowBody_Component from './Ext/grid/RowBody';
export var ExtRowbodyComponent =
/*#__PURE__*/
function (_Ext_grid_RowBody_Com) {
  _inheritsLoose(ExtRowbodyComponent, _Ext_grid_RowBody_Com);

  function ExtRowbodyComponent() {
    return _Ext_grid_RowBody_Com.call(this, '', '', {}, '') || this;
  }

  return ExtRowbodyComponent;
}(Ext_grid_RowBody_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-rowbody', ExtRowbodyComponent);
  });
})();