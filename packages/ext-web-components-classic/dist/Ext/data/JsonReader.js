import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_reader_Reader from '../../Ext/data/reader/Reader.js';

var Ext_data_JsonReader = /*#__PURE__*/function (_Ext_data_reader_Read) {
  _inheritsLoose(Ext_data_JsonReader, _Ext_data_reader_Read);

  Ext_data_JsonReader.PROPERTIES = function PROPERTIES() {
    return ['groupRootProperty', 'implicitIncludes', 'keepRawData', 'listeners', 'messageProperty', 'metaProperty', 'model', 'preserveRawData', 'proxy', 'readRecordsOnFailure', 'record', 'rootProperty', 'successProperty', 'summaryRootProperty', 'totalProperty', 'transform', 'typeProperty', 'useSimpleAccessors'];
  };

  Ext_data_JsonReader.EVENTS = function EVENTS() {
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

  Ext_data_JsonReader.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_JsonReader.PROPERTIES());
    return Ext_data_reader_Reader.getProperties(properties);
  };

  Ext_data_JsonReader.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_JsonReader.EVENTS());
    return Ext_data_reader_Reader.getEvents(events);
  };

  _createClass(Ext_data_JsonReader, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_reader_Read.observedAttributes;
      Ext_data_JsonReader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_JsonReader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_JsonReader(properties, events) {
    return _Ext_data_reader_Read.call(this, properties.concat(Ext_data_JsonReader.PROPERTIES()), events.concat(Ext_data_JsonReader.EVENTS())) || this;
  }

  var _proto = Ext_data_JsonReader.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_reader_Read.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_reader_Read.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_JsonReader;
}(Ext_data_reader_Reader);

export { Ext_data_JsonReader as default };