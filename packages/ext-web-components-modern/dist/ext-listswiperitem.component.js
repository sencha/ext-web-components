import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_dataview_listswiper_Item from '@sencha/ext-runtime-base/dist/./Ext/dataview/listswiper/Item.js';
import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-listswiperitem', HTMLParsedElement.withParsedCallback(EWCListswiperitem));