import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Select from './Ext/form/Select.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSelectfieldComponent =
/*#__PURE__*/
function (_Ext_form_Select) {
  _inheritsLoose(ExtSelectfieldComponent, _Ext_form_Select);

  function ExtSelectfieldComponent() {
    var _this;

    _this = _Ext_form_Select.call(this, [], []) || this;
    _this.xtype = 'selectfield';
    return _this;
  }

  return ExtSelectfieldComponent;
}(Ext_form_Select); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectfield', ExtSelectfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(ExtSelectfieldComponent));