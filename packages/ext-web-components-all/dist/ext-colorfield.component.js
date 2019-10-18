import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtColorfieldComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_Fie) {
  _inheritsLoose(ExtColorfieldComponent, _Ext_ux_colorpick_Fie);

  function ExtColorfieldComponent() {
    var _this;

    _this = _Ext_ux_colorpick_Fie.call(this, [], []) || this;
    _this.xtype = 'colorfield';
    return _this;
  }

  return ExtColorfieldComponent;
}(Ext_ux_colorpick_Field); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorfield', ExtColorfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-colorfield', HTMLParsedElement.withParsedCallback(ExtColorfieldComponent));