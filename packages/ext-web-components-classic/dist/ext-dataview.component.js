import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DataView from './Ext/DataView.js';
import ElementParser from './common/ElementParser.js';

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
  if (window.customElements.get('ext-dataview') == undefined) {
    window.customElements.define('ext-dataview', ElementParser.withParsedCallback(EWCDataview));
  }
} catch (e) {
  if (window.customElements.get('ext-dataview') == undefined) {
    window.customElements.define('ext-dataview', EWCDataview);
  }
}