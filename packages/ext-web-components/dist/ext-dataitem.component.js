import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_DataItem_Component from './Ext/dataview/component/DataItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDataitemComponent =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtDataitemComponent, _Ext_dataview_compone);

  function ExtDataitemComponent() {
    var _this;

    _this = _Ext_dataview_compone.call(this, {}, [], []) || this;
    _this.xtype = 'dataitem';
    return _this;
  }

  return ExtDataitemComponent;
}(Ext_dataview_component_DataItem_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dataitem', ExtDataitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-dataitem', HTMLParsedElement.withParsedCallback(ExtDataitemComponent));