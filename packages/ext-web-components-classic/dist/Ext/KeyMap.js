import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_KeyMap = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_KeyMap, _Ext_Base);

  Ext_KeyMap.PROPERTIES = function PROPERTIES() {
    return ['binding', 'eventName', 'ignoreInputFields', 'priority', 'processEvent', 'processEventScope', 'target'];
  };

  Ext_KeyMap.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_KeyMap.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_KeyMap.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_KeyMap.getEvents = function getEvents(events) {
    events = events.concat(Ext_KeyMap.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_KeyMap, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_KeyMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_KeyMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_KeyMap(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_KeyMap.PROPERTIES()), events.concat(Ext_KeyMap.EVENTS())) || this;
  }

  var _proto = Ext_KeyMap.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_KeyMap;
}(Ext_Base);

export { Ext_KeyMap as default };