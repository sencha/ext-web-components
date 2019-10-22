import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRoweditorcell =
/*#__PURE__*/
function (_Ext_grid_rowedit_Cel) {
  _inheritsLoose(ExtRoweditorcell, _Ext_grid_rowedit_Cel);

  function ExtRoweditorcell() {
    var _this;

    _this = _Ext_grid_rowedit_Cel.call(this, [], []) || this;
    _this.xtype = 'roweditorcell';
    return _this;
  }

  return ExtRoweditorcell;
}(Ext_grid_rowedit_Cell);

export { ExtRoweditorcell as default };
window.customElements.define('ext-roweditorcell', HTMLParsedElement.withParsedCallback(ExtRoweditorcell));