import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_partition_Sunburst from './Ext/d3/hierarchy/partition/Sunburst.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtD3_sunburst =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(ExtD3_sunburst, _Ext_d3_hierarchy_par);

  function ExtD3_sunburst() {
    var _this;

    _this = _Ext_d3_hierarchy_par.call(this, [], []) || this;
    _this.xtype = 'd3-sunburst';
    return _this;
  }

  return ExtD3_sunburst;
}(Ext_d3_hierarchy_partition_Sunburst);

export { ExtD3_sunburst as default };
window.customElements.define('ext-d3-sunburst', HTMLParsedElement.withParsedCallback(ExtD3_sunburst));