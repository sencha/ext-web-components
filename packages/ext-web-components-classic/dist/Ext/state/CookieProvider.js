import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_state_Provider from '../../Ext/state/Provider.js';

var Ext_state_CookieProvider = /*#__PURE__*/function (_Ext_state_Provider) {
  _inheritsLoose(Ext_state_CookieProvider, _Ext_state_Provider);

  Ext_state_CookieProvider.PROPERTIES = function PROPERTIES() {
    return ['domain', 'expires', 'listeners', 'path', 'prefix', 'secure'];
  };

  Ext_state_CookieProvider.EVENTS = function EVENTS() {
    return [{
      name: 'statechange',
      parameters: 'sender,key,value'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_state_CookieProvider.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_state_CookieProvider.PROPERTIES());
    return Ext_state_Provider.getProperties(properties);
  };

  Ext_state_CookieProvider.getEvents = function getEvents(events) {
    events = events.concat(Ext_state_CookieProvider.EVENTS());
    return Ext_state_Provider.getEvents(events);
  };

  _createClass(Ext_state_CookieProvider, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_state_Provider.observedAttributes;
      Ext_state_CookieProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_state_CookieProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_state_CookieProvider(properties, events) {
    return _Ext_state_Provider.call(this, properties.concat(Ext_state_CookieProvider.PROPERTIES()), events.concat(Ext_state_CookieProvider.EVENTS())) || this;
  }

  var _proto = Ext_state_CookieProvider.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_state_Provider.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_state_Provider.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_state_CookieProvider;
}(Ext_state_Provider);

export { Ext_state_CookieProvider as default };