import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_KeyNav = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_KeyNav, _Ext_Base);

  Ext_KeyNav.PROPERTIES = function PROPERTIES() {
    return ['defaultEventAction', 'disabled', 'eventName', 'forceKeyDown', 'ignoreInputFields', 'keyMap', 'priority', 'processEvent', 'processEventScope', 'target'];
  };

  Ext_KeyNav.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_KeyNav.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_KeyNav.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_KeyNav.getEvents = function getEvents(events) {
    events = events.concat(Ext_KeyNav.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_KeyNav, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_KeyNav.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_KeyNav.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_KeyNav(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_KeyNav.PROPERTIES()), events.concat(Ext_KeyNav.EVENTS())) || this;
  }

  var _proto = Ext_KeyNav.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_KeyNav;
}(Ext_Base);

export { Ext_KeyNav as default };