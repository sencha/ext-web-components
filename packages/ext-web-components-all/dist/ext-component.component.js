import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtComponent =
/*#__PURE__*/
function (_Ext_Gadget) {
  _inheritsLoose(ExtComponent, _Ext_Gadget);

  function ExtComponent() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'component';
    return _this;
  }

  return ExtComponent;
}(Ext_Gadget); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-component', ExtComponent);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtComponent as default };
window.customElements.define('ext-component', HTMLParsedElement.withParsedCallback(ExtComponent)); //export default reactify(ExtComponent);