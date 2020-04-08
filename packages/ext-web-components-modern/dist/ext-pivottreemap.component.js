import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import ElementParser from './common/ElementParser.js';

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
  if (window.customElements.get('ext-pivottreemap') == undefined) {
    window.customElements.define('ext-pivottreemap', ElementParser.withParsedCallback(EWCPivottreemap));
  }
} catch (e) {
  if (window.customElements.get('ext-pivottreemap') == undefined) {
    window.customElements.define('ext-pivottreemap', EWCPivottreemap);
  }
}