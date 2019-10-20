import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtDatetitle =
/*#__PURE__*/
function (_Ext_panel_DateTitle) {
  _inheritsLoose(ExtDatetitle, _Ext_panel_DateTitle);

  function ExtDatetitle() {
    var _this;

    _this = _Ext_panel_DateTitle.call(this, [], []) || this;
    _this.xtype = 'datetitle';
    return _this;
  }

  return ExtDatetitle;
}(Ext_panel_DateTitle); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datetitle', ExtDatetitle);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtDatetitle as default };
window.customElements.define('ext-datetitle', HTMLParsedElement.withParsedCallback(ExtDatetitle)); //export default reactify(ExtDatetitle);