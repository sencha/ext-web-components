import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ActionSheet from './Ext/ActionSheet.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtActionsheet =
/*#__PURE__*/
function (_Ext_ActionSheet) {
  _inheritsLoose(ExtActionsheet, _Ext_ActionSheet);

  function ExtActionsheet() {
    var _this;

    _this = _Ext_ActionSheet.call(this, [], []) || this;
    _this.xtype = 'actionsheet';
    return _this;
  }

  return ExtActionsheet;
}(Ext_ActionSheet); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-actionsheet', ExtActionsheet);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtActionsheet as default };
window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(ExtActionsheet)); //export default reactify(ExtActionsheet);