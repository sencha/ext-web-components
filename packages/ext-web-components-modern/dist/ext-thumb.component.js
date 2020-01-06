import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import ElementParser from './ElementParser.js';

var EWCThumb =
/*#__PURE__*/
function (_Ext_slider_Thumb) {
  _inheritsLoose(EWCThumb, _Ext_slider_Thumb);

  function EWCThumb() {
    var _this;

    _this = _Ext_slider_Thumb.call(this, [], []) || this;
    _this.xtype = 'thumb';
    return _this;
  }

  return EWCThumb;
}(Ext_slider_Thumb);

export { EWCThumb as default };
window.customElements.define('ext-thumb', ElementParser.withParsedCallback(EWCThumb));