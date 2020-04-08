import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_component_Auto from '../../../../Ext/layout/component/Auto.js';

var Ext_layout_component_field_FieldContainer = /*#__PURE__*/function (_Ext_layout_component) {
  _inheritsLoose(Ext_layout_component_field_FieldContainer, _Ext_layout_component);

  Ext_layout_component_field_FieldContainer.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'setHeightInDom', 'setWidthInDom'];
  };

  Ext_layout_component_field_FieldContainer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_component_field_FieldContainer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_component_field_FieldContainer.PROPERTIES());
    return Ext_layout_component_Auto.getProperties(properties);
  };

  Ext_layout_component_field_FieldContainer.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_component_field_FieldContainer.EVENTS());
    return Ext_layout_component_Auto.getEvents(events);
  };

  _createClass(Ext_layout_component_field_FieldContainer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_component.observedAttributes;
      Ext_layout_component_field_FieldContainer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_component_field_FieldContainer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_component_field_FieldContainer(properties, events) {
    return _Ext_layout_component.call(this, properties.concat(Ext_layout_component_field_FieldContainer.PROPERTIES()), events.concat(Ext_layout_component_field_FieldContainer.EVENTS())) || this;
  }

  var _proto = Ext_layout_component_field_FieldContainer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_component_field_FieldContainer;
}(Ext_layout_component_Auto);

export { Ext_layout_component_field_FieldContainer as default };