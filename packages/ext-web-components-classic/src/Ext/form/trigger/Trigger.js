import Ext_Base from '../../../Ext/Base.js';

export default class Ext_form_trigger_Trigger extends Ext_Base {
  static PROPERTIES() { return [
    'cls',
    'extraCls',
    'focusOnMouseDown',
    'handler',
    'hidden',
    'hideOnReadOnly',
    'preventMouseDown',
    'repeatClick',
    'scope',
    'tooltip',
    'weight',
    'width',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_trigger_Trigger.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_trigger_Trigger.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_trigger_Trigger.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_trigger_Trigger.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_trigger_Trigger.PROPERTIES()),
      events.concat(Ext_form_trigger_Trigger.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
