import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowHeader_Component from './Ext/grid/RowHeader';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRowheaderComponent =
/*#__PURE__*/
function (_Ext_grid_RowHeader_C) {
  _inheritsLoose(ExtRowheaderComponent, _Ext_grid_RowHeader_C);

  function ExtRowheaderComponent() {
    var _this;

    _this = _Ext_grid_RowHeader_C.call(this) || this;
    _this.xtype = 'rowheader';
    return _this;
  }

  return ExtRowheaderComponent;
}(Ext_grid_RowHeader_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rowheader', ExtRowheaderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-rowheader', HTMLParsedElement.withParsedCallback(ExtRowheaderComponent));