import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_direct_JsonProvider from '../../Ext/direct/JsonProvider.js';

var Ext_direct_RemotingProvider = /*#__PURE__*/function (_Ext_direct_JsonProvi) {
  _inheritsLoose(Ext_direct_RemotingProvider, _Ext_direct_JsonProvi);

  Ext_direct_RemotingProvider.PROPERTIES = function PROPERTIES() {
    return ['actions', 'bufferLimit', 'disableNestedActions', 'enableBuffer', 'enableUrlEncode', 'headers', 'id', 'listeners', 'maxRetries', 'namespace', 'relayedEvents', 'timeout', 'url'];
  };

  Ext_direct_RemotingProvider.EVENTS = function EVENTS() {
    return [{
      name: 'beforecall',
      parameters: 'provider,transaction,meta'
    }, {
      name: 'beforecallback',
      parameters: 'provider,event,transaction'
    }, {
      name: 'call',
      parameters: 'provider,transaction,meta'
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
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_direct_RemotingProvider.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_direct_RemotingProvider.PROPERTIES());
    return Ext_direct_JsonProvider.getProperties(properties);
  };

  Ext_direct_RemotingProvider.getEvents = function getEvents(events) {
    events = events.concat(Ext_direct_RemotingProvider.EVENTS());
    return Ext_direct_JsonProvider.getEvents(events);
  };

  _createClass(Ext_direct_RemotingProvider, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_direct_JsonProvi.observedAttributes;
      Ext_direct_RemotingProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_direct_RemotingProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_direct_RemotingProvider(properties, events) {
    return _Ext_direct_JsonProvi.call(this, properties.concat(Ext_direct_RemotingProvider.PROPERTIES()), events.concat(Ext_direct_RemotingProvider.EVENTS())) || this;
  }

  var _proto = Ext_direct_RemotingProvider.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_direct_JsonProvi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_direct_JsonProvi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_direct_RemotingProvider;
}(Ext_direct_JsonProvider);

export { Ext_direct_RemotingProvider as default };