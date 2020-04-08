import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_AnimationQueue = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_AnimationQueue, _Ext_Base);

  Ext_AnimationQueue.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_AnimationQueue.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_AnimationQueue.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_AnimationQueue.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_AnimationQueue.getEvents = function getEvents(events) {
    events = events.concat(Ext_AnimationQueue.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_AnimationQueue, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_AnimationQueue.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_AnimationQueue.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_AnimationQueue(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_AnimationQueue.PROPERTIES()), events.concat(Ext_AnimationQueue.EVENTS())) || this;
  }

  var _proto = Ext_AnimationQueue.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_AnimationQueue;
}(Ext_Base);

export { Ext_AnimationQueue as default };