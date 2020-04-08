import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_CellEditing from '../../../Ext/grid/plugin/CellEditing.js';

var Ext_pivot_plugin_CellEditing = /*#__PURE__*/function (_Ext_grid_plugin_Cell) {
  _inheritsLoose(Ext_pivot_plugin_CellEditing, _Ext_grid_plugin_Cell);

  Ext_pivot_plugin_CellEditing.PROPERTIES = function PROPERTIES() {
    return ['clicksToEdit', 'default', 'defaultUpdater', 'defaultValue', 'id', 'listeners', 'stateEvents', 'triggerEvent'];
  };

  Ext_pivot_plugin_CellEditing.EVENTS = function EVENTS() {
    return [{
      name: 'beforeedit',
      parameters: 'editor,context'
    }, {
      name: 'canceledit',
      parameters: 'editor,context'
    }, {
      name: 'edit',
      parameters: 'editor,context'
    }, {
      name: 'pivotbeforeupdate',
      parameters: 'updater'
    }, {
      name: 'pivotupdate',
      parameters: 'updater'
    }, {
      name: 'validateedit',
      parameters: 'editor,context'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_plugin_CellEditing.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_CellEditing.PROPERTIES());
    return Ext_grid_plugin_CellEditing.getProperties(properties);
  };

  Ext_pivot_plugin_CellEditing.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_CellEditing.EVENTS());
    return Ext_grid_plugin_CellEditing.getEvents(events);
  };

  _createClass(Ext_pivot_plugin_CellEditing, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_Cell.observedAttributes;
      Ext_pivot_plugin_CellEditing.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_CellEditing.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_CellEditing(properties, events) {
    return _Ext_grid_plugin_Cell.call(this, properties.concat(Ext_pivot_plugin_CellEditing.PROPERTIES()), events.concat(Ext_pivot_plugin_CellEditing.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_CellEditing.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_Cell.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_Cell.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_CellEditing;
}(Ext_grid_plugin_CellEditing);

export { Ext_pivot_plugin_CellEditing as default };