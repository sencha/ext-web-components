import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Connection from '../Ext/data/Connection.js';

var Ext_Ajax = /*#__PURE__*/function (_Ext_data_Connection) {
  _inheritsLoose(Ext_Ajax, _Ext_data_Connection);

  Ext_Ajax.PROPERTIES = function PROPERTIES() {
    return ['async', 'autoAbort', 'binary', 'cors', 'defaultHeaders', 'defaultPostHeader', 'defaultXhrHeader', 'disableCaching', 'disableCachingParam', 'extraParams', 'listeners', 'method', 'password', 'timeout', 'url', 'useDefaultXhrHeader', 'username', 'withCredentials'];
  };

  Ext_Ajax.EVENTS = function EVENTS() {
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

  Ext_Ajax.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Ajax.PROPERTIES());
    return Ext_data_Connection.getProperties(properties);
  };

  Ext_Ajax.getEvents = function getEvents(events) {
    events = events.concat(Ext_Ajax.EVENTS());
    return Ext_data_Connection.getEvents(events);
  };

  _createClass(Ext_Ajax, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Connection.observedAttributes;
      Ext_Ajax.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Ajax.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Ajax(properties, events) {
    return _Ext_data_Connection.call(this, properties.concat(Ext_Ajax.PROPERTIES()), events.concat(Ext_Ajax.EVENTS())) || this;
  }

  var _proto = Ext_Ajax.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Connection.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Connection.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Ajax;
}(Ext_data_Connection);

export { Ext_Ajax as default };