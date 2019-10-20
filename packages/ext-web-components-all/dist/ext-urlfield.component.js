import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Url from './Ext/form/Url.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtUrlfield =
/*#__PURE__*/
function (_Ext_form_Url) {
  _inheritsLoose(ExtUrlfield, _Ext_form_Url);

  function ExtUrlfield() {
    var _this;

    _this = _Ext_form_Url.call(this, [], []) || this;
    _this.xtype = 'urlfield';
    return _this;
  }

  return ExtUrlfield;
}(Ext_form_Url); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-urlfield', ExtUrlfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtUrlfield as default };
window.customElements.define('ext-urlfield', HTMLParsedElement.withParsedCallback(ExtUrlfield)); //export default reactify(ExtUrlfield);