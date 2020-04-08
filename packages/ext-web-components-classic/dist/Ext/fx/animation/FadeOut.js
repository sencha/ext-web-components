import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_animation_Fade from '../../../Ext/fx/animation/Fade.js';

var Ext_fx_animation_FadeOut = /*#__PURE__*/function (_Ext_fx_animation_Fad) {
  _inheritsLoose(Ext_fx_animation_FadeOut, _Ext_fx_animation_Fad);

  Ext_fx_animation_FadeOut.PROPERTIES = function PROPERTIES() {
    return ['before', 'easing', 'listeners', 'out'];
  };

  Ext_fx_animation_FadeOut.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_FadeOut.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_FadeOut.PROPERTIES());
    return Ext_fx_animation_Fade.getProperties(properties);
  };

  Ext_fx_animation_FadeOut.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_FadeOut.EVENTS());
    return Ext_fx_animation_Fade.getEvents(events);
  };

  _createClass(Ext_fx_animation_FadeOut, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_animation_Fad.observedAttributes;
      Ext_fx_animation_FadeOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_FadeOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_FadeOut(properties, events) {
    return _Ext_fx_animation_Fad.call(this, properties.concat(Ext_fx_animation_FadeOut.PROPERTIES()), events.concat(Ext_fx_animation_FadeOut.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_FadeOut.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_animation_Fad.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_animation_Fad.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_FadeOut;
}(Ext_fx_animation_Fade);

export { Ext_fx_animation_FadeOut as default };