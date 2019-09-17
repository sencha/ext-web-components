import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Label_Component from './Ext/Label';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtLabelComponent =
/*#__PURE__*/
function (_Ext_Label_Component) {
  _inheritsLoose(ExtLabelComponent, _Ext_Label_Component);

  function ExtLabelComponent() {
    var _this;

    _this = _Ext_Label_Component.call(this, {}, [], []) || this;
    _this.xtype = 'label';
    return _this;
  }

  return ExtLabelComponent;
}(Ext_Label_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-label', ExtLabelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(ExtLabelComponent));