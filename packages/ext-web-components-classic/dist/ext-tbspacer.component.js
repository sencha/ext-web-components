import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_Spacer from './Ext/toolbar/Spacer.js';
import ElementParser from './common/ElementParser.js';

var EWCTbspacer = /*#__PURE__*/function (_Ext_toolbar_Spacer) {
  _inheritsLoose(EWCTbspacer, _Ext_toolbar_Spacer);

  function EWCTbspacer() {
    var _this;

    _this = _Ext_toolbar_Spacer.call(this, [], []) || this;
    _this.xtype = 'tbspacer';
    return _this;
  }

  return EWCTbspacer;
}(Ext_toolbar_Spacer);

export { EWCTbspacer as default };

try {
  if (window.customElements.get('ext-tbspacer') == undefined) {
    window.customElements.define('ext-tbspacer', ElementParser.withParsedCallback(EWCTbspacer));
  }
} catch (e) {
  if (window.customElements.get('ext-tbspacer') == undefined) {
    window.customElements.define('ext-tbspacer', EWCTbspacer);
  }
}