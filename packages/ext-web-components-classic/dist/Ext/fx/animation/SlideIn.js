import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_animation_Abstract from '../../../Ext/fx/animation/Abstract.js';

var Ext_fx_animation_SlideIn = /*#__PURE__*/function (_Ext_fx_animation_Abs) {
  _inheritsLoose(Ext_fx_animation_SlideIn, _Ext_fx_animation_Abs);

  Ext_fx_animation_SlideIn.PROPERTIES = function PROPERTIES() {
    return ['before', 'direction', 'easing', 'listeners', 'offset', 'out'];
  };

  Ext_fx_animation_SlideIn.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_SlideIn.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_SlideIn.PROPERTIES());
    return Ext_fx_animation_Abstract.getProperties(properties);
  };

  Ext_fx_animation_SlideIn.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_SlideIn.EVENTS());
    return Ext_fx_animation_Abstract.getEvents(events);
  };

  _createClass(Ext_fx_animation_SlideIn, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_animation_Abs.observedAttributes;
      Ext_fx_animation_SlideIn.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_SlideIn.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_SlideIn(properties, events) {
    return _Ext_fx_animation_Abs.call(this, properties.concat(Ext_fx_animation_SlideIn.PROPERTIES()), events.concat(Ext_fx_animation_SlideIn.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_SlideIn.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_animation_Abs.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_animation_Abs.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_SlideIn;
}(Ext_fx_animation_Abstract);

export { Ext_fx_animation_SlideIn as default };