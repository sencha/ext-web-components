import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_Separator from './Ext/toolbar/Separator.js';
import ElementParser from './common/ElementParser.js';

var EWCTbseparator = /*#__PURE__*/function (_Ext_toolbar_Separato) {
  _inheritsLoose(EWCTbseparator, _Ext_toolbar_Separato);

  function EWCTbseparator() {
    var _this;

    _this = _Ext_toolbar_Separato.call(this, [], []) || this;
    _this.xtype = 'tbseparator';
    return _this;
  }

  return EWCTbseparator;
}(Ext_toolbar_Separator);

export { EWCTbseparator as default };

try {
  if (window.customElements.get('ext-tbseparator') == undefined) {
    window.customElements.define('ext-tbseparator', ElementParser.withParsedCallback(EWCTbseparator));
  }
} catch (e) {
  if (window.customElements.get('ext-tbseparator') == undefined) {
    window.customElements.define('ext-tbseparator', EWCTbseparator);
  }
}