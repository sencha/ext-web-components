import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Pack from './Ext/d3/hierarchy/Pack.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtD3_pack =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Pac) {
  _inheritsLoose(ExtD3_pack, _Ext_d3_hierarchy_Pac);

  function ExtD3_pack() {
    var _this;

    _this = _Ext_d3_hierarchy_Pac.call(this, [], []) || this;
    _this.xtype = 'd3-pack';
    return _this;
  }

  return ExtD3_pack;
}(Ext_d3_hierarchy_Pack);

export { ExtD3_pack as default };
window.customElements.define('ext-d3-pack', HTMLParsedElement.withParsedCallback(ExtD3_pack));