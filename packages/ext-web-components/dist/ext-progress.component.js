import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget_Component from './Ext/ProgressBarWidget';
export var ExtProgressComponent =
/*#__PURE__*/
function (_Ext_ProgressBarWidge) {
  _inheritsLoose(ExtProgressComponent, _Ext_ProgressBarWidge);

  function ExtProgressComponent() {
    return _Ext_ProgressBarWidge.call(this, '', '', {}, '') || this;
  }

  return ExtProgressComponent;
}(Ext_ProgressBarWidget_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-progress', ExtProgressComponent);
  });
})();