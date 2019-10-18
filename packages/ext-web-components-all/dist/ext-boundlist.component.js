import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtBoundlistComponent =
/*#__PURE__*/
function (_Ext_dataview_BoundLi) {
  _inheritsLoose(ExtBoundlistComponent, _Ext_dataview_BoundLi);

  function ExtBoundlistComponent() {
    var _this;

    _this = _Ext_dataview_BoundLi.call(this, [], []) || this;
    _this.xtype = 'boundlist';
    return _this;
  }

  return ExtBoundlistComponent;
}(Ext_dataview_BoundList); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-boundlist', ExtBoundlistComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-boundlist', HTMLParsedElement.withParsedCallback(ExtBoundlistComponent));