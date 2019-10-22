import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Audio from './Ext/Audio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtAudio =
/*#__PURE__*/
function (_Ext_Audio) {
  _inheritsLoose(ExtAudio, _Ext_Audio);

  function ExtAudio() {
    var _this;

    _this = _Ext_Audio.call(this, [], []) || this;
    _this.xtype = 'audio';
    return _this;
  }

  return ExtAudio;
}(Ext_Audio);

export { ExtAudio as default };
window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(ExtAudio));