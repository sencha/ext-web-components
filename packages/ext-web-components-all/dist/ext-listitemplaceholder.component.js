import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtListitemplaceholder =
/*#__PURE__*/
function (_Ext_dataview_ListIte) {
  _inheritsLoose(ExtListitemplaceholder, _Ext_dataview_ListIte);

  function ExtListitemplaceholder() {
    var _this;

    _this = _Ext_dataview_ListIte.call(this, [], []) || this;
    _this.xtype = 'listitemplaceholder';
    return _this;
  }

  return ExtListitemplaceholder;
}(Ext_dataview_ListItemPlaceholder);

export { ExtListitemplaceholder as default };
window.customElements.define('ext-listitemplaceholder', HTMLParsedElement.withParsedCallback(ExtListitemplaceholder));