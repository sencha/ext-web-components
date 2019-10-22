import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDataitem =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtDataitem, _Ext_dataview_compone);

  function ExtDataitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'dataitem';
    return _this;
  }

  return ExtDataitem;
}(Ext_dataview_component_DataItem);

export { ExtDataitem as default };
window.customElements.define('ext-dataitem', HTMLParsedElement.withParsedCallback(ExtDataitem));