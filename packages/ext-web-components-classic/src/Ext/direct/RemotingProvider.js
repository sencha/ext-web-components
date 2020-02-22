import Ext_direct_JsonProvider from '../../Ext/direct/JsonProvider.js';

export default class Ext_direct_RemotingProvider extends Ext_direct_JsonProvider {
  static PROPERTIES() { return [
    'actions',
    'bufferLimit',
    'disableNestedActions',
    'enableBuffer',
    'enableUrlEncode',
    'headers',
    'id',
    'listeners',
    'maxRetries',
    'namespace',
    'relayedEvents',
    'timeout',
    'url',
  ]};
  static EVENTS() { return [
    {name:'beforecall', parameters:'provider,transaction,meta'},
    {name:'beforecallback', parameters:'provider,event,transaction'},
    {name:'call', parameters:'provider,transaction,meta'},
    {name:'connect', parameters:'provider'},
    {name:'data', parameters:'provider,e'},
    {name:'disconnect', parameters:'provider'},
    {name:'exception', parameters:'provider,e'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_direct_RemotingProvider.PROPERTIES());
    return Ext_direct_JsonProvider.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_RemotingProvider.EVENTS());
    return Ext_direct_JsonProvider.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_RemotingProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_RemotingProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_RemotingProvider.PROPERTIES()),
      events.concat(Ext_direct_RemotingProvider.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
