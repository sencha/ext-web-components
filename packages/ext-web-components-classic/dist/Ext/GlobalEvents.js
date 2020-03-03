import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_mixin_Observable from '../Ext/mixin/Observable.js';

var Ext_GlobalEvents = /*#__PURE__*/function (_Ext_mixin_Observable) {
  _inheritsLoose(Ext_GlobalEvents, _Ext_mixin_Observable);

  Ext_GlobalEvents.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_GlobalEvents.EVENTS = function EVENTS() {
    return [{
      name: 'added',
      parameters: 'component'
    }, {
      name: 'beforebindnotify',
      parameters: ''
    }, {
      name: 'beforeresponsiveupdate',
      parameters: 'context'
    }, {
      name: 'beforeroute',
      parameters: 'route,action'
    }, {
      name: 'beforerouteexit',
      parameters: 'action,route'
    }, {
      name: 'beforeroutes',
      parameters: 'action,tokens'
    }, {
      name: 'beginresponsiveupdate',
      parameters: 'context'
    }, {
      name: 'collapse',
      parameters: 'component'
    }, {
      name: 'expand',
      parameters: 'component'
    }, {
      name: 'hide',
      parameters: 'component'
    }, {
      name: 'idle',
      parameters: ''
    }, {
      name: 'mousedown',
      parameters: 'e'
    }, {
      name: 'mouseup',
      parameters: 'e'
    }, {
      name: 'onlinechange',
      parameters: 'online'
    }, {
      name: 'removed',
      parameters: 'component'
    }, {
      name: 'resize',
      parameters: 'width,height'
    }, {
      name: 'responsiveupdate',
      parameters: 'context'
    }, {
      name: 'resumelayouts',
      parameters: ''
    }, {
      name: 'routereject',
      parameters: 'route'
    }, {
      name: 'show',
      parameters: 'component'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_GlobalEvents.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_GlobalEvents.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  };

  Ext_GlobalEvents.getEvents = function getEvents(events) {
    events = events.concat(Ext_GlobalEvents.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  };

  _createClass(Ext_GlobalEvents, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_mixin_Observable.observedAttributes;
      Ext_GlobalEvents.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_GlobalEvents.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_GlobalEvents(properties, events) {
    return _Ext_mixin_Observable.call(this, properties.concat(Ext_GlobalEvents.PROPERTIES()), events.concat(Ext_GlobalEvents.EVENTS())) || this;
  }

  var _proto = Ext_GlobalEvents.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_mixin_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_mixin_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_GlobalEvents;
}(Ext_mixin_Observable);

export { Ext_GlobalEvents as default };