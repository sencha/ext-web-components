import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget_Component from './Ext/ProgressBarWidget';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtProgressbarwidgetComponent =
/*#__PURE__*/
function (_Ext_ProgressBarWidge) {
  _inheritsLoose(ExtProgressbarwidgetComponent, _Ext_ProgressBarWidge);

  function ExtProgressbarwidgetComponent() {
    var _this;

    _this = _Ext_ProgressBarWidge.call(this, {}, [], []) || this;
    _this.xtype = 'progressbarwidget';
    return _this;
  }

  return ExtProgressbarwidgetComponent;
}(Ext_ProgressBarWidget_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-progressbarwidget', ExtProgressbarwidgetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-progressbarwidget', HTMLParsedElement.withParsedCallback(ExtProgressbarwidgetComponent));