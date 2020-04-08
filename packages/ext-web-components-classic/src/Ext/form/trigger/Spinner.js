import Ext_form_trigger_Trigger from '../../../Ext/form/trigger/Trigger.js';

export default class Ext_form_trigger_Spinner extends Ext_form_trigger_Trigger {
  static PROPERTIES() { return [
    'cls',
    'downHandler',
    'extraCls',
    'focusOnMouseDown',
    'handler',
    'hidden',
    'hideOnReadOnly',
    'preventMouseDown',
    'repeatClick',
    'scope',
    'tooltip',
    'upHandler',
    'vertical',
    'weight',
    'width',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_trigger_Spinner.PROPERTIES());
    return Ext_form_trigger_Trigger.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_trigger_Spinner.EVENTS());
    return Ext_form_trigger_Trigger.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_trigger_Spinner.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_trigger_Spinner.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_trigger_Spinner.PROPERTIES()),
      events.concat(Ext_form_trigger_Spinner.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
