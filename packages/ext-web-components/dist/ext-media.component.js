import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Media_Component from './Ext/Media';
export var ExtMediaComponent =
/*#__PURE__*/
function (_Ext_Media_Component) {
  _inheritsLoose(ExtMediaComponent, _Ext_Media_Component);

  function ExtMediaComponent() {
    return _Ext_Media_Component.call(this, '', '', {}, '') || this;
  }

  return ExtMediaComponent;
}(Ext_Media_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-media', ExtMediaComponent);
  });
})();