import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_BasicFilter from '../../Ext/util/BasicFilter.js';

var Ext_data_Query = /*#__PURE__*/function (_Ext_util_BasicFilter) {
  _inheritsLoose(Ext_data_Query, _Ext_util_BasicFilter);

  Ext_data_Query.PROPERTIES = function PROPERTIES() {
    return ['disabled', 'format', 'functions', 'id', 'serializer', 'source'];
  };

  Ext_data_Query.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_Query.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Query.PROPERTIES());
    return Ext_util_BasicFilter.getProperties(properties);
  };

  Ext_data_Query.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Query.EVENTS());
    return Ext_util_BasicFilter.getEvents(events);
  };

  _createClass(Ext_data_Query, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_BasicFilter.observedAttributes;
      Ext_data_Query.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Query.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Query(properties, events) {
    return _Ext_util_BasicFilter.call(this, properties.concat(Ext_data_Query.PROPERTIES()), events.concat(Ext_data_Query.EVENTS())) || this;
  }

  var _proto = Ext_data_Query.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_BasicFilter.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_BasicFilter.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Query;
}(Ext_util_BasicFilter);

export { Ext_data_Query as default };