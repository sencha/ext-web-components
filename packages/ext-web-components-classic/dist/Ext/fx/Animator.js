import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_fx_Animator = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_fx_Animator, _Ext_Base);

  Ext_fx_Animator.PROPERTIES = function PROPERTIES() {
    return ['delay', 'duration', 'dynamic', 'easing', 'iterations', 'keyframes', 'listeners', 'target'];
  };

  Ext_fx_Animator.EVENTS = function EVENTS() {
    return [{
      name: 'afteranimate',
      parameters: 'sender,startTime'
    }, {
      name: 'beforeanimate',
      parameters: 'sender'
    }, {
      name: 'keyframe',
      parameters: 'sender,keyframe'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_Animator.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_Animator.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_fx_Animator.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_Animator.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_fx_Animator, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_fx_Animator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_Animator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_Animator(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_fx_Animator.PROPERTIES()), events.concat(Ext_fx_Animator.EVENTS())) || this;
  }

  var _proto = Ext_fx_Animator.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_Animator;
}(Ext_Base);

export { Ext_fx_Animator as default };