import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_SplitButton from './Ext/SplitButton.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSplitbutton =
/*#__PURE__*/
function (_Ext_SplitButton) {
  _inheritsLoose(ExtSplitbutton, _Ext_SplitButton);

  function ExtSplitbutton() {
    var _this;

    _this = _Ext_SplitButton.call(this, [], []) || this;
    _this.xtype = 'splitbutton';
    return _this;
  }

  return ExtSplitbutton;
}(Ext_SplitButton); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-splitbutton', ExtSplitbutton);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSplitbutton as default };
window.customElements.define('ext-splitbutton', HTMLParsedElement.withParsedCallback(ExtSplitbutton)); //export default reactify(ExtSplitbutton);