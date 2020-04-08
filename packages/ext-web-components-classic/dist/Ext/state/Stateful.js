import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_state_Stateful = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_state_Stateful, _Ext_Base);

  Ext_state_Stateful.PROPERTIES = function PROPERTIES() {
    return ['saveDelay', 'stateEvents', 'stateful', 'stateId'];
  };

  Ext_state_Stateful.EVENTS = function EVENTS() {
    return [{
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_state_Stateful.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_state_Stateful.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_state_Stateful.getEvents = function getEvents(events) {
    events = events.concat(Ext_state_Stateful.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_state_Stateful, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_state_Stateful.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_state_Stateful.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_state_Stateful(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_state_Stateful.PROPERTIES()), events.concat(Ext_state_Stateful.EVENTS())) || this;
  }

  var _proto = Ext_state_Stateful.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_state_Stateful;
}(Ext_Base);

export { Ext_state_Stateful as default };