import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_Plugin from '../../../Ext/exporter/Plugin.js';

var Ext_grid_plugin_BaseExporter = /*#__PURE__*/function (_Ext_exporter_Plugin) {
  _inheritsLoose(Ext_grid_plugin_BaseExporter, _Ext_exporter_Plugin);

  Ext_grid_plugin_BaseExporter.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_grid_plugin_BaseExporter.EVENTS = function EVENTS() {
    return [{
      name: 'beforedocumentsave',
      parameters: 'grid,params'
    }, {
      name: 'dataready',
      parameters: 'grid,params'
    }, {
      name: 'documentsave',
      parameters: 'grid,params'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_BaseExporter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_BaseExporter.PROPERTIES());
    return Ext_exporter_Plugin.getProperties(properties);
  };

  Ext_grid_plugin_BaseExporter.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_BaseExporter.EVENTS());
    return Ext_exporter_Plugin.getEvents(events);
  };

  _createClass(Ext_grid_plugin_BaseExporter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_Plugin.observedAttributes;
      Ext_grid_plugin_BaseExporter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_BaseExporter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_BaseExporter(properties, events) {
    return _Ext_exporter_Plugin.call(this, properties.concat(Ext_grid_plugin_BaseExporter.PROPERTIES()), events.concat(Ext_grid_plugin_BaseExporter.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_BaseExporter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_Plugin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_Plugin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_BaseExporter;
}(Ext_exporter_Plugin);

export { Ext_grid_plugin_BaseExporter as default };