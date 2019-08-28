import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_froala_EditorField_Component from './Ext/froala/EditorField';
export var ExtFroalaeditorfieldComponent =
/*#__PURE__*/
function (_Ext_froala_EditorFie) {
  _inheritsLoose(ExtFroalaeditorfieldComponent, _Ext_froala_EditorFie);

  function ExtFroalaeditorfieldComponent() {
    return _Ext_froala_EditorFie.call(this, '', '', {}, '') || this;
  }

  return ExtFroalaeditorfieldComponent;
}(Ext_froala_EditorField_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-froalaeditorfield', ExtFroalaeditorfieldComponent);
  });
})();