import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPivottreemap =
/*#__PURE__*/
function (_Ext_pivot_d3_TreeMap) {
  _inheritsLoose(ExtPivottreemap, _Ext_pivot_d3_TreeMap);

  function ExtPivottreemap() {
    var _this;

    _this = _Ext_pivot_d3_TreeMap.call(this, [], []) || this;
    _this.xtype = 'pivottreemap';
    return _this;
  }

  return ExtPivottreemap;
}(Ext_pivot_d3_TreeMap); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivottreemap', ExtPivottreemap);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPivottreemap as default };
window.customElements.define('ext-pivottreemap', HTMLParsedElement.withParsedCallback(ExtPivottreemap)); //export default reactify(ExtPivottreemap);