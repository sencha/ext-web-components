import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Panel_Component from '../../../../Ext/form/Panel';

var Ext_pivot_plugin_configurator_Form_Component =
/*#__PURE__*/
function (_Ext_form_Panel_Compo) {
  _inheritsLoose(Ext_pivot_plugin_configurator_Form_Component, _Ext_form_Panel_Compo);

  //events
  //configs
  Ext_pivot_plugin_configurator_Form_Component.XTYPE = function XTYPE() {
    return 'pivotconfigform';
  };

  Ext_pivot_plugin_configurator_Form_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "controller": ["string", "object", "Ext.app.ViewController"],
      "defaults": ["object"],
      "hideAnimation": ["string", "mixed"],
      "listeners": ["object"],
      "showAnimation": ["string", "mixed"],
      "viewModel": ["string", "object", "Ext.app.ViewModel"]
    };
  };

  Ext_pivot_plugin_configurator_Form_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_plugin_configurator_Form_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_plugin_configurator_Form_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_Panel_Compo.observedAttributes;

      for (var property in Ext_pivot_plugin_configurator_Form_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_plugin_configurator_Form_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_Form_Component(propertiesobject, methods, events) {
    return _Ext_form_Panel_Compo.call(this, Object.assign(propertiesobject, Ext_pivot_plugin_configurator_Form_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_plugin_configurator_Form_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_plugin_configurator_Form_Component.METHODS()), events.concat(Ext_pivot_plugin_configurator_Form_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_plugin_configurator_Form_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Form_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_plugin_configurator_Form_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_plugin_configurator_Form_Component.EVENTS());
  }

  var _proto = Ext_pivot_plugin_configurator_Form_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_Panel_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_Panel_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_Form_Component;
}(Ext_form_Panel_Component);

export { Ext_pivot_plugin_configurator_Form_Component as default };