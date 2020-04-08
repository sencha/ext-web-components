import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import ElementParser from './common/ElementParser.js';

var EWCRating = /*#__PURE__*/function (_Ext_ux_rating_Picker) {
  _inheritsLoose(EWCRating, _Ext_ux_rating_Picker);

  function EWCRating() {
    var _this;

    _this = _Ext_ux_rating_Picker.call(this, [], []) || this;
    _this.xtype = 'rating';
    return _this;
  }

  return EWCRating;
}(Ext_ux_rating_Picker);

export { EWCRating as default };

try {
  if (window.customElements.get('ext-rating') == undefined) {
    window.customElements.define('ext-rating', ElementParser.withParsedCallback(EWCRating));
  }
} catch (e) {
  if (window.customElements.get('ext-rating') == undefined) {
    window.customElements.define('ext-rating', EWCRating);
  }
}