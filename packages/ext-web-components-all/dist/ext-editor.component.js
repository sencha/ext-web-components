import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor_Component from './Ext/Editor';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtEditorComponent =
/*#__PURE__*/
function (_Ext_Editor_Component) {
  _inheritsLoose(ExtEditorComponent, _Ext_Editor_Component);

  function ExtEditorComponent() {
    var _this;

    _this = _Ext_Editor_Component.call(this) || this;
    _this.xtype = 'editor';
    return _this;
  }

  return ExtEditorComponent;
}(Ext_Editor_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-editor', ExtEditorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(ExtEditorComponent));