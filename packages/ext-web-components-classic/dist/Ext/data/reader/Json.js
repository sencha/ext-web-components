import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_reader_Reader from '../../../Ext/data/reader/Reader.js';

var Ext_data_reader_Json = /*#__PURE__*/function (_Ext_data_reader_Read) {
  _inheritsLoose(Ext_data_reader_Json, _Ext_data_reader_Read);

  Ext_data_reader_Json.PROPERTIES = function PROPERTIES() {
    return ['groupRootProperty', 'implicitIncludes', 'keepRawData', 'listeners', 'messageProperty', 'metaProperty', 'model', 'preserveRawData', 'proxy', 'readRecordsOnFailure', 'record', 'rootProperty', 'successProperty', 'summaryRootProperty', 'totalProperty', 'transform', 'typeProperty', 'useSimpleAccessors'];
  };

  Ext_data_reader_Json.EVENTS = function EVENTS() {
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

  Ext_data_reader_Json.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_reader_Json.PROPERTIES());
    return Ext_data_reader_Reader.getProperties(properties);
  };

  Ext_data_reader_Json.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_reader_Json.EVENTS());
    return Ext_data_reader_Reader.getEvents(events);
  };

  _createClass(Ext_data_reader_Json, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_reader_Read.observedAttributes;
      Ext_data_reader_Json.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_reader_Json.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_reader_Json(properties, events) {
    return _Ext_data_reader_Read.call(this, properties.concat(Ext_data_reader_Json.PROPERTIES()), events.concat(Ext_data_reader_Json.EVENTS())) || this;
  }

  var _proto = Ext_data_reader_Json.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_reader_Read.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_reader_Read.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_reader_Json;
}(Ext_data_reader_Reader);

export { Ext_data_reader_Json as default };