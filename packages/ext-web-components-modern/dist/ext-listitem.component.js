import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import ElementParser from './runtime/ElementParser.js';

var EWCListitem = /*#__PURE__*/function (_Ext_dataview_compone) {
  _inheritsLoose(EWCListitem, _Ext_dataview_compone);

  function EWCListitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'listitem';
    return _this;
  }

  return EWCListitem;
}(Ext_dataview_component_ListItem);

export { EWCListitem as default };

try {
  window.customElements.define('ext-listitem', ElementParser.withParsedCallback(EWCListitem));
} catch (e) {
  window.customElements.define('ext-listitem', EWCListitem);
}