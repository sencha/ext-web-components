import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import ElementParser from './ElementParser.js';

var EWCPagingtoolbar =
/*#__PURE__*/
function (_Ext_grid_PagingToolb) {
  _inheritsLoose(EWCPagingtoolbar, _Ext_grid_PagingToolb);

  function EWCPagingtoolbar() {
    var _this;

    _this = _Ext_grid_PagingToolb.call(this, [], []) || this;
    _this.xtype = 'pagingtoolbar';
    return _this;
  }

  return EWCPagingtoolbar;
}(Ext_grid_PagingToolbar);

export { EWCPagingtoolbar as default };

try {
  window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
} catch (e) {
  window.customElements.define('ext-pagingtoolbar', EWCPagingtoolbar);
}