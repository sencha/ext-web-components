import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Tab from './Ext/Tab.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTab =
/*#__PURE__*/
function (_Ext_Tab) {
  _inheritsLoose(ExtTab, _Ext_Tab);

  function ExtTab() {
    var _this;

    _this = _Ext_Tab.call(this, [], []) || this;
    _this.xtype = 'tab';
    return _this;
  }

  return ExtTab;
}(Ext_Tab); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tab', ExtTab);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTab as default };
window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(ExtTab)); //export default reactify(ExtTab);