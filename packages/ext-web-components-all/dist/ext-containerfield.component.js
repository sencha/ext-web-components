import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container from './Ext/field/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtContainerfieldComponent =
/*#__PURE__*/
function (_Ext_field_Container) {
  _inheritsLoose(ExtContainerfieldComponent, _Ext_field_Container);

  function ExtContainerfieldComponent() {
    var _this;

    _this = _Ext_field_Container.call(this, [], []) || this;
    _this.xtype = 'containerfield';
    return _this;
  }

  return ExtContainerfieldComponent;
}(Ext_field_Container); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-containerfield', ExtContainerfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-containerfield', HTMLParsedElement.withParsedCallback(ExtContainerfieldComponent));