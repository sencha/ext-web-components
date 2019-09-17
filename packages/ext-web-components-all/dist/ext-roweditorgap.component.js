import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Gap_Component from './Ext/grid/rowedit/Gap';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRoweditorgapComponent =
/*#__PURE__*/
function (_Ext_grid_rowedit_Gap) {
  _inheritsLoose(ExtRoweditorgapComponent, _Ext_grid_rowedit_Gap);

  function ExtRoweditorgapComponent() {
    var _this;

    _this = _Ext_grid_rowedit_Gap.call(this) || this;
    _this.xtype = 'roweditorgap';
    return _this;
  }

  return ExtRoweditorgapComponent;
}(Ext_grid_rowedit_Gap_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorgap', ExtRoweditorgapComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-roweditorgap', HTMLParsedElement.withParsedCallback(ExtRoweditorgapComponent));