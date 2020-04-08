import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_animation_Abstract from '../../../Ext/fx/animation/Abstract.js';

var Ext_fx_animation_Flip = /*#__PURE__*/function (_Ext_fx_animation_Abs) {
  _inheritsLoose(Ext_fx_animation_Flip, _Ext_fx_animation_Abs);

  Ext_fx_animation_Flip.PROPERTIES = function PROPERTIES() {
    return ['before', 'direction', 'easing', 'listeners'];
  };

  Ext_fx_animation_Flip.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_Flip.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_Flip.PROPERTIES());
    return Ext_fx_animation_Abstract.getProperties(properties);
  };

  Ext_fx_animation_Flip.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_Flip.EVENTS());
    return Ext_fx_animation_Abstract.getEvents(events);
  };

  _createClass(Ext_fx_animation_Flip, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_animation_Abs.observedAttributes;
      Ext_fx_animation_Flip.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_Flip.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_Flip(properties, events) {
    return _Ext_fx_animation_Abs.call(this, properties.concat(Ext_fx_animation_Flip.PROPERTIES()), events.concat(Ext_fx_animation_Flip.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_Flip.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_animation_Abs.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_animation_Abs.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_Flip;
}(Ext_fx_animation_Abstract);

export { Ext_fx_animation_Flip as default };