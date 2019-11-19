import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Label from './Ext/Label';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtLabelComponent =
/*#__PURE__*/
function (_Ext_Label) {
  _inheritsLoose(ExtLabelComponent, _Ext_Label);

  function ExtLabelComponent() {
    var _this;

    _this = _Ext_Label.call(this, [], []) || this;
    _this.xtype = 'label';
    return _this;
  }

  return ExtLabelComponent;
}(Ext_Label); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-label', ExtLabelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(ExtLabelComponent));