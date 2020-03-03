import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_calendar_util_Dom = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_calendar_util_Dom, _Ext_Base);

  Ext_calendar_util_Dom.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_calendar_util_Dom.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_util_Dom.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_util_Dom.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_calendar_util_Dom.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_util_Dom.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_calendar_util_Dom, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_calendar_util_Dom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_util_Dom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_util_Dom(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_calendar_util_Dom.PROPERTIES()), events.concat(Ext_calendar_util_Dom.EVENTS())) || this;
  }

  var _proto = Ext_calendar_util_Dom.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_util_Dom;
}(Ext_Base);

export { Ext_calendar_util_Dom as default };