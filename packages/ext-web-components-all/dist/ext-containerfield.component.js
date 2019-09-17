import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container_Component from './Ext/field/Container';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtContainerfieldComponent =
/*#__PURE__*/
function (_Ext_field_Container_) {
  _inheritsLoose(ExtContainerfieldComponent, _Ext_field_Container_);

  function ExtContainerfieldComponent() {
    var _this;

    _this = _Ext_field_Container_.call(this) || this;
    _this.xtype = 'containerfield';
    return _this;
  }

  return ExtContainerfieldComponent;
}(Ext_field_Container_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-containerfield', ExtContainerfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-containerfield', HTMLParsedElement.withParsedCallback(ExtContainerfieldComponent));