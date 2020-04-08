import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_Layout from '../../../Ext/layout/Layout.js';

var Ext_layout_component_Component = /*#__PURE__*/function (_Ext_layout_Layout) {
  _inheritsLoose(Ext_layout_component_Component, _Ext_layout_Layout);

  Ext_layout_component_Component.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy'];
  };

  Ext_layout_component_Component.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_component_Component.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_component_Component.PROPERTIES());
    return Ext_layout_Layout.getProperties(properties);
  };

  Ext_layout_component_Component.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_component_Component.EVENTS());
    return Ext_layout_Layout.getEvents(events);
  };

  _createClass(Ext_layout_component_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_Layout.observedAttributes;
      Ext_layout_component_Component.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_component_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_component_Component(properties, events) {
    return _Ext_layout_Layout.call(this, properties.concat(Ext_layout_component_Component.PROPERTIES()), events.concat(Ext_layout_component_Component.EVENTS())) || this;
  }

  var _proto = Ext_layout_component_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_Layout.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_Layout.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_component_Component;
}(Ext_layout_Layout);

export { Ext_layout_component_Component as default };