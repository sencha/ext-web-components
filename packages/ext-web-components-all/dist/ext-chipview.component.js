import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtChipview =
/*#__PURE__*/
function (_Ext_dataview_ChipVie) {
  _inheritsLoose(ExtChipview, _Ext_dataview_ChipVie);

  function ExtChipview() {
    var _this;

    _this = _Ext_dataview_ChipVie.call(this, [], []) || this;
    _this.xtype = 'chipview';
    return _this;
  }

  return ExtChipview;
}(Ext_dataview_ChipView);

export { ExtChipview as default };
window.customElements.define('ext-chipview', HTMLParsedElement.withParsedCallback(ExtChipview));