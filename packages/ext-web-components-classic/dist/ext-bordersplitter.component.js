import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_resizer_BorderSplitter from './Ext/resizer/BorderSplitter.js';
import ElementParser from './common/ElementParser.js';

var EWCBordersplitter = /*#__PURE__*/function (_Ext_resizer_BorderSp) {
  _inheritsLoose(EWCBordersplitter, _Ext_resizer_BorderSp);

  function EWCBordersplitter() {
    var _this;

    _this = _Ext_resizer_BorderSp.call(this, [], []) || this;
    _this.xtype = 'bordersplitter';
    return _this;
  }

  return EWCBordersplitter;
}(Ext_resizer_BorderSplitter);

export { EWCBordersplitter as default };

try {
  if (window.customElements.get('ext-bordersplitter') == undefined) {
    window.customElements.define('ext-bordersplitter', ElementParser.withParsedCallback(EWCBordersplitter));
  }
} catch (e) {
  if (window.customElements.get('ext-bordersplitter') == undefined) {
    window.customElements.define('ext-bordersplitter', EWCBordersplitter);
  }
}