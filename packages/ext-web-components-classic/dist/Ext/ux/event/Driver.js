import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Observable from '../../../Ext/util/Observable.js';

var Ext_ux_event_Driver = /*#__PURE__*/function (_Ext_util_Observable) {
  _inheritsLoose(Ext_ux_event_Driver, _Ext_util_Observable);

  Ext_ux_event_Driver.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_ux_event_Driver.EVENTS = function EVENTS() {
    return [{
      name: 'start',
      parameters: 'sender'
    }, {
      name: 'stop',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_event_Driver.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_event_Driver.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  };

  Ext_ux_event_Driver.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_event_Driver.EVENTS());
    return Ext_util_Observable.getEvents(events);
  };

  _createClass(Ext_ux_event_Driver, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Observable.observedAttributes;
      Ext_ux_event_Driver.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_event_Driver.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_event_Driver(properties, events) {
    return _Ext_util_Observable.call(this, properties.concat(Ext_ux_event_Driver.PROPERTIES()), events.concat(Ext_ux_event_Driver.EVENTS())) || this;
  }

  var _proto = Ext_ux_event_Driver.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_event_Driver;
}(Ext_util_Observable);

export { Ext_ux_event_Driver as default };