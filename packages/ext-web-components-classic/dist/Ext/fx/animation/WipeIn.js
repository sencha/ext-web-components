import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_Animation from '../../../Ext/fx/Animation.js';

var Ext_fx_animation_WipeIn = /*#__PURE__*/function (_Ext_fx_Animation) {
  _inheritsLoose(Ext_fx_animation_WipeIn, _Ext_fx_Animation);

  Ext_fx_animation_WipeIn.PROPERTIES = function PROPERTIES() {
    return ['direction', 'easing', 'out', 'type'];
  };

  Ext_fx_animation_WipeIn.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_WipeIn.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_WipeIn.PROPERTIES());
    return Ext_fx_Animation.getProperties(properties);
  };

  Ext_fx_animation_WipeIn.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_WipeIn.EVENTS());
    return Ext_fx_Animation.getEvents(events);
  };

  _createClass(Ext_fx_animation_WipeIn, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_Animation.observedAttributes;
      Ext_fx_animation_WipeIn.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_WipeIn.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_WipeIn(properties, events) {
    return _Ext_fx_Animation.call(this, properties.concat(Ext_fx_animation_WipeIn.PROPERTIES()), events.concat(Ext_fx_animation_WipeIn.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_WipeIn.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_Animation.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_Animation.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_WipeIn;
}(Ext_fx_Animation);

export { Ext_fx_animation_WipeIn as default };