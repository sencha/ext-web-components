import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRoweditorcell = /*#__PURE__*/function (_Ext_grid_rowedit_Cel) {
  _inheritsLoose(EWCRoweditorcell, _Ext_grid_rowedit_Cel);

  function EWCRoweditorcell() {
    var _this;

    _this = _Ext_grid_rowedit_Cel.call(this, [], []) || this;
    _this.xtype = 'roweditorcell';
    return _this;
  }

  return EWCRoweditorcell;
}(Ext_grid_rowedit_Cell);

export { EWCRoweditorcell as default };

try {
  window.customElements.define('ext-roweditorcell', ElementParser.withParsedCallback(EWCRoweditorcell));
} catch (e) {
  window.customElements.define('ext-roweditorcell', EWCRoweditorcell);
}