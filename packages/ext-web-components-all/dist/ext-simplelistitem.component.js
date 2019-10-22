import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSimplelistitem =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtSimplelistitem, _Ext_dataview_compone);

  function ExtSimplelistitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'simplelistitem';
    return _this;
  }

  return ExtSimplelistitem;
}(Ext_dataview_component_SimpleListItem);

export { ExtSimplelistitem as default };
window.customElements.define('ext-simplelistitem', HTMLParsedElement.withParsedCallback(ExtSimplelistitem));