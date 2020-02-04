import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import ElementParser from './ElementParser.js';

var EWCDataitem =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(EWCDataitem, _Ext_dataview_compone);

  function EWCDataitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'dataitem';
    return _this;
  }

  return EWCDataitem;
}(Ext_dataview_component_DataItem);

export { EWCDataitem as default };

try {
  window.customElements.define('ext-dataitem', ElementParser.withParsedCallback(EWCDataitem));
} catch (e) {
  window.customElements.define('ext-dataitem', EWCDataitem);
}