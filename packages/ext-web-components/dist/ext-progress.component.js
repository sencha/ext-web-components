import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget_Component from './Ext/ProgressBarWidget';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtProgressComponent =
/*#__PURE__*/
function (_Ext_ProgressBarWidge) {
  _inheritsLoose(ExtProgressComponent, _Ext_ProgressBarWidge);

  function ExtProgressComponent() {
    var _this;

    _this = _Ext_ProgressBarWidge.call(this, {}, [], []) || this;
    _this.xtype = 'progress';
    return _this;
  }

  return ExtProgressComponent;
}(Ext_ProgressBarWidget_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-progress', ExtProgressComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-progress', HTMLParsedElement.withParsedCallback(ExtProgressComponent));