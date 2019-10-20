import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_froala_Editor from './Ext/froala/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtFroalaeditor =
/*#__PURE__*/
function (_Ext_froala_Editor) {
  _inheritsLoose(ExtFroalaeditor, _Ext_froala_Editor);

  function ExtFroalaeditor() {
    var _this;

    _this = _Ext_froala_Editor.call(this, [], []) || this;
    _this.xtype = 'froalaeditor';
    return _this;
  }

  return ExtFroalaeditor;
}(Ext_froala_Editor); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-froalaeditor', ExtFroalaeditor);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtFroalaeditor as default };
window.customElements.define('ext-froalaeditor', HTMLParsedElement.withParsedCallback(ExtFroalaeditor)); //export default reactify(ExtFroalaeditor);