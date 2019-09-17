import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_SimpleListItem_Component from './Ext/dataview/component/SimpleListItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSimplelistitemComponent =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtSimplelistitemComponent, _Ext_dataview_compone);

  function ExtSimplelistitemComponent() {
    var _this;

    _this = _Ext_dataview_compone.call(this) || this;
    _this.xtype = 'simplelistitem';
    return _this;
  }

  return ExtSimplelistitemComponent;
}(Ext_dataview_component_SimpleListItem_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-simplelistitem', ExtSimplelistitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-simplelistitem', HTMLParsedElement.withParsedCallback(ExtSimplelistitemComponent));