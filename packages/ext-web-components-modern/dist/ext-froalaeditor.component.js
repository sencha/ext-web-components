import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_froala_Editor from '@sencha/ext-runtime-base/dist/./Ext/froala/Editor.js';
import Ext_froala_Editor from './Ext/froala/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCFroalaeditor =
/*#__PURE__*/
function (_Ext_froala_Editor) {
  _inheritsLoose(EWCFroalaeditor, _Ext_froala_Editor);

  function EWCFroalaeditor() {
    var _this;

    _this = _Ext_froala_Editor.call(this, [], []) || this;
    _this.xtype = 'froalaeditor';
    return _this;
  }

  return EWCFroalaeditor;
}(Ext_froala_Editor);

export { EWCFroalaeditor as default };
window.customElements.define('ext-froalaeditor', HTMLParsedElement.withParsedCallback(EWCFroalaeditor));