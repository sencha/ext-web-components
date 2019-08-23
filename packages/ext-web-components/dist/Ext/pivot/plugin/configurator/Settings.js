import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Panel_Component from '../../../../Ext/form/Panel';

var Ext_pivot_plugin_configurator_Settings_Component =
/*#__PURE__*/
function (_Ext_form_Panel_Compo) {
  _inheritsLoose(Ext_pivot_plugin_configurator_Settings_Component, _Ext_form_Panel_Compo);

  //events
  //configs
  Ext_pivot_plugin_configurator_Settings_Component.XTYPE = function XTYPE() {
    return 'pivotsettings';
  };

  Ext_pivot_plugin_configurator_Settings_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "controller": ["string", "object", "Ext.app.ViewController"],
      "defaults": ["object"],
      "hideAnimation": ["string", "mixed"],
      "listeners": ["object"],
      "showAnimation": ["string", "mixed"],
      "viewModel": ["string", "object", "Ext.app.ViewModel"]
    };
  };

  Ext_pivot_plugin_configurator_Settings_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_plugin_configurator_Settings_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_plugin_configurator_Settings_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_Panel_Compo.observedAttributes;

      for (var property in Ext_pivot_plugin_configurator_Settings_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_plugin_configurator_Settings_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_Settings_Component() {
    var _this;

    _this = _Ext_form_Panel_Compo.call(this, Ext_pivot_plugin_configurator_Settings_Component.METHODS(), Ext_pivot_plugin_configurator_Settings_Component.XTYPE(), Ext_pivot_plugin_configurator_Settings_Component.PROPERTIESOBJECT(), Ext_pivot_plugin_configurator_Settings_Component.EVENTS()) || this;
    _this.XTYPE = Ext_pivot_plugin_configurator_Settings_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Settings_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_pivot_plugin_configurator_Settings_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_pivot_plugin_configurator_Settings_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_pivot_plugin_configurator_Settings_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_Panel_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_Panel_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_Settings_Component;
}(Ext_form_Panel_Component);

export { Ext_pivot_plugin_configurator_Settings_Component as default };