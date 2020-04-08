import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_BaseExporter from '../../../Ext/grid/plugin/BaseExporter.js';

var Ext_grid_plugin_Exporter = /*#__PURE__*/function (_Ext_grid_plugin_Base) {
  _inheritsLoose(Ext_grid_plugin_Exporter, _Ext_grid_plugin_Base);

  Ext_grid_plugin_Exporter.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_grid_plugin_Exporter.EVENTS = function EVENTS() {
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

  Ext_grid_plugin_Exporter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_Exporter.PROPERTIES());
    return Ext_grid_plugin_BaseExporter.getProperties(properties);
  };

  Ext_grid_plugin_Exporter.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_Exporter.EVENTS());
    return Ext_grid_plugin_BaseExporter.getEvents(events);
  };

  _createClass(Ext_grid_plugin_Exporter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_Base.observedAttributes;
      Ext_grid_plugin_Exporter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_Exporter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_Exporter(properties, events) {
    return _Ext_grid_plugin_Base.call(this, properties.concat(Ext_grid_plugin_Exporter.PROPERTIES()), events.concat(Ext_grid_plugin_Exporter.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_Exporter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_Exporter;
}(Ext_grid_plugin_BaseExporter);

export { Ext_grid_plugin_Exporter as default };