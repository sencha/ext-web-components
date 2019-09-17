import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ChipView_Component from './Ext/dataview/ChipView';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtChipviewComponent =
/*#__PURE__*/
function (_Ext_dataview_ChipVie) {
  _inheritsLoose(ExtChipviewComponent, _Ext_dataview_ChipVie);

  function ExtChipviewComponent() {
    var _this;

    _this = _Ext_dataview_ChipVie.call(this) || this;
    _this.xtype = 'chipview';
    return _this;
  }

  return ExtChipviewComponent;
}(Ext_dataview_ChipView_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chipview', ExtChipviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-chipview', HTMLParsedElement.withParsedCallback(ExtChipviewComponent));