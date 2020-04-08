import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_pivot_plugin_DrillDown = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_pivot_plugin_DrillDown, _Ext_plugin_Abstract);

  Ext_pivot_plugin_DrillDown.PROPERTIES = function PROPERTIES() {
    return ['columns', 'grid', 'height', 'id', 'remoteStore', 'stateEvents', 'textWindow', 'view', 'width'];
  };

  Ext_pivot_plugin_DrillDown.EVENTS = function EVENTS() {
    return [{
      name: 'hidedrilldownpanel',
      parameters: 'panel'
    }, {
      name: 'showdrilldownpanel',
      parameters: 'panel'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_plugin_DrillDown.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_DrillDown.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_pivot_plugin_DrillDown.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_DrillDown.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_pivot_plugin_DrillDown, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_pivot_plugin_DrillDown.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_DrillDown.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_DrillDown(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_pivot_plugin_DrillDown.PROPERTIES()), events.concat(Ext_pivot_plugin_DrillDown.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_DrillDown.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_DrillDown;
}(Ext_plugin_Abstract);

export { Ext_pivot_plugin_DrillDown as default };