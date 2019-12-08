import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_resizer_Splitter from '@sencha/ext-runtime-base/dist/./Ext/resizer/Splitter.js';
import Ext_resizer_Splitter from './Ext/resizer/Splitter.js';
import ElementParser from './ElementParser.js';

var EWCSplitter =
/*#__PURE__*/
function (_Ext_resizer_Splitter) {
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
window.customElements.define('ext-splitter', ElementParser.withParsedCallback(EWCSplitter));