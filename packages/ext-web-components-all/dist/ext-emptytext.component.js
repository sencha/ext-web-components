import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtEmptytextComponent =
/*#__PURE__*/
function (_Ext_dataview_EmptyTe) {
  _inheritsLoose(ExtEmptytextComponent, _Ext_dataview_EmptyTe);

  function ExtEmptytextComponent() {
    var _this;

    _this = _Ext_dataview_EmptyTe.call(this, [], []) || this;
    _this.xtype = 'emptytext';
    return _this;
  }

  return ExtEmptytextComponent;
}(Ext_dataview_EmptyText); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-emptytext', ExtEmptytextComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-emptytext', HTMLParsedElement.withParsedCallback(ExtEmptytextComponent));