import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPivotheatmap =
/*#__PURE__*/
function (_Ext_pivot_d3_HeatMap) {
  _inheritsLoose(ExtPivotheatmap, _Ext_pivot_d3_HeatMap);

  function ExtPivotheatmap() {
    var _this;

    _this = _Ext_pivot_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'pivotheatmap';
    return _this;
  }

  return ExtPivotheatmap;
}(Ext_pivot_d3_HeatMap); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotheatmap', ExtPivotheatmap);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPivotheatmap as default };
window.customElements.define('ext-pivotheatmap', HTMLParsedElement.withParsedCallback(ExtPivotheatmap)); //export default reactify(ExtPivotheatmap);