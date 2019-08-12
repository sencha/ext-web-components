import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Audio_Component from './Ext/Audio';
export var ExtAudioComponent =
/*#__PURE__*/
function (_Ext_Audio_Component) {
  _inheritsLoose(ExtAudioComponent, _Ext_Audio_Component);

  function ExtAudioComponent() {
    return _Ext_Audio_Component.call(this, '', '', {}, '') || this;
  }

  return ExtAudioComponent;
}(Ext_Audio_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-audio', ExtAudioComponent);
  });
})();