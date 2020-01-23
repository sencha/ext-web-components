import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Audio from './Ext/Audio.js';
import ElementParser from './ElementParser.js';

var EWCAudio =
/*#__PURE__*/
function (_Ext_Audio) {
  _inheritsLoose(EWCAudio, _Ext_Audio);

  function EWCAudio() {
    var _this;

    _this = _Ext_Audio.call(this, [], []) || this;
    _this.xtype = 'audio';
    return _this;
  }

  return EWCAudio;
}(Ext_Audio);

export { EWCAudio as default };

try {
  window.customElements.define('ext-audio', ElementParser.withParsedCallback(EWCAudio));
} catch (e) {
  window.customElements.define('ext-audio', EWCAudio);
}