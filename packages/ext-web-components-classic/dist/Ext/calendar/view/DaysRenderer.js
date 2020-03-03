import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_calendar_view_DaysRenderer = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_calendar_view_DaysRenderer, _Ext_Base);

  Ext_calendar_view_DaysRenderer.PROPERTIES = function PROPERTIES() {
    return ['end', 'start', 'view'];
  };

  Ext_calendar_view_DaysRenderer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_view_DaysRenderer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_DaysRenderer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_calendar_view_DaysRenderer.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_view_DaysRenderer.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_calendar_view_DaysRenderer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_calendar_view_DaysRenderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_view_DaysRenderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_DaysRenderer(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_calendar_view_DaysRenderer.PROPERTIES()), events.concat(Ext_calendar_view_DaysRenderer.EVENTS())) || this;
  }

  var _proto = Ext_calendar_view_DaysRenderer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_DaysRenderer;
}(Ext_Base);

export { Ext_calendar_view_DaysRenderer as default };