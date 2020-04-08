import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_froala_Editor from './Ext/froala/Editor.js';
import ElementParser from './common/ElementParser.js';

var EWCFroalaeditor = /*#__PURE__*/function (_Ext_froala_Editor) {
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

try {
  if (window.customElements.get('ext-froalaeditor') == undefined) {
    window.customElements.define('ext-froalaeditor', ElementParser.withParsedCallback(EWCFroalaeditor));
  }
} catch (e) {
  if (window.customElements.get('ext-froalaeditor') == undefined) {
    window.customElements.define('ext-froalaeditor', EWCFroalaeditor);
  }
}