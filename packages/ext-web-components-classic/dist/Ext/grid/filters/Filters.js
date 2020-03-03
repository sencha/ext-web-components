import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_grid_filters_Filters = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_grid_filters_Filters, _Ext_plugin_Abstract);

  Ext_grid_filters_Filters.PROPERTIES = function PROPERTIES() {
    return ['id', 'menuFilterText', 'showMenu', 'stateEvents', 'stateId'];
  };

  Ext_grid_filters_Filters.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_filters_Filters.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_filters_Filters.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_grid_filters_Filters.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_filters_Filters.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_grid_filters_Filters, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_grid_filters_Filters.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_filters_Filters.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_filters_Filters(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_grid_filters_Filters.PROPERTIES()), events.concat(Ext_grid_filters_Filters.EVENTS())) || this;
  }

  var _proto = Ext_grid_filters_Filters.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_filters_Filters;
}(Ext_plugin_Abstract);

export { Ext_grid_filters_Filters as default };