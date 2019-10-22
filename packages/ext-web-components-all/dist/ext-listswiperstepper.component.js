import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtListswiperstepper =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(ExtListswiperstepper, _Ext_dataview_listswi);

  function ExtListswiperstepper() {
    var _this;

    _this = _Ext_dataview_listswi.call(this, [], []) || this;
    _this.xtype = 'listswiperstepper';
    return _this;
  }

  return ExtListswiperstepper;
}(Ext_dataview_listswiper_Stepper);

export { ExtListswiperstepper as default };
window.customElements.define('ext-listswiperstepper', HTMLParsedElement.withParsedCallback(ExtListswiperstepper));