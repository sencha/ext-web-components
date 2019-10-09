import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Component from './Ext/dataview/Component';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtComponentdataviewComponent =
/*#__PURE__*/
function (_Ext_dataview_Compone) {
  _inheritsLoose(ExtComponentdataviewComponent, _Ext_dataview_Compone);

  function ExtComponentdataviewComponent() {
    var _this;

    _this = _Ext_dataview_Compone.call(this, [], []) || this;
    _this.xtype = 'componentdataview';
    return _this;
  }

  return ExtComponentdataviewComponent;
}(Ext_dataview_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-componentdataview', ExtComponentdataviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-componentdataview', HTMLParsedElement.withParsedCallback(ExtComponentdataviewComponent));