import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Title_Component from './Ext/Title';
export var ExtTitleComponent =
/*#__PURE__*/
function (_Ext_Title_Component) {
  _inheritsLoose(ExtTitleComponent, _Ext_Title_Component);

  function ExtTitleComponent() {
    return _Ext_Title_Component.call(this, '', '', {}, '') || this;
  }

  return ExtTitleComponent;
}(Ext_Title_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-title', ExtTitleComponent);
  });
})();