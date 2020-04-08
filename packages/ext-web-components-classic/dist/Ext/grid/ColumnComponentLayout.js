import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_component_Auto from '../../Ext/layout/component/Auto.js';

var Ext_grid_ColumnComponentLayout = /*#__PURE__*/function (_Ext_layout_component) {
  _inheritsLoose(Ext_grid_ColumnComponentLayout, _Ext_layout_component);

  Ext_grid_ColumnComponentLayout.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'setHeightInDom', 'setWidthInDom'];
  };

  Ext_grid_ColumnComponentLayout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_ColumnComponentLayout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_ColumnComponentLayout.PROPERTIES());
    return Ext_layout_component_Auto.getProperties(properties);
  };

  Ext_grid_ColumnComponentLayout.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_ColumnComponentLayout.EVENTS());
    return Ext_layout_component_Auto.getEvents(events);
  };

  _createClass(Ext_grid_ColumnComponentLayout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_component.observedAttributes;
      Ext_grid_ColumnComponentLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_ColumnComponentLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_ColumnComponentLayout(properties, events) {
    return _Ext_layout_component.call(this, properties.concat(Ext_grid_ColumnComponentLayout.PROPERTIES()), events.concat(Ext_grid_ColumnComponentLayout.EVENTS())) || this;
  }

  var _proto = Ext_grid_ColumnComponentLayout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_ColumnComponentLayout;
}(Ext_layout_component_Auto);

export { Ext_grid_ColumnComponentLayout as default };