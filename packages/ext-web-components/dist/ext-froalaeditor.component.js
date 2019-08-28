import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_froala_Editor_Component from './Ext/froala/Editor';
export var ExtFroalaeditorComponent =
/*#__PURE__*/
function (_Ext_froala_Editor_Co) {
  _inheritsLoose(ExtFroalaeditorComponent, _Ext_froala_Editor_Co);

  function ExtFroalaeditorComponent() {
    return _Ext_froala_Editor_Co.call(this, '', '', {}, '') || this;
  }

  return ExtFroalaeditorComponent;
}(Ext_froala_Editor_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-froalaeditor', ExtFroalaeditorComponent);
  });
})();