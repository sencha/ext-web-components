import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import ElementParser from './common/ElementParser.js';

var EWCRoweditorbar = /*#__PURE__*/function (_Ext_grid_rowedit_Bar) {
  _inheritsLoose(EWCRoweditorbar, _Ext_grid_rowedit_Bar);

  function EWCRoweditorbar() {
    var _this;

    _this = _Ext_grid_rowedit_Bar.call(this, [], []) || this;
    _this.xtype = 'roweditorbar';
    return _this;
  }

  return EWCRoweditorbar;
}(Ext_grid_rowedit_Bar);

export { EWCRoweditorbar as default };

try {
  if (window.customElements.get('ext-roweditorbar') == undefined) {
    window.customElements.define('ext-roweditorbar', ElementParser.withParsedCallback(EWCRoweditorbar));
  }
} catch (e) {
  if (window.customElements.get('ext-roweditorbar') == undefined) {
    window.customElements.define('ext-roweditorbar', EWCRoweditorbar);
  }
}