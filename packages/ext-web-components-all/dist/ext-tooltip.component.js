import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTooltip =
/*#__PURE__*/
function (_Ext_tip_ToolTip) {
  _inheritsLoose(ExtTooltip, _Ext_tip_ToolTip);

  function ExtTooltip() {
    var _this;

    _this = _Ext_tip_ToolTip.call(this, [], []) || this;
    _this.xtype = 'tooltip';
    return _this;
  }

  return ExtTooltip;
}(Ext_tip_ToolTip); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tooltip', ExtTooltip);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTooltip as default };
window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(ExtTooltip)); //export default reactify(ExtTooltip);