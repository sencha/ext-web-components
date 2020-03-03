import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_Mixin = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_Mixin, _Ext_Base);

  Ext_Mixin.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_Mixin.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_Mixin.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Mixin.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_Mixin.getEvents = function getEvents(events) {
    events = events.concat(Ext_Mixin.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_Mixin, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_Mixin.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Mixin.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Mixin(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_Mixin.PROPERTIES()), events.concat(Ext_Mixin.EVENTS())) || this;
  }

  var _proto = Ext_Mixin.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Mixin;
}(Ext_Base);

export { Ext_Mixin as default };