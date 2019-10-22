import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRating =
/*#__PURE__*/
function (_Ext_ux_rating_Picker) {
  _inheritsLoose(ExtRating, _Ext_ux_rating_Picker);

  function ExtRating() {
    var _this;

    _this = _Ext_ux_rating_Picker.call(this, [], []) || this;
    _this.xtype = 'rating';
    return _this;
  }

  return ExtRating;
}(Ext_ux_rating_Picker);

export { ExtRating as default };
window.customElements.define('ext-rating', HTMLParsedElement.withParsedCallback(ExtRating));