import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_data_reader_Reader = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_data_reader_Reader, _Ext_Base);

  Ext_data_reader_Reader.PROPERTIES = function PROPERTIES() {
    return ['groupRootProperty', 'implicitIncludes', 'keepRawData', 'listeners', 'messageProperty', 'model', 'proxy', 'readRecordsOnFailure', 'rootProperty', 'successProperty', 'summaryRootProperty', 'totalProperty', 'transform', 'typeProperty'];
  };

  Ext_data_reader_Reader.EVENTS = function EVENTS() {
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

  Ext_data_reader_Reader.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_reader_Reader.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_reader_Reader.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_reader_Reader.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_reader_Reader, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_reader_Reader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_reader_Reader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_reader_Reader(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_reader_Reader.PROPERTIES()), events.concat(Ext_data_reader_Reader.EVENTS())) || this;
  }

  var _proto = Ext_data_reader_Reader.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_reader_Reader;
}(Ext_Base);

export { Ext_data_reader_Reader as default };