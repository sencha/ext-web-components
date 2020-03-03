import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DataView from './Ext/DataView.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDataview = /*#__PURE__*/function (_Ext_DataView) {
  _inheritsLoose(EWCDataview, _Ext_DataView);

  function EWCDataview() {
    var _this;

    _this = _Ext_DataView.call(this, [], []) || this;
    _this.xtype = 'dataview';
    return _this;
  }

  return EWCDataview;
}(Ext_DataView);

export { EWCDataview as default };

try {
  window.customElements.define('ext-dataview', ElementParser.withParsedCallback(EWCDataview));
} catch (e) {
  window.customElements.define('ext-dataview', EWCDataview);
}