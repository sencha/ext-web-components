import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Auto from '../../../Ext/layout/container/Auto.js';

var Ext_ux_layout_ResponsiveColumn = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_ux_layout_ResponsiveColumn, _Ext_layout_container);

  Ext_ux_layout_ResponsiveColumn.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'childEls', 'itemCls', 'reserveScrollbar', 'states'];
  };

  Ext_ux_layout_ResponsiveColumn.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_layout_ResponsiveColumn.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_layout_ResponsiveColumn.PROPERTIES());
    return Ext_layout_container_Auto.getProperties(properties);
  };

  Ext_ux_layout_ResponsiveColumn.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_layout_ResponsiveColumn.EVENTS());
    return Ext_layout_container_Auto.getEvents(events);
  };

  _createClass(Ext_ux_layout_ResponsiveColumn, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_ux_layout_ResponsiveColumn.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_layout_ResponsiveColumn.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_layout_ResponsiveColumn(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_ux_layout_ResponsiveColumn.PROPERTIES()), events.concat(Ext_ux_layout_ResponsiveColumn.EVENTS())) || this;
  }

  var _proto = Ext_ux_layout_ResponsiveColumn.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_layout_ResponsiveColumn;
}(Ext_layout_container_Auto);

export { Ext_ux_layout_ResponsiveColumn as default };