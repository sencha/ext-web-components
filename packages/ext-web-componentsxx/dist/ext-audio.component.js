import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Audio from './Ext/Audio';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtAudioComponent =
/*#__PURE__*/
function (_Ext_Audio) {
  _inheritsLoose(ExtAudioComponent, _Ext_Audio);

  function ExtAudioComponent() {
    var _this;

    _this = _Ext_Audio.call(this, [], []) || this;
    _this.xtype = 'audio';
    return _this;
  }

  return ExtAudioComponent;
}(Ext_Audio); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-audio', ExtAudioComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(ExtAudioComponent));