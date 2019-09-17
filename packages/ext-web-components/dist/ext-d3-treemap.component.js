import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_TreeMap_Component from './Ext/d3/hierarchy/TreeMap';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtD3_treemapComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Tre) {
  _inheritsLoose(ExtD3_treemapComponent, _Ext_d3_hierarchy_Tre);

  function ExtD3_treemapComponent() {
    var _this;

    _this = _Ext_d3_hierarchy_Tre.call(this, {}, [], []) || this;
    _this.xtype = 'd3-treemap';
    return _this;
  }

  return ExtD3_treemapComponent;
}(Ext_d3_hierarchy_TreeMap_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-treemap', ExtD3_treemapComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-treemap', HTMLParsedElement.withParsedCallback(ExtD3_treemapComponent));