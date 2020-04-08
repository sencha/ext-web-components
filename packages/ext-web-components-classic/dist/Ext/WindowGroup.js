import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_WindowGroup = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_WindowGroup, _Ext_Base);

  Ext_WindowGroup.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_WindowGroup.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_WindowGroup.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_WindowGroup.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_WindowGroup.getEvents = function getEvents(events) {
    events = events.concat(Ext_WindowGroup.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_WindowGroup, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_WindowGroup.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_WindowGroup.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_WindowGroup(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_WindowGroup.PROPERTIES()), events.concat(Ext_WindowGroup.EVENTS())) || this;
  }

  var _proto = Ext_WindowGroup.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_WindowGroup;
}(Ext_Base);

export { Ext_WindowGroup as default };