import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSparklinepie =
/*#__PURE__*/
function (_Ext_sparkline_Pie) {
  _inheritsLoose(ExtSparklinepie, _Ext_sparkline_Pie);

  function ExtSparklinepie() {
    var _this;

    _this = _Ext_sparkline_Pie.call(this, [], []) || this;
    _this.xtype = 'sparklinepie';
    return _this;
  }

  return ExtSparklinepie;
}(Ext_sparkline_Pie); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinepie', ExtSparklinepie);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSparklinepie as default };
window.customElements.define('ext-sparklinepie', HTMLParsedElement.withParsedCallback(ExtSparklinepie)); //export default reactify(ExtSparklinepie);