import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import ElementParser from './runtime/ElementParser.js';

var EWCChipview =
/*#__PURE__*/
function (_Ext_dataview_ChipVie) {
  _inheritsLoose(EWCChipview, _Ext_dataview_ChipVie);

  function EWCChipview() {
    var _this;

    _this = _Ext_dataview_ChipVie.call(this, [], []) || this;
    _this.xtype = 'chipview';
    return _this;
  }

  return EWCChipview;
}(Ext_dataview_ChipView);

export { EWCChipview as default };

try {
  window.customElements.define('ext-chipview', ElementParser.withParsedCallback(EWCChipview));
} catch (e) {
  window.customElements.define('ext-chipview', EWCChipview);
}