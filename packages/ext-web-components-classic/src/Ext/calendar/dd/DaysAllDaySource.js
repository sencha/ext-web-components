import Ext_drag_Source from '../../../Ext/drag/Source.js';

export default class Ext_calendar_dd_DaysAllDaySource extends Ext_drag_Source {
  static PROPERTIES() { return [
    'activeCls',
    'activeOnLongPress',
    'autoDestroy',
    'component',
    'constrain',
    'describe',
    'element',
    'groups',
    'handle',
    'listeners',
    'proxy',
    'revert',
  ]};
  static EVENTS() { return [
    {name:'beforedragstart', parameters:'sender,info,event'},
    {name:'dragcancel', parameters:'sender,info,event'},
    {name:'dragend', parameters:'sender,info,event'},
    {name:'dragmove', parameters:'sender,info,event'},
    {name:'dragstart', parameters:'sender,info,event'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_DaysAllDaySource.PROPERTIES());
    return Ext_drag_Source.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_dd_DaysAllDaySource.EVENTS());
    return Ext_drag_Source.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_dd_DaysAllDaySource.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_dd_DaysAllDaySource.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_dd_DaysAllDaySource.PROPERTIES()),
      events.concat(Ext_calendar_dd_DaysAllDaySource.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
