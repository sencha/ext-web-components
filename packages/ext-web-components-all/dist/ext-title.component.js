import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Title from './Ext/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTitle =
/*#__PURE__*/
function (_Ext_Title) {
  _inheritsLoose(ExtTitle, _Ext_Title);

  function ExtTitle() {
    var _this;

    _this = _Ext_Title.call(this, [], []) || this;
    _this.xtype = 'title';
    return _this;
  }

  return ExtTitle;
}(Ext_Title); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-title', ExtTitle);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTitle as default };
window.customElements.define('ext-title', HTMLParsedElement.withParsedCallback(ExtTitle)); //export default reactify(ExtTitle);