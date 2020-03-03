import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_writer_Writer from '../../Ext/data/writer/Writer.js';

var Ext_data_JsonWriter = /*#__PURE__*/function (_Ext_data_writer_Writ) {
  _inheritsLoose(Ext_data_JsonWriter, _Ext_data_writer_Writ);

  Ext_data_JsonWriter.PROPERTIES = function PROPERTIES() {
    return ['allDataOptions', 'allowSingle', 'clientIdProperty', 'dateFormat', 'encode', 'expandData', 'nameProperty', 'partialDataOptions', 'rootProperty', 'transform', 'writeAllFields', 'writeRecordId'];
  };

  Ext_data_JsonWriter.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_JsonWriter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_JsonWriter.PROPERTIES());
    return Ext_data_writer_Writer.getProperties(properties);
  };

  Ext_data_JsonWriter.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_JsonWriter.EVENTS());
    return Ext_data_writer_Writer.getEvents(events);
  };

  _createClass(Ext_data_JsonWriter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_writer_Writ.observedAttributes;
      Ext_data_JsonWriter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_JsonWriter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_JsonWriter(properties, events) {
    return _Ext_data_writer_Writ.call(this, properties.concat(Ext_data_JsonWriter.PROPERTIES()), events.concat(Ext_data_JsonWriter.EVENTS())) || this;
  }

  var _proto = Ext_data_JsonWriter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_writer_Writ.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_writer_Writ.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_JsonWriter;
}(Ext_data_writer_Writer);

export { Ext_data_JsonWriter as default };