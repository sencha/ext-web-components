import Ext_Base from '../../../Ext/Base.js';

export default class Ext_form_field_Field extends Ext_Base {
  static PROPERTIES() { return [
    'disabled',
    'name',
    'publishes',
    'submitValue',
    'validateOnChange',
    'validation',
    'validationField',
    'value',
    'valuePublishEvent',
  ]};
  static EVENTS() { return [
    {name:'change', parameters:'sender,newValue,oldValue'},
    {name:'dirtychange', parameters:'sender,isDirty'},
    {name:'validitychange', parameters:'sender,isValid'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_field_Field.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_field_Field.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_field_Field.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_field_Field.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_field_Field.PROPERTIES()),
      events.concat(Ext_form_field_Field.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
