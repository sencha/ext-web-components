import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_froala_EditorField from '@sencha/ext-runtime-base/dist/./Ext/froala/EditorField.js';
import Ext_froala_EditorField from './Ext/froala/EditorField.js';
import ElementParser from './ElementParser.js';

var EWCFroalaeditorfield =
/*#__PURE__*/
function (_Ext_froala_EditorFie) {
  _inheritsLoose(EWCFroalaeditorfield, _Ext_froala_EditorFie);

  function EWCFroalaeditorfield() {
    var _this;

    _this = _Ext_froala_EditorFie.call(this, [], []) || this;
    _this.xtype = 'froalaeditorfield';
    return _this;
  }

  return EWCFroalaeditorfield;
}(Ext_froala_EditorField);

export { EWCFroalaeditorfield as default };
window.customElements.define('ext-froalaeditorfield', ElementParser.withParsedCallback(EWCFroalaeditorfield));