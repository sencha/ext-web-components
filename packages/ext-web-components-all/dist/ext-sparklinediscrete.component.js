import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSparklinediscrete =
/*#__PURE__*/
function (_Ext_sparkline_Discre) {
  _inheritsLoose(ExtSparklinediscrete, _Ext_sparkline_Discre);

  function ExtSparklinediscrete() {
    var _this;

    _this = _Ext_sparkline_Discre.call(this, [], []) || this;
    _this.xtype = 'sparklinediscrete';
    return _this;
  }

  return ExtSparklinediscrete;
}(Ext_sparkline_Discrete); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinediscrete', ExtSparklinediscrete);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSparklinediscrete as default };
window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(ExtSparklinediscrete)); //export default reactify(ExtSparklinediscrete);