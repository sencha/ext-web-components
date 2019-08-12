import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_File_Component from './Ext/field/File';
export var ExtFilefieldComponent =
/*#__PURE__*/
function (_Ext_field_File_Compo) {
  _inheritsLoose(ExtFilefieldComponent, _Ext_field_File_Compo);

  function ExtFilefieldComponent() {
    return _Ext_field_File_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtFilefieldComponent;
}(Ext_field_File_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-filefield', ExtFilefieldComponent);
  });
})();