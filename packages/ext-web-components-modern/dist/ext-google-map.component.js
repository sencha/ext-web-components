import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Map from '@sencha/ext-runtime-base/dist/./Ext/Map.js';
import Ext_Map from './Ext/Map.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCGoogle_map =
/*#__PURE__*/
function (_Ext_Map) {
  _inheritsLoose(EWCGoogle_map, _Ext_Map);

  function EWCGoogle_map() {
    var _this;

    _this = _Ext_Map.call(this, [], []) || this;
    _this.xtype = 'google-map';
    return _this;
  }

  return EWCGoogle_map;
}(Ext_Map);

export { EWCGoogle_map as default };
window.customElements.define('ext-google-map', HTMLParsedElement.withParsedCallback(EWCGoogle_map));