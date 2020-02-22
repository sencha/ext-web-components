import Ext_layout_component_field_FieldContainer from '../../../../Ext/layout/component/field/FieldContainer.js';

export default class Ext_layout_component_field_HtmlEditor extends Ext_layout_component_field_FieldContainer {
  static PROPERTIES() { return [
    'animatePolicy',
    'setHeightInDom',
    'setWidthInDom',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_component_field_HtmlEditor.PROPERTIES());
    return Ext_layout_component_field_FieldContainer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_component_field_HtmlEditor.EVENTS());
    return Ext_layout_component_field_FieldContainer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_component_field_HtmlEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_component_field_HtmlEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_component_field_HtmlEditor.PROPERTIES()),
      events.concat(Ext_layout_component_field_HtmlEditor.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
