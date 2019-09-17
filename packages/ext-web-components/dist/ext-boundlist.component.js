import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_BoundList_Component from './Ext/dataview/BoundList';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtBoundlistComponent =
/*#__PURE__*/
function (_Ext_dataview_BoundLi) {
  _inheritsLoose(ExtBoundlistComponent, _Ext_dataview_BoundLi);

  function ExtBoundlistComponent() {
    var _this;

    _this = _Ext_dataview_BoundLi.call(this, {}, [], []) || this;
    _this.xtype = 'boundlist';
    return _this;
  }

  return ExtBoundlistComponent;
}(Ext_dataview_BoundList_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-boundlist', ExtBoundlistComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-boundlist', HTMLParsedElement.withParsedCallback(ExtBoundlistComponent));