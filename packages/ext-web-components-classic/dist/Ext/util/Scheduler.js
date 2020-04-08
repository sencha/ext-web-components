import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_Scheduler = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_Scheduler, _Ext_Base);

  Ext_util_Scheduler.PROPERTIES = function PROPERTIES() {
    return ['cycleLimit', 'listeners', 'preSort', 'tickDelay'];
  };

  Ext_util_Scheduler.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_Scheduler.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Scheduler.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_Scheduler.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Scheduler.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_Scheduler, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_Scheduler.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Scheduler.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Scheduler(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_Scheduler.PROPERTIES()), events.concat(Ext_util_Scheduler.EVENTS())) || this;
  }

  var _proto = Ext_util_Scheduler.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Scheduler;
}(Ext_Base);

export { Ext_util_Scheduler as default };