import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_sparkline_Discrete from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Discrete.js';
import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSparklinediscrete =
/*#__PURE__*/
function (_Ext_sparkline_Discre) {
  _inheritsLoose(EWCSparklinediscrete, _Ext_sparkline_Discre);

  function EWCSparklinediscrete() {
    var _this;

    _this = _Ext_sparkline_Discre.call(this, [], []) || this;
    _this.xtype = 'sparklinediscrete';
    return _this;
  }

  return EWCSparklinediscrete;
}(Ext_sparkline_Discrete);

export { EWCSparklinediscrete as default };
window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(EWCSparklinediscrete));