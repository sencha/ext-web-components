import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_TreeMap_Component from './Ext/d3/hierarchy/TreeMap';
export var ExtD3_treemapComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Tre) {
  _inheritsLoose(ExtD3_treemapComponent, _Ext_d3_hierarchy_Tre);

  function ExtD3_treemapComponent() {
    return _Ext_d3_hierarchy_Tre.call(this, '', '', {}, '') || this;
  }

  return ExtD3_treemapComponent;
}(Ext_d3_hierarchy_TreeMap_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-treemap', ExtD3_treemapComponent);
  });
})();