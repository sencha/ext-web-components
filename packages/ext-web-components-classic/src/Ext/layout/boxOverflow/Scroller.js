import Ext_layout_container_boxOverflow_None from '../../../Ext/layout/container/boxOverflow/None.js';

export default class Ext_layout_boxOverflow_Scroller extends Ext_layout_container_boxOverflow_None {
  static PROPERTIES() { return [
    'animateScroll',
    'listeners',
    'scrollDuration',
    'scrollIncrement',
    'scrollRepeatInterval',
    'wheelIncrement',
  ]};
  static EVENTS() { return [
    {name:'scroll', parameters:'scroller,newPosition'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_boxOverflow_Scroller.PROPERTIES());
    return Ext_layout_container_boxOverflow_None.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_boxOverflow_Scroller.EVENTS());
    return Ext_layout_container_boxOverflow_None.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_boxOverflow_Scroller.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_boxOverflow_Scroller.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_boxOverflow_Scroller.PROPERTIES()),
      events.concat(Ext_layout_boxOverflow_Scroller.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
