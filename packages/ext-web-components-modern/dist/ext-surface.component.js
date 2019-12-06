import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_draw_Surface from '@sencha/ext-runtime-base/dist/./Ext/draw/Surface.js';
import Ext_draw_Surface from './Ext/draw/Surface.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSurface =
/*#__PURE__*/
function (_Ext_draw_Surface) {
  _inheritsLoose(EWCSurface, _Ext_draw_Surface);

  function EWCSurface() {
    var _this;

    _this = _Ext_draw_Surface.call(this, [], []) || this;
    _this.xtype = 'surface';
    return _this;
  }

  return EWCSurface;
}(Ext_draw_Surface);

export { EWCSurface as default };
window.customElements.define('ext-surface', HTMLParsedElement.withParsedCallback(EWCSurface));