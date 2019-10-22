import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_froala_EditorField from './Ext/froala/EditorField.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtFroalaeditorfield =
/*#__PURE__*/
function (_Ext_froala_EditorFie) {
  _inheritsLoose(ExtFroalaeditorfield, _Ext_froala_EditorFie);

  function ExtFroalaeditorfield() {
    var _this;

    _this = _Ext_froala_EditorFie.call(this, [], []) || this;
    _this.xtype = 'froalaeditorfield';
    return _this;
  }

  return ExtFroalaeditorfield;
}(Ext_froala_EditorField);

export { ExtFroalaeditorfield as default };
window.customElements.define('ext-froalaeditorfield', HTMLParsedElement.withParsedCallback(ExtFroalaeditorfield));