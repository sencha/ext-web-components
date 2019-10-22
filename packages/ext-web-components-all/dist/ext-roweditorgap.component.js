import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRoweditorgap =
/*#__PURE__*/
function (_Ext_grid_rowedit_Gap) {
  _inheritsLoose(ExtRoweditorgap, _Ext_grid_rowedit_Gap);

  function ExtRoweditorgap() {
    var _this;

    _this = _Ext_grid_rowedit_Gap.call(this, [], []) || this;
    _this.xtype = 'roweditorgap';
    return _this;
  }

  return ExtRoweditorgap;
}(Ext_grid_rowedit_Gap);

export { ExtRoweditorgap as default };
window.customElements.define('ext-roweditorgap', HTMLParsedElement.withParsedCallback(ExtRoweditorgap));