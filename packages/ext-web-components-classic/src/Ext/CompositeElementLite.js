import Ext_Base from '../Ext/Base.js';

export default class Ext_CompositeElementLite extends Ext_Base {
  static PROPERTIES() { return [
    'bubbleEvents',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'abort', parameters:'e,t'},
    {name:'blur', parameters:'e,t'},
    {name:'change', parameters:'e,t'},
    {name:'click', parameters:'e,t'},
    {name:'contextmenu', parameters:'e,t'},
    {name:'dblclick', parameters:'e,t'},
    {name:'DOMActivate', parameters:'e,t'},
    {name:'DOMAttrModified', parameters:'e,t'},
    {name:'DOMCharacterDataModified', parameters:'e,t'},
    {name:'DOMFocusIn', parameters:'e,t'},
    {name:'DOMFocusOut', parameters:'e,t'},
    {name:'DOMNodeInserted', parameters:'e,t'},
    {name:'DOMNodeInsertedIntoDocument', parameters:'e,t'},
    {name:'DOMNodeRemoved', parameters:'e,t'},
    {name:'DOMNodeRemovedFromDocument', parameters:'e,t'},
    {name:'DOMSubtreeModified', parameters:'e,t'},
    {name:'doubletap', parameters:'event,node,options'},
    {name:'error', parameters:'e,t'},
    {name:'focus', parameters:'e,t'},
    {name:'focusmove', parameters:'e,t'},
    {name:'keydown', parameters:'e,t'},
    {name:'keypress', parameters:'e,t'},
    {name:'keyup', parameters:'e,t'},
    {name:'load', parameters:'e,t'},
    {name:'longpress', parameters:'event,node,options'},
    {name:'mousedown', parameters:'e,t'},
    {name:'mouseenter', parameters:'e,t'},
    {name:'mouseleave', parameters:'e,t'},
    {name:'mousemove', parameters:'e,t'},
    {name:'mouseout', parameters:'e,t'},
    {name:'mouseover', parameters:'e,t'},
    {name:'mouseup', parameters:'e,t'},
    {name:'painted', parameters:'sender'},
    {name:'pinch', parameters:'event,node,options'},
    {name:'pinchend', parameters:'event,node,options'},
    {name:'pinchstart', parameters:'event,node,options'},
    {name:'reset', parameters:'e,t'},
    {name:'resize', parameters:'sender,info'},
    {name:'rotate', parameters:'event,node,options'},
    {name:'rotateend', parameters:'event,node,options'},
    {name:'rotatestart', parameters:'event,node,options'},
    {name:'scroll', parameters:'e,t'},
    {name:'select', parameters:'e,t'},
    {name:'singletap', parameters:'event,node,options'},
    {name:'submit', parameters:'e,t'},
    {name:'swipe', parameters:'event,node,options'},
    {name:'taphold', parameters:'event,node,options'},
    {name:'unload', parameters:'e,t'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_CompositeElementLite.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_CompositeElementLite.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_CompositeElementLite.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_CompositeElementLite.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_CompositeElementLite.PROPERTIES()),
      events.concat(Ext_CompositeElementLite.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
