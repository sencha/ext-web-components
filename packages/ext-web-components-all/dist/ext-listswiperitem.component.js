import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtListswiperitem =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(ExtListswiperitem, _Ext_dataview_listswi);

  function ExtListswiperitem() {
    var _this;

    _this = _Ext_dataview_listswi.call(this, [], []) || this;
    _this.xtype = 'listswiperitem';
    return _this;
  }

  return ExtListswiperitem;
}(Ext_dataview_listswiper_Item);

export { ExtListswiperitem as default };
window.customElements.define('ext-listswiperitem', HTMLParsedElement.withParsedCallback(ExtListswiperitem));