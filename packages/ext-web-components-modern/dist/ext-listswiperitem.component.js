import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import ElementParser from './ElementParser.js';

var EWCListswiperitem =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(EWCListswiperitem, _Ext_dataview_listswi);

  function EWCListswiperitem() {
    var _this;

    _this = _Ext_dataview_listswi.call(this, [], []) || this;
    _this.xtype = 'listswiperitem';
    return _this;
  }

  return EWCListswiperitem;
}(Ext_dataview_listswiper_Item);

export { EWCListswiperitem as default };
window.customElements.define('ext-listswiperitem', ElementParser.withParsedCallback(EWCListswiperitem));