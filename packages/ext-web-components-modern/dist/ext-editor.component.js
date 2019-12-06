import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_Editor from '@sencha/ext-runtime-base/dist/./Ext/Editor.js';
import Ext_Editor from './Ext/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCEditor =
/*#__PURE__*/
function (_Ext_Editor) {
  _inheritsLoose(EWCEditor, _Ext_Editor);

  function EWCEditor() {
    var _this;

    _this = _Ext_Editor.call(this, [], []) || this;
    _this.xtype = 'editor';
    return _this;
  }

  return EWCEditor;
}(Ext_Editor);

export { EWCEditor as default };
window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(EWCEditor));