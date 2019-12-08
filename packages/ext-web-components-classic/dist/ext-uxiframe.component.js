import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ux_IFrame from '@sencha/ext-runtime-base/dist/./Ext/ux/IFrame.js';
import Ext_ux_IFrame from './Ext/ux/IFrame.js';
import ElementParser from './ElementParser.js';

var EWCUxiframe =
/*#__PURE__*/
function (_Ext_ux_IFrame) {
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
window.customElements.define('ext-uxiframe', ElementParser.withParsedCallback(EWCUxiframe));