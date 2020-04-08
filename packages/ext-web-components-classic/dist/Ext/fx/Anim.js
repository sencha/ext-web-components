import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_fx_Anim = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_fx_Anim, _Ext_Base);

  Ext_fx_Anim.PROPERTIES = function PROPERTIES() {
    return ['alternate', 'autoEnd', 'callback', 'delay', 'duration', 'dynamic', 'easing', 'from', 'iterations', 'keyframes', 'listeners', 'remove', 'reverse', 'scope', 'target', 'to'];
  };

  Ext_fx_Anim.EVENTS = function EVENTS() {
    return [{
      name: 'afteranimate',
      parameters: 'sender,startTime'
    }, {
      name: 'beforeanimate',
      parameters: 'sender'
    }, {
      name: 'lastframe',
      parameters: 'sender,startTime'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_Anim.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_Anim.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_fx_Anim.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_Anim.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_fx_Anim, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_fx_Anim.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_Anim.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_Anim(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_fx_Anim.PROPERTIES()), events.concat(Ext_fx_Anim.EVENTS())) || this;
  }

  var _proto = Ext_fx_Anim.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_Anim;
}(Ext_Base);

export { Ext_fx_Anim as default };