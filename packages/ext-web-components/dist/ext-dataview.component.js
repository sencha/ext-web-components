import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DataView from './Ext/DataView';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDataviewComponent =
/*#__PURE__*/
function (_Ext_DataView) {
  _inheritsLoose(ExtDataviewComponent, _Ext_DataView);

  function ExtDataviewComponent() {
    var _this;

    _this = _Ext_DataView.call(this, [], []) || this;
    _this.xtype = 'dataview';
    return _this;
  }

  return ExtDataviewComponent;
}(Ext_DataView); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dataview', ExtDataviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-dataview', HTMLParsedElement.withParsedCallback(ExtDataviewComponent));