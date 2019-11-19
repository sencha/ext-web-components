import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtItemheaderComponent =
/*#__PURE__*/
function (_Ext_dataview_ItemHea) {
  _inheritsLoose(ExtItemheaderComponent, _Ext_dataview_ItemHea);

  function ExtItemheaderComponent() {
    var _this;

    _this = _Ext_dataview_ItemHea.call(this, [], []) || this;
    _this.xtype = 'itemheader';
    return _this;
  }

  return ExtItemheaderComponent;
}(Ext_dataview_ItemHeader); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-itemheader', ExtItemheaderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-itemheader', HTMLParsedElement.withParsedCallback(ExtItemheaderComponent));