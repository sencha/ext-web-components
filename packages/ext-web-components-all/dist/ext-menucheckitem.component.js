import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtMenucheckitem =
/*#__PURE__*/
function (_Ext_menu_CheckItem) {
  _inheritsLoose(ExtMenucheckitem, _Ext_menu_CheckItem);

  function ExtMenucheckitem() {
    var _this;

    _this = _Ext_menu_CheckItem.call(this, [], []) || this;
    _this.xtype = 'menucheckitem';
    return _this;
  }

  return ExtMenucheckitem;
}(Ext_menu_CheckItem); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menucheckitem', ExtMenucheckitem);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtMenucheckitem as default };
window.customElements.define('ext-menucheckitem', HTMLParsedElement.withParsedCallback(ExtMenucheckitem)); //export default reactify(ExtMenucheckitem);