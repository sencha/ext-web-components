import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Menu_Component from './Ext/field/trigger/Menu';
export var ExtMenutriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Me) {
  _inheritsLoose(ExtMenutriggerComponent, _Ext_field_trigger_Me);

  function ExtMenutriggerComponent() {
    return _Ext_field_trigger_Me.call(this, '', '', {}, '') || this;
  }

  return ExtMenutriggerComponent;
}(Ext_field_trigger_Menu_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-menutrigger', ExtMenutriggerComponent);
  });
})();