import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Map from './Ext/Map.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtMap =
/*#__PURE__*/
function (_Ext_Map) {
  _inheritsLoose(ExtMap, _Ext_Map);

  function ExtMap() {
    var _this;

    _this = _Ext_Map.call(this, [], []) || this;
    _this.xtype = 'map';
    return _this;
  }

  return ExtMap;
}(Ext_Map);

export { ExtMap as default };
window.customElements.define('ext-map', HTMLParsedElement.withParsedCallback(ExtMap));