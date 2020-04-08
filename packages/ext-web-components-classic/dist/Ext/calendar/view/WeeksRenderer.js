import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_calendar_view_WeeksRenderer = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_calendar_view_WeeksRenderer, _Ext_Base);

  Ext_calendar_view_WeeksRenderer.PROPERTIES = function PROPERTIES() {
    return ['days', 'index', 'maxEvents', 'overflow', 'start'];
  };

  Ext_calendar_view_WeeksRenderer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_view_WeeksRenderer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_WeeksRenderer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_calendar_view_WeeksRenderer.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_view_WeeksRenderer.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_calendar_view_WeeksRenderer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_calendar_view_WeeksRenderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_view_WeeksRenderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_WeeksRenderer(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_calendar_view_WeeksRenderer.PROPERTIES()), events.concat(Ext_calendar_view_WeeksRenderer.EVENTS())) || this;
  }

  var _proto = Ext_calendar_view_WeeksRenderer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_WeeksRenderer;
}(Ext_Base);

export { Ext_calendar_view_WeeksRenderer as default };