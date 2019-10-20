import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_IndexBar from './Ext/IndexBar.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtIndexbar =
/*#__PURE__*/
function (_Ext_IndexBar) {
  _inheritsLoose(ExtIndexbar, _Ext_IndexBar);

  function ExtIndexbar() {
    var _this;

    _this = _Ext_IndexBar.call(this, [], []) || this;
    _this.xtype = 'indexbar';
    return _this;
  }

  return ExtIndexbar;
}(Ext_IndexBar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indexbar', ExtIndexbar);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtIndexbar as default };
window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(ExtIndexbar)); //export default reactify(ExtIndexbar);