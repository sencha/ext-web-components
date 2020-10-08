import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_EventedBase = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_EventedBase, _Ext_Base);

  Ext_EventedBase.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_EventedBase.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_EventedBase.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_EventedBase.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_EventedBase.getEvents = function getEvents(events) {
    events = events.concat(Ext_EventedBase.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_EventedBase, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_EventedBase.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_EventedBase.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_EventedBase(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_EventedBase.PROPERTIES()), events.concat(Ext_EventedBase.EVENTS())) || this;
  }

  var _proto = Ext_EventedBase.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_EventedBase;
}(Ext_Base);

export { Ext_EventedBase as default };