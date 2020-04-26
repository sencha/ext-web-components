import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_TreeMap from './Ext/d3/hierarchy/TreeMap.js';
import ElementParser from './common/ElementParser.js';

var EWCD3_treemap = /*#__PURE__*/function (_Ext_d3_hierarchy_Tre) {
  _inheritsLoose(EWCD3_treemap, _Ext_d3_hierarchy_Tre);

  function EWCD3_treemap() {
    var _this;

    _this = _Ext_d3_hierarchy_Tre.call(this, [], []) || this;
    _this.xtype = 'd3-treemap';
    return _this;
  }

  return EWCD3_treemap;
}(Ext_d3_hierarchy_TreeMap);

export { EWCD3_treemap as default };

try {
  if (window.customElements.get('ext-d3-treemap') == undefined) {
    window.customElements.define('ext-d3-treemap', ElementParser.withParsedCallback(EWCD3_treemap));
  }
} catch (e) {
  if (window.customElements.get('ext-d3-treemap') == undefined) {
    window.customElements.define('ext-d3-treemap', EWCD3_treemap);
  }
}