import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSparkline =
/*#__PURE__*/
function (_Ext_sparkline_Base) {
  _inheritsLoose(ExtSparkline, _Ext_sparkline_Base);

  function ExtSparkline() {
    var _this;

    _this = _Ext_sparkline_Base.call(this, [], []) || this;
    _this.xtype = 'sparkline';
    return _this;
  }

  return ExtSparkline;
}(Ext_sparkline_Base); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparkline', ExtSparkline);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSparkline as default };
window.customElements.define('ext-sparkline', HTMLParsedElement.withParsedCallback(ExtSparkline)); //export default reactify(ExtSparkline);