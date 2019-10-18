import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtFormpanelComponent =
/*#__PURE__*/
function (_Ext_form_FormPanel) {
  _inheritsLoose(ExtFormpanelComponent, _Ext_form_FormPanel);

  function ExtFormpanelComponent() {
    var _this;

    _this = _Ext_form_FormPanel.call(this, [], []) || this;
    _this.xtype = 'formpanel';
    return _this;
  }

  return ExtFormpanelComponent;
}(Ext_form_FormPanel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-formpanel', ExtFormpanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-formpanel', HTMLParsedElement.withParsedCallback(ExtFormpanelComponent));