import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import ElementParser from './common/ElementParser.js';

var EWCTabletpicker = /*#__PURE__*/function (_Ext_picker_Tablet) {
  _inheritsLoose(EWCTabletpicker, _Ext_picker_Tablet);

  function EWCTabletpicker() {
    var _this;

    _this = _Ext_picker_Tablet.call(this, [], []) || this;
    _this.xtype = 'tabletpicker';
    return _this;
  }

  return EWCTabletpicker;
}(Ext_picker_Tablet);

export { EWCTabletpicker as default };

try {
  if (window.customElements.get('ext-tabletpicker') == undefined) {
    window.customElements.define('ext-tabletpicker', ElementParser.withParsedCallback(EWCTabletpicker));
  }
} catch (e) {
  if (window.customElements.get('ext-tabletpicker') == undefined) {
    window.customElements.define('ext-tabletpicker', EWCTabletpicker);
  }
}