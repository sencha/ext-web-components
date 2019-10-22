import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor from './Ext/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtEditor =
/*#__PURE__*/
function (_Ext_Editor) {
  _inheritsLoose(ExtEditor, _Ext_Editor);

  function ExtEditor() {
    var _this;

    _this = _Ext_Editor.call(this, [], []) || this;
    _this.xtype = 'editor';
    return _this;
  }

  return ExtEditor;
}(Ext_Editor);

export { ExtEditor as default };
window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(ExtEditor));