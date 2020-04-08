import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_direct_JsonProvider from '../../Ext/direct/JsonProvider.js';

var Ext_direct_PollingProvider = /*#__PURE__*/function (_Ext_direct_JsonProvi) {
  _inheritsLoose(Ext_direct_PollingProvider, _Ext_direct_JsonProvi);

  Ext_direct_PollingProvider.PROPERTIES = function PROPERTIES() {
    return ['baseParams', 'headers', 'id', 'interval', 'listeners', 'pollFn', 'relayedEvents', 'timeout'];
  };

  Ext_direct_PollingProvider.EVENTS = function EVENTS() {
    return [{
      name: 'beforepoll',
      parameters: 'sender'
    }, {
      name: 'connect',
      parameters: 'provider'
    }, {
      name: 'data',
      parameters: 'provider,e'
    }, {
      name: 'disconnect',
      parameters: 'provider'
    }, {
      name: 'exception',
      parameters: 'provider,e'
    }, {
      name: 'poll',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_direct_PollingProvider.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_direct_PollingProvider.PROPERTIES());
    return Ext_direct_JsonProvider.getProperties(properties);
  };

  Ext_direct_PollingProvider.getEvents = function getEvents(events) {
    events = events.concat(Ext_direct_PollingProvider.EVENTS());
    return Ext_direct_JsonProvider.getEvents(events);
  };

  _createClass(Ext_direct_PollingProvider, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_direct_JsonProvi.observedAttributes;
      Ext_direct_PollingProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_direct_PollingProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_direct_PollingProvider(properties, events) {
    return _Ext_direct_JsonProvi.call(this, properties.concat(Ext_direct_PollingProvider.PROPERTIES()), events.concat(Ext_direct_PollingProvider.EVENTS())) || this;
  }

  var _proto = Ext_direct_PollingProvider.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_direct_JsonProvi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_direct_JsonProvi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_direct_PollingProvider;
}(Ext_direct_JsonProvider);

export { Ext_direct_PollingProvider as default };