import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_state_Provider = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_state_Provider, _Ext_Base);

  Ext_state_Provider.PROPERTIES = function PROPERTIES() {
    return ['listeners', 'prefix'];
  };

  Ext_state_Provider.EVENTS = function EVENTS() {
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

  Ext_state_Provider.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_state_Provider.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_state_Provider.getEvents = function getEvents(events) {
    events = events.concat(Ext_state_Provider.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_state_Provider, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_state_Provider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_state_Provider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_state_Provider(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_state_Provider.PROPERTIES()), events.concat(Ext_state_Provider.EVENTS())) || this;
  }

  var _proto = Ext_state_Provider.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_state_Provider;
}(Ext_Base);

export { Ext_state_Provider as default };