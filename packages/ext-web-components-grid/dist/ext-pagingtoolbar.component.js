import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPagingtoolbarComponent =
/*#__PURE__*/
function (_Ext_grid_PagingToolb) {
  _inheritsLoose(ExtPagingtoolbarComponent, _Ext_grid_PagingToolb);

  function ExtPagingtoolbarComponent() {
    var _this;

    _this = _Ext_grid_PagingToolb.call(this, [], []) || this;
    _this.xtype = 'pagingtoolbar';
    return _this;
  }

  return ExtPagingtoolbarComponent;
}(Ext_grid_PagingToolbar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pagingtoolbar', ExtPagingtoolbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pagingtoolbar', HTMLParsedElement.withParsedCallback(ExtPagingtoolbarComponent));