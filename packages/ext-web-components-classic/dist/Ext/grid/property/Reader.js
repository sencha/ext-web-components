import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_reader_Reader from '../../../Ext/data/reader/Reader.js';

var Ext_grid_property_Reader = /*#__PURE__*/function (_Ext_data_reader_Read) {
  _inheritsLoose(Ext_grid_property_Reader, _Ext_data_reader_Read);

  Ext_grid_property_Reader.PROPERTIES = function PROPERTIES() {
    return ['groupRootProperty', 'implicitIncludes', 'keepRawData', 'listeners', 'messageProperty', 'model', 'proxy', 'readRecordsOnFailure', 'rootProperty', 'successProperty', 'summaryRootProperty', 'totalProperty', 'transform', 'typeProperty'];
  };

  Ext_grid_property_Reader.EVENTS = function EVENTS() {
    return [{
      name: 'exception',
      parameters: 'reader,response,error'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_property_Reader.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_property_Reader.PROPERTIES());
    return Ext_data_reader_Reader.getProperties(properties);
  };

  Ext_grid_property_Reader.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_property_Reader.EVENTS());
    return Ext_data_reader_Reader.getEvents(events);
  };

  _createClass(Ext_grid_property_Reader, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_reader_Read.observedAttributes;
      Ext_grid_property_Reader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_property_Reader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_property_Reader(properties, events) {
    return _Ext_data_reader_Read.call(this, properties.concat(Ext_grid_property_Reader.PROPERTIES()), events.concat(Ext_grid_property_Reader.EVENTS())) || this;
  }

  var _proto = Ext_grid_property_Reader.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_reader_Read.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_reader_Read.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_property_Reader;
}(Ext_data_reader_Reader);

export { Ext_grid_property_Reader as default };