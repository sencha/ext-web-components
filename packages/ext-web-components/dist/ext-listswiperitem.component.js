import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Item_Component from './Ext/dataview/listswiper/Item';
export var ExtListswiperitemComponent =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(ExtListswiperitemComponent, _Ext_dataview_listswi);

  function ExtListswiperitemComponent() {
    return _Ext_dataview_listswi.call(this, '', '', {}, '') || this;
  }

  return ExtListswiperitemComponent;
}(Ext_dataview_listswiper_Item_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-listswiperitem', ExtListswiperitemComponent);
  });
})();