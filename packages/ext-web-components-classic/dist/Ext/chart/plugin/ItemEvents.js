import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_chart_plugin_ItemEvents = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_chart_plugin_ItemEvents, _Ext_plugin_Abstract);

  Ext_chart_plugin_ItemEvents.PROPERTIES = function PROPERTIES() {
    return ['id', 'moveEvents', 'stateEvents'];
  };

  Ext_chart_plugin_ItemEvents.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_plugin_ItemEvents.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_plugin_ItemEvents.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_chart_plugin_ItemEvents.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_plugin_ItemEvents.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_chart_plugin_ItemEvents, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_chart_plugin_ItemEvents.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_plugin_ItemEvents.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_plugin_ItemEvents(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_chart_plugin_ItemEvents.PROPERTIES()), events.concat(Ext_chart_plugin_ItemEvents.EVENTS())) || this;
  }

  var _proto = Ext_chart_plugin_ItemEvents.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_plugin_ItemEvents;
}(Ext_plugin_Abstract);

export { Ext_chart_plugin_ItemEvents as default };