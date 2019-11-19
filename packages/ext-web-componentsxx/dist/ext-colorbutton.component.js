import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtColorbuttonComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_But) {
  _inheritsLoose(ExtColorbuttonComponent, _Ext_ux_colorpick_But);

  function ExtColorbuttonComponent() {
    var _this;

    _this = _Ext_ux_colorpick_But.call(this, [], []) || this;
    _this.xtype = 'colorbutton';
    return _this;
  }

  return ExtColorbuttonComponent;
}(Ext_ux_colorpick_Button); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorbutton', ExtColorbuttonComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-colorbutton', HTMLParsedElement.withParsedCallback(ExtColorbuttonComponent));