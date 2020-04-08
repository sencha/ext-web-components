import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Mz_pivot_plugin_DrillDown = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Mz_pivot_plugin_DrillDown, _Ext_plugin_Abstract);

  Mz_pivot_plugin_DrillDown.PROPERTIES = function PROPERTIES() {
    return ['columns', 'grid', 'height', 'id', 'remoteStore', 'stateEvents', 'textWindow', 'view', 'width'];
  };

  Mz_pivot_plugin_DrillDown.EVENTS = function EVENTS() {
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

  Mz_pivot_plugin_DrillDown.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_pivot_plugin_DrillDown.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Mz_pivot_plugin_DrillDown.getEvents = function getEvents(events) {
    events = events.concat(Mz_pivot_plugin_DrillDown.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Mz_pivot_plugin_DrillDown, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Mz_pivot_plugin_DrillDown.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_pivot_plugin_DrillDown.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_pivot_plugin_DrillDown(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Mz_pivot_plugin_DrillDown.PROPERTIES()), events.concat(Mz_pivot_plugin_DrillDown.EVENTS())) || this;
  }

  var _proto = Mz_pivot_plugin_DrillDown.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_pivot_plugin_DrillDown;
}(Ext_plugin_Abstract);

export { Mz_pivot_plugin_DrillDown as default };