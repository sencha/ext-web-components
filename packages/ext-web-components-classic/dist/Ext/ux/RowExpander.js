import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_RowExpander from '../../Ext/grid/plugin/RowExpander.js';

var Ext_ux_RowExpander = /*#__PURE__*/function (_Ext_grid_plugin_RowE) {
  _inheritsLoose(Ext_ux_RowExpander, _Ext_grid_plugin_RowE);

  Ext_ux_RowExpander.PROPERTIES = function PROPERTIES() {
    return ['bodyBefore', 'columnWidth', 'expandOnDblClick', 'expandOnEnter', 'headerWidth', 'id', 'lockedTpl', 'rowBodyTpl', 'scrollIntoViewOnExpand', 'selectRowOnExpand', 'stateEvents'];
  };

  Ext_ux_RowExpander.EVENTS = function EVENTS() {
    return [{
      name: 'collapsebody',
      parameters: 'rowNode,record,expandRow'
    }, {
      name: 'expandbody',
      parameters: 'rowNode,record,expandRow'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_RowExpander.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_RowExpander.PROPERTIES());
    return Ext_grid_plugin_RowExpander.getProperties(properties);
  };

  Ext_ux_RowExpander.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_RowExpander.EVENTS());
    return Ext_grid_plugin_RowExpander.getEvents(events);
  };

  _createClass(Ext_ux_RowExpander, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_RowE.observedAttributes;
      Ext_ux_RowExpander.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_RowExpander.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_RowExpander(properties, events) {
    return _Ext_grid_plugin_RowE.call(this, properties.concat(Ext_ux_RowExpander.PROPERTIES()), events.concat(Ext_ux_RowExpander.EVENTS())) || this;
  }

  var _proto = Ext_ux_RowExpander.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_RowE.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_RowE.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_RowExpander;
}(Ext_grid_plugin_RowExpander);

export { Ext_ux_RowExpander as default };