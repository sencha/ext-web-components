import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Component from './Ext/draw/Component.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDraw =
/*#__PURE__*/
function (_Ext_draw_Component) {
  _inheritsLoose(ExtDraw, _Ext_draw_Component);

  function ExtDraw() {
    var _this;

    _this = _Ext_draw_Component.call(this, [], []) || this;
    _this.xtype = 'draw';
    return _this;
  }

  return ExtDraw;
}(Ext_draw_Component);

export { ExtDraw as default };
window.customElements.define('ext-draw', HTMLParsedElement.withParsedCallback(ExtDraw));