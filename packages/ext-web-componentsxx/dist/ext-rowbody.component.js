import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowBody from './Ext/grid/RowBody';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRowbodyComponent =
/*#__PURE__*/
function (_Ext_grid_RowBody) {
  _inheritsLoose(ExtRowbodyComponent, _Ext_grid_RowBody);

  function ExtRowbodyComponent() {
    var _this;

    _this = _Ext_grid_RowBody.call(this, [], []) || this;
    _this.xtype = 'rowbody';
    return _this;
  }

  return ExtRowbodyComponent;
}(Ext_grid_RowBody); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rowbody', ExtRowbodyComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-rowbody', HTMLParsedElement.withParsedCallback(ExtRowbodyComponent));