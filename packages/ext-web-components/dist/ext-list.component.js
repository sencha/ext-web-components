import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_List_Component from './Ext/List';
export var ExtListComponent =
/*#__PURE__*/
function (_Ext_List_Component) {
  _inheritsLoose(ExtListComponent, _Ext_List_Component);

  function ExtListComponent() {
    return _Ext_List_Component.call(this, '', '', {}, '') || this;
  }

  return ExtListComponent;
}(Ext_List_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-list', ExtListComponent);
  });
})();