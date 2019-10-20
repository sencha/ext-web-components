import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Chip from './Ext/Chip.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtChip =
/*#__PURE__*/
function (_Ext_Chip) {
  _inheritsLoose(ExtChip, _Ext_Chip);

  function ExtChip() {
    var _this;

    _this = _Ext_Chip.call(this, [], []) || this;
    _this.xtype = 'chip';
    return _this;
  }

  return ExtChip;
}(Ext_Chip); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chip', ExtChip);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtChip as default };
window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(ExtChip)); //export default reactify(ExtChip);