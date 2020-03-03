import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivottreemap = /*#__PURE__*/function (_Ext_pivot_d3_TreeMap) {
  _inheritsLoose(EWCPivottreemap, _Ext_pivot_d3_TreeMap);

  function EWCPivottreemap() {
    var _this;

    _this = _Ext_pivot_d3_TreeMap.call(this, [], []) || this;
    _this.xtype = 'pivottreemap';
    return _this;
  }

  return EWCPivottreemap;
}(Ext_pivot_d3_TreeMap);

export { EWCPivottreemap as default };

try {
  window.customElements.define('ext-pivottreemap', ElementParser.withParsedCallback(EWCPivottreemap));
} catch (e) {
  window.customElements.define('ext-pivottreemap', EWCPivottreemap);
}