import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_reader_Reader from '../../Ext/data/reader/Reader.js';

var Ext_data_XmlReader = /*#__PURE__*/function (_Ext_data_reader_Read) {
  _inheritsLoose(Ext_data_XmlReader, _Ext_data_reader_Read);

  Ext_data_XmlReader.PROPERTIES = function PROPERTIES() {
    return ['groupRootProperty', 'implicitIncludes', 'keepRawData', 'listeners', 'messageProperty', 'model', 'namespace', 'proxy', 'readRecordsOnFailure', 'record', 'rootProperty', 'successProperty', 'summaryRootProperty', 'totalProperty', 'transform', 'typeProperty'];
  };

  Ext_data_XmlReader.EVENTS = function EVENTS() {
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

  Ext_data_XmlReader.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_XmlReader.PROPERTIES());
    return Ext_data_reader_Reader.getProperties(properties);
  };

  Ext_data_XmlReader.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_XmlReader.EVENTS());
    return Ext_data_reader_Reader.getEvents(events);
  };

  _createClass(Ext_data_XmlReader, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_reader_Read.observedAttributes;
      Ext_data_XmlReader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_XmlReader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_XmlReader(properties, events) {
    return _Ext_data_reader_Read.call(this, properties.concat(Ext_data_XmlReader.PROPERTIES()), events.concat(Ext_data_XmlReader.EVENTS())) || this;
  }

  var _proto = Ext_data_XmlReader.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_reader_Read.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_reader_Read.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_XmlReader;
}(Ext_data_reader_Reader);

export { Ext_data_XmlReader as default };