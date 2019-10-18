import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_partition_Sunburst from './Ext/d3/hierarchy/partition/Sunburst.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtD3_sunburstComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(ExtD3_sunburstComponent, _Ext_d3_hierarchy_par);

  function ExtD3_sunburstComponent() {
    var _this;

    _this = _Ext_d3_hierarchy_par.call(this, [], []) || this;
    _this.xtype = 'd3-sunburst';
    return _this;
  }

  return ExtD3_sunburstComponent;
}(Ext_d3_hierarchy_partition_Sunburst); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-sunburst', ExtD3_sunburstComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-sunburst', HTMLParsedElement.withParsedCallback(ExtD3_sunburstComponent));