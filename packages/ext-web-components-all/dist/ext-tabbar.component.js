import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabBar from './Ext/TabBar.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTabbar =
/*#__PURE__*/
function (_Ext_TabBar) {
  _inheritsLoose(ExtTabbar, _Ext_TabBar);

  function ExtTabbar() {
    var _this;

    _this = _Ext_TabBar.call(this, [], []) || this;
    _this.xtype = 'tabbar';
    return _this;
  }

  return ExtTabbar;
}(Ext_TabBar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabbar', ExtTabbar);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTabbar as default };
window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(ExtTabbar)); //export default reactify(ExtTabbar);