import Ext_mixin_Observable from '../Ext/mixin/Observable.js';

export default class Ext_GlobalEvents extends Ext_mixin_Observable {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'added', parameters:'component'},
    {name:'beforebindnotify', parameters:''},
    {name:'beforeresponsiveupdate', parameters:'context'},
    {name:'beforeroute', parameters:'route,action'},
    {name:'beforerouteexit', parameters:'action,route'},
    {name:'beforeroutes', parameters:'action,tokens'},
    {name:'beginresponsiveupdate', parameters:'context'},
    {name:'collapse', parameters:'component'},
    {name:'expand', parameters:'component'},
    {name:'hide', parameters:'component'},
    {name:'idle', parameters:''},
    {name:'mousedown', parameters:'e'},
    {name:'mouseup', parameters:'e'},
    {name:'onlinechange', parameters:'online'},
    {name:'removed', parameters:'component'},
    {name:'resize', parameters:'width,height'},
    {name:'responsiveupdate', parameters:'context'},
    {name:'resumelayouts', parameters:''},
    {name:'routereject', parameters:'route'},
    {name:'show', parameters:'component'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_GlobalEvents.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_GlobalEvents.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_GlobalEvents.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_GlobalEvents.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_GlobalEvents.PROPERTIES()),
      events.concat(Ext_GlobalEvents.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
