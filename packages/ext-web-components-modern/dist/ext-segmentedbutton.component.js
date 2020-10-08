import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_button_Segmented from './Ext/button/Segmented.js';
import ElementParser from './common/ElementParser.js';

var EWCSegmentedbutton = /*#__PURE__*/function (_Ext_button_Segmented) {
  _inheritsLoose(EWCSegmentedbutton, _Ext_button_Segmented);

  function EWCSegmentedbutton() {
    var _this;

    _this = _Ext_button_Segmented.call(this, [], []) || this;
    _this.xtype = 'segmentedbutton';
    return _this;
  }

  return EWCSegmentedbutton;
}(Ext_button_Segmented);

export { EWCSegmentedbutton as default };

try {
  if (window.customElements.get('ext-segmentedbutton') == undefined) {
    window.customElements.define('ext-segmentedbutton', ElementParser.withParsedCallback(EWCSegmentedbutton));
  }
} catch (e) {
  if (window.customElements.get('ext-segmentedbutton') == undefined) {
    window.customElements.define('ext-segmentedbutton', EWCSegmentedbutton);
  }
}