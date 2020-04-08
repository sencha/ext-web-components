import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_Plugin from '../../../Ext/exporter/Plugin.js';

var Ext_pivot_plugin_Exporter = /*#__PURE__*/function (_Ext_exporter_Plugin) {
  _inheritsLoose(Ext_pivot_plugin_Exporter, _Ext_exporter_Plugin);

  Ext_pivot_plugin_Exporter.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_pivot_plugin_Exporter.EVENTS = function EVENTS() {
    return [{
      name: 'beforedocumentsave',
      parameters: 'pivotGrid,params'
    }, {
      name: 'dataready',
      parameters: 'pivotGrid,params'
    }, {
      name: 'documentsave',
      parameters: 'pivotGrid,params'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_plugin_Exporter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_Exporter.PROPERTIES());
    return Ext_exporter_Plugin.getProperties(properties);
  };

  Ext_pivot_plugin_Exporter.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_Exporter.EVENTS());
    return Ext_exporter_Plugin.getEvents(events);
  };

  _createClass(Ext_pivot_plugin_Exporter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_Plugin.observedAttributes;
      Ext_pivot_plugin_Exporter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_Exporter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_Exporter(properties, events) {
    return _Ext_exporter_Plugin.call(this, properties.concat(Ext_pivot_plugin_Exporter.PROPERTIES()), events.concat(Ext_pivot_plugin_Exporter.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_Exporter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_Plugin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_Plugin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_Exporter;
}(Ext_exporter_Plugin);

export { Ext_pivot_plugin_Exporter as default };