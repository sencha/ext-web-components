import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../../Ext/plugin/Abstract.js';

var Ext_ux_grid_plugin_AutoSelector = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_ux_grid_plugin_AutoSelector, _Ext_plugin_Abstract);

  Ext_ux_grid_plugin_AutoSelector.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_ux_grid_plugin_AutoSelector.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_grid_plugin_AutoSelector.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_grid_plugin_AutoSelector.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_ux_grid_plugin_AutoSelector.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_grid_plugin_AutoSelector.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_ux_grid_plugin_AutoSelector, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_ux_grid_plugin_AutoSelector.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_grid_plugin_AutoSelector.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_grid_plugin_AutoSelector(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_ux_grid_plugin_AutoSelector.PROPERTIES()), events.concat(Ext_ux_grid_plugin_AutoSelector.EVENTS())) || this;
  }

  var _proto = Ext_ux_grid_plugin_AutoSelector.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_grid_plugin_AutoSelector;
}(Ext_plugin_Abstract);

export { Ext_ux_grid_plugin_AutoSelector as default };