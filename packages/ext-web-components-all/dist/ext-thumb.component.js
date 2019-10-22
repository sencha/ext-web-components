import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtThumb =
/*#__PURE__*/
function (_Ext_slider_Thumb) {
  _inheritsLoose(ExtThumb, _Ext_slider_Thumb);

  function ExtThumb() {
    var _this;

    _this = _Ext_slider_Thumb.call(this, [], []) || this;
    _this.xtype = 'thumb';
    return _this;
  }

  return ExtThumb;
}(Ext_slider_Thumb);

export { ExtThumb as default };
window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(ExtThumb));