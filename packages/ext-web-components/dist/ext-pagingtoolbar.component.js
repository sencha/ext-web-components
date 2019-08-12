import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_PagingToolbar_Component from './Ext/grid/PagingToolbar';
export var ExtPagingtoolbarComponent =
/*#__PURE__*/
function (_Ext_grid_PagingToolb) {
  _inheritsLoose(ExtPagingtoolbarComponent, _Ext_grid_PagingToolb);

  function ExtPagingtoolbarComponent() {
    return _Ext_grid_PagingToolb.call(this, '', '', {}, '') || this;
  }

  return ExtPagingtoolbarComponent;
}(Ext_grid_PagingToolbar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pagingtoolbar', ExtPagingtoolbarComponent);
  });
})();