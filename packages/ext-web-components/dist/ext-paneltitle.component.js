import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Title_Component from './Ext/panel/Title';
export var ExtPaneltitleComponent =
/*#__PURE__*/
function (_Ext_panel_Title_Comp) {
  _inheritsLoose(ExtPaneltitleComponent, _Ext_panel_Title_Comp);

  function ExtPaneltitleComponent() {
    return _Ext_panel_Title_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtPaneltitleComponent;
}(Ext_panel_Title_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-paneltitle', ExtPaneltitleComponent);
  });
})();