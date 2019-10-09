import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtListswiperitemComponent =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(ExtListswiperitemComponent, _Ext_dataview_listswi);

  function ExtListswiperitemComponent() {
    var _this;

    _this = _Ext_dataview_listswi.call(this, [], []) || this;
    _this.xtype = 'listswiperitem';
    return _this;
  }

  return ExtListswiperitemComponent;
}(Ext_dataview_listswiper_Item); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listswiperitem', ExtListswiperitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-listswiperitem', HTMLParsedElement.withParsedCallback(ExtListswiperitemComponent));