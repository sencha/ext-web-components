import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_reader_Json from '../../../Ext/data/reader/Json.js';

var Ext_data_reader_Array = /*#__PURE__*/function (_Ext_data_reader_Json) {
  _inheritsLoose(Ext_data_reader_Array, _Ext_data_reader_Json);

  Ext_data_reader_Array.PROPERTIES = function PROPERTIES() {
    return ['groupRootProperty', 'implicitIncludes', 'keepRawData', 'listeners', 'messageProperty', 'metaProperty', 'model', 'preserveRawData', 'proxy', 'readRecordsOnFailure', 'record', 'rootProperty', 'successProperty', 'summaryRootProperty', 'totalProperty', 'transform', 'typeProperty', 'useSimpleAccessors'];
  };

  Ext_data_reader_Array.EVENTS = function EVENTS() {
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

  Ext_data_reader_Array.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_reader_Array.PROPERTIES());
    return Ext_data_reader_Json.getProperties(properties);
  };

  Ext_data_reader_Array.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_reader_Array.EVENTS());
    return Ext_data_reader_Json.getEvents(events);
  };

  _createClass(Ext_data_reader_Array, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_reader_Json.observedAttributes;
      Ext_data_reader_Array.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_reader_Array.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_reader_Array(properties, events) {
    return _Ext_data_reader_Json.call(this, properties.concat(Ext_data_reader_Array.PROPERTIES()), events.concat(Ext_data_reader_Array.EVENTS())) || this;
  }

  var _proto = Ext_data_reader_Array.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_reader_Json.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_reader_Json.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_reader_Array;
}(Ext_data_reader_Json);

export { Ext_data_reader_Array as default };