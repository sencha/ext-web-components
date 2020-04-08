import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_ComponentManager = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_ComponentManager, _Ext_Base);

  Ext_ComponentManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_ComponentManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ComponentManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ComponentManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ComponentManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_ComponentManager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ComponentManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ComponentManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ComponentManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ComponentManager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ComponentManager.PROPERTIES()), events.concat(Ext_ComponentManager.EVENTS())) || this;
  }

  var _proto = Ext_ComponentManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ComponentManager;
}(Ext_Base);

export { Ext_ComponentManager as default };