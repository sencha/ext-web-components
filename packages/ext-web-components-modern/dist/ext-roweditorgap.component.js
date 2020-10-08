import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import ElementParser from './common/ElementParser.js';

var EWCRoweditorgap = /*#__PURE__*/function (_Ext_grid_rowedit_Gap) {
  _inheritsLoose(EWCRoweditorgap, _Ext_grid_rowedit_Gap);

  function EWCRoweditorgap() {
    var _this;

    _this = _Ext_grid_rowedit_Gap.call(this, [], []) || this;
    _this.xtype = 'roweditorgap';
    return _this;
  }

  return EWCRoweditorgap;
}(Ext_grid_rowedit_Gap);

export { EWCRoweditorgap as default };

try {
  if (window.customElements.get('ext-roweditorgap') == undefined) {
    window.customElements.define('ext-roweditorgap', ElementParser.withParsedCallback(EWCRoweditorgap));
  }
} catch (e) {
  if (window.customElements.get('ext-roweditorgap') == undefined) {
    window.customElements.define('ext-roweditorgap', EWCRoweditorgap);
  }
}