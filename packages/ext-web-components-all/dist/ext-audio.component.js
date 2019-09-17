import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Audio_Component from './Ext/Audio';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtAudioComponent =
/*#__PURE__*/
function (_Ext_Audio_Component) {
  _inheritsLoose(ExtAudioComponent, _Ext_Audio_Component);

  function ExtAudioComponent() {
    var _this;

    _this = _Ext_Audio_Component.call(this) || this;
    _this.xtype = 'audio';
    return _this;
  }

  return ExtAudioComponent;
}(Ext_Audio_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-audio', ExtAudioComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(ExtAudioComponent));