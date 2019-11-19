import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Url from './Ext/form/Url';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtUrlfieldComponent =
/*#__PURE__*/
function (_Ext_form_Url) {
  _inheritsLoose(ExtUrlfieldComponent, _Ext_form_Url);

  function ExtUrlfieldComponent() {
    var _this;

    _this = _Ext_form_Url.call(this, [], []) || this;
    _this.xtype = 'urlfield';
    return _this;
  }

  return ExtUrlfieldComponent;
}(Ext_form_Url); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-urlfield', ExtUrlfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-urlfield', HTMLParsedElement.withParsedCallback(ExtUrlfieldComponent));