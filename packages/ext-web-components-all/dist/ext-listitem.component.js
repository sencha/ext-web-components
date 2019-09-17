import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_ListItem_Component from './Ext/dataview/component/ListItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtListitemComponent =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtListitemComponent, _Ext_dataview_compone);

  function ExtListitemComponent() {
    var _this;

    _this = _Ext_dataview_compone.call(this) || this;
    _this.xtype = 'listitem';
    return _this;
  }

  return ExtListitemComponent;
}(Ext_dataview_component_ListItem_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listitem', ExtListitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-listitem', HTMLParsedElement.withParsedCallback(ExtListitemComponent));