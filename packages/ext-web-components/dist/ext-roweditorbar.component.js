import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Bar_Component from './Ext/grid/rowedit/Bar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRoweditorbarComponent =
/*#__PURE__*/
function (_Ext_grid_rowedit_Bar) {
  _inheritsLoose(ExtRoweditorbarComponent, _Ext_grid_rowedit_Bar);

  function ExtRoweditorbarComponent() {
    var _this;

    _this = _Ext_grid_rowedit_Bar.call(this, {}, [], []) || this;
    _this.xtype = 'roweditorbar';
    return _this;
  }

  return ExtRoweditorbarComponent;
}(Ext_grid_rowedit_Bar_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorbar', ExtRoweditorbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-roweditorbar', HTMLParsedElement.withParsedCallback(ExtRoweditorbarComponent));