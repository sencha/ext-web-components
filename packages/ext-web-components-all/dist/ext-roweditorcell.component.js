import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtRoweditorcellComponent =
/*#__PURE__*/
function (_Ext_grid_rowedit_Cel) {
  _inheritsLoose(ExtRoweditorcellComponent, _Ext_grid_rowedit_Cel);

  function ExtRoweditorcellComponent() {
    var _this;

    _this = _Ext_grid_rowedit_Cel.call(this, [], []) || this;
    _this.xtype = 'roweditorcell';
    return _this;
  }

  return ExtRoweditorcellComponent;
}(Ext_grid_rowedit_Cell); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorcell', ExtRoweditorcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-roweditorcell', HTMLParsedElement.withParsedCallback(ExtRoweditorcellComponent));