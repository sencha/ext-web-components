import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_MultiSlider from './Ext/slider/MultiSlider.js';
import ElementParser from './common/ElementParser.js';

var EWCMultislider = /*#__PURE__*/function (_Ext_slider_MultiSlid) {
  _inheritsLoose(EWCMultislider, _Ext_slider_MultiSlid);

  function EWCMultislider() {
    var _this;

    _this = _Ext_slider_MultiSlid.call(this, [], []) || this;
    _this.xtype = 'multislider';
    return _this;
  }

  return EWCMultislider;
}(Ext_slider_MultiSlider);

export { EWCMultislider as default };

try {
  if (window.customElements.get('ext-multislider') == undefined) {
    window.customElements.define('ext-multislider', ElementParser.withParsedCallback(EWCMultislider));
  }
} catch (e) {
  if (window.customElements.get('ext-multislider') == undefined) {
    window.customElements.define('ext-multislider', EWCMultislider);
  }
}