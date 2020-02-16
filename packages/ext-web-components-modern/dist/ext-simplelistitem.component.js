import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSimplelistitem =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(EWCSimplelistitem, _Ext_dataview_compone);

  function EWCSimplelistitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'simplelistitem';
    return _this;
  }

  return EWCSimplelistitem;
}(Ext_dataview_component_SimpleListItem);

export { EWCSimplelistitem as default };

try {
  window.customElements.define('ext-simplelistitem', ElementParser.withParsedCallback(EWCSimplelistitem));
} catch (e) {
  window.customElements.define('ext-simplelistitem', EWCSimplelistitem);
}