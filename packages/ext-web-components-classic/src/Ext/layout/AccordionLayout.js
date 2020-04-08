import Ext_layout_container_VBox from '../../Ext/layout/container/VBox.js';

export default class Ext_layout_AccordionLayout extends Ext_layout_container_VBox {
  static PROPERTIES() { return [
    'activeOnTop',
    'align',
    'alignRoundingMethod',
    'animate',
    'animatePolicy',
    'autoWidth',
    'childEls',
    'collapseFirst',
    'constrainAlign',
    'enableSplitters',
    'fill',
    'hideCollapseTool',
    'itemCls',
    'multi',
    'overflowHandler',
    'pack',
    'padding',
    'stretchMaxPartner',
    'titleCollapse',
    'vertical',
    'wrapOver',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_AccordionLayout.PROPERTIES());
    return Ext_layout_container_VBox.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_AccordionLayout.EVENTS());
    return Ext_layout_container_VBox.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_AccordionLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_AccordionLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_AccordionLayout.PROPERTIES()),
      events.concat(Ext_layout_AccordionLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
