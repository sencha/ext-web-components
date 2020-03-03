import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_PagingToolbar from './Ext/PagingToolbar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPagingtoolbar = /*#__PURE__*/function (_Ext_PagingToolbar) {
  _inheritsLoose(EWCPagingtoolbar, _Ext_PagingToolbar);

  function EWCPagingtoolbar() {
    var _this;

    _this = _Ext_PagingToolbar.call(this, [], []) || this;
    _this.xtype = 'pagingtoolbar';
    return _this;
  }

  return EWCPagingtoolbar;
}(Ext_PagingToolbar);

export { EWCPagingtoolbar as default };

try {
  window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
} catch (e) {
  window.customElements.define('ext-pagingtoolbar', EWCPagingtoolbar);
}