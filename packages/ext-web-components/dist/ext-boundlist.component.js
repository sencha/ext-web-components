import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_BoundList_Component from './Ext/dataview/BoundList';
export var ExtBoundlistComponent =
/*#__PURE__*/
function (_Ext_dataview_BoundLi) {
  _inheritsLoose(ExtBoundlistComponent, _Ext_dataview_BoundLi);

  function ExtBoundlistComponent() {
    return _Ext_dataview_BoundLi.call(this, '', '', {}, '') || this;
  }

  return ExtBoundlistComponent;
}(Ext_dataview_BoundList_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-boundlist', ExtBoundlistComponent);
  });
})();