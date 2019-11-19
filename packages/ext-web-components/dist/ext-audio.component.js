import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Audio from '@sencha/ext-runtime-base/dist/./Ext/Audio.js';
import Ext_Audio from './Ext/Audio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(EWCAudio));