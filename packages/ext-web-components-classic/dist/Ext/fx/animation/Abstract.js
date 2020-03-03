import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Evented from '../../../Ext/Evented.js';

var Ext_fx_animation_Abstract = /*#__PURE__*/function (_Ext_Evented) {
  _inheritsLoose(Ext_fx_animation_Abstract, _Ext_Evented);

  Ext_fx_animation_Abstract.PROPERTIES = function PROPERTIES() {
    return ['before', 'easing', 'listeners'];
  };

  Ext_fx_animation_Abstract.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_Abstract.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_Abstract.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  };

  Ext_fx_animation_Abstract.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_Abstract.EVENTS());
    return Ext_Evented.getEvents(events);
  };

  _createClass(Ext_fx_animation_Abstract, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Evented.observedAttributes;
      Ext_fx_animation_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_Abstract(properties, events) {
    return _Ext_Evented.call(this, properties.concat(Ext_fx_animation_Abstract.PROPERTIES()), events.concat(Ext_fx_animation_Abstract.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_Abstract.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Evented.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Evented.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_Abstract;
}(Ext_Evented);

export { Ext_fx_animation_Abstract as default };