import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_animation_Abstract from '../../../Ext/fx/animation/Abstract.js';

var Ext_fx_animation_Cube = /*#__PURE__*/function (_Ext_fx_animation_Abs) {
  _inheritsLoose(Ext_fx_animation_Cube, _Ext_fx_animation_Abs);

  Ext_fx_animation_Cube.PROPERTIES = function PROPERTIES() {
    return ['before', 'direction', 'easing', 'listeners'];
  };

  Ext_fx_animation_Cube.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_Cube.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_Cube.PROPERTIES());
    return Ext_fx_animation_Abstract.getProperties(properties);
  };

  Ext_fx_animation_Cube.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_Cube.EVENTS());
    return Ext_fx_animation_Abstract.getEvents(events);
  };

  _createClass(Ext_fx_animation_Cube, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_animation_Abs.observedAttributes;
      Ext_fx_animation_Cube.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_Cube.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_Cube(properties, events) {
    return _Ext_fx_animation_Abs.call(this, properties.concat(Ext_fx_animation_Cube.PROPERTIES()), events.concat(Ext_fx_animation_Cube.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_Cube.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_animation_Abs.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_animation_Abs.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_Cube;
}(Ext_fx_animation_Abstract);

export { Ext_fx_animation_Cube as default };