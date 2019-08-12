import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Component_Component from './Ext/dataview/Component';
export var ExtComponentdataviewComponent =
/*#__PURE__*/
function (_Ext_dataview_Compone) {
  _inheritsLoose(ExtComponentdataviewComponent, _Ext_dataview_Compone);

  function ExtComponentdataviewComponent() {
    return _Ext_dataview_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtComponentdataviewComponent;
}(Ext_dataview_Component_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-componentdataview', ExtComponentdataviewComponent);
  });
})();