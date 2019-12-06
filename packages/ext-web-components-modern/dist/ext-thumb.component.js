import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_slider_Thumb from '@sencha/ext-runtime-base/dist/./Ext/slider/Thumb.js';
import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(EWCThumb));