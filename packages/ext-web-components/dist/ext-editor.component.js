import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor_Component from './Ext/Editor';
export var ExtEditorComponent =
/*#__PURE__*/
function (_Ext_Editor_Component) {
  _inheritsLoose(ExtEditorComponent, _Ext_Editor_Component);

  function ExtEditorComponent() {
    return _Ext_Editor_Component.call(this, '', '', {}, '') || this;
  }

  return ExtEditorComponent;
}(Ext_Editor_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-editor', ExtEditorComponent);
  });
})();