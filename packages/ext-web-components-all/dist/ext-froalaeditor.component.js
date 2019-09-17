import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_froala_Editor_Component from './Ext/froala/Editor';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtFroalaeditorComponent =
/*#__PURE__*/
function (_Ext_froala_Editor_Co) {
  _inheritsLoose(ExtFroalaeditorComponent, _Ext_froala_Editor_Co);

  function ExtFroalaeditorComponent() {
    var _this;

    _this = _Ext_froala_Editor_Co.call(this) || this;
    _this.xtype = 'froalaeditor';
    return _this;
  }

  return ExtFroalaeditorComponent;
}(Ext_froala_Editor_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-froalaeditor', ExtFroalaeditorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-froalaeditor', HTMLParsedElement.withParsedCallback(ExtFroalaeditorComponent));