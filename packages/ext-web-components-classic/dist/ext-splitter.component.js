import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_resizer_Splitter from './Ext/resizer/Splitter.js';
import ElementParser from './common/ElementParser.js';

var EWCSplitter = /*#__PURE__*/function (_Ext_resizer_Splitter) {
  _inheritsLoose(EWCSplitter, _Ext_resizer_Splitter);

  function EWCSplitter() {
    var _this;

    _this = _Ext_resizer_Splitter.call(this, [], []) || this;
    _this.xtype = 'splitter';
    return _this;
  }

  return EWCSplitter;
}(Ext_resizer_Splitter);

export { EWCSplitter as default };

try {
  if (window.customElements.get('ext-splitter') == undefined) {
    window.customElements.define('ext-splitter', ElementParser.withParsedCallback(EWCSplitter));
  }
} catch (e) {
  if (window.customElements.get('ext-splitter') == undefined) {
    window.customElements.define('ext-splitter', EWCSplitter);
  }
}