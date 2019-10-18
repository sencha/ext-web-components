import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Search from './Ext/form/Search.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSearchfieldComponent =
/*#__PURE__*/
function (_Ext_form_Search) {
  _inheritsLoose(ExtSearchfieldComponent, _Ext_form_Search);

  function ExtSearchfieldComponent() {
    var _this;

    _this = _Ext_form_Search.call(this, [], []) || this;
    _this.xtype = 'searchfield';
    return _this;
  }

  return ExtSearchfieldComponent;
}(Ext_form_Search); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-searchfield', ExtSearchfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(ExtSearchfieldComponent));