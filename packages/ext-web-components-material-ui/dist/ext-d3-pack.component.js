import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Pack from './Ext/d3/hierarchy/Pack.js';
import ElementParser from './common/ElementParser.js';

var EWCD3_pack = /*#__PURE__*/function (_Ext_d3_hierarchy_Pac) {
  _inheritsLoose(EWCD3_pack, _Ext_d3_hierarchy_Pac);

  function EWCD3_pack() {
    var _this;

    _this = _Ext_d3_hierarchy_Pac.call(this, [], []) || this;
    _this.xtype = 'd3-pack';
    return _this;
  }

  return EWCD3_pack;
}(Ext_d3_hierarchy_Pack);

export { EWCD3_pack as default };

try {
  if (window.customElements.get('ext-d3-pack') == undefined) {
    window.customElements.define('ext-d3-pack', ElementParser.withParsedCallback(EWCD3_pack));
  }
} catch (e) {
  if (window.customElements.get('ext-d3-pack') == undefined) {
    window.customElements.define('ext-d3-pack', EWCD3_pack);
  }
}