import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_Plugin from '../../../Ext/exporter/Plugin.js';

var Mz_pivot_plugin_ExcelExport = /*#__PURE__*/function (_Ext_exporter_Plugin) {
  _inheritsLoose(Mz_pivot_plugin_ExcelExport, _Ext_exporter_Plugin);

  Mz_pivot_plugin_ExcelExport.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Mz_pivot_plugin_ExcelExport.EVENTS = function EVENTS() {
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

  Mz_pivot_plugin_ExcelExport.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_pivot_plugin_ExcelExport.PROPERTIES());
    return Ext_exporter_Plugin.getProperties(properties);
  };

  Mz_pivot_plugin_ExcelExport.getEvents = function getEvents(events) {
    events = events.concat(Mz_pivot_plugin_ExcelExport.EVENTS());
    return Ext_exporter_Plugin.getEvents(events);
  };

  _createClass(Mz_pivot_plugin_ExcelExport, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_Plugin.observedAttributes;
      Mz_pivot_plugin_ExcelExport.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_pivot_plugin_ExcelExport.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_pivot_plugin_ExcelExport(properties, events) {
    return _Ext_exporter_Plugin.call(this, properties.concat(Mz_pivot_plugin_ExcelExport.PROPERTIES()), events.concat(Mz_pivot_plugin_ExcelExport.EVENTS())) || this;
  }

  var _proto = Mz_pivot_plugin_ExcelExport.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_Plugin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_Plugin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_pivot_plugin_ExcelExport;
}(Ext_exporter_Plugin);

export { Mz_pivot_plugin_ExcelExport as default };