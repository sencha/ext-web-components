import Ext_form_trigger_Trigger from '../../../Ext/form/trigger/Trigger.js';

export default class Ext_form_trigger_Component extends Ext_form_trigger_Trigger {
  static PROPERTIES() { return [
    'cls',
    'component',
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
    properties = properties.concat(Ext_form_trigger_Component.PROPERTIES());
    return Ext_form_trigger_Trigger.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_trigger_Component.EVENTS());
    return Ext_form_trigger_Trigger.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_trigger_Component.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_trigger_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_trigger_Component.PROPERTIES()),
      events.concat(Ext_form_trigger_Component.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
