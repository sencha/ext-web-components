import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_Fill from './Ext/toolbar/Fill.js';
import ElementParser from './ElementParser.js';

var EWCTbfill =
/*#__PURE__*/
function (_Ext_toolbar_Fill) {
  _inheritsLoose(EWCTbfill, _Ext_toolbar_Fill);

  function EWCTbfill() {
    var _this;

    _this = _Ext_toolbar_Fill.call(this, [], []) || this;
    _this.xtype = 'tbfill';
    return _this;
  }

  return EWCTbfill;
}(Ext_toolbar_Fill);

export { EWCTbfill as default };
window.customElements.define('ext-tbfill', ElementParser.withParsedCallback(EWCTbfill));