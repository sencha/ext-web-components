import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Map from './Ext/Map.js';
import ElementParser from './ElementParser.js';

var EWCMap =
/*#__PURE__*/
function (_Ext_Map) {
  _inheritsLoose(EWCMap, _Ext_Map);

  function EWCMap() {
    var _this;

    _this = _Ext_Map.call(this, [], []) || this;
    _this.xtype = 'map';
    return _this;
  }

  return EWCMap;
}(Ext_Map);

export { EWCMap as default };

try {
  window.customElements.define('ext-map', ElementParser.withParsedCallback(EWCMap));
} catch (e) {
  window.customElements.define('ext-map', EWCMap);
}