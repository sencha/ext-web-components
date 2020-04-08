import Ext_Base from '../Ext/Base.js';

export default class Ext_Resizable extends Ext_Base {
  static PROPERTIES() { return [
    'constrainTo',
    'dynamic',
    'handles',
    'height',
    'heightIncrement',
    'listeners',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'pinned',
    'preserveRatio',
    'target',
    'transparent',
    'width',
    'widthIncrement',
  ]};
  static EVENTS() { return [
    {name:'beforeresize', parameters:'sender,width,height,e'},
    {name:'resize', parameters:'sender,width,height,e'},
    {name:'resizedrag', parameters:'sender,width,height,e'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_Resizable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_Resizable.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_Resizable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_Resizable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_Resizable.PROPERTIES()),
      events.concat(Ext_Resizable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
