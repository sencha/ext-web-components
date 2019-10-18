import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Radio from './Ext/form/Radio.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtRadioComponent =
/*#__PURE__*/
function (_Ext_form_Radio) {
  _inheritsLoose(ExtRadioComponent, _Ext_form_Radio);

  function ExtRadioComponent() {
    var _this;

    _this = _Ext_form_Radio.call(this, [], []) || this;
    _this.xtype = 'radio';
    return _this;
  }

  return ExtRadioComponent;
}(Ext_form_Radio); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-radio', ExtRadioComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(ExtRadioComponent));