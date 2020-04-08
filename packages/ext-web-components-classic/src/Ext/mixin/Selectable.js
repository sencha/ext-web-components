import Ext_Mixin from '../../Ext/Mixin.js';

export default class Ext_mixin_Selectable extends Ext_Mixin {
  static PROPERTIES() { return [
    'allowDeselect',
    'deselectOnContainerClick',
    'disableSelection',
    'lastFocused',
    'lastSelected',
    'mode',
    'pruneRemoved',
    'publishes',
    'selected',
    'selection',
    'twoWayBindable',
  ]};
  static EVENTS() { return [
    {name:'selectionchange', parameters:'sender,records'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_mixin_Selectable.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_mixin_Selectable.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_mixin_Selectable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_mixin_Selectable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_mixin_Selectable.PROPERTIES()),
      events.concat(Ext_mixin_Selectable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
