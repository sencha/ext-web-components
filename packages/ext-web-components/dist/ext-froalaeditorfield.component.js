import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_froala_EditorField_Component from './Ext/froala/EditorField';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtFroalaeditorfieldComponent =
/*#__PURE__*/
function (_Ext_froala_EditorFie) {
  _inheritsLoose(ExtFroalaeditorfieldComponent, _Ext_froala_EditorFie);

  function ExtFroalaeditorfieldComponent() {
    var _this;

    _this = _Ext_froala_EditorFie.call(this, {}, [], []) || this;
    _this.xtype = 'froalaeditorfield';
    return _this;
  }

  return ExtFroalaeditorfieldComponent;
}(Ext_froala_EditorField_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-froalaeditorfield', ExtFroalaeditorfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-froalaeditorfield', HTMLParsedElement.withParsedCallback(ExtFroalaeditorfieldComponent));