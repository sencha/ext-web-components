import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_TreeMap from './Ext/d3/hierarchy/TreeMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtD3_treemap =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Tre) {
  _inheritsLoose(ExtD3_treemap, _Ext_d3_hierarchy_Tre);

  function ExtD3_treemap() {
    var _this;

    _this = _Ext_d3_hierarchy_Tre.call(this, [], []) || this;
    _this.xtype = 'd3-treemap';
    return _this;
  }

  return ExtD3_treemap;
}(Ext_d3_hierarchy_TreeMap);

export { ExtD3_treemap as default };
window.customElements.define('ext-d3-treemap', HTMLParsedElement.withParsedCallback(ExtD3_treemap));