import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_HBox from '../../Ext/layout/container/HBox.js';

var Ext_grid_ColumnLayout = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_grid_ColumnLayout, _Ext_layout_container);

  Ext_grid_ColumnLayout.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignRoundingMethod', 'animatePolicy', 'childEls', 'constrainAlign', 'enableSplitters', 'itemCls', 'overflowHandler', 'pack', 'padding', 'stretchMaxPartner', 'vertical'];
  };

  Ext_grid_ColumnLayout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_ColumnLayout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_ColumnLayout.PROPERTIES());
    return Ext_layout_container_HBox.getProperties(properties);
  };

  Ext_grid_ColumnLayout.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_ColumnLayout.EVENTS());
    return Ext_layout_container_HBox.getEvents(events);
  };

  _createClass(Ext_grid_ColumnLayout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_grid_ColumnLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_ColumnLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_ColumnLayout(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_grid_ColumnLayout.PROPERTIES()), events.concat(Ext_grid_ColumnLayout.EVENTS())) || this;
  }

  var _proto = Ext_grid_ColumnLayout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_ColumnLayout;
}(Ext_layout_container_HBox);

export { Ext_grid_ColumnLayout as default };