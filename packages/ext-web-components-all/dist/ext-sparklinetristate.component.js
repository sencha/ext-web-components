import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSparklinetristate =
/*#__PURE__*/
function (_Ext_sparkline_TriSta) {
  _inheritsLoose(ExtSparklinetristate, _Ext_sparkline_TriSta);

  function ExtSparklinetristate() {
    var _this;

    _this = _Ext_sparkline_TriSta.call(this, [], []) || this;
    _this.xtype = 'sparklinetristate';
    return _this;
  }

  return ExtSparklinetristate;
}(Ext_sparkline_TriState); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinetristate', ExtSparklinetristate);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSparklinetristate as default };
window.customElements.define('ext-sparklinetristate', HTMLParsedElement.withParsedCallback(ExtSparklinetristate)); //export default reactify(ExtSparklinetristate);