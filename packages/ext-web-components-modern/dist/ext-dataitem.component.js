import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_dataview_component_DataItem from '@sencha/ext-runtime-base/dist/./Ext/dataview/component/DataItem.js';
import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-dataitem', HTMLParsedElement.withParsedCallback(EWCDataitem));