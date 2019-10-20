import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Search from './Ext/form/Search.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSearchfield =
/*#__PURE__*/
function (_Ext_form_Search) {
  _inheritsLoose(ExtSearchfield, _Ext_form_Search);

  function ExtSearchfield() {
    var _this;

    _this = _Ext_form_Search.call(this, [], []) || this;
    _this.xtype = 'searchfield';
    return _this;
  }

  return ExtSearchfield;
}(Ext_form_Search); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-searchfield', ExtSearchfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSearchfield as default };
window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(ExtSearchfield)); //export default reactify(ExtSearchfield);