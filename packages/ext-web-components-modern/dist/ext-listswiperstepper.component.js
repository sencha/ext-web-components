import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_dataview_listswiper_Stepper from '@sencha/ext-runtime-base/dist/./Ext/dataview/listswiper/Stepper.js';
import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper.js';
import ElementParser from './ElementParser.js';

var EWCListswiperstepper =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(EWCListswiperstepper, _Ext_dataview_listswi);

  function EWCListswiperstepper() {
    var _this;

    _this = _Ext_dataview_listswi.call(this, [], []) || this;
    _this.xtype = 'listswiperstepper';
    return _this;
  }

  return EWCListswiperstepper;
}(Ext_dataview_listswiper_Stepper);

export { EWCListswiperstepper as default };
window.customElements.define('ext-listswiperstepper', ElementParser.withParsedCallback(EWCListswiperstepper));