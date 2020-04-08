import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import ElementParser from './common/ElementParser.js';

var EWCListswiperitem = /*#__PURE__*/function (_Ext_dataview_listswi) {
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

try {
  if (window.customElements.get('ext-listswiperitem') == undefined) {
    window.customElements.define('ext-listswiperitem', ElementParser.withParsedCallback(EWCListswiperitem));
  }
} catch (e) {
  if (window.customElements.get('ext-listswiperitem') == undefined) {
    window.customElements.define('ext-listswiperitem', EWCListswiperitem);
  }
}