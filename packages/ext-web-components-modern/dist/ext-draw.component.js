import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Component from './Ext/draw/Component.js';
import ElementParser from './common/ElementParser.js';

var EWCDraw = /*#__PURE__*/function (_Ext_draw_Component) {
  _inheritsLoose(EWCDraw, _Ext_draw_Component);

  function EWCDraw() {
    var _this;

    _this = _Ext_draw_Component.call(this, [], []) || this;
    _this.xtype = 'draw';
    return _this;
  }

  return EWCDraw;
}(Ext_draw_Component);

export { EWCDraw as default };

try {
  if (window.customElements.get('ext-draw') == undefined) {
    window.customElements.define('ext-draw', ElementParser.withParsedCallback(EWCDraw));
  }
} catch (e) {
  if (window.customElements.get('ext-draw') == undefined) {
    window.customElements.define('ext-draw', EWCDraw);
  }
}