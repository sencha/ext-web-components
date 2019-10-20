import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Surface from './Ext/draw/Surface.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSurface =
/*#__PURE__*/
function (_Ext_draw_Surface) {
  _inheritsLoose(ExtSurface, _Ext_draw_Surface);

  function ExtSurface() {
    var _this;

    _this = _Ext_draw_Surface.call(this, [], []) || this;
    _this.xtype = 'surface';
    return _this;
  }

  return ExtSurface;
}(Ext_draw_Surface); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-surface', ExtSurface);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSurface as default };
window.customElements.define('ext-surface', HTMLParsedElement.withParsedCallback(ExtSurface)); //export default reactify(ExtSurface);