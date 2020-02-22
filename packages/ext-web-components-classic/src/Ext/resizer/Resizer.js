import Ext_Base from '../../Ext/Base.js';

export default class Ext_resizer_Resizer extends Ext_Base {
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
    properties = properties.concat(Ext_resizer_Resizer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_resizer_Resizer.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_resizer_Resizer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_resizer_Resizer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_resizer_Resizer.PROPERTIES()),
      events.concat(Ext_resizer_Resizer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
