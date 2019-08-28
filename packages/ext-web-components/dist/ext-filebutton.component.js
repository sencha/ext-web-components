import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FileButton_Component from './Ext/field/FileButton';
export var ExtFilebuttonComponent =
/*#__PURE__*/
function (_Ext_field_FileButton) {
  _inheritsLoose(ExtFilebuttonComponent, _Ext_field_FileButton);

  function ExtFilebuttonComponent() {
    return _Ext_field_FileButton.call(this, '', '', {}, '') || this;
  }

  return ExtFilebuttonComponent;
}(Ext_field_FileButton_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-filebutton', ExtFilebuttonComponent);
  });
})();