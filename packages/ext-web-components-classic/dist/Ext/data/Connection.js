import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_Connection = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_data_Connection, _Ext_Base);

  Ext_data_Connection.PROPERTIES = function PROPERTIES() {
    return ['async', 'autoAbort', 'binary', 'cors', 'defaultHeaders', 'defaultPostHeader', 'defaultXhrHeader', 'disableCaching', 'disableCachingParam', 'extraParams', 'listeners', 'method', 'password', 'timeout', 'url', 'useDefaultXhrHeader', 'username', 'withCredentials'];
  };

  Ext_data_Connection.EVENTS = function EVENTS() {
    return [{
      name: 'beforerequest',
      parameters: 'conn,options'
    }, {
      name: 'requestcomplete',
      parameters: 'conn,response,options'
    }, {
      name: 'requestexception',
      parameters: 'conn,response,options'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_Connection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Connection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_Connection.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Connection.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_Connection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_Connection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Connection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Connection(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_Connection.PROPERTIES()), events.concat(Ext_data_Connection.EVENTS())) || this;
  }

  var _proto = Ext_data_Connection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Connection;
}(Ext_Base);

export { Ext_data_Connection as default };