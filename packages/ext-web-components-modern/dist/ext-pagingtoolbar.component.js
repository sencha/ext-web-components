import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import ElementParser from './common/ElementParser.js';

var EWCPagingtoolbar = /*#__PURE__*/function (_Ext_grid_PagingToolb) {
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
  if (window.customElements.get('ext-pagingtoolbar') == undefined) {
    window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
  }
} catch (e) {
  if (window.customElements.get('ext-pagingtoolbar') == undefined) {
    window.customElements.define('ext-pagingtoolbar', EWCPagingtoolbar);
  }
}