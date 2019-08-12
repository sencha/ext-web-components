import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TitleBar_Component from './Ext/TitleBar';
export var ExtTitlebarComponent =
/*#__PURE__*/
function (_Ext_TitleBar_Compone) {
  _inheritsLoose(ExtTitlebarComponent, _Ext_TitleBar_Compone);

  function ExtTitlebarComponent() {
    return _Ext_TitleBar_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtTitlebarComponent;
}(Ext_TitleBar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-titlebar', ExtTitlebarComponent);
  });
})();