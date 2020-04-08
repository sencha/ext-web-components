import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_IFrame from './Ext/ux/IFrame.js';
import ElementParser from './common/ElementParser.js';

var EWCUxiframe = /*#__PURE__*/function (_Ext_ux_IFrame) {
  _inheritsLoose(EWCUxiframe, _Ext_ux_IFrame);

  function EWCUxiframe() {
    var _this;

    _this = _Ext_ux_IFrame.call(this, [], []) || this;
    _this.xtype = 'uxiframe';
    return _this;
  }

  return EWCUxiframe;
}(Ext_ux_IFrame);

export { EWCUxiframe as default };

try {
  if (window.customElements.get('ext-uxiframe') == undefined) {
    window.customElements.define('ext-uxiframe', ElementParser.withParsedCallback(EWCUxiframe));
  }
} catch (e) {
  if (window.customElements.get('ext-uxiframe') == undefined) {
    window.customElements.define('ext-uxiframe', EWCUxiframe);
  }
}