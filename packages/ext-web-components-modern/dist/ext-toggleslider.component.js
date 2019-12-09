import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_slider_Toggle from '@sencha/ext-runtime-base/dist/./Ext/slider/Toggle.js';
import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import ElementParser from './ElementParser.js';

var EWCToggleslider =
/*#__PURE__*/
function (_Ext_slider_Toggle) {
  _inheritsLoose(EWCToggleslider, _Ext_slider_Toggle);

  function EWCToggleslider() {
    var _this;

    _this = _Ext_slider_Toggle.call(this, [], []) || this;
    _this.xtype = 'toggleslider';
    return _this;
  }

  return EWCToggleslider;
}(Ext_slider_Toggle);

export { EWCToggleslider as default };
window.customElements.define('ext-toggleslider', ElementParser.withParsedCallback(EWCToggleslider));