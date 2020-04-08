import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_runner_Css from '../Ext/fx/runner/Css.js';

var Ext_Animator = /*#__PURE__*/function (_Ext_fx_runner_Css) {
  _inheritsLoose(Ext_Animator, _Ext_fx_runner_Css);

  Ext_Animator.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_Animator.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_Animator.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Animator.PROPERTIES());
    return Ext_fx_runner_Css.getProperties(properties);
  };

  Ext_Animator.getEvents = function getEvents(events) {
    events = events.concat(Ext_Animator.EVENTS());
    return Ext_fx_runner_Css.getEvents(events);
  };

  _createClass(Ext_Animator, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_runner_Css.observedAttributes;
      Ext_Animator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Animator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Animator(properties, events) {
    return _Ext_fx_runner_Css.call(this, properties.concat(Ext_Animator.PROPERTIES()), events.concat(Ext_Animator.EVENTS())) || this;
  }

  var _proto = Ext_Animator.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_runner_Css.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_runner_Css.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Animator;
}(Ext_fx_runner_Css);

export { Ext_Animator as default };