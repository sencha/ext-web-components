import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_rating_Picker_Component from './Ext/ux/rating/Picker';
export var ExtRatingComponent =
/*#__PURE__*/
function (_Ext_ux_rating_Picker) {
  _inheritsLoose(ExtRatingComponent, _Ext_ux_rating_Picker);

  function ExtRatingComponent() {
    return _Ext_ux_rating_Picker.call(this, '', '', {}, '') || this;
  }

  return ExtRatingComponent;
}(Ext_ux_rating_Picker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-rating', ExtRatingComponent);
  });
})();