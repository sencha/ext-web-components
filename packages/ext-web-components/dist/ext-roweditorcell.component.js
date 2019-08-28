import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Cell_Component from './Ext/grid/rowedit/Cell';
export var ExtRoweditorcellComponent =
/*#__PURE__*/
function (_Ext_grid_rowedit_Cel) {
  _inheritsLoose(ExtRoweditorcellComponent, _Ext_grid_rowedit_Cel);

  function ExtRoweditorcellComponent() {
    return _Ext_grid_rowedit_Cel.call(this, '', '', {}, '') || this;
  }

  return ExtRoweditorcellComponent;
}(Ext_grid_rowedit_Cell_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-roweditorcell', ExtRoweditorcellComponent);
  });
})();