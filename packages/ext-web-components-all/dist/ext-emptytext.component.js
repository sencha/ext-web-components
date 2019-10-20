import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtEmptytext =
/*#__PURE__*/
function (_Ext_dataview_EmptyTe) {
  _inheritsLoose(ExtEmptytext, _Ext_dataview_EmptyTe);

  function ExtEmptytext() {
    var _this;

    _this = _Ext_dataview_EmptyTe.call(this, [], []) || this;
    _this.xtype = 'emptytext';
    return _this;
  }

  return ExtEmptytext;
}(Ext_dataview_EmptyText); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-emptytext', ExtEmptytext);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtEmptytext as default };
window.customElements.define('ext-emptytext', HTMLParsedElement.withParsedCallback(ExtEmptytext)); //export default reactify(ExtEmptytext);