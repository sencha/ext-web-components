import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DataView from './Ext/DataView.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtDataview =
/*#__PURE__*/
function (_Ext_DataView) {
  _inheritsLoose(ExtDataview, _Ext_DataView);

  function ExtDataview() {
    var _this;

    _this = _Ext_DataView.call(this, [], []) || this;
    _this.xtype = 'dataview';
    return _this;
  }

  return ExtDataview;
}(Ext_DataView); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dataview', ExtDataview);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtDataview as default };
window.customElements.define('ext-dataview', HTMLParsedElement.withParsedCallback(ExtDataview)); //export default reactify(ExtDataview);