import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NestedList_Component from './Ext/NestedList';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtNestedlistComponent =
/*#__PURE__*/
function (_Ext_NestedList_Compo) {
  _inheritsLoose(ExtNestedlistComponent, _Ext_NestedList_Compo);

  function ExtNestedlistComponent() {
    var _this;

    _this = _Ext_NestedList_Compo.call(this, {}, [], []) || this;
    _this.xtype = 'nestedlist';
    return _this;
  }

  return ExtNestedlistComponent;
}(Ext_NestedList_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-nestedlist', ExtNestedlistComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(ExtNestedlistComponent));