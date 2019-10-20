import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Spacer from './Ext/Spacer.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSpacer =
/*#__PURE__*/
function (_Ext_Spacer) {
  _inheritsLoose(ExtSpacer, _Ext_Spacer);

  function ExtSpacer() {
    var _this;

    _this = _Ext_Spacer.call(this, [], []) || this;
    _this.xtype = 'spacer';
    return _this;
  }

  return ExtSpacer;
}(Ext_Spacer); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacer', ExtSpacer);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSpacer as default };
window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(ExtSpacer)); //export default reactify(ExtSpacer);