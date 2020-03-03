import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_component_Component from '../../../Ext/layout/component/Component.js';

var Ext_layout_component_AbstractDock = /*#__PURE__*/function (_Ext_layout_component) {
  _inheritsLoose(Ext_layout_component_AbstractDock, _Ext_layout_component);

  Ext_layout_component_AbstractDock.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy'];
  };

  Ext_layout_component_AbstractDock.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_component_AbstractDock.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_component_AbstractDock.PROPERTIES());
    return Ext_layout_component_Component.getProperties(properties);
  };

  Ext_layout_component_AbstractDock.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_component_AbstractDock.EVENTS());
    return Ext_layout_component_Component.getEvents(events);
  };

  _createClass(Ext_layout_component_AbstractDock, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_component.observedAttributes;
      Ext_layout_component_AbstractDock.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_component_AbstractDock.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_component_AbstractDock(properties, events) {
    return _Ext_layout_component.call(this, properties.concat(Ext_layout_component_AbstractDock.PROPERTIES()), events.concat(Ext_layout_component_AbstractDock.EVENTS())) || this;
  }

  var _proto = Ext_layout_component_AbstractDock.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_component_AbstractDock;
}(Ext_layout_component_Component);

export { Ext_layout_component_AbstractDock as default };