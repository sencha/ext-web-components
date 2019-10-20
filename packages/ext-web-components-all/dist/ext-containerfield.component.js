import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container from './Ext/field/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtContainerfield =
/*#__PURE__*/
function (_Ext_field_Container) {
  _inheritsLoose(ExtContainerfield, _Ext_field_Container);

  function ExtContainerfield() {
    var _this;

    _this = _Ext_field_Container.call(this, [], []) || this;
    _this.xtype = 'containerfield';
    return _this;
  }

  return ExtContainerfield;
}(Ext_field_Container); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-containerfield', ExtContainerfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtContainerfield as default };
window.customElements.define('ext-containerfield', HTMLParsedElement.withParsedCallback(ExtContainerfield)); //export default reactify(ExtContainerfield);