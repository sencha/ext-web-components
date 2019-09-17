import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowBody_Component from './Ext/grid/RowBody';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRowbodyComponent =
/*#__PURE__*/
function (_Ext_grid_RowBody_Com) {
  _inheritsLoose(ExtRowbodyComponent, _Ext_grid_RowBody_Com);

  function ExtRowbodyComponent() {
    var _this;

    _this = _Ext_grid_RowBody_Com.call(this, {}, [], []) || this;
    _this.xtype = 'rowbody';
    return _this;
  }

  return ExtRowbodyComponent;
}(Ext_grid_RowBody_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rowbody', ExtRowbodyComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-rowbody', HTMLParsedElement.withParsedCallback(ExtRowbodyComponent));