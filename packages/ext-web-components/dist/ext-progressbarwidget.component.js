import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget_Component from './Ext/ProgressBarWidget';
export var ExtProgressbarwidgetComponent =
/*#__PURE__*/
function (_Ext_ProgressBarWidge) {
  _inheritsLoose(ExtProgressbarwidgetComponent, _Ext_ProgressBarWidge);

  function ExtProgressbarwidgetComponent() {
    return _Ext_ProgressBarWidge.call(this, '', '', {}, '') || this;
  }

  return ExtProgressbarwidgetComponent;
}(Ext_ProgressBarWidget_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-progressbarwidget', ExtProgressbarwidgetComponent);
  });
})();