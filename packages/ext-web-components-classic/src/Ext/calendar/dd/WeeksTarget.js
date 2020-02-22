import Ext_drag_Target from '../../../Ext/drag/Target.js';

export default class Ext_calendar_dd_WeeksTarget extends Ext_drag_Target {
  static PROPERTIES() { return [
    'accepts',
    'autoDestroy',
    'component',
    'element',
    'groups',
    'invalidCls',
    'listeners',
    'validCls',
  ]};
  static EVENTS() { return [
    {name:'beforedrop', parameters:'sender,info'},
    {name:'dragenter', parameters:'sender,info'},
    {name:'dragleave', parameters:'sender,info'},
    {name:'dragmove', parameters:'sender,info'},
    {name:'drop', parameters:'sender,info'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_WeeksTarget.PROPERTIES());
    return Ext_drag_Target.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_dd_WeeksTarget.EVENTS());
    return Ext_drag_Target.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_dd_WeeksTarget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_dd_WeeksTarget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_dd_WeeksTarget.PROPERTIES()),
      events.concat(Ext_calendar_dd_WeeksTarget.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
