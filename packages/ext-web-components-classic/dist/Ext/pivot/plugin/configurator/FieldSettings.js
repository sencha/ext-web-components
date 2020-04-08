import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../../Ext/Base.js';

var Ext_pivot_plugin_configurator_FieldSettings = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_pivot_plugin_configurator_FieldSettings, _Ext_Base);

  Ext_pivot_plugin_configurator_FieldSettings.PROPERTIES = function PROPERTIES() {
    return ['aggregators', 'allowed', 'cls', 'fixed', 'formatters', 'renderers', 'style'];
  };

  Ext_pivot_plugin_configurator_FieldSettings.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_plugin_configurator_FieldSettings.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_configurator_FieldSettings.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_pivot_plugin_configurator_FieldSettings.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_configurator_FieldSettings.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_pivot_plugin_configurator_FieldSettings, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_pivot_plugin_configurator_FieldSettings.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_configurator_FieldSettings.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_FieldSettings(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_pivot_plugin_configurator_FieldSettings.PROPERTIES()), events.concat(Ext_pivot_plugin_configurator_FieldSettings.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_configurator_FieldSettings.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_FieldSettings;
}(Ext_Base);

export { Ext_pivot_plugin_configurator_FieldSettings as default };