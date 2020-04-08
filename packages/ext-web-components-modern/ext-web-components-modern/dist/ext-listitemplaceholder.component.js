import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import ElementParser from './common/ElementParser.js';

var EWCListitemplaceholder = /*#__PURE__*/function (_Ext_dataview_ListIte) {
  _inheritsLoose(EWCListitemplaceholder, _Ext_dataview_ListIte);

  function EWCListitemplaceholder() {
    var _this;

    _this = _Ext_dataview_ListIte.call(this, [], []) || this;
    _this.xtype = 'listitemplaceholder';
    return _this;
  }

  return EWCListitemplaceholder;
}(Ext_dataview_ListItemPlaceholder);

export { EWCListitemplaceholder as default };

try {
  if (window.customElements.get('ext-listitemplaceholder') == undefined) {
    window.customElements.define('ext-listitemplaceholder', ElementParser.withParsedCallback(EWCListitemplaceholder));
  }
} catch (e) {
  if (window.customElements.get('ext-listitemplaceholder') == undefined) {
    window.customElements.define('ext-listitemplaceholder', EWCListitemplaceholder);
  }
}