import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSparklinebar =
/*#__PURE__*/
function (_Ext_sparkline_Bar) {
  _inheritsLoose(ExtSparklinebar, _Ext_sparkline_Bar);

  function ExtSparklinebar() {
    var _this;

    _this = _Ext_sparkline_Bar.call(this, [], []) || this;
    _this.xtype = 'sparklinebar';
    return _this;
  }

  return ExtSparklinebar;
}(Ext_sparkline_Bar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebar', ExtSparklinebar);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSparklinebar as default };
window.customElements.define('ext-sparklinebar', HTMLParsedElement.withParsedCallback(ExtSparklinebar)); //export default reactify(ExtSparklinebar);