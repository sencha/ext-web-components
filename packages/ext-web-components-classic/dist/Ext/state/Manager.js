import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_state_Manager = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_state_Manager, _Ext_Base);

  Ext_state_Manager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_state_Manager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_state_Manager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_state_Manager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_state_Manager.getEvents = function getEvents(events) {
    events = events.concat(Ext_state_Manager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_state_Manager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_state_Manager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_state_Manager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_state_Manager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_state_Manager.PROPERTIES()), events.concat(Ext_state_Manager.EVENTS())) || this;
  }

  var _proto = Ext_state_Manager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_state_Manager;
}(Ext_Base);

export { Ext_state_Manager as default };