import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_component_field_FieldContainer from '../../../../Ext/layout/component/field/FieldContainer.js';

var Ext_layout_component_field_HtmlEditor = /*#__PURE__*/function (_Ext_layout_component) {
  _inheritsLoose(Ext_layout_component_field_HtmlEditor, _Ext_layout_component);

  Ext_layout_component_field_HtmlEditor.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'setHeightInDom', 'setWidthInDom'];
  };

  Ext_layout_component_field_HtmlEditor.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_component_field_HtmlEditor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_component_field_HtmlEditor.PROPERTIES());
    return Ext_layout_component_field_FieldContainer.getProperties(properties);
  };

  Ext_layout_component_field_HtmlEditor.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_component_field_HtmlEditor.EVENTS());
    return Ext_layout_component_field_FieldContainer.getEvents(events);
  };

  _createClass(Ext_layout_component_field_HtmlEditor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_component.observedAttributes;
      Ext_layout_component_field_HtmlEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_component_field_HtmlEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_component_field_HtmlEditor(properties, events) {
    return _Ext_layout_component.call(this, properties.concat(Ext_layout_component_field_HtmlEditor.PROPERTIES()), events.concat(Ext_layout_component_field_HtmlEditor.EVENTS())) || this;
  }

  var _proto = Ext_layout_component_field_HtmlEditor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_component_field_HtmlEditor;
}(Ext_layout_component_field_FieldContainer);

export { Ext_layout_component_field_HtmlEditor as default };