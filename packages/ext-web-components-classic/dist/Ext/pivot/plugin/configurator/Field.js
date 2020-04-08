import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_dimension_Item from '../../../../Ext/pivot/dimension/Item.js';

var Ext_pivot_plugin_configurator_Field = /*#__PURE__*/function (_Ext_pivot_dimension_) {
  _inheritsLoose(Ext_pivot_plugin_configurator_Field, _Ext_pivot_dimension_);

  Ext_pivot_plugin_configurator_Field.PROPERTIES = function PROPERTIES() {
    return ['aggregator', 'align', 'blankText', 'caseSensitiveSort', 'column', 'dataIndex', 'direction', 'editor', 'exportStyle', 'filter', 'flex', 'formatter', 'grouperFn', 'header', 'id', 'labelRenderer', 'renderer', 'scope', 'settings', 'showZeroAsBlank', 'sortable', 'sorterFn', 'sortIndex', 'values', 'width'];
  };

  Ext_pivot_plugin_configurator_Field.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_plugin_configurator_Field.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_configurator_Field.PROPERTIES());
    return Ext_pivot_dimension_Item.getProperties(properties);
  };

  Ext_pivot_plugin_configurator_Field.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_configurator_Field.EVENTS());
    return Ext_pivot_dimension_Item.getEvents(events);
  };

  _createClass(Ext_pivot_plugin_configurator_Field, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_dimension_.observedAttributes;
      Ext_pivot_plugin_configurator_Field.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_configurator_Field.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_Field(properties, events) {
    return _Ext_pivot_dimension_.call(this, properties.concat(Ext_pivot_plugin_configurator_Field.PROPERTIES()), events.concat(Ext_pivot_plugin_configurator_Field.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_configurator_Field.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_dimension_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_dimension_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_Field;
}(Ext_pivot_dimension_Item);

export { Ext_pivot_plugin_configurator_Field as default };