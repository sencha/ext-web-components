import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_drag_proxy_Placeholder from '../../../Ext/drag/proxy/Placeholder.js';

var Ext_calendar_dd_WeeksProxy = /*#__PURE__*/function (_Ext_drag_proxy_Place) {
  _inheritsLoose(Ext_calendar_dd_WeeksProxy, _Ext_drag_proxy_Place);

  Ext_calendar_dd_WeeksProxy.PROPERTIES = function PROPERTIES() {
    return ['cls', 'cursorOffset', 'html', 'invalidCls', 'titleTpl', 'validCls'];
  };

  Ext_calendar_dd_WeeksProxy.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_dd_WeeksProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_WeeksProxy.PROPERTIES());
    return Ext_drag_proxy_Placeholder.getProperties(properties);
  };

  Ext_calendar_dd_WeeksProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_dd_WeeksProxy.EVENTS());
    return Ext_drag_proxy_Placeholder.getEvents(events);
  };

  _createClass(Ext_calendar_dd_WeeksProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_proxy_Place.observedAttributes;
      Ext_calendar_dd_WeeksProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_dd_WeeksProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_dd_WeeksProxy(properties, events) {
    return _Ext_drag_proxy_Place.call(this, properties.concat(Ext_calendar_dd_WeeksProxy.PROPERTIES()), events.concat(Ext_calendar_dd_WeeksProxy.EVENTS())) || this;
  }

  var _proto = Ext_calendar_dd_WeeksProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_proxy_Place.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_proxy_Place.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_dd_WeeksProxy;
}(Ext_drag_proxy_Placeholder);

export { Ext_calendar_dd_WeeksProxy as default };