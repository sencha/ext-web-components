import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor from './Ext/Editor';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtEditorComponent =
/*#__PURE__*/
function (_Ext_Editor) {
  _inheritsLoose(ExtEditorComponent, _Ext_Editor);

  function ExtEditorComponent() {
    var _this;

    _this = _Ext_Editor.call(this, [], []) || this;
    _this.xtype = 'editor';
    return _this;
  }

  return ExtEditorComponent;
}(Ext_Editor); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-editor', ExtEditorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(ExtEditorComponent));