import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_view_MultiSelectorSearch from './Ext/view/MultiSelectorSearch.js';
import ElementParser from './common/ElementParser.js';

var EWCMultiselector_search = /*#__PURE__*/function (_Ext_view_MultiSelect) {
  _inheritsLoose(EWCMultiselector_search, _Ext_view_MultiSelect);

  function EWCMultiselector_search() {
    var _this;

    _this = _Ext_view_MultiSelect.call(this, [], []) || this;
    _this.xtype = 'multiselector-search';
    return _this;
  }

  return EWCMultiselector_search;
}(Ext_view_MultiSelectorSearch);

export { EWCMultiselector_search as default };

try {
  if (window.customElements.get('ext-multiselector-search') == undefined) {
    window.customElements.define('ext-multiselector-search', ElementParser.withParsedCallback(EWCMultiselector_search));
  }
} catch (e) {
  if (window.customElements.get('ext-multiselector-search') == undefined) {
    window.customElements.define('ext-multiselector-search', EWCMultiselector_search);
  }
}